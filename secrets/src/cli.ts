#!/usr/bin/env node
import { ok } from 'node:assert'
import { spawn } from 'node:child_process'
import { argv, env } from 'node:process'
import { createSecretsFromEnv } from './index.ts'

const [command, ...args] = argv.splice(3)

ok(command)

spawn(command, args, {
  stdio: 'inherit',
  env: await createSecretsFromEnv().then(secrets => ({
    ...env,
    ...secrets
  }))
})
