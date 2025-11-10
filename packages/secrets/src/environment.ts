import { ok } from 'node:assert'
import { env } from 'node:process'

export const environment = ['local', 'development', 'production'] as const

export type Environment = (typeof environment)[number]

export function readEnvironment(): Environment {
  const value = env.ENVIRONMENT ?? 'local'
  ok(environment.includes(value as Environment))
  return value as Environment
}
