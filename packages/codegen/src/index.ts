#!/usr/bin/env node --no-warnings=ExperimentalWarning
import { mkdir, readdir, rm } from 'node:fs/promises'
import { join } from 'node:path'
import { argv } from 'node:process'
import { directory } from '@oyasaiserver/platform/directory'
import { ensure } from '@oyasaiserver/platform/utils'
import { spinner } from 'zx'
import { json } from './generators/json.ts'
import { ts } from './generators/ts.ts'

const src = join(directory.root, ensure(argv[2]))
const dst = join(directory.root, ensure(argv[3]))

console.log('Source directory:', src)
console.log('Destination directory:', dst)

await spinner('reset', async () => {
  await rm(`dst`, {
    force: true,
    recursive: true
  })
  await mkdir(dst, {
    recursive: true
  })
  await json(dst)
})

console.log('Generating TypeScript files from JSON schemas...')

await spinner('generate', async () => {
  const paths = await readdir(src, {
    recursive: true
  })
  console.log('Found JSON schema files:', paths)
  const promises = paths
    .filter(path => path.endsWith('.json'))
    .map(async path => {
      console.log('Processing file:', path)
      await ts(path, src, dst)
    })
  console.log('Total files to process:', promises.length)
  await Promise.all(promises)
  console.log('TypeScript files generated successfully.')
})
