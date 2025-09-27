import { secrets } from '@oyasaiserver/secrets'
import { App } from 'cdktf'
import { CloudflareStack } from './stacks/cloudflare-stack.ts'
import { DockerStack } from './stacks/docker-stack.ts'

const app = new App()

if (secrets.ENVIRONMENT !== 'local') {
  new CloudflareStack(app, 'cloudflare')
}

new DockerStack(app, 'docker')

app.synth()
