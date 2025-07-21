import { secrets } from './secrets.ts'
import { environment as environmentSchema } from '@oyasaiserver/schema/environment'

export const environment = environmentSchema.parse(process.env.ENVIRONMENT)

export function envAware(...fragments: string[]) {
  return [...fragments, secrets.ENVIRONMENT].join('-')
}
