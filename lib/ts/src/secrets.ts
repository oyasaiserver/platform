import { parseEnv } from 'node:util'
import { parse } from '@dotenvx/dotenvx'
import { secrets as secretsSchema } from '@oyasaiserver/schema/secrets'
import { directory } from './directory.ts'
import { readFileContent } from './fs.ts'
import { envkey } from '@oyasaiserver/schema/envkey'
import { environment } from './environments.ts'
import { fallback } from './functional.ts'

const envfile = `${directory.root}/envs/${environment}/.env`

const content = await readFileContent(envfile)

export const secrets = secretsSchema.parse(
  parse(content, {
    privateKey: await fallback(process.env.DOTENV_PRIVATE_KEY, async () => {
      const content = await readFileContent(`${envfile}.keys`)
      const env = parseEnv(content)
      return envkey.parse(env).DOTENV_PRIVATE_KEY
    })
  })
)
