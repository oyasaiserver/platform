import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { parseEnv } from 'node:util'
import { parse } from '@dotenvx/dotenvx'
import { env } from '@oyasaiserver/gen/common/env'
import { ensure, fallback } from './utils'

const envFile = join(
  import.meta.dirname,
  `../../../envs/${fallback(process.env.ENVIRONMENT, 'local')}/.env`
)

export const Env = env.parse(
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
