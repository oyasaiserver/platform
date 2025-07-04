#!/usr/bin/env tsx
import { directory } from '@oyasaiserver/lib/directory'
import { $, argv } from 'zx'

$({
  nothrow: true,
  stdio: 'inherit',
  cwd: directory.root
})`./gradlew ${argv._}`
