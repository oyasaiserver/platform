import { DataInfisicalSecrets } from "@oyasaiserver/cdktf-providers/infisical/data-infisical-secrets";
import { Fn, TerraformDataSource } from "cdktf";
import type { CommonInfra } from "./stacks/common-infra.ts";
import type { OyasaiTerraformStack } from "./stacks/oyasai-terraform-stack.ts";

export interface Secrets<T> {
  get(key: T): string;
}

export const secretKeys = [
  // keep-sorted start
  "CLOUDFLARE_ACCESS_KEY_ID",
  "CLOUDFLARE_SECRET_ACCESS_KEY",
  "DISCORDSRV_TOKEN",
  "MARIADB_PASSWORD",
  "NIX_CACHE_SIGNING_KEY",
  "RCON_PASSWORD",
  "RESTIC_PASSWORD",
  "TLS_CA_PEM",
  "TLS_CERT_PEM",
  "TLS_KEY_PEM",
  "VELOCITY_FORWARDING_SECRET",
  // keep-sorted end
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
