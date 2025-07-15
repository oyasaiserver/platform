import type { ZodType } from 'zod'

export async function fetchJsonWithSchema<T>(
  schema: ZodType<T>,
  ...args: Parameters<typeof fetch>
): Promise<T> {
  const response = await fetch(...args)
  const json = await response.json()
  return schema.parse(json)
}

export async function fetchJson<T>(
  ...args: Parameters<typeof fetch>
): Promise<T> {
  const response = await fetch(...args)
  return (await response.json()) as T
}
