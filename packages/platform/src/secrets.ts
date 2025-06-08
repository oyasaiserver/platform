import { readFile } from 'node:fs/promises'
import { parseEnv } from 'node:util'
import { parse } from '@dotenvx/dotenvx'
import { secrets as secretsSchema } from '@oyasaiserver/gen/common/secrets'
import { directory } from './directory.ts'
import { ensure, fallback } from './utils.ts'

const envFile = `${directory.root}/envs/${fallback(process.env.ENVIRONMENT, 'local')}/.env`

export const secrets = secretsSchema.parse(
  parse(
    await fallback(process.env.DOTENV_PUBLIC_KEYS, async () => {
      return readFile(envFile, 'utf-8')
    }),
    {
      privateKey: await fallback(process.env.DOTENV_PRIVATE_KEY, async () => {
        const content = await readFile(`${envFile}.keys`, 'utf-8')
        const { DOTENV_PRIVATE_KEY } = parseEnv(content)
        return ensure(DOTENV_PRIVATE_KEY)
      })
    }
  )
)
