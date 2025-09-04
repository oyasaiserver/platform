#!/usr/bin/env node
import { secrets } from '@oyasaiserver/secrets'
import { env } from 'node:process'
import { $, argv } from 'zx'

await $({
  env: {
    ...env,
    ...secrets
  },
  nothrow: true,
  stdio: 'inherit'
})`${argv._}`
