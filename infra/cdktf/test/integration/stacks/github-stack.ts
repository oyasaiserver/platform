import { describe, test } from 'node:test'
import { Testing } from 'cdktf'
import { toBeValidTerraform } from 'cdktf/lib/testing/matchers.js'
import { ok } from 'node:assert/strict'
import { GitHubStack } from '../../../src/stacks/github-stack.ts'

await describe(import.meta.filename, async () => {
  await test('Terraform configuration is valid', async () => {
    const app = Testing.app()
    const stack = new GitHubStack(app, 'github')
    const synthed = Testing.fullSynth(stack)
    const { pass } = toBeValidTerraform(synthed)
    ok(pass)
  })
})
