import { Env } from '@oyasaiserver/platform/env'
import { $ } from 'zx'

$({
  env: Env
})`cdktf deploy --auto-approve`
