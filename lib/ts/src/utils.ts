import { ok } from 'node:assert/strict'

export function ensure<T>(value: T): NonNullable<T> {
  ok(value)
  return value
}

export async function fallback<T>(value: T, to: () => Promise<NonNullable<T>>) {
  if (value) {
    return value
  }
  return to()
}
