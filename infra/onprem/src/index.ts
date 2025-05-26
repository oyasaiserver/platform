#!/usr/bin/env -S npx tsx
import { rm } from 'node:fs/promises'
import step from 'tasuku'
import { plugins } from '../assets/plugins.json'
import { Artifact } from './services/artifact'
import { Assets } from './services/assets'
import { Backup } from './services/backup'
import { DockerCompose } from './services/docker-compose'
import { Env } from './services/env'
import { Overlays } from './services/overlays'
import { Plugin } from './services/plugin'

const environment = process.env.ENVIRONMENT as string

const processEnv = Env.parse(environment)

await step('docker-compose-down', async () => {
  await DockerCompose.down(environment)
})

await step('backup-clean-and-restore', async () => {
  const backup = await Backup.create(`${environment}/minecraft-main/worlds`)
  await rm(environment, {
    recursive: true,
    force: true
  })
  await backup?.restore()
})

await step('download-plugins-from-github-artifact', async () => {
  await Artifact.download([
    {
      artifact: 'plugins',
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
  await Assets.clone('compose.yaml')
})

await step('docker-compose-up', async () => {
  await DockerCompose.up(environment, processEnv)
})
