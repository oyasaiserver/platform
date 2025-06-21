import { DnsRecord } from '@cdktf/provider-cloudflare/lib/dns-record'
import { CloudflareProvider } from '@cdktf/provider-cloudflare/lib/provider'
import { WorkersRoute } from '@cdktf/provider-cloudflare/lib/workers-route'
import { ZoneDnssec } from '@cdktf/provider-cloudflare/lib/zone-dnssec'
import { envAware, envShort } from '@oyasaiserver/lib/environments'
import { secrets } from '@oyasaiserver/lib/secrets'
import { TerraformStack } from 'cdktf'
import type { Construct } from 'constructs'
import { NamedCloudBackend } from '../backend/named-cloud-backend.ts'

export class CloudflareStack extends TerraformStack {
  private readonly workers = ['wiki', 'sociallikes']
  private readonly zoneId = '3a06bb11a935fe62b10f7ee4a312e85d'
  private readonly dummyIp = '192.0.2.1' // RFC 5737 - reserved for documentation

  public constructor(scope: Construct, id: string) {
    super(scope, id)

    new NamedCloudBackend(this, envAware(id))

    new CloudflareProvider(this, id, {
      apiToken: secrets.CLOUDFLARE_API_TOKEN
    })

    new ZoneDnssec(this, `zone-dnssec`, {
      zoneId: this.zoneId,
      status: 'active'
    })

    for (const worker of this.workers) {
      const subdomain = `${worker}${
        secrets.ENVIRONMENT === 'production'
          ? ''
          : `.${envShort(secrets.ENVIRONMENT)}`
      }`

      new DnsRecord(this, envAware(id, worker, 'dns-record'), {
        ttl: 1, // automatic
        zoneId: this.zoneId,
        name: subdomain,
        type: 'A',
        proxied: true,
        content: this.dummyIp
      })

      new WorkersRoute(this, envAware(id, worker, 'workers-route'), {
        zoneId: this.zoneId,
        pattern: `${subdomain}.oyasai.io/*`,
        script: envAware(worker)
      })
    }
  }
}
