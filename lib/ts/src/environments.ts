import { secrets } from './secrets.ts'

export type Environment = typeof secrets.ENVIRONMENT

export function envAware(...fragments: string[]) {
  return [...fragments, secrets.ENVIRONMENT].join('-')
}

export function envShort(environment: Environment) {
  switch (environment) {
    case 'production':
      return ''
    case 'development':
      return 'dev'
    case 'local':
      return 'local'
  }
}
