import { DataInfisicalSecrets } from "@oyasaiserver/cdktf-providers/infisical/data-infisical-secrets";
import { Fn, TerraformDataSource } from "cdktf";
import type { CommonInfra } from "./stacks/common-infra.ts";
import type { OyasaiTerraformStack } from "./stacks/oyasai-terraform-stack.ts";

export interface Secrets<T> {
  get(key: T): string;
}

// Keep this list minimal.
const secretKeys = [
  // Secrets required by CI. Set as ActionSecrets via GitHub provider.
  "CLOUDFLARE_ACCESS_KEY_ID",
  "CLOUDFLARE_SECRET_ACCESS_KEY",
  "NIX_CACHE_SIGNING_KEY",

  // Secrets required by plugins
  "DISCORDSRV_TOKEN",

  // This is static, do not change.
  "RESTIC_PASSWORD",

  // Docker daemon certs
  "TLS_CA_PEM",
  "TLS_CERT_PEM",
  "TLS_KEY_PEM",

  // Ideally we'd want this generated via Random provider but is hardcoded to
  // plugins' config files :( - ueda 2026-07
  "MARIADB_PASSWORD",
] as const;

export type SecretKey = (typeof secretKeys)[number];

export class OyasaiCommonSecrets implements Secrets<SecretKey> {
  private readonly dataSource: TerraformDataSource;

  constructor(dataSource: TerraformDataSource) {
    this.dataSource = dataSource;
  }

  get(key: SecretKey): string {
    const value = this.dataSource.getStringAttribute(
      // Creates malformatted reference in CSR - ueda 2026-07
      `secrets["${key}"].value`,
    );
    return Fn.sensitive(value);
  }
}

export function createSecrets(
  scope: OyasaiTerraformStack,
  commonInfra: CommonInfra,
) {
  const dataInfisicalSecrets = new DataInfisicalSecrets(
    scope,
    scope.t("platform-data-infisical-secrets"),
    {
      folderPath: "/",
      workspaceId: commonInfra.platformInfisicalProject.id,
      envSlug: commonInfra.platformInfisicalProjectEnvironment.slug,
    },
  );

  return new OyasaiCommonSecrets(dataInfisicalSecrets);
}
