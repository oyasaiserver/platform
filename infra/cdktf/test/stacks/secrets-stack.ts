import { Testing } from 'cdktf'
import { toBeValidTerraform } from 'cdktf/lib/testing/matchers.js'
import { ok } from 'node:assert'
import { suite, test } from 'node:test'
import { SecretsStack } from '../../src/stacks/secrets-stack.ts'

await suite(import.meta.filename, async () => {
  const app = Testing.app()
  const stack = new SecretsStack(app, 'cloudflare')
  const synth = Testing.fullSynth(stack)

  await test('valid terraform', async () => {
    const { pass, message } = toBeValidTerraform(synth)
    ok(pass, message)
  })
})
