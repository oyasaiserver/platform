import { parseEnv } from 'node:util'
import { parse } from '@dotenvx/dotenvx'
import { secrets as secretsSchema } from '@oyasaiserver/schema/secrets'
import { environment as environmentSchema } from '@oyasaiserver/schema/environment'
import { directory } from './directory.ts'
import { readFile } from 'node:fs/promises'
import { env } from 'node:process'

const environment = environmentSchema.parse(env.ENVIRONMENT)

const envfile = `${directory.root}/secrets/${environment}/.env`

const content = await readFile(envfile)

export const secrets = secretsSchema.parse(
  parse(content, {
    privateKey:
      env.DOTENV_PRIVATE_KEY ||
      (await readFile(`${envfile}.keys`, 'utf-8')
        .then(parseEnv)
        .then(it => it.DOTENV_PRIVATE_KEY))
  })
)
