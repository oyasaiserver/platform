import { rm } from 'node:fs/promises'
import { writeFileSafe } from '@oyasaiserver/lib/fs'
import { renderToString } from '@oyasaiserver/lib/preact'
import { readme } from '../assets/readme.tsx'

const src = 'schema'
const out = 'gen'

await rm(out, {
  recursive: true,
  force: true
})

await writeFileSafe(`${out}/md/README.md`, renderToString(readme))

// const src = join(directory.root, ensure(argv.src))
// const out = join(directory.root, ensure(argv.out))
//
// await spinner('reset', async () => {
//   await rm(out, {
//     force: true,
//     recursive: true
//   })
// })
//
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
