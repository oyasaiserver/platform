import { createHash } from 'node:crypto'

export function combineHash(...hashs: readonly string[]): string {
  const buffers = hashs.map(hash => Buffer.from(hash, 'hex'))
  const combined = Buffer.concat(buffers)
  return createHash('md5').update(combined).digest('hex')
}
