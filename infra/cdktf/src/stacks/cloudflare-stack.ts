import { DnsRecord } from '@cdktf/provider-cloudflare/lib/dns-record/index.js'
import { CloudflareProvider } from '@cdktf/provider-cloudflare/lib/provider/index.js'
import { WorkersRoute } from '@cdktf/provider-cloudflare/lib/workers-route/index.js'
import { ZeroTrustTunnelCloudflared } from '@cdktf/provider-cloudflare/lib/zero-trust-tunnel-cloudflared/index.js'
import { ZeroTrustTunnelCloudflaredConfigA } from '@cdktf/provider-cloudflare/lib/zero-trust-tunnel-cloudflared-config/index.js'
import { ZoneDnssec } from '@cdktf/provider-cloudflare/lib/zone-dnssec/index.js'
import { envAware } from '@oyasaiserver/lib/environments'
import { secrets } from '@oyasaiserver/lib/secrets'
import { TerraformStack } from 'cdktf'
import type { Construct } from 'constructs'
import { NamedCloudBackend } from '../backend/named-cloud-backend.ts'

export class CloudflareStack extends TerraformStack {
  private readonly zoneId = '3a06bb11a935fe62b10f7ee4a312e85d'
  private readonly dummyIp = '192.0.2.1' // RFC 5737 - reserved for documentation

  private readonly workers = ['api', 'wiki', 'sociallikes']

  public constructor(scope: Construct, id: string) {
    super(scope, id)

    new NamedCloudBackend(this, envAware(id))

    new CloudflareProvider(this, id, {
      apiToken: secrets.CLOUDFLARE_API_TOKEN
    })

    new ZoneDnssec(this, 'zone-dnssec', {
      zoneId: this.zoneId,
      status: 'active'
    })

    const rootDnsRecord = new DnsRecord(this, envAware('root-dns-record'), {
      ttl: 1, // automatic
      zoneId: this.zoneId,
      name:
        secrets.ENVIRONMENT === 'production' ? 'oyasai.io' : 'dev.oyasai.io',
      type: 'A',
      proxied: false,
      content: secrets.PUBLIC_IPV4
    })

    if (secrets.ENVIRONMENT === 'production') {
      const tunnel = new ZeroTrustTunnelCloudflared(this, 'tunnel', {
        accountId: secrets.CLOUDFLARE_ACCOUNT_ID,
        name: 'ssh',
        tunnelSecret: secrets.CLOUDFLARE_TUNNEL_SECRET
      })

      new ZeroTrustTunnelCloudflaredConfigA(this, 'tunnel-config', {
        accountId: tunnel.accountId,
        tunnelId: tunnel.id,
        config: {
          ingress: [
            {
              hostname: 'ssh.oyasai.io',
              service: 'ssh://localhost:22'
            },
            {
              service: 'http_status:404'
            }
          ]
        }
      })

      new DnsRecord(this, 'tunnel-dns-record', {
        ttl: 1, // automatic
        zoneId: this.zoneId,
        name: 'ssh',
        type: 'CNAME',
        proxied: true,
        content: `${tunnel.id}.cfargotunnel.com`
      })
    }

    for (const worker of this.workers) {
      const domain = `${worker}.${rootDnsRecord.name}`

      new DnsRecord(this, envAware(worker, 'dns-record'), {
        ttl: 1, // automatic
        zoneId: this.zoneId,
        name: domain.replace('.oyasai.io', ''),
        type: 'A',
        proxied: true,
        content: this.dummyIp
      })

      new WorkersRoute(this, envAware(worker, 'workers-route'), {
        zoneId: this.zoneId,
        pattern: `${domain}/*`,
        script: envAware(worker)
      })
    }
  }
}
