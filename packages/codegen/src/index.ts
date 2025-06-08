#!/usr/bin/env node --no-warnings=ExperimentalWarning
import { mkdir, readdir, rm, writeFile } from 'node:fs/promises'
import { join, parse } from 'node:path'
import { argv } from 'node:process'
import { directory } from '@oyasaiserver/platform/directory'
import { readFileJson } from '@oyasaiserver/platform/fs'
import { ensure } from '@oyasaiserver/platform/utils'
import { pascalCase } from 'change-case'
import { type JsonSchema, jsonSchemaToZod } from 'json-schema-to-zod'

const src = join(directory.root, ensure(argv[2]))
const dst = join(directory.root, ensure(argv[3]), 'src')

await rm(dst, {
  force: true,
  recursive: true
})

await mkdir(dst)

const paths = await readdir(src, {
  recursive: true
})

const promises = paths
  .filter(path => path.endsWith('.json'))
  .map(async path => {
    const { dir, name } = parse(path)
    const outdir = join(dst, dir)
    await mkdir(outdir, {
      recursive: true
    })
    const schema = await readFileJson<JsonSchema>(`${src}/${path}`)
    const code = `
      import { z } from 'zod/v4'
      
      export const ${name} = ${jsonSchemaToZod(schema)}
      
      export type ${pascalCase(name)} = z.infer<typeof ${name}>
    `
    await writeFile(`${outdir}/${name}.ts`, code)
  })

await Promise.all(promises)
