import { DnsRecord } from '@cdktf/provider-cloudflare/lib/dns-record'
import { CloudflareProvider } from '@cdktf/provider-cloudflare/lib/provider'
import { WorkersRoute } from '@cdktf/provider-cloudflare/lib/workers-route'
import { secrets } from '@oyasaiserver/lib/secrets'
import { TerraformStack } from 'cdktf'
import type { Construct } from 'constructs'
import wikiWrangerJson from '../../../../apps/wiki/wrangler.json'
import { NamedCloudBackend } from '../backend/named-cloud-backend.ts'

export class CloudflareStack extends TerraformStack {
  private readonly wikiOyasaiIoZoneId = '3a06bb11a935fe62b10f7ee4a312e85d'
  private readonly dummyIp = '192.0.2.1' // RFC 5737 - reserved for documentation

  public constructor(scope: Construct, id: string) {
    super(scope, id)

    new NamedCloudBackend(this, id)

    new CloudflareProvider(this, id, {
      apiToken: secrets.CLOUDFLARE_API_TOKEN
    })

    new DnsRecord(this, 'wiki-oyasai-io-dns-record', {
      ttl: 1, // automatic
      zoneId: this.wikiOyasaiIoZoneId,
      name: 'wiki',
      type: 'A',
      proxied: true,
      content: this.dummyIp
    })

    new WorkersRoute(this, 'wiki-workers-route', {
      zoneId: this.wikiOyasaiIoZoneId,
      pattern: 'wiki.oyasai.io/*',
      script: wikiWrangerJson.name
    })
  }
}
