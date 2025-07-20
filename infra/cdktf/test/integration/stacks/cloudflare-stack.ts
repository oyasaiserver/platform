import { describe, test } from 'node:test'
import { Testing } from 'cdktf'
import { toBeValidTerraform } from 'cdktf/lib/testing/matchers.js'
import { ok } from 'node:assert/strict'
import { CloudflareStack } from '../../src/stacks/cloudflare-stack.ts'

await describe(import.meta.filename, async () => {
  await test('Terraform configuration is valid', async () => {
    const app = Testing.app()
    const stack = new CloudflareStack(app, 'cloudflare')
    const synthed = Testing.fullSynth(stack)
    const { pass } = toBeValidTerraform(synthed)
    ok(pass)
  })
})
