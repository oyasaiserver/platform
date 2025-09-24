import { secrets } from '@oyasaiserver/secrets'
import { execSync } from 'node:child_process'
import { cp, mkdir } from 'node:fs/promises'
import { prepare } from './common.ts'

await prepare()

await mkdir(secrets.ENVIRONMENT, {
  recursive: true
})

await cp('dist', secrets.ENVIRONMENT, {
  recursive: true,
  force: true
})

execSync('docker compose up --detach --remove-orphans --wait', {
  cwd: secrets.ENVIRONMENT
})
