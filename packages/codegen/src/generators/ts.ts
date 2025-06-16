import { mkdir, writeFile } from 'node:fs/promises'
import { camelCase, pascalCase } from 'change-case'
import { jsonSchemaToZod } from 'json-schema-to-zod'
import type { GeneratorParams } from './types.ts'

export async function ts({ schema, dir, name }: GeneratorParams) {
  await mkdir(dir, {
    recursive: true
  })
  const camelName = camelCase(name)
  const code = `
    import { z } from '@oyasaiserver/lib/zod'
    
    export const ${camelName} = ${jsonSchemaToZod(schema)}
    
    export type ${pascalCase(name)} = z.infer<typeof ${camelName}>
  `
  await writeFile(`${dir}/${name}.ts`, code)
}
