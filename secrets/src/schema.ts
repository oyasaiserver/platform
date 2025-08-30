import { z } from 'zod'

export const schema = z
  .object({
    DOTENV_PUBLIC_KEY: z.string(),
    ENVIRONMENT: z.enum(['production', 'development', 'local']).default('local').readonly(),
    PUBLIC_IPV4: z.string(),
    SSH_PRIVATE_KEY: z.string(),
    SSH_USERNAME: z.string(),
    SSH_PASSWORD: z.string(),
    CLOUDFLARE_ACCOUNT_ID: z.string(),
    CLOUDFLARE_API_TOKEN: z.string(),
    CLOUDFLARE_ACCESS_KEY_ID: z.string(),
    CLOUDFLARE_SECRET_ACCESS_KEY: z.string(),
    R2_BUCKET_NAME: z.string(),
    RESTIC_PASSWORD: z.string(),
    API_ENDPOINT: z.url(),
    BEARER: z.string(),
    GITHUB_APP_ID: z.string(),
    GITHUB_APP_INSTALLATION_ID: z.string(),
    GITHUB_APP_PEM_FILE: z.string(),
    TF_API_TOKEN: z.string(),
    TF_TOKEN_app_terraform_io: z.string(),
    DISCORD_TOKEN: z.string(),
    RCON_PASSWORD: z.string()
  })
  .readonly()
