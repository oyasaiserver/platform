import { OyasaiTerraformStack } from "./oyasai-terraform-stack.ts";
import type { Construct } from "constructs";
import { InfisicalProvider } from "@oyasaiserver/cdktf-providers/infisical/provider";
import { Project } from "@oyasaiserver/cdktf-providers/infisical/project";
import { IdentityOidcAuth } from "@oyasaiserver/cdktf-providers/infisical/identity-oidc-auth";
import { Identity } from "@oyasaiserver/cdktf-providers/infisical/identity";
import { ProjectEnvironment } from "@oyasaiserver/cdktf-providers/infisical/project-environment";
import { ProjectIdentity } from "@oyasaiserver/cdktf-providers/infisical/project-identity";
import { DataInfisicalSecrets } from "@oyasaiserver/cdktf-providers/infisical/data-infisical-secrets";
import { arrayToObject } from "../helpers.ts";
import { CloudflareProvider } from "@oyasaiserver/cdktf-providers/cloudflare/provider";
import { RegistrarDomain } from "@oyasaiserver/cdktf-providers/cloudflare/registrar-domain";
import { DataCloudflareRegistrarDomain } from "@oyasaiserver/cdktf-providers/cloudflare/data-cloudflare-registrar-domain";
import { Zone } from "@oyasaiserver/cdktf-providers/cloudflare/zone";

export const secretKeys = [
  "CLOUDFLARE_ACCOUNT_ID",
  "CLOUDFLARE_ACCESS_KEY_ID",
  "CLOUDFLARE_SECRET_ACCESS_KEY",
  "MARIADB_PASSWORD",
  "RCON_PASSWORD",
  "RESTIC_PASSWORD",
  "TLS_CA_PEM",
  "TLS_CERT_PEM",
  "TLS_KEY_PEM",
] as const;

export type SecretKey = (typeof secretKeys)[number];

export class CommonInfra extends OyasaiTerraformStack {
  private readonly infisicalOrgId = "a8e8e008-81e0-4a4f-81a9-8441c6820e7e";

  public readonly secrets: Record<SecretKey, string>;
  public readonly oyasaiIoRegistrarDomain: DataCloudflareRegistrarDomain;
  public readonly oyasaiIoZone: Zone;

  constructor(scope: Construct, id: string) {
    super(scope, id);

    this.createCloudBackend();

    new CloudflareProvider(this, this.t("cloudflare-provider"));

    new InfisicalProvider(this, this.t("infisical-provider"));

    const platformInfisicalMachineIdentity = new Identity(
      this,
      this.t("platform-infisical-identity"),
      {
        name: "oyasai-machine",
        orgId: this.infisicalOrgId,
        role: "admin",
        hasDeleteProtection: true,
      },
    );

    new IdentityOidcAuth(
      this,
      this.t("platform-infisical-identity-oidc-auth"),
      {
        boundIssuer: "https://token.actions.githubusercontent.com",
        boundSubject: "repo:oyasaiserver/platform:*",
        identityId: platformInfisicalMachineIdentity.id,
        oidcDiscoveryUrl: "https://token.actions.githubusercontent.com",
      },
    );

    const platformInfisicalProject = new Project(
      this,
      this.t("platform-infisical-project"),
      {
        name: "platform",
        slug: "platform",
      },
    );

    new ProjectIdentity(this, this.t("platform-machine-project-identity"), {
      projectId: platformInfisicalProject.id,
      identityId: platformInfisicalMachineIdentity.id,
      roles: [
        {
          roleSlug: "admin",
        },
      ],
    });

    const platformInfisicalProjectEnvironment = new ProjectEnvironment(
      this,
      this.t("platform-common-infisical-project-environment"),
      {
        name: "common",
        projectId: platformInfisicalProject.id,
        slug: "common",
      },
    );

    const dataSecrets = new DataInfisicalSecrets(
      this,
      this.t("platform-data-infisical-secrets"),
      {
        folderPath: "/",
        workspaceId: platformInfisicalProject.id,
        envSlug: platformInfisicalProjectEnvironment.slug,
      },
    );

    // FIXME: Should use dataSecrets.get(...) but ComplexMap.get() generates
    // malformed TF expressions when CDKTF serializses to CSO. - shun 2026-04
    this.secrets = arrayToObject(secretKeys, (k) => {
      return dataSecrets.getStringAttribute(`secrets["${k}"].value`);
    });

    // TODO: Data because Cloudflare doesn't support importing registrar domain
    // - shun 2026-04
    this.oyasaiIoRegistrarDomain = new DataCloudflareRegistrarDomain(
      this,
      this.t("oyasai-io-registrar-domain"),
      {
        accountId: this.secrets.CLOUDFLARE_ACCOUNT_ID,
        domainName: "oyasai.io",
      },
    );

    this.oyasaiIoZone = new Zone(this, "oyasai-io-zone", {
      account: {
        id: this.secrets.CLOUDFLARE_ACCOUNT_ID,
      },
      name: this.oyasaiIoRegistrarDomain.domainName,
      type: "full",
    });
  }
}
