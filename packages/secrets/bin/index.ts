#!/usr/bin/env node
import { createSecretsFromPath } from '@oyasaiserver/secrets'
import { ok } from 'node:assert'
import { spawn } from 'node:child_process'
import { join } from 'node:path'
import { argv, env } from 'node:process'

const [command, ...args] = argv.splice(3)

ok(command)

const path = join(import.meta.dirname, '../../../secrets')

spawn(command, args, {
  stdio: 'inherit',
  env: await createSecretsFromPath(path).then(secrets => ({
    ...env,
    ...secrets
  }))
})
