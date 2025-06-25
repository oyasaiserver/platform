import '@oyasaiserver/lib/shims/require'
import { writeFile } from 'node:fs/promises'
import { getAsset } from 'node:sea'
import { TextDecoder } from 'node:util'
import { decode } from '@oyasaiserver/lib/text'
import { UpnpClient } from '@oyasaiserver/lib/upnp/upnp-client'
import { spinner } from '@oyasaiserver/lib/zx'
import { clean } from '../config.json'
import { config } from '../package.json'
import { Cleaner } from './services/cleaner.ts'
import { DockerCompose } from './services/docker-compose.ts'
import { applyOverlays } from './services/overlays.ts'

const ENVIRONMENT = process.env.ENVIRONMENT || 'local'

async function main() {
  await spinner('docker-compose-down', async () => {
    await DockerCompose.down(ENVIRONMENT)
  })

  await spinner('backup-clean-and-restore', async () => {
    await Cleaner.clean({
      dir: `${ENVIRONMENT}/minecraft-main`,
      except: clean.except
    })
  })

  await spinner('apply-overlays', async () => {
    const seaConfig = decode(getAsset(config.sea.file))
    const { assets } = JSON.parse(seaConfig) || {}
    const files = Object.keys(assets) as string[]
    await applyOverlays('overlays', ENVIRONMENT, files)
  })

  await spinner('clone-compose-yaml', async () => {
    const arrayBuffer = getAsset('compose.yaml')
    await writeFile('compose.yaml', Buffer.from(arrayBuffer))
  })

  await spinner('docker-compose-up', async () => {
    await DockerCompose.up(ENVIRONMENT)
  })

  await spinner('upnp-create-mapping', async () => {
    const client = new UpnpClient()
    await client.createMapping({
      private: 25565,
      public: 25565
    })
    client.close()
  })
}

main().then()
