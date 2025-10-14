import { DnsRecord } from '@cdktf/provider-cloudflare/lib/dns-record/index.js'
import { CloudflareProvider } from '@cdktf/provider-cloudflare/lib/provider/index.js'
import { R2Bucket } from '@cdktf/provider-cloudflare/lib/r2-bucket/index.js'
import { WorkersRoute } from '@cdktf/provider-cloudflare/lib/workers-route/index.js'
import { ZoneDnssec } from '@cdktf/provider-cloudflare/lib/zone-dnssec/index.js'
import type { Secrets } from '@oyasaiserver/secrets'
import type { Construct } from 'constructs'
import { readdirSync } from 'node:fs'
import { directory } from '../fs.ts'
import { OyasaiTerraformStack } from './oyasai-terraform-stack.ts'

export class CloudflareStack extends OyasaiTerraformStack {
  private readonly zoneId = '3a06bb11a935fe62b10f7ee4a312e85d'
  private readonly dummyIp = '192.0.2.1' // RFC 5737 - reserved for documentation

  private readonly workers = readdirSync(`${directory.root}/apps`)

  public constructor(scope: Construct, id: string, secrets: Secrets) {
    super(scope, id, secrets)

    new CloudflareProvider(this, id, {
      apiToken: secrets.CLOUDFLARE_API_TOKEN
    })

    new ZoneDnssec(this, 'zone-dnssec', {
      zoneId: this.zoneId,
      status: 'active'
    })

    const rootDnsRecord = new DnsRecord(this, this.envAwareId('root-dns-record'), {
      ttl: 1, // automatic
      zoneId: this.zoneId,
      name: secrets.ENVIRONMENT === 'production' ? 'oyasai.io' : 'dev.oyasai.io',
      type: 'A',
      proxied: false,
      content: secrets.PUBLIC_IPV4
    })

    for (const worker of this.workers) {
      const domain = `${worker}.${rootDnsRecord.name}`

      new DnsRecord(this, this.envAwareId(worker, 'dns-record'), {
        ttl: 1, // automatic
        zoneId: this.zoneId,
        name: domain.replace('.oyasai.io', ''),
        type: 'A',
        proxied: true,
        content: this.dummyIp
      })

      new WorkersRoute(this, this.envAwareId(worker, 'workers-route'), {
        zoneId: this.zoneId,
        pattern: `${domain}/*`,
        script: this.envAwareId(worker)
      })
    }

    new R2Bucket(this, this.envAwareId('r2-bucket'), {
      accountId: secrets.CLOUDFLARE_ACCOUNT_ID,
      name: secrets.R2_BUCKET_NAME
    })
  }
}
