#!/usr/bin/env tsx
import { rm } from 'node:fs/promises'
import { writeFileSafe } from '@oyasaiserver/lib/fs'
import { spinner } from 'zx'
import { readme } from '../assets/readme.ts'
import { ktFixtures } from './generators/kotlin/kt-fixtures.ts'
import { tsFixtures } from './generators/ts/ts-fixtures.ts'

const src = 'schema'
const out = 'gen'

const protoc = 'grpc_tools_node_protoc'

await rm(out, {
  recursive: true,
  force: true
})

await spinner('md', async () => {
  await writeFileSafe(`${out}/md/README.md`, readme)
})

await spinner('proto', async () => {
  await tsFixtures('gen/proto/ts')
  await ktFixtures('gen/proto/kotlin')
})
