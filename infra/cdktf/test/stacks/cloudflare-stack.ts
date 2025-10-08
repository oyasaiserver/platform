import { createSecretsFromEnv } from '@oyasaiserver/secrets'
import { Testing } from 'cdktf'
import { toBeValidTerraform } from 'cdktf/lib/testing/matchers.js'
import { ok } from 'node:assert'
import { suite, test } from 'node:test'
import { CloudflareStack } from '../../src/stacks/cloudflare-stack.ts'

await suite(import.meta.filename, async () => {
  const secrets = await createSecretsFromEnv()

  const app = Testing.app()
  const stack = new CloudflareStack(app, 'cloudflare', secrets)
  const synth = Testing.fullSynth(stack)

  await test('valid terraform', async () => {
    const { pass, message } = toBeValidTerraform(synth)
    ok(pass, message)
  })
})
