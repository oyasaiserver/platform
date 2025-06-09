import { join } from 'node:path'

export const directory = {
  root: join(import.meta.dirname, '../../..')
} as const
