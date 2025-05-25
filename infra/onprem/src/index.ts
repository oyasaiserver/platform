#!/usr/bin/env -S npx tsx
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

await Overlays.apply(`${Assets.path}/overlays`, `${cwd()}/production`)

await DockerCompose.up()
