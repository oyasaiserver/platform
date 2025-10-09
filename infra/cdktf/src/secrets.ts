import { createSecrets, type Secrets } from '@oyasaiserver/secrets'
import { Fn } from 'cdktf'
import { mapValues } from './object.ts'

const whitelist = new Set<keyof Secrets>(['ENVIRONMENT'])

export async function createTerraformSensitiveSecrets(): Promise<Secrets> {
  const secrets = await createSecrets()
  return mapValues(secrets, (key, value) => {
    return whitelist.has(key) ? value : Fn.sensitive(value)
  })
}
