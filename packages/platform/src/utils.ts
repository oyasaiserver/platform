import assert from 'node:assert/strict'
import type { Nullable } from './types'

export function ensure<T>(value: T): NonNullable<T> {
  assert.ok(value)
  return value
}

export function fallback<T>(
  value: Nullable<T>,
  to: NonNullable<T>
): NonNullable<T> {
  return value ?? to
}
