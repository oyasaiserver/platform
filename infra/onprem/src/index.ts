import type { Compose } from '@json-types/compose'
import { envAwareConfig } from './config.ts'
import { mariadbBackup } from './services/mariadb-backup.ts'
import { mariadb } from './services/mariadb.ts'
import {
  minecraftMainBackup,
  minecraftMainBackupRestore
} from './services/minecraft-main-backup.ts'
import { minecraftMain } from './services/minecraft-main.ts'

export const compose: Compose = {
  services: {
    mariadb,
    'minecraft-main': minecraftMain,

    ...envAwareConfig({
      production: {
        'minecraft-main-backup': minecraftMainBackup,
        'mariadb-backup': mariadbBackup
      },
      development: {
        'minecraft-main-backup-restore': minecraftMainBackupRestore
      },
      local: {}
    } as const)
  }
} as const
