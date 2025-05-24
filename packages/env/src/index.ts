import { readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { parse } from '@dotenvx/dotenvx'
import { dirs } from './dirs'
import type { EnvType } from './env-type'

const environment = process.env.NODE_ENV || process.env.ENVIRONMENT || 'local'

console.log(`Loading environment variables for ${environment}...`)

const envFile = join(dirs.envs, environment, '.env')
const envKeysFile = join(dirs.envs, environment, '.env.keys')
const privateKey =
  process.env.DOTENV_PRIVATE_KEY ||
  parse(await readFile(envKeysFile)).DOTENV_PRIVATE_KEY

if (process.env.DOTENV_PRIVATE_KEY) {
  console.log('Using private key from environment variable')
  console.log(process.env.DOTENV_PRIVATE_KEY)
} else {
  console.log('Using private key from env.keys file')
  console.log(privateKey)
}

const output = parse(await readFile(envFile), {
  privateKey
})

Object.assign(process.env, output)

export const Env = {
  ENVIRONMENT: environment,
  ...output
} as EnvType

if (process.env.GITHUB_ENV) {
  const env = Object.entries(Env)
    .map(([key, value]) => `${key}=${value}`)
    .join('\n')

  await writeFile(process.env.GITHUB_ENV, env)
}
