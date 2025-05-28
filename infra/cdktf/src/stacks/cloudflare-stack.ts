import { D1Database } from '@cdktf/provider-cloudflare/lib/d1-database'
import { CloudflareProvider } from '@cdktf/provider-cloudflare/lib/provider'
import { Env } from '@oyasaiserver/env'
import { TerraformStack } from 'cdktf'
import type { Construct } from 'constructs'
import { NamedCloudBackend } from '../backend/named-cloud-backend'

export class CloudflareStack extends TerraformStack {
  private readonly accountId = '7befe273c79e6f7993c1cd4534d6afff'
  private readonly databaseIds = ['sociallikes', 'coreprotect']

  public constructor(scope: Construct, id: string) {
    super(scope, id)

    new NamedCloudBackend(this, id)

    new CloudflareProvider(this, id, {
      apiToken: Env.CLOUDFLARE_API_TOKEN
    })

    for (const id of this.databaseIds) {
      new D1Database(this, `d1-${id}-${Env.ENVIRONMENT}`, {
        accountId: this.accountId,
        name: `${id}-${Env.ENVIRONMENT}`,
        readReplication: {
          mode: 'disabled'
        }
      })
    }
  }
}
