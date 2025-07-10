import { writeJsonFile } from '@oyasaiserver/lib/fs'
import { secrets } from '@oyasaiserver/lib/secrets'
import wrangler from '../wrangler.json' with { type: 'json' }

await writeJsonFile('wrangler.json', {
  ...wrangler,
  vars: {
    BEARER: secrets.BEARER
  }
})
