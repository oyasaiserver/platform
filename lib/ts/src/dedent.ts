import { EOL } from 'node:os'

export function dedent(literals: string): string
export function dedent(
  strings: TemplateStringsArray,
  ...values: unknown[]
): string
export function dedent(
  strings: TemplateStringsArray | string,
  ...values: unknown[]
): string {
  const result = (typeof strings === 'string' ? [strings] : strings.raw).reduce(
    (acc, str, i) => acc + str + (i < values.length ? values[i] : ''),
    ''
  )

  const lines = result.split(EOL)

  const mindent = lines
    .filter(line => line.trim())
    .reduce<number | null>((min, line) => {
      const length = line.match(/^(\s+)\S+/)?.at(1)?.length
      if (!length) {
        return min
      }
      return min === null ? length : Math.min(min, length)
    }, null)

  const dedented = mindent
    ? lines.map(line =>
        line.startsWith(' ') || line.startsWith('\t')
          ? line.slice(mindent)
          : line
      )
    : lines
  return dedented.join(EOL).trim()
}
