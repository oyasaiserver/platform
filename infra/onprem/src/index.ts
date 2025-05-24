#!/usr/bin/env -S node --no-warnings=ExperimentalWarning
import { $ } from 'zx'

$.verbose = true
$.nothrow = true

console.log('Starting platform-server!')

process.exit(0)
//
// // copy the compose.yaml
// await writeFile('compose.yaml', await readFile(composeYaml, 'utf-8'))
//
// // Stop the containers if they are running
// await $`docker compose --profile production --profile development -f compose.yaml down --remove-orphans`
//
// // Start the containers
// await $`docker compose --profile production --profile development -f compose.yaml up -d --wait`
