import { mapValues } from '@oyasaiserver/cdktf/object'
import { ok } from 'node:assert'
import { env } from 'node:process'
import { defaults } from './defaults.ts'
import type { Environment } from './environment.ts'

export type SecretKey = keyof typeof defaults

export type Secrets = Readonly<Record<SecretKey, string>>

export function createSecrets(environemnt: Environment): Secrets {
  return environemnt === 'local'
    ? defaults
    : mapValues(defaults, key => {
        const value = env[key]
        ok(value, `Missing required secret: ${key}`)
        return value
      })
}
