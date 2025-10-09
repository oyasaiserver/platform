import { glob, readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { suite, test } from 'node:test'
import { parseEnv } from 'node:util'
import { secretsSchema } from '../src/schema.ts'

await suite(import.meta.filename, async () => {
  await test('secrets schema should match .env', async () => {
    const envpath = join(import.meta.dirname, '../../../secrets/*/.env')
    for await (const envfile of glob(envpath)) {
      await readFile(envfile, 'utf-8').then(parseEnv).then(secretsSchema.parse)
    }
  })
})
