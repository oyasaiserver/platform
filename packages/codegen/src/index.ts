#!/usr/bin/env tsx
import { readdir, rm } from 'node:fs/promises'
import { join, parse } from 'node:path'
import { readme } from '@oyasaiserver/assets/readme.tsx'
import { directory } from '@oyasaiserver/lib/directory'
import { readFileJson, writeFileSafe } from '@oyasaiserver/lib/fs'
import { ensure } from '@oyasaiserver/lib/utils'
import { $, argv, spinner } from '@oyasaiserver/lib/zx'
import { pascalCase } from 'change-case'
import type { JsonSchema } from 'json-schema-to-zod'
import { gradle } from './generators/gradle.ts'
import { json } from './generators/json.ts'
import { kotlin } from './generators/kotlin.ts'
import { md } from './generators/md.ts'
import { ts } from './generators/ts.ts'

const src = join(directory.root, ensure(argv.src))
const out = join(directory.root, ensure(argv.out))

await spinner('reset', async () => {
  await rm(out, {
    force: true,
    recursive: true
  })
})

await spinner('generate', async () => {
  await json(`${out}/ts`)
  await gradle(`${out}/kotlin`)
  const paths = await readdir(src, {
    recursive: true
  })
  const promises = paths
    .filter(path => path.endsWith('.json'))
    .map(async path => {
      const { name, dir } = parse(path)
      const schema = await readFileJson<JsonSchema>(`${src}/${path}`)
      await writeFileSafe(
        `${out}/ts/src/${argv.src}/${dir}/${name}.ts`,
        await ts({
          schema,
          name
        })
      )
      await writeFileSafe(
        `${out}/kotlin/src/main/kotlin/io/oyasai/gen/${argv.src}/${dir}/${pascalCase(name)}.kt`,
        await kotlin({
          schema,
          name,
          dir,
          src: argv.src
        })
      )
    })
  await Promise.all(promises)
  await md({
    dir: `${out}/md`,
    component: readme,
    filename: 'README.md'
  })
})

await spinner('format', async () => {
  await $({
    cwd: directory.root,
    verbose: true
  })`npm run check && ./gradlew spotlessApply`
})
