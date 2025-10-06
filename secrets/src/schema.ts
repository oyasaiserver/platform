import { z } from 'zod'

export const schema = z.object({
  DOTENV_PUBLIC_KEY: z.string(),
  ENVIRONMENT: z.enum(['production', 'development', 'local']),
  PUBLIC_IPV4: z.string(),
  CLOUDFLARE_ACCOUNT_ID: z.string(),
  CLOUDFLARE_API_TOKEN: z.string(),
  CLOUDFLARE_ACCESS_KEY_ID: z.string(),
  CLOUDFLARE_SECRET_ACCESS_KEY: z.string(),
  R2_BUCKET_NAME: z.string(),
  RESTIC_PASSWORD: z.string(),
  GITHUB_APP_ID: z.string(),
  GITHUB_APP_INSTALLATION_ID: z.string(),
  GITHUB_APP_PEM_FILE: z.string(),
  TF_API_TOKEN: z.string(),
  TF_TOKEN_app_terraform_io: z.string(),
  DISCORD_TOKEN: z.string(),
  RCON_PASSWORD: z.string(),
  MARIADB_PASSWORD: z.string(),
  DISCORD_WEBHOOK_URL: z.string(),
  TLS_CA_PEM: z.string(),
  TLS_CERT_PEM: z.string(),
  TLS_KEY_PEM: z.string()
})
