import { z } from 'zod'
import { SemVer } from 'semver'

export const toolVersions = z.object({
  java: z.instanceof(SemVer),
  nodejs: z.instanceof(SemVer)
})
