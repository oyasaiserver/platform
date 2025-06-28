import { parseEnv } from 'node:util'
import { parse } from '@dotenvx/dotenvx'
import { z } from 'zod'
import { directory } from './directory.ts'
import { readFileContent } from './fs.ts'
import { ensure, fallback } from './utils.ts'

// TODO move to codegen
export const secretsSchema = z
  .object({
    DOTENV_PUBLIC_KEY: z.string(),
    ENVIRONMENT: z.enum(['production', 'development', 'local']),
    CLOUDFLARE_ACCOUNT_ID: z.string(),
    CLOUDFLARE_API_TOKEN: z.string(),
    GITHUB_APP_ID: z.string(),
    GITHUB_APP_INSTALLATION_ID: z.string(),
    GITHUB_APP_PEM_FILE: z.string(),
    TF_API_TOKEN: z.string(),
    TF_TOKEN_app_terraform_io: z.string()
  })
  .strict()
  .readonly()

export type Secrets = z.infer<typeof secretsSchema>

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
