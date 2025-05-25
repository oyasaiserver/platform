import { Env } from '@platform/env'
import { $ } from 'zx'

$.verbose = true

if (Env.ENVIRONMENT === 'local') {
  $.cwd = 'dist'

  process.exit(0)
}
