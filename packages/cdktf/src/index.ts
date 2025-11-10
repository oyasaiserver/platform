import { isLocal } from '@oyasaiserver/secrets/environment'
import { App } from 'cdktf'
import { CloudflareStack } from './stacks/cloudflare-stack.ts'
import { DockerStack } from './stacks/docker-stack.ts'
import { GitHubStack } from './stacks/github-stack.ts'
import { InfisicalStack } from './stacks/infisical-stack.ts'

const app = new App()

if (!isLocal()) {
  new CloudflareStack(app, 'cloudflare')
  new GitHubStack(app, 'github')
  new InfisicalStack(app, 'infisical')
}

new DockerStack(app, 'docker')

app.synth()
