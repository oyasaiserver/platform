import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { parse } from '@dotenvx/dotenvx'
import { secrets as secretsSchema } from '@oyasaiserver/gen/common/secrets'
import { fallback } from './utils'

const environment = fallback(process.env.ENVIRONMENT, 'local')

const envFile = join(import.meta.dirname, `../../../envs/${environment}/.env`)

const publicKey = fallback(
  process.env.DOTENV_PUBLIC_KEYS,
  await readFile(envFile, 'utf-8')
)

const privateKey = fallback(
  process.env.DOTENV_PRIVATE_KEY,
  await readFile(`${envFile}.keys`, 'utf-8')
)

const parsed = parse(publicKey, {
  privateKey
})

export const secrets = secretsSchema.parse({
  ENVIRONMENT: environment,
  ...parsed
})
