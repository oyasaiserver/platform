import { z } from 'zod'

export const environment = z
  .enum(['production', 'development', 'local'])
  .default('local')
  .readonly()
