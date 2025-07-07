#!/usr/bin/env tsx
import { directory } from '@oyasaiserver/lib/directory'
import { $, argv } from 'zx'

await $({
  nothrow: true,
  stdio: 'inherit',
  cwd: directory.root
})`./gradlew ${argv._}`
