import type { Secrets } from '@oyasaiserver/secrets'
import { createSecrets } from '@oyasaiserver/secrets'
import { Fn } from 'cdktf'
import { mapValues } from './object.ts'

export function createTerraformSensitiveSecrets(): Secrets {
  const secrets = createSecrets()
  return mapValues(secrets, (_, value) => {
    return Fn.sensitive(value)
  })
}
