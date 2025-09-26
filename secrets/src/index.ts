import { parse } from '@dotenvx/dotenvx'
import { readFile } from 'node:fs/promises'
import { env } from 'node:process'
import { parseEnv } from 'node:util'
import { schema } from './schema.ts'

const envfile = `${import.meta.dirname}/../${env.ENVIRONMENT ?? 'local'}/.env`

export const secretsNoOverrides = schema.parse(
  parse(await readFile(envfile), {
    privateKey:
      env.DOTENV_PRIVATE_KEY ||
      (await readFile(`${envfile}.keys`, 'utf-8').then(it => parseEnv(it).DOTENV_PRIVATE_KEY))
  })
)

export const secrets = schema.parse(
  Object.fromEntries(
    Object.entries(secretsNoOverrides).map(([key, value]) => {
      return [key, env[key] ?? value]
    })
  )
)
