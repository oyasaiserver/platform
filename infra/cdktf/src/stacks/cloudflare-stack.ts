import { PagesProject } from '@cdktf/provider-cloudflare/lib/pages-project'
import { CloudflareProvider } from '@cdktf/provider-cloudflare/lib/provider'
import { secrets } from '@oyasaiserver/lib/secrets'
import { TerraformStack } from 'cdktf'
import type { Construct } from 'constructs'
import { name } from '../../package.json'
import { NamedCloudBackend } from '../backend/named-cloud-backend.ts'

export class CloudflareStack extends TerraformStack {
  public constructor(scope: Construct, id: string) {
    super(scope, id)

    new NamedCloudBackend(this, id)

    new CloudflareProvider(this, id, {
      apiToken: secrets.CLOUDFLARE_API_TOKEN
    })

    new PagesProject(this, id, {
      accountId: secrets.CLOUDFLARE_ACCOUNT_ID,
      buildConfig: {},
      deploymentConfigs: {},
      productionBranch: 'main',
      source: {
        type: 'github'
      },
      name
    })
  }
}
