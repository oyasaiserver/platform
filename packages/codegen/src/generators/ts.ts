import { mkdir, writeFile } from 'node:fs/promises'
import { join, parse } from 'node:path'
import { readFileJson } from '@oyasaiserver/lib/fs'
import { pascalCase } from 'change-case'
import { type JsonSchema, jsonSchemaToZod } from 'json-schema-to-zod'

export async function ts(path: string, src: string, dst: string) {
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
}
