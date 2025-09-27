export function expandConfig<T extends Record<string, any[]>>(
  base: T,
  expension: Partial<T> = {}
): T {
  return Object.fromEntries(
    Object.entries(base).map(([key, value]) => [key, value.concat(expension[key] ?? [])])
  ) as T
}

export function objectToEnv(obj: Record<string, string | number | boolean>) {
  return Object.entries(obj).map(([key, value]) => [key, value].join('='))
}
