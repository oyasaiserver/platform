#!/usr/bin/env -S npx tsx
import { except } from '../configs/clean.json'
import { plugins } from '../configs/plugins.json'
import { Artifact } from './services/artifact'
import { Assets } from './services/assets'
import { Cleaner } from './services/cleaner'
import { DockerCompose } from './services/docker-compose'
import { Env } from './services/env'
import { Overlays } from './services/overlays'
import { Plugin } from './services/plugin'
import { Upnp } from './services/upnp'
import { step } from './step'

const environment = process.env.ENVIRONMENT as string

const processEnv = await Env.fetch()

await step('docker-compose-down', async () => {
  await DockerCompose.down(environment)
})

await step('backup-clean-and-restore', async () => {
  // const backup = await Backup.create(
  //   `${environment}/minecraft-main/worlds`,
  //   `${environment}/minecraft-main/.backups`
  // )
  // await backup?.removeStale()
  await Cleaner.clean({
    dir: `${environment}/minecraft-main`,
    except
  })
  // await backup?.restore()
})

await step('download-plugins-from-github-artifact', async () => {
  await Artifact.download([
    {
      artifact: 'plugins.zip',
      path: `${environment}/minecraft-main/plugins`
    }
  ])
})

await step('download-plugins', async () => {
  await Plugin.download({
    plugins,
    path: `${environment}/minecraft-main/plugins`
  })
})

await step('apply-overlays', async () => {
  await Overlays.apply(`${Assets.path}/overlays`, environment)
})

await step('clone-compose-yaml', async () => {
  await Assets.clone('compose/compose.yaml')
})

await step('docker-compose-up', async () => {
  await DockerCompose.up(environment, processEnv)
})

await step('upnp-create-mapping', async () => {
  await Upnp.createMapping(25565)
})
