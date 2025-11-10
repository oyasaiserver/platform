import type { Secrets } from '@oyasaiserver/secrets'
import { createSecrets } from '@oyasaiserver/secrets'
import { Fn } from 'cdktf'
import { mapValues } from './object.ts'

const whitelist: ReadonlySet<keyof Secrets> = new Set(['ENVIRONMENT'])

export function createTerraformSensitiveSecrets(): Secrets {
  const secrets = createSecrets()
  return mapValues(secrets, (key, value) => {
    return whitelist.has(key) ? value : Fn.sensitive(value)
  })
}
