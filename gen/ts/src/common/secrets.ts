import { z } from 'zod/v4'

export const secrets = z
  .object({
    CLOUDFLARE_API_TOKEN: z.string(),
    DOTENV_PUBLIC_KEY: z.string(),
    ENVIRONMENT: z.enum(['production', 'development', 'local']),
    TF_API_TOKEN: z.string(),
    TF_TOKEN_app_terraform_io: z.string()
  })
  .strict()
  .readonly()

export type Secrets = z.infer<typeof secrets>
