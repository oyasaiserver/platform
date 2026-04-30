import {
  debug,
  exportVariable,
  getBooleanInput,
  getIDToken,
  getInput,
  info,
  setFailed,
  setSecret,
} from "./actions-toolkit.ts";

async function oidcLogin(
  domain: string,
  identityId: string,
  oidcAudience: string,
) {
  const idToken = await getIDToken(oidcAudience);

  const response = await fetch(`${domain}/api/v1/auth/oidc-auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/x-www-form-urlencoded" },
    body: new URLSearchParams({ identityId, jwt: idToken }).toString(),
  });

  if (!response.ok) {
    const err = (await response.json().catch(() => ({}))) as {
      message?: string;
    };
    throw new Error(
      `OIDC login failed: ${err?.message ?? response.statusText}`,
    );
  }

  const data = (await response.json()) as { accessToken: string };
  return data.accessToken;
}

async function getRawSecrets({
  domain,
  envSlug,
  infisicalToken,
  projectSlug,
  secretPath,
  shouldIncludeImports,
  shouldRecurse,
}: {
  domain: string;
  envSlug: string;
  infisicalToken: string;
  projectSlug: string;
  secretPath: string;
  shouldIncludeImports: boolean;
  shouldRecurse: boolean;
}) {
  const params = new URLSearchParams({
    secretPath,
    environment: envSlug,
    include_imports: String(shouldIncludeImports),
    recursive: String(shouldRecurse),
    workspaceSlug: projectSlug,
    expandSecretReferences: "true",
  });

  const response = await fetch(`${domain}/api/v3/secrets/raw?${params}`, {
    headers: { Authorization: `Bearer ${infisicalToken}` },
  });

  if (!response.ok) {
    const err = (await response.json().catch(() => ({}))) as {
      message?: string;
    };
    throw new Error(
      `Failed to fetch secrets: ${err?.message ?? response.statusText}`,
    );
  }

  const result = (await response.json()) as {
    secrets: { secretKey: string; secretValue: string }[];
    imports?: { secrets: { secretKey: string; secretValue: string }[] }[];
  };

  const keyValueSecrets = Object.fromEntries(
    result.secrets.map((s) => [s.secretKey, s.secretValue]),
  );

  if (result.imports) {
    for (let i = result.imports.length - 1; i >= 0; i--) {
      result.imports[i]?.secrets.forEach((s) => {
        if (keyValueSecrets[s.secretKey] === undefined) {
          keyValueSecrets[s.secretKey] = s.secretValue;
        }
      });
    }
  }

  return keyValueSecrets;
}

async function main() {
  try {
    const identityId = getInput("identity-id", { required: true });
    const oidcAudience = getInput("oidc-audience");
    const domain = getInput("domain", { required: true });
    const envSlug = getInput("env-slug", { required: true });
    const projectSlug = getInput("project-slug", { required: true });
    const secretPath = getInput("secret-path");
    const shouldIncludeImports = getBooleanInput("include-imports");
    const shouldRecurse = getBooleanInput("recursive");

    const infisicalToken = await oidcLogin(domain, identityId, oidcAudience);
    setSecret(infisicalToken);
    exportVariable("INFISICAL_TOKEN", infisicalToken);

    const keyValueSecrets = await getRawSecrets({
      domain,
      envSlug,
      infisicalToken,
      projectSlug,
      secretPath,
      shouldIncludeImports,
      shouldRecurse,
    });

    debug(
      `Exporting the following envs: ${JSON.stringify(Object.keys(keyValueSecrets))}`,
    );

    Object.entries(keyValueSecrets).forEach(([key, value]) => {
      setSecret(value);
      exportVariable(key, value);
    });

    info("Injected secrets as environment variables");
  } catch (err) {
    setFailed((err as Error)?.message);
  }
}

main();
