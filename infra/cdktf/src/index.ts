import { App } from 'cdktf'
import { CloudflareStack } from './stacks/cloudflare-stack.ts'
import { GitHubStack } from './stacks/github-stack.ts'

const app = new App()

new GitHubStack(app, 'github')
new CloudflareStack(app, 'cloudflare')

app.synth()
