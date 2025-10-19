import { ok } from 'node:assert'
import { env } from 'node:process'

export const nonLocalEnvironments = ['development', 'production'] as const

export const environments = [...nonLocalEnvironments, 'local'] as const

export type Environment = (typeof environments)[number]

export function getEnvironment(): Environment {
  const environment = env.ENVIRONMENT ?? 'local'
  ok(environments.includes(environment as Environment))
  return environment as Environment
}
