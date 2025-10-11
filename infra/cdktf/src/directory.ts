import ignore, { type Ignore } from 'ignore'
import { createHash } from 'node:crypto'
import { type PathLike, readdirSync, readFileSync } from 'node:fs'
import { join, relative } from 'node:path'

export const directory = {
  root: join(import.meta.dirname, '../../..')
} as const

function createIgnore(): Ignore {
  const path = join(directory.root, '.gitignore')
  const ignoreFile = readFileSync(path, 'utf-8')
  return ignore().add(ignoreFile)
}

export function hashdirSync(
  directories: readonly PathLike[],
  options?: {
    noIgnore?: boolean
  }
): string {
  const ignore = options?.noIgnore ? undefined : createIgnore()
  const hash = createHash('sha256')
  for (const dir of directories.toSorted()) {
    const files = readdirSync(dir, {
      withFileTypes: true,
      recursive: true
    })
    for (const file of files.toSorted()) {
      const path = join(file.parentPath, file.name)
      const relativePath = relative(directory.root, path)
      if (!file.isFile()) {
        continue
      }
      if (!ignore || !ignore.ignores(relativePath)) {
        const content = readFileSync(path)
        hash.update(relativePath).update(content)
      }
    }
  }
  return hash.digest('hex')
}
