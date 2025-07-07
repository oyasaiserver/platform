#!/usr/bin/env tsx
import { secrets } from '@oyasaiserver/lib/secrets'
import { $, argv } from 'zx'

await $({
  env: {
    ...process.env,
    ...secrets
  },
  nothrow: true,
  stdio: 'inherit'
})`${argv._}`
