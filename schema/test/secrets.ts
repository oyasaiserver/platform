import { readdir } from 'node:fs/promises'
import { join } from 'node:path'
import { describe, test } from 'node:test'
import { parseEnv } from 'node:util'
import { directory } from '@oyasaiserver/lib/directory'
import { readFileContent } from '@oyasaiserver/lib/fs'
import { secrets } from '../src/secrets.ts'

await describe(import.meta.filename, async () => {
  await test('secrets schema should match .env', async () => {
    const dir = `${directory.root}/envs`
    const environments = await readdir(dir)
    for (const environment of environments) {
      const path = join(dir, environment, '.env')
      await readFileContent(path).then(parseEnv).then(secrets.parse)
    }
  })
})
