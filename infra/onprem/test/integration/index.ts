import { doesNotMatch, match } from 'node:assert/strict'
import { after, before, beforeEach, describe, test } from 'node:test'
import { $ } from 'zx'
import { writeFile } from 'node:fs/promises'

await describe(import.meta.filename, async () => {
  before(async () => {
    await $`npm run deploy`
  })

  const container = 'local-minecraft-main-1'
  let logs: string

  const expectedErrors = [
    '[DiscordSRV - Initialization/ERROR]: No bot token has been set in the config; a bot token is required to connect to Discord.'
  ]

  beforeEach(async () => {
    const container = 'local-minecraft-main-1'
    logs = await $`docker logs ${container}`.text()
  })

  await test('launched-successfully', async () => {
    match(logs, /Done \([^)]*s\)! For help, type "help"/, logs)
  })

  await test('no-errors', async () => {
    for (const expectedError of expectedErrors) {
      logs = logs.replaceAll(expectedError, '')
    }
    await writeFile('test-integration.log', logs)
    doesNotMatch(logs, /ERROR/, logs)
  })

  after(async () => {
    await $`docker stop ${container}`
    await $`docker rm ${container}`
  })
})
