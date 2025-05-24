import { join } from 'node:path'
import { REPOSITORY_ROOT } from '@platform/constants'

export const dirs = {
  src: join(import.meta.dirname, '..', 'src'),
  envs: join(REPOSITORY_ROOT, 'envs')
} as const
