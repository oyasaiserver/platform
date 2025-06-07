import { cp } from 'node:fs/promises'
import { Env } from '@oyasaiserver/platform/env'
import { clean, plugins } from '../config.json'
import { Artifact } from './services/artifact'
import { Cleaner } from './services/cleaner'
import { DockerCompose } from './services/docker-compose'
import { Overlays } from './services/overlays'
import { Plugin } from './services/plugin'
import { Upnp } from './services/upnp'
import { step } from './step'

await step('docker-compose-down', async () => {
  await DockerCompose.down(Env.ENVIRONMENT)
})

await step('backup-clean-and-restore', async () => {
  // const backup = await Backup.create(
  //   `${environment}/minecraft-main/worlds`,
  //   `${environment}/minecraft-main/.backups`
  // )
  // await backup?.removeStale()
  await Cleaner.clean({
    dir: `${Env.ENVIRONMENT}/minecraft-main`,
    except: clean.except
  })
  // await backup?.restore()
})

await step('download-plugins-from-github-artifact', async () => {
  await Artifact.download([
    {
      artifact: 'plugins.zip',
      path: `${Env.ENVIRONMENT}/minecraft-main/plugins`
    }
  ])
})

await step('download-plugins', async () => {
  await Plugin.download({
    plugins,
    path: `${Env.ENVIRONMENT}/minecraft-main/plugins`
  })
})

await step('apply-overlays', async () => {
  await Overlays.apply(`${__dirname}/../overlays`, Env.ENVIRONMENT)
})

await step('clone-compose-yaml', async () => {
  await cp(`${__dirname}/../compose.yaml`, 'compose.yaml')
})

await step('docker-compose-up', async () => {
  await DockerCompose.up(Env.ENVIRONMENT)
})

await step('upnp-create-mapping', async () => {
  await Upnp.createMapping(25565)
})
