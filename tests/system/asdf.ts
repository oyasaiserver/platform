import { ok } from 'node:assert/strict'
import { EOL } from 'node:os'
import { join } from 'node:path'
import { describe, test } from 'node:test'
import { directory } from '@oyasaiserver/lib/directory'
import { readFileContent } from '@oyasaiserver/lib/fs'
import { $ } from '@oyasaiserver/lib/zx'

const commands = {
  java: ['java', '--version'],
  nodejs: ['node', '--version']
}

await describe(import.meta.filename, async () => {
  await test('verify-versions', async () => {
    const toolVersions = await readFileContent(
      join(directory.root, '.tool-versions')
    )
    toolVersions.split(EOL).map(async line => {
      const [tool, version] = line.split(' ') as [keyof typeof commands, string]
      const response = await $`${commands[tool]}`.text()
      ok(response.toLowerCase().includes(version))
    })
  })
})
