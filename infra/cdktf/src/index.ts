import { App } from 'cdktf'
import { CloudflareStack } from './stacks/cloudflare-stack.ts'
import { GitHubStack } from './stacks/github-stack.ts'

class PlatformApp extends App {
  public constructor() {
    super()
    new GitHubStack(this, 'github')
    new CloudflareStack(this, 'cloudflare')
  }
}

new PlatformApp().synth()
