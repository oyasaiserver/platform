import type { Service } from '@json-types/compose'
import { secrets } from '@oyasaiserver/lib/secrets'

export const minecraftMainBackup: Service = {
  depends_on: ['minecraft-main'],
  image: 'itzg/mc-backup',
  restart: 'unless-stopped',
  environment: {
    RCON_HOST: 'minecraft-main',
    RCON_PASSWORD: secrets.RCON_PASSWORD,
    BACKUP_METHOD: 'restic',
    RESTIC_PASSWORD: secrets.RESTIC_PASSWORD,
    RESTIC_REPOSITORY: `s3:https://${secrets.CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com/${secrets.R2_BUCKET_NAME}`,
    AWS_ACCESS_KEY_ID: secrets.CLOUDFLARE_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY: secrets.CLOUDFLARE_SECRET_ACCESS_KEY,
    EXCLUDES: '*.jar,cache,logs,*.tmp,bluemap',
    BACKUP_INTERVAL: '1h',
    RESTIC_VERBOSE: true
  },
  volumes: ['./minecraft-main:/data:ro']
}
