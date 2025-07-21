import { z } from 'zod'

export const envkey = z.object({
  DOTENV_PRIVATE_KEY: z.string()
})

export type PrivateKey = z.infer<typeof envkey>
