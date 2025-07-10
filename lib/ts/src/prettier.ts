import { format as prettier } from 'prettier'
import type { PathLike } from 'node:fs'
import config from '../../../.prettierrc.json' with { type: 'json' }
import { writeFileSafe } from './fs.ts'

export async function writeFileFormat(path: PathLike, source: string) {
  return writeFileSafe(
    path,
    await prettier(source, {
      ...config,
      singleQuote: true,
      filepath: path.toString()
    })
  )
}
