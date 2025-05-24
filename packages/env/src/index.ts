import { readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { parse } from '@dotenvx/dotenvx'
import { dirs } from './dirs'
import type { EnvType } from './env-type'

const { ENVIRONMENT, NODE_ENV, DOTENV_PRIVATE_KEY, GITHUB_ENV } = process.env

const environment = ENVIRONMENT || NODE_ENV || 'local'

console.log(`Loading environment variables for ${environment}...`)

const envFile = join(dirs.envs, environment, '.env')
const envKeysFile = join(dirs.envs, environment, '.env.keys')
const privateKey =
  DOTENV_PRIVATE_KEY || parse(await readFile(envKeysFile)).DOTENV_PRIVATE_KEY

const output = parse(await readFile(envFile), {
  privateKey
})

Object.assign(process.env, output)

export const Env = {
  ENVIRONMENT: environment,
  ...output
} as EnvType

if (GITHUB_ENV) {
  const env = Object.entries(Env)
    .map(([key, value]) => `${key}=${value}`)
    .join('\n')

  await writeFile(GITHUB_ENV, env)
}
