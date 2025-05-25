#!/usr/bin/env -S npx tsx
import { readdir } from 'node:fs/promises'
import { resolve } from 'node:path'
import { $ } from 'zx'
import { Assets } from './services/assets'
import { Backup } from './services/backup'
import { Clener } from './services/cleaner'
import { DockerCompose } from './services/docker-compose'
import { Overlays } from './services/overlays'

$.verbose = true

console.log(await readdir(resolve(import.meta.dirname, '../../../envs')))

process.exit(0)

await DockerCompose.down()

const backup = await Backup.create('production/minecraft-main/worlds')

await Clener.clean({
  exclude: [Backup.directory]
})

await backup?.restore()

await Overlays.apply(`${Assets.path}/overlays`, ['production', 'development'])

await Assets.clone('compose.yaml')

await DockerCompose.up()
