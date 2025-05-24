import { Env } from '@oyasaiserver/env'
import { $ } from 'zx'

$.verbose = true

if (Env.ENVIRONMENT === 'local') {
  $.cwd = 'dist'

  process.exit(0)
}
