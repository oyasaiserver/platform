#!/usr/bin/env -S npx tsx
import { readdir, rm } from 'node:fs/promises'
import { join } from 'node:path'
import { cwd } from 'node:process'
import { $ } from 'zx'
import { Assets } from './services/assets'
import { DockerCompose } from './services/docker-compose'
import { Overlays } from './services/overlays'

$.verbose = true

const envs = ['production', 'development']

await Assets.clone('compose.yaml')

await DockerCompose.down()

// await BackupManager.create('production/minecraft-main/worlds')

// await BackupManager.restore()

// cleanup
for (const it of await readdir(cwd())) {
  const dir = join(cwd(), it)
  await rm(dir, {
    recursive: true,
    force: true
  })
}

await Overlays.apply(
  `${Assets.path}/overlays`,
  envs.map(env => join(cwd(), env))
)

await DockerCompose.up()
