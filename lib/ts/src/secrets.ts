import { parseEnv } from 'node:util'
import { parse } from '@dotenvx/dotenvx'
import { secrets as secretsSchema } from '@oyasaiserver/gen/json/secrets'
import { directory } from './directory.ts'
import { readFileContent } from './fs.ts'
import { ensure, fallback } from './utils.ts'

const envfile = `${directory.root}/envs/${fallback(process.env.ENVIRONMENT, 'local')}/.env`

export const secrets = secretsSchema.parse(
  parse(
    await fallback(process.env.DOTENV_PUBLIC_KEYS, async () => {
      return readFileContent(envfile)
    }),
    {
      privateKey: await fallback(process.env.DOTENV_PRIVATE_KEY, async () => {
        const content = await readFileContent(`${envfile}.keys`)
        const { DOTENV_PRIVATE_KEY } = parseEnv(content)
        return ensure(DOTENV_PRIVATE_KEY)
      })
    }
  )
)
