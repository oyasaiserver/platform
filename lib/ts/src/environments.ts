import { secrets } from './secrets.ts'
import { environment as environmentSchema } from '@oyasaiserver/schema/environment'
import { env } from 'node:process'

export const environment = environmentSchema.parse(env.ENVIRONMENT)

export function envAware(...fragments: string[]) {
  return [...fragments, secrets.ENVIRONMENT].join('-')
}
