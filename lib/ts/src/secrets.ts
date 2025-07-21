import { parseEnv } from 'node:util'
import { parse } from '@dotenvx/dotenvx'
import { secrets as secretsSchema } from '@oyasaiserver/schema/secrets'
import { directory } from './directory.ts'
import { readFileContent } from './fs.ts'
import { env } from 'node:process'
import { environment as environmentSchema } from '@oyasaiserver/schema/environment'

const environment = environmentSchema.parse(env.ENVIRONMENT)

const envfile = `${directory.root}/envs/${environment}/.env`

const content = await readFileContent(envfile)

export const secrets = secretsSchema.parse(
  parse(content, {
    privateKey:
      env.DOTENV_PRIVATE_KEY ||
      (await readFileContent(`${envfile}.keys`)
        .then(parseEnv)
        .then(it => it.DOTENV_PRIVATE_KEY))
  })
)
