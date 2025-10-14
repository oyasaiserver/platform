import { hashPath as _hashPath } from 'cdktf/lib/private/fs.js'
import { createHash } from 'node:crypto'
import type { PathLike } from 'node:fs'

export function hashPath(path: PathLike): string {
  return _hashPath(path.toString())
}

export function hashPaths(paths: readonly PathLike[]): string {
  const hashes = paths.map(hashPath).toSorted().join('')
  return createHash('md5').update(hashes).digest('hex')
}
