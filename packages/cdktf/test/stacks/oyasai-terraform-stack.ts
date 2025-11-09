import { Testing } from 'cdktf'
import { toBeValidTerraform } from 'cdktf/lib/testing/matchers.js'
import { ok } from 'node:assert'
import { suite, test } from 'node:test'
import { CloudflareStack } from '../../src/stacks/cloudflare-stack.ts'
import { DockerStack } from '../../src/stacks/docker-stack.ts'
import { GitHubStack } from '../../src/stacks/github-stack.ts'
import { SecretsStack } from '../../src/stacks/secrets-stack.ts'

await suite(import.meta.filename, async () => {
  const Stacks = [DockerStack, CloudflareStack, SecretsStack, GitHubStack]

  for (const Stack of Stacks) {
    const app = Testing.app()
    const id = Stack.name.toLowerCase().replace('stack', '')
    const stack = new Stack(app, id)
    const synth = Testing.fullSynth(stack)

    await test(`valid terraform - ${id}`, async () => {
      const { pass, message } = toBeValidTerraform(synth)
      ok(pass, message)
    })
  }
})
