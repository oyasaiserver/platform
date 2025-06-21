import { DnsRecord } from '@cdktf/provider-cloudflare/lib/dns-record'
import { CloudflareProvider } from '@cdktf/provider-cloudflare/lib/provider'
import { TotalTls } from '@cdktf/provider-cloudflare/lib/total-tls'
import { WorkersRoute } from '@cdktf/provider-cloudflare/lib/workers-route'
import { envAware, envShort } from '@oyasaiserver/lib/environments'
import { secrets } from '@oyasaiserver/lib/secrets'
import { name as sociallikesWorkerName } from '@oyasaiserver/sociallikes/wrangler.json'
import { name as wikiWorkerName } from '@oyasaiserver/wiki/wrangler.json'
import { TerraformStack } from 'cdktf'
import type { Construct } from 'constructs'
import { NamedCloudBackend } from '../backend/named-cloud-backend.ts'

export class CloudflareStack extends TerraformStack {
  private readonly zoneId = '3a06bb11a935fe62b10f7ee4a312e85d'
  private readonly dummyIp = '192.0.2.1' // RFC 5737 - reserved for documentation

  public constructor(scope: Construct, id: string) {
    super(scope, id)

    new NamedCloudBackend(this, envAware(id))

    new CloudflareProvider(this, id, {
      apiToken: secrets.CLOUDFLARE_API_TOKEN
    })

    for (const workerName of [wikiWorkerName, sociallikesWorkerName]) {
      const subdomain = `${workerName}${
        secrets.ENVIRONMENT === 'production'
          ? ''
          : `.${envShort(secrets.ENVIRONMENT)}`
      }`

      new DnsRecord(this, envAware(id, workerName, 'dns-record'), {
        ttl: 1, // automatic
        zoneId: this.zoneId,
        name: subdomain,
        type: 'A',
        proxied: true,
        content: this.dummyIp
      })

      new WorkersRoute(this, envAware(id, workerName, 'workers-route'), {
        zoneId: this.zoneId,
        pattern: `${subdomain}.oyasai.io/*`,
        script: workerName
      })
    }
  }
}
