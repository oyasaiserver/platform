#!/usr/bin/env tsx
import { $ } from 'zx'
import { secrets } from '../src/secrets.ts'

$({
  env: {
    ...process.env,
    ...secrets
  },
  verbose: true,
  nothrow: true
})`${process.argv.slice(2)}`
