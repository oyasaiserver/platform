import { join } from 'node:path'
import { config } from '@dotenvx/dotenvx'
import { env } from '@oyasaiserver/gen/common/env'
import { fallback } from './utils'

const environment = fallback(process.env.ENVIRONMENT, 'local')

const { parsed } = config({
  strict: true,
  override: true,
  path: join('../..', 'envs', environment, '.env')
})

export const Env = env.parse({
  ENVIRONMENT: environment,
  ...parsed
})
