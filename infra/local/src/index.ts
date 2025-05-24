import { readFile, writeFile } from 'node:fs/promises'
import { $ } from 'zx'
import composeYaml from '../assets/compose.yaml' with { type: 'file' }

$.nothrow = true

// copy the compose.yaml
await writeFile('compose.yaml', await readFile(composeYaml, 'utf-8'))

// Stop the containers if they are running
await $`docker compose --profile production --profile development -f compose.yaml down --remove-orphans`

// Start the containers
await $`docker compose --profile production --profile development -f compose.yaml up -d --wait`
