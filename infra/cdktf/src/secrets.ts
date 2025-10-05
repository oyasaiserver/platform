import { createSecrets, type Secrets } from '@oyasaiserver/secrets'
import { Fn } from 'cdktf'
import { env } from 'node:process'
import { mapValues } from './object.ts'

const whitelist = new Set<keyof Secrets>(['ENVIRONMENT'])

export async function createTerraformSensitiveSecrets(): Promise<Secrets> {
  const secrets = await createSecrets(env)
  return mapValues(secrets, (key, value) => {
    return whitelist.has(key as keyof Secrets) ? value : Fn.sensitive(value)
  })
}
