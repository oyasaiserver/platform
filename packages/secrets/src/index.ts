import { parse } from '@dotenvx/dotenvx'
import type { PathLike } from 'node:fs'
import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { env } from 'node:process'
import { parseEnv } from 'node:util'
import type { output } from 'zod'
import { environmentSchema, secretsSchema } from './schema.ts'

export type Environment = output<typeof environmentSchema>
export type Secrets = Readonly<output<typeof secretsSchema>>

export async function createSecrets(path: PathLike): Promise<Secrets> {
  const environment = environmentSchema.parse(env.ENVIRONMENT)
  const envfile = join(path.toString(), environment, '.env')
  const content = await readFile(envfile)

  async function readPrivateKey(): Promise<string | undefined> {
    const content = await readFile(`${envfile}.keys`, 'utf-8')
    return parseEnv(content).DOTENV_PRIVATE_KEY
  }

  return secretsSchema.parse(
    parse(content, {
      privateKey: env.DOTENV_PRIVATE_KEY ?? (await readPrivateKey())
    })
  )
}
