#!/usr/bin/env -S npx tsx
import { readdir, rm } from 'node:fs/promises'
import { join } from 'node:path'
import { cwd } from 'node:process'
import { $ } from 'zx'
import { Assets } from './services/assets'
import { Backup } from './services/backup'
import { DockerCompose } from './services/docker-compose'
import { Overlays } from './services/overlays'

$.verbose = true

await Assets.clone('compose.yaml')

await DockerCompose.down()

const backup = await Backup.create('minecraft-main/worlds')

// cleanup
for (const it of await readdir(cwd())) {
  const dir = join(cwd(), it)
  await rm(dir, {
    recursive: true,
    force: true
  })
}

await backup.restore()

await Overlays.apply(`${Assets.path}/overlays`, ['production', 'development'])

await DockerCompose.up()
