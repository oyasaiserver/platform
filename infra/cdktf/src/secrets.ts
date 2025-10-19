import { ok } from 'node:assert'
import { env } from 'node:process'
import { mapValues } from './object.ts'

export const defaults = {
  PUBLIC_IPV4: '192.0.2.0',
  CLOUDFLARE_ACCOUNT_ID: 'unset',
  CLOUDFLARE_API_TOKEN: 'unset_unset_unset_unset_unset_unset_unset',
  CLOUDFLARE_SECRET_ACCESS_KEY: 'unset',
  CLOUDFLARE_ACCESS_KEY_ID: 'unset',
  R2_BUCKET_NAME: 'unset',
  RESTIC_PASSWORD: 'unset',
  GITHUB_APP_ID: 'unset',
  GITHUB_APP_INSTALLATION_ID: 'unset',
  GITHUB_APP_PEM_FILE: 'unset',
  TF_API_TOKEN: 'unset',
  TF_TOKEN_app_terraform_io: 'unset',
  DISCORD_TOKEN: 'unset',
  RCON_PASSWORD: 'unset',
  MARIADB_PASSWORD: 'unset',
  DISCORD_WEBHOOK_URL: 'unset',
  TLS_CA_PEM: 'unset',
  TLS_CERT_PEM: 'unset',
  TLS_KEY_PEM: 'unset',
  INFISICAL_CLIENT_ID: 'unset',
  INFISICAL_CLIENT_SECRET: 'unset'
} as const

export const nonLocalEnvironments = ['development', 'production'] as const

export const environments = [...nonLocalEnvironments, 'local'] as const

export type Environment = (typeof environments)[number]

export type SecretKey = keyof typeof defaults

export type Secrets = Readonly<Record<SecretKey, string>>

export function getEnvironment(): Environment {
  const environment = env.ENVIRONMENT ?? 'local'
  ok(environments.includes(environment as Environment))
  return environment as Environment
}

export function createSecrets(environemnt: Environment): Secrets {
  return environemnt === 'local'
    ? defaults
    : mapValues(defaults, key => {
        const value = env[key]
        ok(value, `Missing required secret: ${key}`)
        return value
      })
}
