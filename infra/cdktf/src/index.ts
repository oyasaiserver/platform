import { D1Database } from '@cdktf/provider-cloudflare/lib/d1-database'
import { CloudflareProvider } from '@cdktf/provider-cloudflare/lib/provider'
import { App, TerraformStack } from 'cdktf'
import type { Construct } from 'constructs'

export class D1Stack extends TerraformStack {
  constructor(scope: Construct, id: string) {
    super(scope, id)

    new CloudflareProvider(this, id)

    new D1Database(this, 'd1', {
      accountId: process.env.CLOUDFLARE_ACCOUNT_ID || '',
      name: 'my-d1-db',
      readReplication: {
        mode: 'disabled'
      }
    })
  }
}

const app = new App()
new D1Stack(app, 'cloudflare-d1')
app.synth()
