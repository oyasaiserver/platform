import { match } from 'node:assert/strict'
import { describe, test } from 'node:test'
import { directory } from '@oyasaiserver/lib/directory'
import { secrets } from '@oyasaiserver/lib/secrets'
import { $ } from 'zx'

await describe(import.meta.filename, async () => {
  $.cwd = `${directory.root}/packages/core`

  await test('build-and-start', async () => {
    await $`npm run start`
  })

  const container = `server-minecraft-main-${secrets.ENVIRONMENT}-1`

  console.log((await $`docker ps`).text())

  const logs = (await $`docker logs ${container}`).text()

  await test('launched-successfully', async () => {
    match(logs, /Done \([^)]*s\)! For help, type "help"/)
  })
})
