import { Env } from '@platform/env'
import { App } from 'cdktf'
import { CloudflareStack } from './stacks/cloudflare-stack'

export class PlatformApp extends App {
  public constructor() {
    super()
    new CloudflareStack(this, `cloudflare-${Env.ENVIRONMENT}`)
  }
}

new PlatformApp().synth()
