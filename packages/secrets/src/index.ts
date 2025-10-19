import { mapValues } from '@oyasaiserver/cdktf/object'
import { ok } from 'node:assert'
import { env } from 'node:process'
import type { Environment } from './environment.ts'
import { secrets } from './secrets.ts'

export type SecretKey = keyof typeof secrets

export type Secrets = Readonly<Record<SecretKey, string>>

export function createSecrets(environemnt: Environment): Secrets {
  return environemnt === 'local'
    ? secrets
    : mapValues(secrets, key => {
        const value = env[key]
        ok(value, `Missing required secret: ${key}`)
        return value
      })
}
