#!/usr/bin/env tsx
import { $ } from 'zx'
import { secrets } from '../src/secrets'

const command = process.argv.slice(2)

$({
  env: {
    ...process.env,
    ...secrets
  },
  verbose: true
})`${command}`
