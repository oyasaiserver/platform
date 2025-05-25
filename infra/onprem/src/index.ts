#!/usr/bin/env -S npx tsx
import { cp } from 'node:fs/promises'
import { join, resolve } from 'node:path'
import { cwd } from 'node:process'
import { $ } from 'zx'

$.verbose = true
$.nothrow = true

const assetsDir = resolve(import.meta.dirname, '../assets')

// update compose.yaml
await cp(join(assetsDir, 'compose.yaml'), join(cwd(), 'compose.yaml'), {
  force: true
})

//
// // copy the compose.yaml
// await writeFile('compose.yaml', await readFile(composeYaml, 'utf-8'))
//
// // Stop the containers if they are running
// await $`docker compose --profile production --profile development -f compose.yaml down --remove-orphans`
//
// // Start the containers
// await $`docker compose --profile production --profile development -f compose.yaml up -d --wait`
