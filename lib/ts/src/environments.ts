import { secrets } from './secrets.ts'

export function envAware(...fragments: string[]) {
  return [...fragments, secrets.ENVIRONMENT].join('-')
}
