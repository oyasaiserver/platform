export function identity<T>(value: T): T {
  return value
}

export function always<T>(value: T): () => T {
  return () => value
}
