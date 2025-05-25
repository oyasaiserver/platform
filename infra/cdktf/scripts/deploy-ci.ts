import { Env } from '@platform/env'
import { $ } from 'zx'

$({
  env: Env
})`cdktf deploy --auto-approve`
