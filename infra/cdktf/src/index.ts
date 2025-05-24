import { Env } from '@platform/env'
import { App } from 'cdktf'
import { CloudflareStack } from './stacks/cloudflare-stack'

export class PlatformApp extends App {
  public constructor() {
    super()
    process.env.TF_TOKEN_app_terraform_io = Env.TF_API_TOKEN
    new CloudflareStack(this, `cloudflare-${Env.ENVIRONMENT}`)
  }
}

new PlatformApp().synth()
