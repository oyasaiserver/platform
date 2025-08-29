export type Env = Readonly<{
  DOTENV_PUBLIC_KEY: string
  ENVIRONMENT: string
  PUBLIC_IPV4: string
  SSH_PRIVATE_KEY: string
  SSH_PASSWORD: string
  SSH_USERNAME: string
  CLOUDFLARE_ACCOUNT_ID: string
  CLOUDFLARE_API_TOKEN: string
  CLOUDFLARE_ACCESS_KEY_ID: string
  CLOUDFLARE_SECRET_ACCESS_KEY: string
  R2_BUCKET_NAME: string
  RESTIC_PASSWORD: string
  API_ENDPOINT: string
  BEARER: string
  GITHUB_APP_ID: string
  GITHUB_APP_INSTALLATION_ID: string
  GITHUB_APP_PEM_FILE: string
  TF_API_TOKEN: string
  TF_TOKEN_app_terraform_io: string
  DISCORD_TOKEN: string
  RCON_PASSWORD: string
}>