import { env } from 'node:process'
import { defaults } from './defaults.ts'

export type SecretKey = keyof typeof defaults

export function createSecrets<const K extends SecretKey[]>(
  keys: K = Object.keys(defaults) as K
): Readonly<Record<K[number], string>> {
  const secrets = {} as Record<SecretKey, string>
  for (const key of keys) {
    secrets[key] = env[key] || defaults[key]
  }
  return secrets
}
