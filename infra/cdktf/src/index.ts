import { createSecrets } from '@oyasaiserver/secrets'
import { App } from 'cdktf'
import { CloudflareStack } from './stacks/cloudflare-stack.ts'
import { DockerStack } from './stacks/docker-stack.ts'

const secrets = await createSecrets()

const app = new App()

if (secrets.ENVIRONMENT !== 'local') {
  new CloudflareStack(app, 'cloudflare', secrets)
}

new DockerStack(app, 'docker', secrets)

app.synth()
