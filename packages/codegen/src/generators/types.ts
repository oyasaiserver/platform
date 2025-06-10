import type { JsonSchema } from 'json-schema-to-zod'

export type GeneratorParams = Readonly<{
  schema: JsonSchema
  name: string
  dir: string
}>
