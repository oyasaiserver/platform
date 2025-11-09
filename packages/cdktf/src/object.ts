import type { ContainerPorts } from '@cdktf/provider-docker/lib/container/index.js'

export function mapValues<T extends object, K extends keyof T, V>(
  object: T,
  predicate: (key: K, value: T[K], object: T) => V
): Record<K, V> {
  const result = {} as Record<K, V>
  const keys = Object.keys(object) as K[]
  for (const key of keys) {
    const value = object[key]
    result[key] = predicate(key, value, object)
  }
  return result
}

export function envs(object: Readonly<Record<string, string | number | boolean>>): string[] {
  return Object.entries(object).map(([key, value]) => [key, value].join('='))
}

export function ports(mapping: Readonly<Record<'tcp' | 'udp', number[]>>): ContainerPorts[] {
  return Object.entries(mapping).flatMap(([protocol, ports]) =>
    ports.map(port => ({
      internal: port,
      external: port,
      protocol
    }))
  )
}
