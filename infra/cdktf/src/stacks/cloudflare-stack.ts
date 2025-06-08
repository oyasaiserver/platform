import { CloudflareProvider } from '@cdktf/provider-cloudflare/lib/provider'
import { secrets } from '@oyasaiserver/lib/secrets'
import { TerraformStack } from 'cdktf'
import type { Construct } from 'constructs'
import { NamedCloudBackend } from '../backend/named-cloud-backend.ts'

export class CloudflareStack extends TerraformStack {
  private readonly accountId = '7befe273c79e6f7993c1cd4534d6afff'

  public constructor(scope: Construct, id: string) {
    super(scope, id)

    new NamedCloudBackend(this, id)

    new CloudflareProvider(this, id, {
      apiToken: secrets.CLOUDFLARE_API_TOKEN
    })
  }
}
