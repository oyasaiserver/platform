import { ok } from 'node:assert/strict'
import { suite, test } from 'node:test'
import type { ZodType } from 'zod/v4'
import { type RuntimeSecrets } from '../src/runtime-secrets.ts'
import { secrets } from '../src/secrets.ts'

await suite(import.meta.filename, async () => {
  await test('runtimeSecrets schema should be supertype of secrets', async () => {
    ok(secrets satisfies ZodType<RuntimeSecrets>)
  })
})
