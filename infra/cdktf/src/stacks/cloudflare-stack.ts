import { D1Database } from '@cdktf/provider-cloudflare/lib/d1-database'
import { DnsRecord } from '@cdktf/provider-cloudflare/lib/dns-record'
import { CloudflareProvider } from '@cdktf/provider-cloudflare/lib/provider'
import { WorkersRoute } from '@cdktf/provider-cloudflare/lib/workers-route'
import { ZeroTrustTunnelCloudflared } from '@cdktf/provider-cloudflare/lib/zero-trust-tunnel-cloudflared'
import { ZeroTrustTunnelCloudflaredConfigA } from '@cdktf/provider-cloudflare/lib/zero-trust-tunnel-cloudflared-config'
import { ZoneDnssec } from '@cdktf/provider-cloudflare/lib/zone-dnssec'
import { envAware, envShort } from '@oyasaiserver/lib/environments'
import { secrets } from '@oyasaiserver/lib/secrets'
import { TerraformStack } from 'cdktf'
import type { Construct } from 'constructs'
import { NamedCloudBackend } from '../backend/named-cloud-backend.ts'

export class CloudflareStack extends TerraformStack {
  private readonly zoneId = '3a06bb11a935fe62b10f7ee4a312e85d'
  private readonly dummyIp = '192.0.2.1' // RFC 5737 - reserved for documentation

  private readonly workers = ['api', 'wiki', 'sociallikes']
  private readonly databases = ['events']

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

    new DnsRecord(this, envAware(id, 'root-dns-record'), {
      ttl: 1, // automatic
      zoneId: this.zoneId,
      name:
        secrets.ENVIRONMENT === 'production' ? 'oyasai.io' : 'dev.oyasai.io',
      type: 'A',
      proxied: false,
      content: secrets.PUBLIC_IPV4
    })

    if (secrets.ENVIRONMENT === 'production') {
      const tunnel = new ZeroTrustTunnelCloudflared(
        this,
        'zero-trust-tunnel-cloudflared',
        {
          accountId: secrets.CLOUDFLARE_ACCOUNT_ID,
          name: 'ssh-oyasai-production',
          tunnelSecret: secrets.CLOUDFLARE_TUNNEL_SECRET
        }
      )

      new ZeroTrustTunnelCloudflaredConfigA(
        this,
        'zero-trust-tunnel-cloudflared-config',
        {
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
        }
      )

      new DnsRecord(this, 'tunnel-dns', {
        ttl: 1, // automatic
        zoneId: this.zoneId,
        name: 'ssh',
        type: 'CNAME',
        proxied: true,
        content: `${tunnel.id}.cfargotunnel.com`
      })
    }

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

    for (const database of this.databases) {
      new D1Database(this, envAware(id, database, 'd1-database'), {
        accountId: secrets.CLOUDFLARE_ACCOUNT_ID,
        name: envAware(database),
        readReplication: {
          mode: 'disabled'
        }
      })
    }
  }
}
