import { App } from 'cdktf'
import { CloudflareStack } from './stacks/cloudflare-stack.ts'
import { GitHubStack } from './stacks/github-stack.ts'

class PlatformApp extends App {
  public constructor() {
    super()
    new CloudflareStack(this)

    new GitHubStack(this)
  }
}

new PlatformApp().synth()
