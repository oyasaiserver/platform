import { directory } from './directory.ts'
import { readFileContent } from './fs.ts'
import { EOL } from 'node:os'
import { coerce } from 'semver'
import { toolVersions as toolVersionsSchema } from '@oyasaiserver/schema/tool-versions'

export const toolVersions = toolVersionsSchema.parse(
  Object.fromEntries(
    (await readFileContent(`${directory.root}/.tool-versions`))
      .trim()
      .split(EOL)
      .map(line => {
        const [tool, version] = line.split(' ')
        return [tool, coerce(version)]
      })
  )
)
