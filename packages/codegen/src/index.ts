#!/usr/bin/env tsx
import { readdir, rm } from 'node:fs/promises'
import { join, parse } from 'node:path'
import { directory } from '@oyasaiserver/lib/directory'
import { readFileContent, writeFileSafe } from '@oyasaiserver/lib/fs'
import { pascalCase } from 'change-case'
import { $, spinner } from 'zx'
import { readme } from '../assets/readme.ts'
import { kotlin } from './generators/kotlin/kotlin.ts'
import { ktFixtures } from './generators/kotlin/kt-fixtures.ts'
import { ts } from './generators/ts/ts.ts'
import { tsFixtures } from './generators/ts/ts-fixtures.ts'

const src = 'schema'
const out = 'gen'

await rm(out, {
  recursive: true,
  force: true
})

// README.md
await writeFileSafe(`${out}/md/README.md`, readme)

// write fixtures
await tsFixtures(`${out}/ts`)
await ktFixtures(`${out}/kotlin`)

await spinner('format', async () => {
  await $({
    nothrow: true
  })`npm run check & ./gradlew spotlessApply`
})
