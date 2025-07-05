import { type Environment, environment } from '@oyasaiserver/schema/environment'
import { secrets } from './secrets.ts'

export function envAware(...fragments: string[]) {
  return [...fragments, secrets.ENVIRONMENT].join('-')
}

export function envShort(environment: Environment) {
  switch (environment) {
    case 'production':
      return 'prod'
    case 'development':
      return 'dev'
    case 'local':
      return 'local'
  }
}
