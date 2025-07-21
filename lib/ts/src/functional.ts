export async function fallback<T>(value: T, to: () => Promise<NonNullable<T>>) {
  if (value) {
    return value
  }
  return to()
}
