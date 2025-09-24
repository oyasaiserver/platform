import { secrets } from '@oyasaiserver/secrets'
import { execSync } from 'child_process'
import { doesNotMatch, match } from 'node:assert/strict'
import { EOL } from 'node:os'
import { after, suite, test } from 'node:test'

await suite(import.meta.filename, async () => {
  const container = `${secrets.ENVIRONMENT}-minecraft-main-1`

  const log = execSync(`docker logs ${container}`).toString()

  await test('no error', async () => {
    doesNotMatch(log, /error/i)
  })

  await test('launched successfully', async () => {
    match(log, /Done \([^)]*s\)! For help, type "help"/)
  })

  after(() => {
    console.log(
      [`===== ${container} log =====`, log, `===== end of ${container} log =====`].join(EOL)
    )
  })
})
