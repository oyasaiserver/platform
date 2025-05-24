export function getConsistentKey(elements: object[]): string[] {
  if (!isKeyConsistent(elements)) {
    throw new Error('Inconsistent keys detected')
  }
  return Object.keys(elements[0] || {})
}

function isKeyConsistent(elements: object[]): boolean {
  if (!elements[0]) {
    return true
  }
  const refKeys = Object.keys(elements[0]).sort()
  return elements.every(item => {
    const keys = Object.keys(item).sort()
    if (keys.length !== refKeys.length) {
      return false
    }
    return keys.every((key, i) => key === refKeys[i])
  })
}
