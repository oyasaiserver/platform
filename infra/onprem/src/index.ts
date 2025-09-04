import type { Compose } from '@json-types/compose'
import { secrets } from '@oyasaiserver/secrets'
import { grafana } from './services/grafana.ts'
import { mariadbBackup } from './services/mariadb-backup.ts'
import { mariadb } from './services/mariadb.ts'
import {
  minecraftMainBackup,
  minecraftMainBackupRestore
} from './services/minecraft-main-backup.ts'
import { minecraftMain } from './services/minecraft-main.ts'
import { nodeExporter } from './services/node-exporter.ts'
import { prometheus } from './services/prometheus.ts'

export const onpremInfra: Compose = {
  services: {
    mariadb,
    'minecraft-main': minecraftMain,

    ...(secrets.ENVIRONMENT === 'production' && {
      'minecraft-main-backup': minecraftMainBackup,
      'mariadb-backup': mariadbBackup,

      prometheus,
      grafana,
      'node-exporter': nodeExporter
    }),

    ...(secrets.ENVIRONMENT === 'development' && {
      'minecraft-main-backup-restore': minecraftMainBackupRestore
      // TODO 'mariadb-backup-restore': mariadbBackupRestore
    })
  },

  volumes: {
    ...(secrets.ENVIRONMENT === 'production' && {
      prometheus_data: {},
      grafana_data: {}
    })
  }
} as const
