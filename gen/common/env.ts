import { z } from 'zod/v4'

export const env = z
  .object({
    DOTENV_PUBLIC_KEY: z.string(),
    ENVIRONMENT: z.enum(['production', 'development', 'local']),
    CLOUDFLARE_API_TOKEN: z.string(),
    TF_API_TOKEN: z.string(),
    TF_TOKEN_app_terraform_io: z.string()
  })
  .strict()
  .readonly()

export type Env = z.infer<typeof env>
