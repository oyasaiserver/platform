import { Testing } from 'cdktf'
import { toBeValidTerraform, toPlanSuccessfully } from 'cdktf/lib/testing/matchers.js'
import { ok } from 'node:assert'
import { suite, test } from 'node:test'
import { createTerraformSensitiveSecrets } from '../../src/secrets.ts'
import { DockerStack } from '../../src/stacks/docker-stack.ts'

await suite(import.meta.filename, async () => {
  const secrets = await createTerraformSensitiveSecrets()

  const app = Testing.app()
  const stack = new DockerStack(app, 'docker', secrets)
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
