import { writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { config } from '@dotenvx/dotenvx'
import { dirs } from './dirs'
import type { EnvType } from './env-type'

const environment = process.env.NODE_ENV || process.env.ENVIRONMENT || 'local'

const envFile = join(dirs.envs, environment, '.env')
const envKeysFile = join(dirs.envs, environment, '.env.keys')

const output = config({
  path: envFile,
  envKeysFile: process.env.DOTENV_PRIVATE_KEY ? undefined : envKeysFile
})

export const Env = {
  ENVIRONMENT: environment,
  ...output.parsed
} as EnvType

if (process.env.GITHUB_ENV) {
  const env = Object.entries(Env)
    .map(([key, value]) => `${key}=${value}`)
    .join('\n')

  await writeFile(process.env.GITHUB_ENV, env)
}
