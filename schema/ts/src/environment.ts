import { z } from 'zod'

export const environment = z
  .enum(['production', 'development', 'local'])
  .default('local')
  .readonly()

export type Environment = z.infer<typeof environment>
