import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

export const repositoryRoot = join(
  fileURLToPath(import.meta.url),
  '../../../..'
)
