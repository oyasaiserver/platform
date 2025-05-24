import { readFile, rm, writeFile } from 'node:fs/promises'
import { $ } from 'bun'
import composeYaml from '../compose.yaml' with { type: 'file' }

await rm('compose.yaml', { force: true })

// copy the compose.yaml file to the current directory
await writeFile('compose.yaml', await readFile(composeYaml, 'utf-8'))

// start the containers
$`docker compose --profile production --profile development up -d`
