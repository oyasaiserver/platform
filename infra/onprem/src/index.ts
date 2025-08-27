import { mariadb } from './services/mariadb.ts'
import { prometheus } from './services/prometheus.ts'
import { grafana } from './services/grafana.ts'
import { nodeExporter } from './services/node-exporter.ts'
import { secrets } from '@oyasaiserver/lib/secrets'
import { createMinecraftMain } from './services/minecraft-main.ts'
import { minecraftMainBackup } from './services/minecraft-main-backup.ts'
import type { Compose } from '@json-types/compose'

interface CreateOnPremInfraParams {
  sentinel: {
    mineacraftMain: string
  }
}

export function createOnpremInfra({
  sentinel
}: CreateOnPremInfraParams): Readonly<Compose> {
  return {
    services: {
      mariadb,
      'minecraft-main': createMinecraftMain(sentinel.mineacraftMain),

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
  }
}
