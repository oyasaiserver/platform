import { deepStrictEqual } from 'node:assert/strict'
import { suite, test } from 'node:test'
import { parseEnv } from 'node:util'
import { environments } from '../src/environment.ts'
import { readEnvs } from '../src/index.ts'
import { secrets } from '../src/secrets.ts'

await suite(import.meta.filename, async () => {
  await test('Secrets are synced', async () => {
    for (const environment of environments) {
      const envs = readEnvs(environment)
      const keys = Object.keys(parseEnv(envs))
      deepStrictEqual(keys, secrets)
    }
  })
})
