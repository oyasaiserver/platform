import { join } from 'node:path'
import { config } from '@dotenvx/dotenvx'
import { REPOSITORY_ROOT } from '@platform/constants'
import type { EnvType } from './env-type'

const environment = process.env.ENVIRONMENT || 'local'

config({
  strict: true,
  override: true,
  path: join(REPOSITORY_ROOT, 'envs', environment, '.env')
})

export const Env = {
  ENVIRONMENT: environment,
  ...process.env
} as EnvType
