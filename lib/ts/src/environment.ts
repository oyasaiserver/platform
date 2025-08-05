import { secrets } from './secrets.ts'
import { z } from 'zod'

export const schema = z
  .enum(['production', 'development', 'local'])
  .default('local')
  .readonly()

export function envAware(...fragments: string[]) {
  return [...fragments, secrets.ENVIRONMENT].join('-')
}

export type Environment = z.infer<typeof schema>

export const environment: Readonly<Record<Environment, Environment>> = {
  local: 'local',
  development: 'development',
  production: 'production'
} as const
