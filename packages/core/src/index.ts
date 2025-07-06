import { writeFile } from 'node:fs/promises'
import { nodeSeaConfig } from '@oyasaiserver/json/store/node-sea-config'
import { asEnvFile } from '@oyasaiserver/lib/env'
import { getAssetContent } from '@oyasaiserver/lib/sea'
import { UpnpClient } from '@oyasaiserver/lib/upnp/upnp-client'
import { ensure } from '@oyasaiserver/lib/utils'
import { spinner } from 'zx'
import { config } from '../package.json'
import { DockerCompose } from './services/docker-compose.ts'
import { applyOverlays } from './services/overlays.ts'
import { runtimeSecrets } from './services/runtime-secrets.ts'

async function main() {
  await spinner('docker-compose-down', async () => {
    await DockerCompose.down(runtimeSecrets.ENVIRONMENT)
  })

  await spinner('apply-overlays', async () => {
    const seaConfig = getAssetContent(config.sea)
    const { assets } = nodeSeaConfig.parse(JSON.parse(seaConfig))
    const files = Object.keys(ensure(assets))
    await applyOverlays('overlays', runtimeSecrets.ENVIRONMENT, files)
  })

  await spinner('clone-fixtures', async () => {
    await writeFile(
      `${runtimeSecrets.ENVIRONMENT}/compose.yaml`,
      getAssetContent('compose.yaml')
    )
    await writeFile(
      `${runtimeSecrets.ENVIRONMENT}/.env`,
      asEnvFile(runtimeSecrets)
    )
  })

  await spinner('docker-compose-up', async () => {
    await DockerCompose.up(runtimeSecrets.ENVIRONMENT)
  })

  await spinner('upnp-create-mapping', async () => {
    if (runtimeSecrets.ENVIRONMENT === 'local') {
      return
    }
    const client = new UpnpClient()
    await client.createMapping({
      private: 25565,
      public: 25565
    })
    client.close()
  })
}

main().then()
