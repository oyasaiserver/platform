#!/usr/bin/env tsx
import { cp, readdir, rm } from 'node:fs/promises'
import { join, parse } from 'node:path'
import { composeSpec } from '@oyasaiserver/json/store/compose_spec'
import { readFileContent, rf, writeFileSafe } from '@oyasaiserver/lib/fs'
import onprem from '@oyasaiserver/onprem'
import { camelCase, pascalCase } from 'change-case'
import { compile, type JSONSchema } from 'json-schema-to-typescript'
import { jsonSchemaToZod } from 'json-schema-to-zod'
import { $, spinner, YAML } from 'zx'
import { readme } from '../assets/readme.ts'
import bufGenJson from '../buf.gen.json'

const out = 'gen'

await rm(out, rf)

await spinner('md', async () => {
  await writeFileSafe(`${out}/md/README.md`, readme)
})

await spinner('proto', async () => {
  await cp(join(import.meta.dirname, '../static'), out, rf)

  await $`protoc --version` // supress installation log
  await $`buf generate --template ${JSON.stringify(bufGenJson)}`
})

await spinner('json', async () => {
  const src = 'schema/json'
  const dirents = await readdir(src, {
    recursive: true,
    withFileTypes: true
  })
  const promises = dirents
    .filter(dirent => dirent.isFile())
    .map(async file => {
      const content = await readFileContent(join(file.parentPath, file.name))
      const inner = file.parentPath.substring(src.length)
      const schema = JSON.parse(content)
      const { name } = parse(file.name)
      await writeFileSafe(
        `${out}/json/ts/src/${inner}/${name}.ts`,
        `
          import { z } from 'zod'
          
          export const ${camelCase(name)} = ${jsonSchemaToZod(schema)} satisfies z.ZodType<${pascalCase(name)}>
          
          ${await compile(schema, name, {
            bannerComment: '',
            customName(schema: JSONSchema) {
              if (schema.title) {
                return pascalCase(name)
              }
            }
          })}
        `
      )
    })
  await Promise.all(promises)
})

await spinner('compose', async () => {
  for (const [environment, compose] of Object.entries(onprem)) {
    const parsed = composeSpec.parse(compose)
    await writeFileSafe(
      join(out, 'compose', `compose.${environment}.yaml`),
      YAML.stringify(parsed)
    )
  }
})
