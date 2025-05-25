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

// docker compose command
const docker =
  'docker compose --profile production --profile development -f compose.yaml down'

// Stop the containers if they are running
await $`${docker} down --remove-orphans`

// backup the world data

// Start the containers
await $`${docker} up -d --wait`
