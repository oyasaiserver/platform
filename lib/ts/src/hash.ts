import { createHash } from 'node:crypto'
import { readdir, readFile } from 'node:fs/promises'
import { join, relative } from 'node:path'

export async function hashDirectory(dir: string): Promise<string> {
  const hash = createHash('sha256')

  async function processDirectory(directory: string) {
    const entries = await readdir(directory, { withFileTypes: true })
    for (const entry of entries.sort()) {
      const path = join(directory, entry.name)
      if (entry.isDirectory()) {
        await processDirectory(path)
      } else if (entry.isFile()) {
        const content = await readFile(path)
        hash.update(content)
        hash.update(relative(dir, path))
      }
    }
  }

  await processDirectory(dir)
  return hash.digest('hex')
}

export async function hashDirectories(
  ...directories: string[]
): Promise<string> {
  const hash = createHash('sha256')

  for (const dir of directories.sort()) {
    const dirHash = await hashDirectory(dir)
    hash.update(dirHash)
  }

  return hash.digest('hex')
}
