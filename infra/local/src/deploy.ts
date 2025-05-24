import { Env } from '@platform/env'
import { $ } from 'zx'

if (Env.ENVIRONMENT === 'local') {
  $`./dist/platform-server`
}
