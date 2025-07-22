import { join } from 'node:path'
import { directory } from './directory.ts'
import { readFileContent } from './fs.ts'
import { EOL } from 'node:os'
import { coerce, SemVer } from 'semver'
import { toolVersions as toolVersionsSchema } from '@oyasaiserver/schema/tool-versions'

const toolVersionsFile = join(directory.root, '.tool-versions')

export const toolVersions = toolVersionsSchema.parse(
  Object.fromEntries(
    (await readFileContent(toolVersionsFile))
      .trim()
      .split(EOL)
      .map(line => {
        const [tool, version] = line.split(' ')
        return [tool, coerce(version)] as [string, SemVer]
      })
  )
)
