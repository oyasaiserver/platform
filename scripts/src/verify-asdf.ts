import { readFile } from 'node:fs/promises'
import { EOL } from 'node:os'
import { $ } from 'zx'

const commands = {
  nodejs: 'node',
  java: 'java'
}

const toolVersions = await readFile('../.tool-versions', 'utf-8')

toolVersions.split(EOL).map(async line => {
  const [tool, version] = line.split(' ') as [keyof typeof commands, string]
  const response = (await $`${commands[tool]} --version`.text()).toLowerCase()
  if (!response.includes(version)) {
    throw new Error(
      `Expected ${tool} version to be ${version}, but got ${response}`
    )
  }
})
