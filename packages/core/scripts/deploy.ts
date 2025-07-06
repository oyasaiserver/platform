import { cp } from 'node:fs/promises'
import { basename } from 'node:path'
import { rf } from '@oyasaiserver/lib/fs'
import { secrets } from '@oyasaiserver/lib/secrets'
import { bin } from '../package.json'

if (secrets.ENVIRONMENT === 'local') {
  await cp(bin, `server/${secrets.ENVIRONMENT}/${basename(bin)}`, rf)
  process.exit(0)
}
