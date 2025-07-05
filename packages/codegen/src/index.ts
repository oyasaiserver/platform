#!/usr/bin/env tsx
import { cp, rm } from 'node:fs/promises'
import { join } from 'node:path'
import { rf, writeFileSafe } from '@oyasaiserver/lib/fs'
import onprem from '@oyasaiserver/onprem'
import { $, spinner, YAML } from 'zx'
import { readme } from '../assets/readme.ts'
import bufGenJson from '../buf.gen.json'

const out = 'gen'

await rm(out, rf)

await spinner('md', async () => {
  await writeFileSafe(`${out}/md/README.md`, readme)
})

await spinner('proto', async () => {
  await cp(join(import.meta.dirname, '../static'), out, rf)

  await $`protoc --version` // supress installation log
  await $`buf generate --template ${JSON.stringify(bufGenJson)}`
})

await spinner('compose', async () => {
  for (const [environment, compose] of Object.entries(onprem)) {
    await writeFileSafe(
      join(out, 'compose', `compose.${environment}.yaml`),
      YAML.stringify(compose)
    )
  }
})
