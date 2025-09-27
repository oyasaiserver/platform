import { createHash } from 'node:crypto'
import { readdirSync, readFileSync } from 'node:fs'
import { join, relative } from 'node:path'
import { directory } from './directory.ts'
import { gitignore } from './ignore.ts'

export function hashdirSync(...directories: string[]): string {
  const hash = createHash('sha256')

  for (const dir of directories.sort()) {
    const files = readdirSync(dir, {
      withFileTypes: true,
      recursive: true
    })

    for (const file of files.sort()) {
      const path = join(file.parentPath, file.name)
      const relativePath = relative(directory.root, path)
      if (file.isFile() && !gitignore.ignores(relativePath)) {
        hash.update(relativePath).update(readFileSync(path))
      }
    }
  }

  return hash.digest('hex')
}
