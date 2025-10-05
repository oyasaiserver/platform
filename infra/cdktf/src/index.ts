import { App } from 'cdktf'
import { createTerraformSensitiveSecrets } from './secrets.ts'
import { CloudflareStack } from './stacks/cloudflare-stack.ts'
import { DockerStack } from './stacks/docker-stack.ts'

const app = new App()

const secrets = await createTerraformSensitiveSecrets()

if (secrets.ENVIRONMENT !== 'local') {
  new CloudflareStack(app, 'cloudflare', secrets)
}
new DockerStack(app, 'docker', secrets)

app.synth()
