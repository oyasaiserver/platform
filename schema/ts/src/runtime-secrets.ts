import { z } from 'zod'
import { environment } from './environment.ts'

export const runtimeSecrets = z
  .object({
    ENVIRONMENT: environment,
    BEARER: z.string(),
    API_ENDPOINT: z.url()
  })
  .readonly()

export type RuntimeSecrets = z.infer<typeof runtimeSecrets>
