import { readdir, readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { suite, test } from 'node:test'
import { parseEnv } from 'node:util'
import { directory } from '@oyasaiserver/lib/directory'
import { secrets } from '../src/secrets.ts'

await suite(import.meta.filename, async () => {
  await test('secrets schema should match .env', async () => {
    const dir = `${directory.root}/envs`
    const environments = await readdir(dir)
    for (const environment of environments) {
      const path = join(dir, environment, '.env')
      await readFile(path, 'utf-8').then(parseEnv).then(secrets.parse)
    }
  })
})
