import { App } from 'cdktf'
import { createTerraformSensitiveSecrets } from './secrets.ts'
import { CloudflareStack } from './stacks/cloudflare-stack.ts'
import { DockerStack } from './stacks/docker-stack.ts'
import { GitHubStack } from './stacks/github-stack.ts'
import { InfisicalStack } from './stacks/infisical-stack.ts'

const secrets = createTerraformSensitiveSecrets()

const app = new App()

if (secrets.ENVIRONMENT !== 'local') {
  new CloudflareStack(app, 'cloudflare', secrets)
  new GitHubStack(app, 'github', secrets)
  new InfisicalStack(app, 'infisical', secrets)
}

new DockerStack(app, 'docker', secrets)

app.synth()
