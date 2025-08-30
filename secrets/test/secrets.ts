import { glob, readFile } from 'node:fs/promises'
import { suite, test } from 'node:test'
import { parseEnv } from 'node:util'
import { directory } from '@oyasaiserver/lib/directory'
import { schema } from '@oyasaiserver/secrets/schema'

await suite(import.meta.filename, async () => {
  await test('secrets schema should match .env', async () => {
    const envfiles = glob(`${directory.root}/secrets/*/.env`)
    for await (const envfile of envfiles) {
      const env = await readFile(envfile, 'utf-8').then(parseEnv)
      schema.parse(env)
    }
  })
})
