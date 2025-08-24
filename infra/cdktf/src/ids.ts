import { secrets } from '@oyasaiserver/lib/secrets'

export function envAwareId(...fragments: string[]) {
  return [...fragments, secrets.ENVIRONMENT].join('-')
}
