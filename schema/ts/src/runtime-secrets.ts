import { z } from 'zod'
import { environment } from './environment.ts'

export const runtimeSecrets = z
  .object({
    ENVIRONMENT: environment,
    BEARER: z.string(),
    API_ENDPOINT: z.url(),
    DISCORDSRV_TOKEN: z.string(),
    RCON_PASSWORD: z.string(),
    RESTIC_PASSWORD: z.string(),
    BUCKET_NAME: z.string()
  })
  .readonly()

export type RuntimeSecrets = z.infer<typeof runtimeSecrets>
