import { mariadb } from './services/mariadb.ts'
import { createMinecraftMain } from './services/minecraft-main.ts'
import type { Compose } from '@json-types/compose'
import type { Environment } from '@oyasaiserver/schema/environment'
import { prometheus } from './services/prometheus.ts'
import { grafana } from './services/grafana.ts'
import { nodeExporter } from './services/node-exporter.ts'

export function createOnpremInfra(environment: Environment): Compose {
  return {
    services: {
      mariadb,
      'minecraft-main': createMinecraftMain(environment),

      ...(environment === 'production' && {
        prometheus,
        grafana,
        'node-exporter': nodeExporter
      })
    },

    volumes: {
      ...(environment === 'production' && {
        prometheus_data: {},
        grafana_data: {}
      })
    }
  }
}
