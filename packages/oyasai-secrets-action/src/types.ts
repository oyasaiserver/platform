export interface GetSecretsOptions {
  domain: string;
  envSlug: string;
  infisicalToken: string;
  projectSlug: string;
  secretPath: string;
}

export interface OidcLoginResponse {
  accessToken: string;
}

export interface Secret {
  secretKey: string;
  secretValue: string;
}

export interface GetSecretsResponse {
  secrets: Secret[];
}
