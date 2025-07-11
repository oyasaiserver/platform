import { writeFile } from 'node:fs/promises'
import { nodeSeaConfig } from '@oyasaiserver/json/store/node-sea-config'
import { asEnvFile } from '@oyasaiserver/lib/env'
import { getAssetContent } from '@oyasaiserver/lib/sea'
import { UpnpClient } from '@oyasaiserver/lib/upnp/upnp-client'
import { ensure } from '@oyasaiserver/lib/utils'
import { $, spinner } from 'zx'
import packageJson from '../package.json' with { type: 'json' }
import { applyOverlays } from './overlays.ts'
import { runtimeSecrets } from './runtime-secrets.ts'

async function main() {
  await spinner('docker-compose-down', async () => {
    await $({
      quiet: true,
      nothrow: true
    })`docker compose down --remove-orphans`
  })

  await spinner('apply-overlays', async () => {
    const seaConfig = getAssetContent(packageJson.config.sea)
    const { assets } = nodeSeaConfig.parse(JSON.parse(seaConfig))
    const files = Object.keys(ensure(assets))
    await applyOverlays('overlays', files)
  })

  await spinner('clone-fixtures', async () => {
    await writeFile('compose.yaml', getAssetContent('compose.yaml'))
    await writeFile('.env', asEnvFile(runtimeSecrets))
  })

  await spinner('upnp-create-mapping', async () => {
    if (runtimeSecrets.ENVIRONMENT === 'local') {
      return
    }
    const ports = [
      255565,
      runtimeSecrets.ENVIRONMENT === 'production' ? 443 : 80
    ]
    const client = new UpnpClient()
    for (const port of ports) {
      await client.createMapping({
        private: port,
        public: port
      })
    }
    client.close()
  })

  await spinner('docker-compose-up', async () => {
    await $({
      quiet: true
    })`docker compose up --detach --wait`
  })
}

main().then(console.log).catch(console.error)
