#!/usr/bin/env tsx
import { $ } from 'zx'
import { Env } from '../src/env'

const command = process.argv.slice(2)

$({
  env: {
    ...process.env,
    ...Env
  },
  verbose: true
})`${command}`
