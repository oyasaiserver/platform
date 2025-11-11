import { hashPath as _hashPath } from 'cdktf/lib/private/fs.js'
import { createHash } from 'node:crypto'
import { type PathLike, readFileSync } from 'node:fs'
import { join } from 'node:path'

export const directory = {
  root: join(import.meta.dirname, '../../..')
} as const

export function hashPath(path: PathLike): string {
  return _hashPath(path.toString()).toLowerCase()
}

export function hashPaths(paths: readonly PathLike[]): string {
  const hashes = paths.map(hashPath).toSorted().join('')
  return createHash('md5').update(hashes).digest('hex')
}

export function readJsonFileSync(path: PathLike): any {
  const content = readFileSync(path, 'utf-8')
  return JSON.parse(content)
}
