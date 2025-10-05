import { parse } from '@dotenvx/dotenvx'
import { readFile } from 'node:fs/promises'
import { env } from 'node:process'
import { parseEnv } from 'node:util'
import type { output } from 'zod'
import { schema } from './schema.ts'

export type Secrets = Readonly<output<typeof schema>>

async function readPrivateKey(envfile: string): Promise<string | undefined> {
  const content = await readFile(`${envfile}.keys`, 'utf-8')
  return parseEnv(content).DOTENV_PRIVATE_KEY
}

export async function createSecrets(overrides: NodeJS.ProcessEnv = env): Promise<Secrets> {
  const envfile = `${import.meta.dirname}/../${overrides.ENVIRONMENT ?? 'local'}/.env`
  const content = await readFile(envfile)
  const parsed = parse(content, {
    privateKey: overrides.DOTENV_PRIVATE_KEY ?? (await readPrivateKey(envfile))
  })
  return schema.parse({ ...parsed, ...overrides })
}
