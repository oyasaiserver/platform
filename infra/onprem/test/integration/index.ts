import { doesNotMatch, match } from 'node:assert/strict'
import { after, before, beforeEach, describe, test } from 'node:test'
import { $ } from 'zx'

await describe(import.meta.filename, async () => {
  before(async () => {
    await $`npm run deploy`
  })

  const container = 'local-minecraft-main-1'
  let logs: string

  beforeEach(async () => {
    const container = 'local-minecraft-main-1'
    logs = await $`docker logs ${container}`.text()
  })

  await test('launched-successfully', async () => {
    match(logs, /Done \([^)]*s\)! For help, type "help"/, logs)
  })

  await test('no-errors', async () => {
    doesNotMatch(logs, /ERROR/, logs)
  })

  after(async () => {
    await $`docker stop ${container}`
    await $`docker rm ${container}`
  })
})
