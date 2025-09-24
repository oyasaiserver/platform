import { secrets } from '@oyasaiserver/secrets'

export const config = {
  services: {
    minecraft: {
      version: '1.21.5',
      type: 'PURPUR',
      memory: envAwareConfig({
        production: '32G',
        development: '12G',
        local: '5G'
      })
    }
  }
} as const

export function pickConfig<const K extends string, const V>(
  key: K,
  config: Record<K, V>
): Readonly<V> {
  return config[key]
}

export function envAwareConfig<const T extends Record<typeof secrets.ENVIRONMENT, any>>(
  config: T
): Readonly<T[keyof T]> {
  return config[secrets.ENVIRONMENT]
}

export function expandConfig<T extends Record<string, any[]>>(
  base: T,
  expension: Partial<T> = {}
): T {
  return Object.fromEntries(
    Object.entries(base).map(([key, value]) => [key, value.concat(expension[key] ?? [])])
  ) as T
}
