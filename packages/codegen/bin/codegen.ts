#!/usr/bin/env tsx
import { readdir, rm } from 'node:fs/promises'
import { join, parse } from 'node:path'
import { readFileContent, writeFileSafe } from '@oyasaiserver/lib/fs'
import { renderToString } from '@oyasaiserver/lib/preact'
import { $, spinner } from '@oyasaiserver/lib/zx'
import { readme } from '../assets/readme.tsx'
import { kotlin } from '../src/generators/kotlin/kotlin.ts'
import { ktFixtures } from '../src/generators/kotlin/kt-fixtures.ts'
import { ts } from '../src/generators/ts/ts.ts'
import { tsFixtures } from '../src/generators/ts/ts-fixtures.ts'

const src = 'schema'
const out = 'gen'

await rm(out, {
  recursive: true,
  force: true
})

// README.md
await writeFileSafe(`${out}/md/README.md`, renderToString(readme))

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
      if (origin === 'json') {
        const schema = JSON.parse(content)
        const { dir, name } = parse(file.name)
        await writeFileSafe(
          join(
            out,
            'ts',
            'src',
            file.parentPath.replace(src, ''),
            `${name}.ts`
          ),
          await ts({ schema, name })
        )
        await writeFileSafe(
          join(
            out,
            'kotlin',
            'src',
            file.parentPath.replace(src, ''),
            `${name}.kt`
          ),
          await kotlin({
            schema,
            name,
            dir,
            src
          })
        )
      }
    })
  await Promise.all(promises)
}

await spinner('format', async () => {
  await $`npm run check && ./gradlew spotlessApply`
})
