import { match } from 'node:assert/strict'
import { after, before, describe, test } from 'node:test'
import { directory } from '@oyasaiserver/lib/directory'
import { secrets } from '@oyasaiserver/lib/secrets'
import { $ } from 'zx'

await describe(import.meta.filename, async () => {
  $.cwd = `${directory.root}/packages/core`

  const container = `server-minecraft-main-${secrets.ENVIRONMENT}-1`

  before(async () => {
    await $`npm run start`
  })

  async function getLogs() {
    return (await $`docker logs ${container}`).text()
  }

  await test('launched-successfully', async () => {
    match(await getLogs(), /Done \([^)]*s\)! For help, type "help"/)
  })

  after(async () => {
    await $`docker stop ${container}`
    await $`docker rm ${container}`
  })
})
