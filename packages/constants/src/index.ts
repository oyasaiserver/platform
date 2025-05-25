import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

export const REPOSITORY_ROOT = join(
  fileURLToPath(import.meta.url),
  '../../../..'
)
