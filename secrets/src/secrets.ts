#!/usr/bin/env node
import { secrets } from '@oyasaiserver/secrets'
import { spawn } from 'node:child_process'
import { argv, env } from 'node:process'

const [command, ...args] = argv.splice(3)

spawn(command!, args, {
  stdio: 'inherit',
  env: {
    ...env,
    ...secrets
  }
})
