export function objectToEnv(object: Readonly<Record<string, string | number | boolean>>): string[] {
  return Object.entries(object).map(([key, value]) => [key, value].join('='))
}

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
