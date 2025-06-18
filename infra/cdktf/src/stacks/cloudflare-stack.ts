import { CloudflareProvider } from '@cdktf/provider-cloudflare/lib/provider'
import { WorkersScript } from '@cdktf/provider-cloudflare/lib/workers-script'
import { secrets } from '@oyasaiserver/lib/secrets'
import { TerraformStack } from 'cdktf'
import type { Construct } from 'constructs'
import { NamedCloudBackend } from '../backend/named-cloud-backend.ts'

export class CloudflareStack extends TerraformStack {
  public constructor(scope: Construct, id: string) {
    super(scope, id)

    new NamedCloudBackend(this, id)

    new CloudflareProvider(this, id, {
      apiToken: secrets.CLOUDFLARE_API_TOKEN
    })

    new WorkersScript()

    // new PagesProject(this, envAware(id), {
    //   accountId: secrets.CLOUDFLARE_ACCOUNT_ID,
    //   buildConfig: {
    //     buildCaching: true,
    //     buildCommand: 'npm run build -w apss/web',
    //     destinationDir: 'apps/web/.vitepress/dist',
    //     rootDir: 'apps/web'
    //   },
    //   productionBranch: 'main',
    //   source: {
    //     type: 'github'
    //   },
    //   name: 'root'
    // })
  }
}
