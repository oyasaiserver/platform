#!/usr/bin/env -S npx tsx
import { rm } from 'node:fs/promises'
import task from 'tasuku'
import { Assets } from './services/assets'
import { Backup } from './services/backup'
import { DockerCompose } from './services/docker-compose'
import { Overlays } from './services/overlays'

const environment = process.argv.at(2) || 'local'

await task('docker-compose-down', async () => {
  await DockerCompose.down(environment)
})

await task('backup-clean-and-restore', async () => {
  const backup = await Backup.create(`${environment}/minecraft-main/worlds`)
  await rm(environment, {
    recursive: true,
    force: true
  })
  await backup?.restore()
})

await task('apply-overlays', async () => {
  await Overlays.apply(`${Assets.path}/overlays`, environment)
})

await task('clone-compose-yaml', async () => {
  await Assets.clone('compose.yaml')
})

await task('docker-compose-up', async () => {
  await DockerCompose.up(environment)
})
