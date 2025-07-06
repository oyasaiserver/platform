import { runtimeSecrets as runtimeSecretsSchema } from '@oyasaiserver/schema/runtime-secrets'

const env = JSON.parse(process.env.secrets || '')

export const runtimeSecrets = runtimeSecretsSchema.parse(env)
