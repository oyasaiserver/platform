import { join } from 'node:path'
import { config } from '@dotenvx/dotenvx'
import type { EnvType } from './env-type'

const environment = process.env.ENVIRONMENT as string

config({
  strict: true,
  override: true,
  path: join('../..', 'envs', environment, '.env')
})

export const Env = {
  ENVIRONMENT: environment,
  ...process.env
} as EnvType

export type { EnvType } from './env-type'
