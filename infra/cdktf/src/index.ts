import { CloudflareStack } from './stacks/cloudflare-stack.ts'
import { App } from 'cdktf'

const app = new App()

new CloudflareStack(app, 'cloudflare')

app.synth()
