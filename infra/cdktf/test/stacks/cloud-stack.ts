import { Testing } from 'cdktf'
import { toBeValidTerraform, toPlanSuccessfully } from 'cdktf/lib/testing/matchers.js'
import { ok } from 'node:assert'
import { suite, test } from 'node:test'
import { CloudStack } from '../../src/stacks/cloud-stack.ts'

await suite(import.meta.filename, async () => {
  const app = Testing.app()
  const stack = new CloudStack(app, 'cloudflare')
  const synth = Testing.fullSynth(stack)

  await test('valid terraform', async () => {
    const { pass, message } = toBeValidTerraform(synth)
    ok(pass, message)
  })

  await test('valid plan', async () => {
    const { pass, message } = toPlanSuccessfully(synth)
    ok(pass, message)
  })
})
