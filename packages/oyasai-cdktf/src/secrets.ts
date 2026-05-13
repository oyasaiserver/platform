import { DataInfisicalSecrets } from "@oyasaiserver/cdktf-providers/infisical/data-infisical-secrets";
import type { CommonInfra } from "./stacks/common-infra.ts";
import type { OyasaiTerraformStack } from "./stacks/oyasai-terraform-stack.ts";

export interface Secrets<T> {
  get(key: T): string;
}

export const secretKeys = [
  // keep-sorted start
  "CLOUDFLARE_ACCESS_KEY_ID",
  "CLOUDFLARE_ACCOUNT_ID",
  "CLOUDFLARE_SECRET_ACCESS_KEY",
  "DISCORDSRV_TOKEN",
  "MARIADB_PASSWORD",
  "NIX_CACHE_SIGNING_KEY",
  "RCON_PASSWORD",
  "RESTIC_PASSWORD",
  "TLS_CA_PEM",
  "TLS_CERT_PEM",
  "TLS_KEY_PEM",
  // keep-sorted end
] as const;

export type SecretKey = (typeof secretKeys)[number];

export class OyasaiCommonSecrets implements Secrets<SecretKey> {
  private dataInfisicalSecrets: DataInfisicalSecrets;

  constructor(datainfisicalSecrets: DataInfisicalSecrets) {
    this.dataInfisicalSecrets = datainfisicalSecrets;
  }

  get(key: SecretKey): string {
    return this.dataInfisicalSecrets.getStringAttribute(
      `secrets["${key}"].value`,
    );
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
