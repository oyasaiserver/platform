import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { parse } from '@dotenvx/dotenvx'
import { env } from '@oyasaiserver/gen/common/env'
import { fallback } from './utils'

const environment = fallback(process.env.ENVIRONMENT, 'local')

const path = join('../..', 'envs', environment, '.env')
const content = await readFile(path)

export const Env = env.parse({
  ENVIRONMENT: environment,
  ...parse(content, {
    privateKey: process.env.DOTENV_PRIVATE_KEY
  })
})
