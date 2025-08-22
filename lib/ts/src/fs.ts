import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { dirname } from 'node:path'

export const rf = {
  recursive: true,
  force: true
} as const

export async function readFileContent(
  ...args: Parameters<typeof readFile>
): Promise<string> {
  const buffer = await readFile(...args)
  return buffer.toString()
}

export async function writeFileSafe(...args: Parameters<typeof writeFile>) {
  await mkdir(dirname(args[0].toString()), rf)
  await writeFile(...args)
}
