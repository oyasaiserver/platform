import { format, type Config } from 'prettier'
import type { PathLike } from 'node:fs'
import config from '../../../.prettierrc.json' with { type: 'json' }
import { writeFileSafe } from './fs.ts'

export async function writeFileFormat(path: PathLike, source: string) {
  return writeFileSafe(
    path,
    await format(source, {
      ...(config as Config),
      singleQuote: true,
      filepath: path.toString()
    })
  )
}
