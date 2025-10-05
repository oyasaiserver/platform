import ignore from 'ignore'
import { createHash } from 'node:crypto'
import { readdirSync, readFileSync } from 'node:fs'
import { join, relative } from 'node:path'

export const directory = {
  root: join(import.meta.dirname, '../../..'),
  hashSync(...directories: readonly string[]) {
    const ignoreFile = readFileSync(join(directory.root, '.gitignore'), 'utf-8')
    const gitignore = ignore().add(ignoreFile)

    const hash = createHash('sha256')

    for (const dir of directories.toSorted()) {
      const files = readdirSync(dir, {
        withFileTypes: true,
        recursive: true
      })
      for (const file of files.toSorted()) {
        const path = join(file.parentPath, file.name)
        const relativePath = relative(directory.root, path)
        if (file.isFile() && !gitignore.ignores(relativePath)) {
          hash.update(relativePath).update(readFileSync(path))
        }
      }
    }

    return hash.digest('hex')
  }
} as const
