import { writeFile } from 'node:fs/promises'
import { nodeSeaConfig } from '@oyasaiserver/json/store/node-sea-config'
import { getAssetContent } from '@oyasaiserver/lib/sea'
import { UpnpClient } from '@oyasaiserver/lib/upnp/upnp-client'
import { ensure } from '@oyasaiserver/lib/utils'
import { environment as environmentSchema } from '@oyasaiserver/schema/environment'
import { spinner } from 'zx'
import { config } from '../package.json'
import { DockerCompose } from './services/docker-compose.ts'
import { applyOverlays } from './services/overlays.ts'

const environment = environmentSchema.parse(process.env.ENVIRONMENT)

async function main() {
  await spinner('docker-compose-down', async () => {
    await DockerCompose.down(environment)
  })

  await spinner('apply-overlays', async () => {
    const seaConfig = getAssetContent(config.sea)
    const { assets } = nodeSeaConfig.parse(JSON.parse(seaConfig))
    const files = Object.keys(ensure(assets))
    await applyOverlays('overlays', environment, files)
  })

  await spinner('clone-compose-yaml', async () => {
    await writeFile('compose.yaml', getAssetContent('compose.yaml'))
  })

  await spinner('docker-compose-up', async () => {
    await DockerCompose.up(environment)
  })

  await spinner('upnp-create-mapping', async () => {
    if (environment === 'local') {
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
