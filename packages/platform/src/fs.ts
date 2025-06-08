import { readFile } from 'node:fs/promises'

export async function readFileContent(
  ...args: Parameters<typeof readFile>
): Promise<string> {
  const buffer = await readFile(...args)
  return buffer.toString()
}

export async function readFileJson<T>(
  ...args: Parameters<typeof readFile>
): Promise<T> {
  const content = await readFileContent(...args)
  return JSON.parse(content) as T
}
