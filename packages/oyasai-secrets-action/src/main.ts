import {
  exportVariable,
  getIDToken,
  getInput,
  setSecret,
} from "./actions-toolkit.ts";
import type {
  GetSecretsOptions,
  GetSecretsResponse,
  OidcLoginResponse,
} from "./types.ts";

async function oidcLogin(
  domain: string,
  identityId: string,
  oidcAudience: string,
) {
  const jwt = await getIDToken(oidcAudience);
  const url = new URL("/api/v1/auth/oidc-auth/login", domain);
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({
      identityId,
      jwt,
    }),
  });
  const { accessToken } = (await response.json()) as OidcLoginResponse;
  return accessToken;
}

async function getSecrets({
  domain,
  envSlug,
  infisicalToken,
  projectSlug,
  secretPath,
}: GetSecretsOptions) {
  const url = new URL("/api/v3/secrets/raw", domain);
  url.searchParams.set("secretPath", secretPath);
  url.searchParams.set("environment", envSlug);
  url.searchParams.set("workspaceSlug", projectSlug);

  const response = await fetch(url, {
    headers: {
      Authorization: `Bearer ${infisicalToken}`,
    },
  });
  const { secrets } = (await response.json()) as GetSecretsResponse;
  return secrets;
}

async function main() {
  const identityId = getInput("identity-id", { required: true });
  const oidcAudience = getInput("oidc-audience");
  const domain = getInput("domain", { required: true });
  const envSlug = getInput("env-slug", { required: true });
  const projectSlug = getInput("project-slug", { required: true });
  const secretPath = getInput("secret-path");

  const infisicalToken = await oidcLogin(domain, identityId, oidcAudience);

  setSecret(infisicalToken);
  exportVariable("INFISICAL_TOKEN", infisicalToken);

  const secrets = await getSecrets({
    domain,
    envSlug,
    infisicalToken,
    projectSlug,
    secretPath,
  });

  for (const { secretKey, secretValue } of secrets) {
    setSecret(secretValue);
    exportVariable(secretKey, secretValue);
  }
}

main();
