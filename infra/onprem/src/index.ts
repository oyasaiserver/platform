#!/usr/bin/env -S npx tsx
import { copyFile } from 'node:fs/promises'
import { join, resolve } from 'node:path'
import { cwd } from 'node:process'
import { $ } from 'zx'

$.verbose = true

// assets directory
const assets = resolve(import.meta.dirname, '../assets')

// update compose.yaml
const composeYaml = 'compose.yaml'
await copyFile(join(assets, composeYaml), join(cwd(), composeYaml))

// Stop the containers if they are running
await $`docker compose --profile production --profile development -f compose.yaml down --remove-orphans`

// Start the containers
await $`docker compose --profile production --profile development -f compose.yaml up --detached --wait`
