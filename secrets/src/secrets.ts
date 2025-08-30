#!/usr/bin/env node
import { secrets } from './index.ts'
import { $, argv } from 'zx'
import { env } from 'node:process'

await $({
  env: {
    ...env,
    ...secrets
  },
  nothrow: true,
  stdio: 'inherit'
})`${argv._}`
