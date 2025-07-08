import { doesNotMatch, match } from 'node:assert/strict'
import { after, before, describe, test } from 'node:test'
import { directory } from '@oyasaiserver/lib/directory'
import { $ } from 'zx'

await describe(import.meta.filename, async () => {
  $.cwd = `${directory.root}/packages/core`

  const container = 'local-minecraft-main-1'

  before(async () => {
    await $`npm run start`
  })

  async function getLogs() {
    return $`docker logs ${container}`.text()
  }

  await test('launched-successfully', async () => {
    match(await getLogs(), /Done \([^)]*s\)! For help, type "help"/)
  })

  await test('no-errors', async () => {
    doesNotMatch(await getLogs(), /ERROR/)
  })

  after(async () => {
    await $`docker stop ${container}`
    await $`docker rm ${container}`
  })
})
