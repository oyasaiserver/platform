#!/usr/bin/env tsx
import { readdir, rm } from 'node:fs/promises'
import { join, parse } from 'node:path'
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

for (const origin of await readdir(src)) {
  const dirents = await readdir(join(src, origin), {
    recursive: true,
    withFileTypes: true
  })
  const promises = dirents
    .filter(dirent => dirent.isFile())
    .map(async file => {
      const content = await readFileContent(join(file.parentPath, file.name))
      const inner = file.parentPath.substring(src.length)
      switch (origin) {
        case 'json': {
          const schema = JSON.parse(content)
          const { name } = parse(file.name)
          await writeFileSafe(
            `${out}/ts/src/${inner}/${name}.ts`,
            await ts({ schema, name })
          )
          await writeFileSafe(
            `${out}/kotlin/src/main/kotlin/io/oyasai/gen/${inner}/${pascalCase(name)}.kt`,
            await kotlin({ schema, name, inner })
          )
          break
        }
      }
    })
  await Promise.all(promises)
}

await spinner('format', async () => {
  await $({
    nothrow: true
  })`npm run check & ./gradlew spotlessApply`
})
