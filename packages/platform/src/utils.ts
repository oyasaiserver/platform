import { ok } from 'node:assert/strict'
import type { Nullable } from './types'

export function ensure<T>(value: T): NonNullable<T> {
  ok(value)
  return value
}

export function fallback<T>(
  value: Nullable<T>,
  to: NonNullable<T> | (() => NonNullable<T>)
): NonNullable<T>
export function fallback<T>(
  value: Nullable<T>,
  to: () => Promise<NonNullable<T>> | NonNullable<T>
): Promise<NonNullable<T>>
export function fallback<T>(
  value: Nullable<T>,
  to: NonNullable<T> | (() => NonNullable<T> | Promise<NonNullable<T>>)
): NonNullable<T> | Promise<NonNullable<T>> {
  if (value) {
    return value
  }
  return to instanceof Function ? to() : to
}
