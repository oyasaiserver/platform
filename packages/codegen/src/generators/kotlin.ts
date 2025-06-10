import { mkdir, writeFile } from 'node:fs/promises'
import { EOL } from 'node:os'
import { pascalCase } from 'change-case'
import {
  FetchingJSONSchemaStore,
  InputData,
  JSONSchemaInput,
  quicktype
} from 'quicktype-core'
import { Kotlin } from '../languages/kotlin.ts'
import type { GeneratorParams } from './types.ts'

export async function kotlin({ schema, dir, name }: GeneratorParams) {
  await mkdir(dir, {
    recursive: true
  })
  const schemaInput = new JSONSchemaInput(new FetchingJSONSchemaStore())
  await schemaInput.addSource({ name, schema: JSON.stringify(schema) })
  const inputData = new InputData()
  inputData.addInput(schemaInput)
  const result = await quicktype({
    lang: new Kotlin(),
    inputData,
    leadingComments: [],
    rendererOptions: {
      package: 'io.oyasai.gen'
    }
  })
  await writeFile(
    `${dir}/${pascalCase(name)}.kt`,
    ['@file:Suppress("ktlint")', ...result.lines].join(EOL)
  )
}
