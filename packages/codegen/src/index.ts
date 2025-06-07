#!/usr/bin/env tsx
import { mkdir, readFile, readdir, rm, writeFile } from 'node:fs/promises'
import { join, parse, relative } from 'node:path'
import { argv, cwd } from 'node:process'
import { ensure } from '@oyasaiserver/platform/utils'
import { pascalCase } from 'change-case'
import { jsonSchemaToZod } from 'json-schema-to-zod'
import { format } from './format'

const src = ensure(argv[2])
const dst = ensure(argv[3])
const dir = join(cwd(), src)

for (const file of await readdir(dir)) {
  if (!file.endsWith('.json')) {
    await rm(file, {
      recursive: true,
      force: true
    })
  }
}

const files = await readdir(dir, {
  withFileTypes: true,
  recursive: true
})

const promises = files
  .filter(dirent => dirent.isFile())
  .map(async dirent => {
    const absolute = join(dirent.parentPath, dirent.name)
    const releative = relative(cwd(), absolute)
    const { dir, name } = parse(releative)
    const gendir = dir.replace(src, dst)
    const content = await readFile(releative, 'utf-8')
    await mkdir(gendir, {
      recursive: true
    })
    const genpath = join(gendir, name)
    const { $id: id, ...schema } = JSON.parse(content)
    // language=typescript
    const code = `
      import { z } from 'zod/v4'
      
      export const ${id} = ${jsonSchemaToZod(schema)}
      
      export type ${pascalCase(id)} = z.infer<typeof ${id}>
    `
    const path = `${genpath}.ts`
    await writeFile(path, format(code, path))
  })

await Promise.all(promises)
