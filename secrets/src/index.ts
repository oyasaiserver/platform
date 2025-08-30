import { parseEnv } from 'node:util'
import { parse } from '@dotenvx/dotenvx'
import { readFile } from 'node:fs/promises'
import { env } from 'node:process'
import { schema } from './schema.ts'
import { directory } from '@oyasaiserver/lib/directory'

const envfile = `${directory.root}/secrets/${env.ENVIRONMENT ?? 'local'}/.env`

export const secrets = schema.parse(
  parse(await readFile(envfile), {
    privateKey:
      env.DOTENV_PRIVATE_KEY ||
      (await readFile(`${envfile}.keys`, 'utf-8').then(it => parseEnv(it).DOTENV_PRIVATE_KEY))
  })
)
