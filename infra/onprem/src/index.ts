import { mariadb } from './services/mariadb.ts'
import { createMinecraft } from './services/minecraft-main.ts'
import type { ComposeSpec } from '@oyasaiserver/json/store/compose_spec'
import type { Environment } from '@oyasaiserver/schema/environment'
import { createMinecraftBackup } from './services/minecraft-backup.ts'

export function createOnpremInfra(environment: Environment): ComposeSpec {
  return {
    services: {
      mariadb,
      'minecraft-main': createMinecraft('main', environment),

      ...(environment === 'production' && {
        'minecraft-main-backup': createMinecraftBackup('main')
      })
    }
  }
}
