import { join } from 'node:path'
import { config } from '@dotenvx/dotenvx'
import { dirs } from './dirs'
import type { EnvType } from './env-type'

const environment = process.env.ENVIRONMENT || 'local'

console.log(process.env)

const path = join(dirs.envs, environment, '.env')
const envKeysFile = join(dirs.envs, environment, '.env.keys')

const output = config({
  path,
  envKeysFile: process.env.DOTENV_PRIVATE_KEY ? envKeysFile : undefined
})

export const Env = {
  ENVIRONMENT: environment,
  ...output.parsed
} as EnvType
