import { EOL } from 'node:os'
import type { JsonSchema } from 'json-schema-to-zod'
import {
  FetchingJSONSchemaStore,
  InputData,
  JSONSchemaInput,
  quicktype
} from 'quicktype-core'
import { Kotlin } from '../../languages/kotlin.ts'

export type Params = Readonly<{
  schema: JsonSchema
  name: string
  inner: string
}>

export async function kotlin({ schema, name, inner }: Params) {
  const schemaInput = new JSONSchemaInput(new FetchingJSONSchemaStore())
  await schemaInput.addSource({
    name,
    schema: JSON.stringify(schema)
  })
  const inputData = new InputData()
  inputData.addInput(schemaInput)
  const result = await quicktype({
    lang: new Kotlin(),
    inputData,
    leadingComments: [],
    rendererOptions: {
      package: `io.oyasai.gen${inner.replaceAll('/', '.')}`
    }
  })
  return ['@file:Suppress("ktlint")', ...result.lines].join(EOL)
}
