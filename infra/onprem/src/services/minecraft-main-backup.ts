import type { Service } from '@json-types/compose'
import { secrets } from '@oyasaiserver/lib/secrets'

const base = {
  BACKUP_METHOD: 'restic',
  RESTIC_PASSWORD: secrets.RESTIC_PASSWORD,
  AWS_ACCESS_KEY_ID: secrets.CLOUDFLARE_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY: secrets.CLOUDFLARE_SECRET_ACCESS_KEY,
  RESTIC_VERBOSE: true,
  // bucket is production by default
  RESTIC_REPOSITORY: `s3:https://${secrets.CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com/production/minecraft-main-backup`,
}

export const minecraftMainBackup: Service = {
  depends_on: ['minecraft-main'],
  image: 'itzg/mc-backup',
  restart: 'unless-stopped',
  environment: {
    ...base,
    RCON_HOST: 'minecraft-main',
    RCON_PASSWORD: secrets.RCON_PASSWORD,
    EXCLUDES: '*.jar,cache,logs,*.tmp,bluemap',
    BACKUP_INTERVAL: '6h',
    PRUNE_RESTIC_RETENTION: '--keep-daily 7 --keep-weekly 4 --keep-monthly 3',
  },
  volumes: ['./minecraft-main:/data:ro']
}

export const minecraftMainBackupRestore: Service = {
  image: 'itzg/mc-backup',
  restart: 'no',
  entrypoint: '',
  command: 'restic restore latest --target /data',
  environment: base,
  volumes: ['./minecraft-main:/data']
}
