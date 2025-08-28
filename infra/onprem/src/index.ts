import { mariadb } from './services/mariadb.ts'
import { prometheus } from './services/prometheus.ts'
import { grafana } from './services/grafana.ts'
import { nodeExporter } from './services/node-exporter.ts'
import { secrets } from '@oyasaiserver/lib/secrets'
import { minecraftMain } from './services/minecraft-main.ts'
import { minecraftMainBackup } from './services/minecraft-main-backup.ts'
import type { Compose } from '@json-types/compose'

export const onpremInfra: Compose = {
  services: {
    mariadb,
    'minecraft-main': minecraftMain,

    ...(secrets.ENVIRONMENT === 'production' && {
      'minecraft-main-backup': minecraftMainBackup,

      prometheus,
      grafana,
      'node-exporter': nodeExporter
    })
  },

  volumes: {
    ...(secrets.ENVIRONMENT === 'production' && {
      prometheus_data: {},
      grafana_data: {}
    })
  }
} as const
