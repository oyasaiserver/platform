#!/usr/bin/env node
import { secrets } from '../src/secrets.ts'
import { $, argv } from 'zx'

await $({
  env: {
    ...process.env,
    ...secrets
  },
  nothrow: true,
  stdio: 'inherit'
})`${argv._}`
