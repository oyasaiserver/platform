import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { parse } from '@dotenvx/dotenvx'
import { dirs } from './dirs'
import type { EnvType } from './env-type'

const environment = process.env.ENVIRONMENT || process.env.NODE_ENV || 'local'

const envFile = join(dirs.envs, environment, '.env')
const envKeysFile = join(dirs.envs, environment, '.env.keys')
const privateKey =
  process.env.DOTENV_PRIVATE_KEY ||
  parse(await readFile(envKeysFile)).DOTENV_PRIVATE_KEY

const output = parse(await readFile(envFile), {
  privateKey
})

Object.assign(process.env, output)

export const Env = {
  ENVIRONMENT: environment,
  ...output
} as EnvType

console.log(process.env)
console.log(Env)
