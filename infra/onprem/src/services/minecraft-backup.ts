import type { Service } from '@oyasaiserver/json/store/compose_spec'

export function createMinecraftBackup(name: string): Service {
  const namespace = `minecraft-${name}`
  return {
    image: 'itzg/mc-backup:latest',
    depends_on: {
      [namespace]: {
        condition: 'service_healthy'
      }
    },
    environment: {
      RCON_HOST: namespace,
      BACKUP_NAME: namespace,
      BACKUP_METHOD: 'restic'
    },
    volumes: [`./${namespace}:/data:ro`],
    env_file: '.env'
  }
}
