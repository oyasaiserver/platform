import { basename } from 'node:path'

export function normalizeJarName(name: string) {
  return `${basename(name).split('-')[0]}.jar`
}
