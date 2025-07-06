import { EOL } from 'node:os'

export function asEnvFile(values: NodeJS.Dict<string>) {
  return Object.entries(values)
    .map(([key, value]) => `${key}=${value}`)
    .join(EOL)
}
