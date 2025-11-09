import { parse } from '@dotenvx/dotenvx'
import { readFileSync } from 'fs'
import { deepStrictEqual, ok } from 'node:assert/strict'
import { join } from 'node:path'
import { env } from 'node:process'
import { readEnvironment } from './environment.ts'
import { secrets, type Secrets } from './secrets.ts'

export type { Secrets } from './secrets.ts'

export function createSecrets(): Secrets {
  const envs = readEnvs()
  const privateKey = env.DOTENV_PRIVATE_KEY
  ok(privateKey)
  const parsed = {
    ...parse<Secrets>(envs, { privateKey }),
    DOTENV_PRIVATE_KEY: privateKey
  }
  deepStrictEqual(Object.keys(parsed), secrets)
  return parsed
}

export function readEnvs(environment = readEnvironment()): string {
  const directory = join(import.meta.dirname, '../../../secrets')
  const envfile = join(directory.toString(), environment, '.env')
  return readFileSync(envfile).toString()
}
