import { type Environment } from '@oyasaiserver/schema/environment'
import { secrets } from './secrets.ts'

export function envAware(...fragments: string[]) {
  return [...fragments, secrets.ENVIRONMENT].join('_')
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
