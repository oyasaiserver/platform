import { writeFile } from 'node:fs/promises'
import { getAsset } from 'node:sea'
import { decode } from '@oyasaiserver/lib/text'
import { UpnpClient } from '@oyasaiserver/lib/upnp/upnp-client'
import { spinner } from 'zx'
import { clean } from '../config.json'
import { config } from '../package.json'
import { Cleaner } from './services/cleaner.ts'
import { DockerCompose } from './services/docker-compose.ts'
import { applyOverlays } from './services/overlays.ts'

const environment = process.env.ENVIRONMENT || 'local'

async function main() {
  await spinner('docker-compose-down', async () => {
    await DockerCompose.down(environment)
  })

  await spinner('backup-clean-and-restore', async () => {
    await Cleaner.clean({
      dir: `${environment}/minecraft-main`,
      except: clean.except
    })
  })

  await spinner('apply-overlays', async () => {
    const seaConfig = decode(getAsset(config.sea.file))
    const { assets } = JSON.parse(seaConfig) || {}
    const files = Object.keys(assets) as string[]
    await applyOverlays('overlays', environment, files)
  })

  await spinner('clone-compose-yaml', async () => {
    const arrayBuffer = getAsset('compose.yaml')
    await writeFile('compose.yaml', Buffer.from(arrayBuffer))
  })

  await spinner('docker-compose-up', async () => {
    await DockerCompose.up(environment)
  })

  await spinner('upnp-create-mapping', async () => {
    try {
      const client = new UpnpClient()
      await client.createMapping({
        private: 25565,
        public: 25565
      })
      client.close()
    } catch {
      console.warn('UPnP mapping failed')
    }
  })
}

main().then()
