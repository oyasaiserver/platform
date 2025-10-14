import { hashPath as _hashPath } from 'cdktf/lib/private/fs.js'
import { createHash } from 'node:crypto'
import type { PathLike } from 'node:fs'
import { join } from 'node:path'

export const directory = {
  root: join(import.meta.dirname, '../../..')
} as const

export function hashPath(path: PathLike): string {
  return _hashPath(path.toString())
}

export function hashPaths(paths: readonly PathLike[]): string {
  const hashes = paths.map(hashPath).toSorted().join('')
  return createHash('md5').update(hashes).digest('hex')
}
