import { z } from 'zod/v4'
import { environment } from './environment.ts'

export const secrets = z
  .object({
    DOTENV_PUBLIC_KEY: z.string(),
    ENVIRONMENT: environment,
    CLOUDFLARE_ACCOUNT_ID: z.string(),
    CLOUDFLARE_API_TOKEN: z.string(),
    GITHUB_APP_ID: z.string(),
    GITHUB_APP_INSTALLATION_ID: z.string(),
    GITHUB_APP_PEM_FILE: z.string(),
    TF_API_TOKEN: z.string(),
    TF_TOKEN_app_terraform_io: z.string(),
    BEARER: z.string(),
    API_ENDPOINT: z.url()
  })
  .readonly()

export type Secrets = z.infer<typeof secrets>
