import { z } from 'zod/v4'

export const environment = z
  .enum(['production', 'development', 'local'])
  .readonly()

export type Environment = z.infer<typeof environment>
