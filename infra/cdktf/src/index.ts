import { App } from 'cdktf'
import { CloudflareStack } from './stacks/cloudflare-stack'

export class PlatformApp extends App {
  public constructor() {
    super()
    new CloudflareStack(this, 'cloudflare-main')
  }
}

new PlatformApp().synth()
