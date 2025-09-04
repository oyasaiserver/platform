#!/usr/bin/env node
import { secrets } from '@oyasaiserver/secrets'
import { execSync } from 'node:child_process'
import { env } from 'node:process'

execSync(process.argv.slice(3).join(' '), {
  env: {
    ...env,
    ...secrets
  },
  stdio: 'inherit'
})
