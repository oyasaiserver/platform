import type { ZodType } from 'zod'
import { writeFileSafe } from './fs.ts'

export async function fetchJsonWithSchema<T>(
  schema: ZodType<T>,
  ...args: Parameters<typeof fetch>
): Promise<T> {
  const response = await fetch(...args)
  const json = await response.json()
  return schema.parse(json)
}

export async function download(url: string | URL, dest: string): Promise<void> {
  const response = await fetch(url)
  const arrayBuffer = await response.arrayBuffer()
  const buffer = new Uint8Array(arrayBuffer)
  await writeFileSafe(dest, buffer)
}
