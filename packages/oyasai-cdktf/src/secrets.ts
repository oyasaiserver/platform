import { Fn } from "cdktf";
import { mapValues } from "./object.ts";
import { ok } from "node:assert";
import { env } from "node:process";

export function createTerraformSensitiveSecrets(): Secrets {
  const secrets = createSecrets();
  return mapValues(secrets, (key, value) => {
    return whitelist.has(key) ? value : Fn.sensitive(value);
  });
}

// TODO everything under this was ported from secrets. Should be removed while
// reorganizing stacks.

export const defaults = {
  CLOUDFLARE_ACCESS_KEY_ID: "xxx",
  CLOUDFLARE_ACCOUNT_ID: "xxx",
  CLOUDFLARE_API_TOKEN: "unset_unset_unset_unset_unset_unset_unset",
  CLOUDFLARE_SECRET_ACCESS_KEY: "xxx",
  ENVIRONMENT: "local",
  GITHUB_APP_ID: "xxx",
  GITHUB_APP_INSTALLATION_ID: "xxx",
  GITHUB_APP_PEM_FILE: "xxx",
  INFISICAL_CLIENT_ID: "xxx",
  INFISICAL_CLIENT_SECRET: "xxx",
  MARIADB_PASSWORD: "xxx",
  PUBLIC_IPV4: "192.0.2.0",
  R2_BUCKET_NAME: "xxx",
  RESTIC_PASSWORD: "xxx",
  RCON_PASSWORD: "xxx",
  TF_API_TOKEN: "xxx",
  TF_TOKEN_app_terraform_io: "xxx",
  TLS_CA_PEM: "xxx",
  TLS_CERT_PEM: "xxx",
  TLS_KEY_PEM: "xxx",
} as const;

const whitelist: ReadonlySet<keyof Secrets> = new Set(["ENVIRONMENT"]);

export const environment = ["local", "development", "production"] as const;

export type Environment = (typeof environment)[number];

export function readEnvironment(): Environment {
  const value = env.ENVIRONMENT ?? "local";
  ok(environment.includes(value as Environment));
  return value as Environment;
}

export type Secrets = Readonly<Record<keyof typeof defaults, string>> & {
  ENVIRONMENT: "local" | "development" | "production";
};

export function createSecrets(): Secrets {
  const environment = readEnvironment();
  if (environment === "local") {
    return defaults;
  }
  return mapValues<Secrets, string>(defaults, (key) => {
    const value = env[key];
    ok(value, `Environment variable ${key} is not set.`);
    return value;
  }) as Secrets;
}
