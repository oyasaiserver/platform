#!/usr/bin/env tsx
import { readdir, rm } from 'node:fs/promises'
import { join, parse } from 'node:path'
import { argv } from 'node:process'
import { directory } from '@oyasaiserver/lib/directory'
import { readFileJson } from '@oyasaiserver/lib/fs'
import { ensure } from '@oyasaiserver/lib/utils'
import type { JsonSchema } from 'json-schema-to-zod'
import { $, spinner } from 'zx'
import { gradle } from './generators/gradle.ts'
import { json } from './generators/json.ts'
import { kotlin } from './generators/kotlin.ts'
import { ts } from './generators/ts.ts'

const src = join(directory.root, ensure(argv[2]))
const dst = join(directory.root, ensure(argv[3]))

await spinner('reset', async () => {
  await rm(dst, {
    force: true,
    recursive: true
  })
})

await spinner('generate', async () => {
  await json(`${dst}/ts`)
  await gradle(`${dst}/kotlin`)
  const paths = await readdir(src, {
    recursive: true
  })
  const promises = paths
    .filter(path => path.endsWith('.json'))
    .map(async path => {
      const { name, dir } = parse(path)
      const schema = await readFileJson<JsonSchema>(`${src}/${path}`)
      await ts({
        schema,
        name,
        dir: `${dst}/ts/src/${dir}`
      })
      await kotlin({
        schema,
        name,
        dir: `${dst}/kotlin/src/main/kotlin/io/oyasai/gen`
      })
    })
  await Promise.all(promises)
})

await spinner('format', async () => {
  await $({
    cwd: directory.root
  })`npm run check && ./gradlew spotlessApply`
})
