import { z } from 'zod'
import { environment } from './environment.ts'

export const secrets = z
  .object({
    DOTENV_PUBLIC_KEY: z.string(),
    ENVIRONMENT: environment,
    // onprem
    PUBLIC_IPV4: z.ipv4(),
    SSH_PRIVATE_KEY: z.string(),
    SSH_USERNAME: z.string(),
    SSH_PASSWORD: z.string(),
    RCON_PASSWORD: z.string(),
    // cloudflare
    CLOUDFLARE_ACCOUNT_ID: z.string(),
    CLOUDFLARE_API_TOKEN: z.string(),
    CLOUDFLARE_TUNNEL_SECRET: z.string(),
    API_ENDPOINT: z.url(),
    BEARER: z.string(),
    BUCKET_NAME: z.string(),
    RESTIC_REPOSITORY: z.string(),
    RESTIC_PASSWORD: z.string(),
    // github
    GITHUB_APP_ID: z.string(),
    GITHUB_APP_INSTALLATION_ID: z.string(),
    GITHUB_APP_PEM_FILE: z.string(),
    // terraform
    TF_API_TOKEN: z.string(),
    TF_TOKEN_app_terraform_io: z.string(),
    // plugins
    DISCORDSRV_TOKEN: z.string()
  })
  .readonly()

export type Secrets = z.infer<typeof secrets>
