import { DnsRecord } from '@cdktf/provider-cloudflare/lib/dns-record/index.js'
import { CloudflareProvider } from '@cdktf/provider-cloudflare/lib/provider/index.js'
import { R2Bucket } from '@cdktf/provider-cloudflare/lib/r2-bucket/index.js'
import {
  WorkerVersion,
  type WorkerVersionConfig
} from '@cdktf/provider-cloudflare/lib/worker-version/index.js'
import { Worker } from '@cdktf/provider-cloudflare/lib/worker/index.js'
import { WorkersDeployment } from '@cdktf/provider-cloudflare/lib/workers-deployment/index.js'
import { WorkersRoute } from '@cdktf/provider-cloudflare/lib/workers-route/index.js'
import { ZoneDnssec } from '@cdktf/provider-cloudflare/lib/zone-dnssec/index.js'
import type { RawConfig } from '@cloudflare/workers-utils'
import type { Construct } from 'constructs'
import { readdirSync, readFileSync } from 'node:fs'
import { join } from 'node:path'
import { directory } from '../fs.ts'
import { OyasaiTerraformStack } from './oyasai-terraform-stack.ts'

export class CloudflareStack extends OyasaiTerraformStack {
  private readonly zoneId = '3a06bb11a935fe62b10f7ee4a312e85d'
  private readonly dummyIp = '192.0.2.1' // RFC 5737 - reserved for documentation

  public constructor(scope: Construct, id: string) {
    super(scope, id)

    new CloudflareProvider(this, id, {
      apiToken: this.secrets.CLOUDFLARE_API_TOKEN
    })

    new ZoneDnssec(this, 'zone-dnssec', {
      zoneId: this.zoneId,
      status: 'active'
    })

    const rootDnsRecord = new DnsRecord(this, this.envAwareId('root-dns-record'), {
      ttl: 1, // automatic
      zoneId: this.zoneId,
      name: this.environment === 'production' ? 'oyasai.io' : 'dev.oyasai.io',
      type: 'A',
      proxied: false,
      content: this.secrets.PUBLIC_IPV4
    })

    for (const { name, config } of this.getApps()) {
      const domain = `${name}.${rootDnsRecord.name}`

      new DnsRecord(this, this.envAwareId(name, 'dns-record'), {
        ttl: 1, // automatic
        zoneId: this.zoneId,
        name: domain.replace('.oyasai.io', ''),
        type: 'A',
        proxied: true,
        content: this.dummyIp
      })

      const worker = new Worker(this, this.envAwareId(name, 'workers'), {
        name: this.envAwareId(name),
        accountId: this.secrets.CLOUDFLARE_ACCOUNT_ID,
        observability: {
          enabled: true
        }
      })

      const workerVersion = new WorkerVersion(this, this.envAwareId(name, 'worker-version'), {
        accountId: this.secrets.CLOUDFLARE_ACCOUNT_ID,
        workerId: worker.id,
        ...config
      })

      const workersDeployment = new WorkersDeployment(
        this,
        this.envAwareId(name, 'workers-deployment'),
        {
          accountId: this.secrets.CLOUDFLARE_ACCOUNT_ID,
          scriptName: worker.name,
          strategy: 'percentage',
          versions: [
            {
              versionId: workerVersion.id,
              percentage: 100
            }
          ]
        }
      )

      new WorkersRoute(this, this.envAwareId(name, 'workers-route'), {
        zoneId: this.zoneId,
        pattern: `${domain}/*`,
        script: workersDeployment.scriptName
      })
    }

    new R2Bucket(this, this.envAwareId('r2-bucket'), {
      accountId: this.secrets.CLOUDFLARE_ACCOUNT_ID,
      name: this.secrets.R2_BUCKET_NAME
    })
  }

  private getApps() {
    const dir = join(directory.root, 'apps')
    return readdirSync(dir).map(name => {
      const path = join(dir, name, 'wrangler.json')
      const content = readFileSync(path).toString()
      const config = JSON.parse(content) as RawConfig
      return {
        name,
        config: this.toWorkerVersionConfig(config, dir, name)
      }
    })
  }

  /**
   * Naive, incomplete RawConfig -> WorkerVersionConfig conversion. But we want to limit the worker
   * features anyway to avoid depending on CF specific features.
   */
  private toWorkerVersionConfig(
    config: RawConfig,
    dir: string,
    name: string
  ): Omit<WorkerVersionConfig, 'accountId' | 'workerId'> {
    if (config.main) {
      config.main = join(dir, name, config.main)
    }
    if (config.assets) {
      config.assets.directory = join(dir, name, config.assets.directory || 'dist')
    }
    return {
      mainModule: config.main,
      assets: config.assets,
      compatibilityDate: config.compatibility_date,
      compatibilityFlags: config.compatibility_flags
      // TODO: respect SPA?
    }
  }
}
