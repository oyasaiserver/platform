#!/usr/bin/env node
import { $ } from 'zx'
import { secrets } from '../src/secrets.ts'

const command = process.argv.slice(2)

$({
  env: {
    ...process.env,
    ...secrets
  },
  verbose: true
})`${command}`
