#!/usr/bin/env tsx
import { readdir, rm } from 'node:fs/promises'
import { basename, join } from 'node:path'
import { readFileContent, writeFileSafe } from '@oyasaiserver/lib/fs'
import { renderToString } from '@oyasaiserver/lib/preact'
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
        const name = basename(file.name)
        const generators = {
          ts: ts({
            schema,
            name
          }),
          kotlin: kotlin({
            schema,
            name,
            dir: file.parentPath.replace(src, ''),
            src
          })
        }
        for (const [lang, generator] of Object.entries(generators)) {
          console.log(join(file.parentPath.replace(src, out), lang, file.name))
          await writeFileSafe(
            join(file.parentPath.replace(src, lang), out, file.name),
            await generator
          )
        }
      }
    })
  await Promise.all(promises)
}

// await spinner('generate', async () => {
//   await json(`${out}/ts`)
//   await gradle(`${out}/kotlin`)
//   const paths = await readdir(src, {
//     recursive: true
//   })
//   const promises = paths
//     .filter(path => path.endsWith('.json'))
//     .map(async path => {
//       const { name, dir } = parse(path)
//       const schema = await readFileJson<JsonSchema>(`${src}/${path}`)
//       await writeFileSafe(
//         `${out}/ts/src/${argv.src}/${dir}/${name}.ts`,
//         await ts({
//           schema,
//           name
//         })
//       )
//       await writeFileSafe(
//         `${out}/kotlin/src/main/kotlin/io/oyasai/gen/${argv.src}/${dir}/${pascalCase(name)}.kt`,
//         await kotlin({
//           schema,
//           name,
//           dir,
//           src: argv.src
//         })
//       )
//     })
//   await Promise.all(promises)
//   await md({
//     dir: `${out}/md`,
//     component: readme,
//     filename: 'README.md'
//   })
// })
//
// await spinner('format', async () => {
//   await $({
//     cwd: directory.root,
//     verbose: true
//   })`npm run check && ./gradlew spotlessApply`
// })
