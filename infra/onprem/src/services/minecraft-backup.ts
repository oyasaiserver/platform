import type { Service } from '@oyasaiserver/json/store/compose_spec'
import { secrets } from '@oyasaiserver/lib/secrets'

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
      BACKUP_METHOD: 'restic',
      RESTIC_REPOSITORY: `s3:https://${secrets.CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com/${secrets.BUCKET_NAME}`
    },
    volumes: [`${namespace}:/data:ro`]
  }
}
