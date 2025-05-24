import { join } from 'node:path'
import { config } from '@dotenvx/dotenvx'
import { dirs } from './dirs'
import type { EnvType } from './env-type'

const environment = process.env.ENVIRONMENT || 'local'

const output = config({
  path: join(dirs.envs, environment, '.env'),
  envKeysFile: join(dirs.envs, environment, '.env.keys')
})

if (!output.parsed) {
  throw output.error
}

export const Env = output.parsed as unknown as EnvType
