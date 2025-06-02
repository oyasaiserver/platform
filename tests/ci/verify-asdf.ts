import { ok } from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { EOL } from 'node:os'
import { describe, test } from 'node:test'
import { $ } from 'zx'

const commands: Readonly<Record<string, string>> = {
  nodejs: 'node',
  java: 'java'
}

await describe(import.meta.filename, async () => {
  await test('verify-asdf-versions', async () => {
    const toolVersions = await readFile('../.tool-versions', 'utf-8')
    toolVersions.split(EOL).map(async line => {
      const [tool, version] = line.split(' ') as [keyof typeof commands, string]
      const response = await $`${commands[tool]} --version`.text()
      ok(response.toLowerCase().includes(version))
    })
  })
})
