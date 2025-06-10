import { mkdir, writeFile } from 'node:fs/promises'
import { pascalCase } from 'change-case'
import { jsonSchemaToZod } from 'json-schema-to-zod'
import type { GeneratorParams } from './types.ts'

export async function ts({ schema, dir, name }: GeneratorParams) {
  await mkdir(dir, {
    recursive: true
  })
  const code = `
    import { z } from 'zod/v4'  
    export const ${name} = ${jsonSchemaToZod(schema)}
    export type ${pascalCase(name)} = z.infer<typeof ${name}>
  `
  await writeFile(`${dir}/${name}.ts`, code)
}
