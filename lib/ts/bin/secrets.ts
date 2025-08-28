#!/usr/bin/env node
import { secrets } from '../src/secrets.ts'
import { $, argv } from 'zx'
import { env } from 'node:process'

switch (argv._[0]) {
  case 'run': {
    await $({
      env: {
        ...env,
        ...secrets
      },
      nothrow: true,
      stdio: 'inherit'
    })`${argv._.splice(1)}`
    break
  }
  case 'set': {
    break
  }
  case 'get': {
    break
  }
  case undefined: {
    console.error('No command provided.')
    break
  }
  default: {
    console.error('Unknown command:', argv[0])
    break
  }
}
