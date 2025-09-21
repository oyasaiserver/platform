import { App } from 'cdktf'
import { CloudflareStack } from './stacks/cloudflare-stack.ts'

const app = new App()

new CloudflareStack(app, 'cloudflare')

app.synth()
