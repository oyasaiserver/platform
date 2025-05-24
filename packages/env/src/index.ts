import { writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { config } from '@dotenvx/dotenvx'
import { dirs } from './dirs'
import type { EnvType } from './env-type'

const environment = process.env.ENVIRONMENT || 'local'

const envKeysFile = join(dirs.envs, environment, '.env.keys')

if (process.env.DOTENV_PRIVATE_KEY) {
  await writeFile(
    envKeysFile,
    `DOTENV_PRIVATE_KEY=${process.env.DOTENV_PRIVATE_KEY}`
  )
}

const output = config({
  path: join(dirs.envs, environment, '.env'),
  envKeysFile
})

export const Env = {
  ENVIRONMENT: environment,
  ...output.parsed
} as EnvType
