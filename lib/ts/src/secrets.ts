import { parseEnv } from 'node:util'
import { parse } from '@dotenvx/dotenvx'
import { secrets as secretsSchema } from '@oyasaiserver/schema/secrets'
import { directory } from './directory.ts'
import { readFileContent } from './fs.ts'
import { envkey } from '@oyasaiserver/schema/envkey'
import { environment } from './environments.ts'

const envfile = `${directory.root}/envs/${environment}/.env`

const content = await readFileContent(envfile)

export const secrets = secretsSchema.parse(
  parse(content, {
    privateKey:
      process.env.DOTENV_PRIVATE_KEY ||
      (await readFileContent(`${envfile}.keys`)
        .then(parseEnv)
        .then(envkey.parse)
        .then(it => it.DOTENV_PRIVATE_KEY))
  })
)
