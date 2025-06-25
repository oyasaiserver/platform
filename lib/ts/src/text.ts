export const encoder = new TextEncoder()
export function encode(...args: Parameters<typeof encoder.encode>): Uint8Array {
  return encoder.encode(...args)
}

export const decoder = new TextDecoder()
export function decode(...args: Parameters<typeof decoder.decode>): string {
  return decoder.decode(...args)
}
