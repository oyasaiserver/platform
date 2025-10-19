import { getEnvironment } from '@oyasaiserver/secrets/environment'
import { App } from 'cdktf'
import { CloudflareStack } from './stacks/cloudflare-stack.ts'
import { DockerStack } from './stacks/docker-stack.ts'
import { SecretsStack } from './stacks/secrets-stack.ts'

const environment = getEnvironment()

const app = new App()

if (environment !== 'local') {
  new CloudflareStack(app, 'cloudflare')
  new SecretsStack(app, 'secrets')
}

new DockerStack(app, 'docker')

app.synth()
