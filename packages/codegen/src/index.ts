#!/usr/bin/env tsx
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

await spinner('generate', async () => {
  const paths = await readdir(src, {
    recursive: true
  })
  const promises = paths
    .filter(path => path.endsWith('.json'))
    .map(async path => {
      await ts(path, src, dst)
    })
  await Promise.all(promises)
})
