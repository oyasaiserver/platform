import { secrets } from '@oyasaiserver/secrets'

export const config = {
  services: {
    minecraft: {
      version: '1.21.5',
      type: 'PURPUR',
      memory: {
        production: '32G',
        development: '12G',
        local: '5G'
      }
    }
  }
} as const

export function envAwareConfig<P, D, L>(config: {
  production: P
  development: D
  local: L
}): P | D | L {
  return config[secrets.ENVIRONMENT]
}
