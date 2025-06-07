import { cp } from 'node:fs/promises'
import { secrets } from '@oyasaiserver/platform/secrets'
import { clean, plugins } from '../config.json'
import { Artifact } from './services/artifact'
import { Cleaner } from './services/cleaner'
import { DockerCompose } from './services/docker-compose'
import { Overlays } from './services/overlays'
import { Plugin } from './services/plugin'
import { Upnp } from './services/upnp'
import { step } from './step'

await step('docker-compose-down', async () => {
  await DockerCompose.down(secrets.ENVIRONMENT)
})

await step('backup-clean-and-restore', async () => {
  // const backup = await Backup.create(
  //   `${environment}/minecraft-main/worlds`,
  //   `${environment}/minecraft-main/.backups`
  // )
  // await backup?.removeStale()
  await Cleaner.clean({
    dir: `${secrets.ENVIRONMENT}/minecraft-main`,
    except: clean.except
  })
  // await backup?.restore()
})

await step('download-plugins-from-github-artifact', async () => {
  await Artifact.download([
    {
      artifact: 'plugins.zip',
      path: `${secrets.ENVIRONMENT}/minecraft-main/plugins`
    }
  ])
})

await step('download-plugins', async () => {
  await Plugin.download({
    plugins,
    path: `${secrets.ENVIRONMENT}/minecraft-main/plugins`
  })
})

await step('apply-overlays', async () => {
  await Overlays.apply(`${__dirname}/../overlays`, secrets.ENVIRONMENT)
})

await step('clone-compose-yaml', async () => {
  await cp(`${__dirname}/../compose.yaml`, 'compose.yaml')
})

await step('docker-compose-up', async () => {
  await DockerCompose.up(secrets.ENVIRONMENT)
})

await step('upnp-create-mapping', async () => {
  await Upnp.createMapping(25565)
})
