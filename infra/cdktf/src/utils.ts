import { secrets } from '@oyasaiserver/lib/secrets'

export function envAware(...fragments: string[]) {
  return [...fragments, secrets.ENVIRONMENT].join('-').toLowerCase()
}
