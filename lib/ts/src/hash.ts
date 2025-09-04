import { createHash } from 'node:crypto'
import { readdir, readFile } from 'node:fs/promises'
import { join, relative } from 'node:path'
import { directory } from './directory.ts'
import { gitignore } from './ignore.ts'

export async function hashDirectories(...directories: string[]): Promise<string> {
  const hash = createHash('sha256')

  for (const dir of directories.sort()) {
    const files = await readdir(dir, {
      withFileTypes: true,
      recursive: true
    })
    for (const file of files.sort()) {
      const path = join(file.parentPath, file.name)
      const relativePath = relative(directory.root, path)
      if (file.isFile() && !gitignore.ignores(relativePath)) {
        hash.update(relativePath).update(await readFile(path))
      }
    }
  }

  return hash.digest('hex')
}
