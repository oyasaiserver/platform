import { secrets } from '@oyasaiserver/platform/secrets'
import { App } from 'cdktf'
import { CloudflareStack } from './stacks/cloudflare-stack.ts'

class PlatformApp extends App {
  public constructor() {
    super()
    new CloudflareStack(this, `cloudflare-${secrets.ENVIRONMENT}`)
  }
}

new PlatformApp().synth()
