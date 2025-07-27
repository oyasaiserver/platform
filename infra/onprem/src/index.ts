import { portical } from './services/portical.ts'
import { mariadb } from './services/mariadb.ts'
import { createMinecraftMain } from './services/minecraft-main.ts'
import type { ComposeSpec } from '@oyasaiserver/json/store/compose_spec'
import type { Environment } from '@oyasaiserver/schema/environment'
import { prometheus } from './services/prometheus.ts'
import { grafana } from './services/grafana.ts'
import { nodeExporter } from './services/node-exporter.ts'

export function createOnpremInfra(environment: Environment): ComposeSpec {
  return {
    services: {
      portical,
      mariadb,
      'minecraft-main': createMinecraftMain(environment),

      ...(environment === 'production' && {
        prometheus,
        grafana,
        'node-exporter': nodeExporter
      })
    }
  }
}
