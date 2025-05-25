#!/usr/bin/env -S npx tsx
import { rm } from 'node:fs/promises'
import { cwd } from 'node:process'
import { $ } from 'zx'
import { Assets } from './services/assets'
import { DockerCompose } from './services/docker-compose'
import { Overlays } from './services/overlays'

$.verbose = true

await Assets.copy('compose.yaml')

await DockerCompose.down()

// await BackupManager.create('production/minecraft-main/worlds')

// await BackupManager.restore()

await rm(`${cwd()}/*/minecraft-main`, {
  recursive: true,
  force: true
})

await Overlays.apply(`${Assets.path}/overlays`, [
  `${cwd()}/production`,
  `${cwd()}/development`
])

await DockerCompose.up()
