import { secrets } from '@oyasaiserver/secrets'

export function envAwareId(...fragments: string[]) {
  return [...fragments, secrets.ENVIRONMENT].join('-')
}
