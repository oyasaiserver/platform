export function objectToEnv(obj: Record<string, string | number | boolean>) {
  return Object.entries(obj).map(([key, value]) => [key, value].join('='))
}
