import { CloudflareProvider } from "@oyasaiserver/cdktf-providers/cloudflare/provider";
import { RegistrarDomain } from "@oyasaiserver/cdktf-providers/cloudflare/registrar-domain";
import { Zone } from "@oyasaiserver/cdktf-providers/cloudflare/zone";
import { Identity } from "@oyasaiserver/cdktf-providers/infisical/identity";
import { IdentityOidcAuth } from "@oyasaiserver/cdktf-providers/infisical/identity-oidc-auth";
import { Project } from "@oyasaiserver/cdktf-providers/infisical/project";
import { ProjectEnvironment } from "@oyasaiserver/cdktf-providers/infisical/project-environment";
import { ProjectIdentity } from "@oyasaiserver/cdktf-providers/infisical/project-identity";
import { InfisicalProvider } from "@oyasaiserver/cdktf-providers/infisical/provider";
import type { Construct } from "constructs";
import { OyasaiTerraformStack } from "./oyasai-terraform-stack.ts";

export class CommonInfra extends OyasaiTerraformStack {
  private readonly infisicalOrgId = "a8e8e008-81e0-4a4f-81a9-8441c6820e7e";

  readonly cloudflareAccountId = "7befe273c79e6f7993c1cd4534d6afff";

  readonly oyasaiIoRegistrarDomain: RegistrarDomain;
  readonly oyasaiIoZone: Zone;

  readonly platformInfisicalProject: Project;
  readonly platformInfisicalProjectEnvironment: ProjectEnvironment;

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

    this.platformInfisicalProject = new Project(
      this,
      this.t("platform-infisical-project"),
      {
        name: "platform",
        slug: "platform",
      },
    );

    new ProjectIdentity(this, this.t("platform-machine-project-identity"), {
      projectId: this.platformInfisicalProject.id,
      identityId: platformInfisicalMachineIdentity.id,
      roles: [
        {
          roleSlug: "admin",
        },
      ],
    });

    this.platformInfisicalProjectEnvironment = new ProjectEnvironment(
      this,
      this.t("platform-common-infisical-project-environment"),
      {
        name: "common",
        projectId: this.platformInfisicalProject.id,
        slug: "common",
      },
    );

    this.oyasaiIoRegistrarDomain = new RegistrarDomain(
      this,
      this.t("oyasai-io-registrar-domain"),
      {
        accountId: this.cloudflareAccountId,
        domainName: "oyasai.io",
        privacy: true,
      },
    );

    this.oyasaiIoZone = new Zone(this, "oyasai-io-zone", {
      account: {
        id: this.cloudflareAccountId,
      },
      name: this.oyasaiIoRegistrarDomain.domainName,
      type: "full",
    });
  }
}
