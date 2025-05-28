import { Env } from '@oyasaiserver/env'
import { $ } from 'zx'

$({
  env: Env
})`cdktf deploy --auto-approve`
