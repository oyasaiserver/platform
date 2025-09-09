import { schema } from '@oyasaiserver/secrets/schema'
import { glob, readFile } from 'node:fs/promises'
import { suite, test } from 'node:test'
import { parseEnv } from 'node:util'

await suite(import.meta.filename, async () => {
  await test('secrets schema should match .env', async () => {
    const envfiles = glob('*/.env')
    for await (const envfile of envfiles) {
      await readFile(envfile, 'utf-8').then(parseEnv).then(schema.parse)
    }
  })
})
