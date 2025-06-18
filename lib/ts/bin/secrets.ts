#!/usr/bin/env tsx
import { $ } from '@oyasaiserver/lib/zx'
import { secrets } from '../src/secrets.ts'

$({
  env: {
    ...process.env,
    ...secrets
  },
  verbose: true,
  nothrow: true,
  stdio: 'inherit'
})`${process.argv.slice(2)}`
