import { createSecrets } from '@oyasaiserver/secrets'
import { Testing } from 'cdktf'
import { toBeValidTerraform } from 'cdktf/lib/testing/matchers.js'
import { ok } from 'node:assert'
import { suite, test } from 'node:test'
import { CloudflareStack } from '../../src/stacks/cloudflare-stack.ts'
import { DockerStack } from '../../src/stacks/docker-stack.ts'
import { GitHubStack } from '../../src/stacks/github-stack.ts'
import { InfisicalStack } from '../../src/stacks/infisical-stack.ts'

await suite(import.meta.filename, async () => {
  const secrets = createSecrets()
  const Stacks = [DockerStack, CloudflareStack, InfisicalStack, GitHubStack]

  for (const Stack of Stacks) {
    const app = Testing.app()
    const id = Stack.name.toLowerCase().replace('stack', '')
    const stack = new Stack(app, id, secrets)
    const synth = Testing.fullSynth(stack)

    await test(`valid terraform - ${id}`, async () => {
      const { pass, message } = toBeValidTerraform(synth)
      ok(pass, message)
    })
  }
})
