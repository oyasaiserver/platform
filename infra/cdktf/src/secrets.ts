import { createSecretsFromPath, type Secrets } from '@oyasaiserver/secrets'
import { Fn } from 'cdktf'
import { join } from 'node:path'
import { mapValues } from './object.ts'

const whitelist = new Set<keyof Secrets>(['ENVIRONMENT'])

const root = join(import.meta.dirname, '../../../secrets')

export async function createTerraformSensitiveSecrets(): Promise<Secrets> {
  const secrets = await createSecretsFromPath(root)
  return mapValues(secrets, (key, value) => {
    return whitelist.has(key) ? value : Fn.sensitive(value)
  })
}
