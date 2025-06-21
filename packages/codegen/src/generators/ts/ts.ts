import { camelCase, pascalCase } from 'change-case'
import { type JsonSchema, jsonSchemaToZod } from 'json-schema-to-zod'

export type Params = Readonly<{
  schema: JsonSchema
  name: string
}>

export async function ts({ schema, name }: Params) {
  return `
    import { z } from '@oyasaiserver/lib/zod'
    
    export const ${camelCase(name)} = ${jsonSchemaToZod(schema)}
    
    export type ${pascalCase(name)} = z.infer<typeof ${camelCase(name)}>
  `
}
