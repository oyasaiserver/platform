import { readFile } from 'node:fs/promises'

export async function readFileContent(
  ...args: Parameters<typeof readFile>
): Promise<string> {
  const buffer = await readFile(...args)
  return buffer.toString()
}
