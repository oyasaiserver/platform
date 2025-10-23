import type { ContainerPorts } from '@cdktf/provider-docker/lib/container/index.js'

export function mapValues<T extends object, V>(
  object: T,
  predicate: (key: keyof T, value: T[keyof T], object: T) => V
): Record<keyof T, V> {
  const result = {} as Record<keyof T, V>
  const keys = objectKeys(object)
  for (const key of keys) {
    const value = object[key]
    result[key] = predicate(key, value, object)
  }
  return result
}

export function objectKeys<T extends object>(object: T): (keyof T)[] {
  return Object.keys(object) as (keyof T)[]
}

export function objectToEnv(object: Readonly<Record<string, string | number | boolean>>): string[] {
  return Object.entries(object).map(([key, value]) => [key, value].join('='))
}

export function objectToPorts(
  mapping: Readonly<Record<'tcp' | 'udp', number[]>>
): ContainerPorts[] {
  return Object.entries(mapping).flatMap(([protocol, ports]) =>
    ports.map(port => ({
      internal: port,
      external: port,
      protocol
    }))
  )
}
