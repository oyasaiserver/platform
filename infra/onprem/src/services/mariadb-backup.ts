import type { Service } from '@json-types/compose'
import { secrets } from '@oyasaiserver/secrets'

export const mariadbBackup: Service = {
  depends_on: ['mariadb'],
  image: 'databack/mysql-backup',
  restart: 'unless-stopped',
  environment: {
    DB_SERVER: 'mariadb',
    DB_USER: 'root',
    DB_PASS: 'pigg1524',
    DB_DUMP_FREQUENCY: 360,
    DB_DUMP_TARGET: `s3://${secrets.R2_BUCKET_NAME}/mariadb-backup`,
    AWS_ACCESS_KEY_ID: secrets.CLOUDFLARE_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY: secrets.CLOUDFLARE_SECRET_ACCESS_KEY,
    AWS_REGION: 'auto',
    AWS_ENDPOINT_URL: `https://${secrets.CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com`,
    DB_DUMP_COMPRESSION: 'gzip',
    DB_DUMP_RETENTION: '7d',
    DB_DEBUG: 'true'
  }
}

export const mariadbBackupRestore: Service = {}
