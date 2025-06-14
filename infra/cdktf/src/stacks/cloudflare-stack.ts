import { CloudflareProvider } from '@cdktf/provider-cloudflare/lib/provider'
import { secrets } from '@oyasaiserver/lib/secrets'
import { TerraformStack } from 'cdktf'
import type { Construct } from 'constructs'
import { NamedCloudBackend } from '../backend/named-cloud-backend.ts'

export class CloudflareStack extends TerraformStack {
  public constructor(scope: Construct) {
    const id = 'cloudflare'
    super(scope, id)

    new NamedCloudBackend(this, `${id}-${secrets.ENVIRONMENT}`)

    new CloudflareProvider(this, id, {
      apiToken: secrets.CLOUDFLARE_API_TOKEN
    })
  }
}
