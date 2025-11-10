import { mapValues } from '@oyasaiserver/cdktf/object'
import { ok } from 'node:assert'
import { env } from 'node:process'
import { defaults } from './defaults.ts'
import { readEnvironment } from './environment.ts'

export type Secrets = Readonly<Record<keyof typeof defaults, string>> & {
  ENVIRONMENT: 'local' | 'development' | 'production'
}

export function createSecrets(): Secrets {
  const environment = readEnvironment()
  if (environment === 'local') {
    return defaults
  }
  return mapValues<Secrets, string>(defaults, key => {
    const value = env[key]
    ok(value, `Environment variable ${key} is not set.`)
    return value
  }) as Secrets
}
