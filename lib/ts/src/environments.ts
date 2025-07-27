import { secrets } from './secrets.ts'
import type { Environment } from '@oyasaiserver/schema/environment'

export function envAware(...fragments: string[]) {
  return [...fragments, secrets.ENVIRONMENT].join('-')
}

export const environments: Readonly<Record<Environment, Environment>> = {
  local: 'local',
  development: 'development',
  production: 'production'
} as const
