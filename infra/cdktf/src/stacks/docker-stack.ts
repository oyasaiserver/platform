import { Container } from '@cdktf/provider-docker/lib/container/index.js'
import { Image } from '@cdktf/provider-docker/lib/image/index.js'
import { DockerProvider } from '@cdktf/provider-docker/lib/provider/index.js'
import { secrets } from '@oyasaiserver/secrets'
import { Fn, TerraformStack } from 'cdktf'
import { Construct } from 'constructs'
import { join } from 'node:path'
import { NamedCloudBackend } from '../backend/named-cloud-backend.ts'
import { config } from '../config.ts'
import { directory } from '../directory.ts'
import { hashdirSync } from '../hash.ts'
import { envAwareId } from '../ids.ts'
import { plugins } from '../plugins.ts'
import { objectToEnv } from '../utils.ts'

export class DockerStack extends TerraformStack {
  public constructor(scope: Construct, id: string) {
    super(scope, id)

    if (secrets.ENVIRONMENT !== 'local') {
      new NamedCloudBackend(this, envAwareId(id))
    }

    new DockerProvider(this, envAwareId(id), {
      host: `tcp://${secrets.PUBLIC_IPV4}:2376`,
      caMaterial: Fn.sensitive(secrets.TLS_CA_PEM),
      certMaterial: Fn.sensitive(secrets.TLS_CERT_PEM),
      keyMaterial: Fn.sensitive(secrets.TLS_KEY_PEM)
    })

    const images = this.images(id)

    const mariadbContainer = new Container(this, envAwareId(id, 'mariadb-container'), {
      image: images.mariadb.imageId,
      name: 'mariadb',
      restart: 'unless-stopped',
      env: objectToEnv({
        MARIADB_ROOT_PASSWORD: Fn.sensitive(secrets.MARIADB_PASSWORD)
      }),
      volumes: [
        {
          containerPath: '/var/lib/mysql',
          hostPath: `/opt/platform/${secrets.ENVIRONMENT}/mariadb`
        },
        {
          containerPath: '/docker-entrypoint-initdb.d',
          hostPath: `/opt/platform/${secrets.ENVIRONMENT}/mariadb`
        }
      ]
    })

    const minecraftMainContainer = new Container(this, envAwareId(id, 'minecraft-main-container'), {
      image: images.minecraftMain.imageId,
      name: 'minecraft-main',
      dependsOn: [mariadbContainer],
      restart: 'unless-stopped',
      tty: true,
      stdinOpen: true,
      destroyGraceSeconds: 2 * 60,
      ports: [
        {
          internal: 25565,
          external: 25565
        },
        {
          internal: 19132,
          external: 19132,
          protocol: 'udp'
        },
        {
          internal: 8192,
          external: 8192
        },
        {
          internal: 8100,
          external: 8100
        },
        {
          internal: 25575,
          external: 25575
        }
      ],
      env: objectToEnv({
        EULA: true,
        TYPE: config.services.minecraft.type,
        VERSION: config.services.minecraft.version,
        USE_MEOWICE_FLAGS: secrets.ENVIRONMENT !== 'local',
        ENABLE_ROLLING_LOGS: true,
        LOG_TIMESTAMP: true,
        MEMORY: config.services.minecraft.memory,
        PLUGINS: plugins.urls.join(),
        SPIGET_RESOURCES: plugins.spigetIds.join(),
        MODRINTH_PROJECTS: plugins.modrinthProjects.join(),
        MODRINTH_ALLOWED_VERSION_TYPE: 'beta',
        ICON: 'https://avatars.githubusercontent.com/oyasaiserver',
        DISCORDSRV_TOKEN: Fn.sensitive(secrets.DISCORD_TOKEN),
        RCON_PASSWORD: Fn.sensitive(secrets.RCON_PASSWORD),
        DISCORD_WEBHOOK_URL: Fn.sensitive(secrets.DISCORD_WEBHOOK_URL)
      }),
      healthcheck: {
        test: ['mc-health'],
        startPeriod: '1m',
        interval: '5s',
        retries: 20
      },
      volumes: [
        {
          containerPath: '/data',
          hostPath: `/opt/platform/${secrets.ENVIRONMENT}/minecraft-main`
        }
      ]
    })

    const r2CommonEnv = {
      BACKUP_METHOD: 'restic',
      RESTIC_PASSWORD: Fn.sensitive(secrets.RESTIC_PASSWORD),
      AWS_ACCESS_KEY_ID: Fn.sensitive(secrets.CLOUDFLARE_ACCESS_KEY_ID),
      AWS_SECRET_ACCESS_KEY: Fn.sensitive(secrets.CLOUDFLARE_SECRET_ACCESS_KEY),
      RESTIC_VERBOSE: true,
      // bucket is production by default
      RESTIC_REPOSITORY: `s3:https://${secrets.CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com/production/minecraft-main-backup`
    } as const

    if (secrets.ENVIRONMENT === 'production') {
      new Container(this, envAwareId(id, 'minecraft-backup-container'), {
        name: 'minecraft-main-backup',
        dependsOn: [minecraftMainContainer],
        image: images.minecraftBackup.imageId,
        restart: 'unless-stopped',
        env: objectToEnv({
          ...r2CommonEnv,
          RCON_HOST: 'minecraft-main',
          RCON_PASSWORD: Fn.sensitive(secrets.RCON_PASSWORD),
          EXCLUDES: '*.jar,cache,logs,*.tmp,bluemap',
          BACKUP_INTERVAL: '6h',
          PRUNE_RESTIC_RETENTION: '--keep-daily 7 --keep-weekly 4 --keep-monthly 3'
        }),
        volumes: [
          {
            hostPath: `/opt/platform/${secrets.ENVIRONMENT}/minecraft-main`,
            containerPath: '/data',
            readOnly: true
          }
        ]
      })

      new Container(this, envAwareId(id, 'mariadb-backup-container'), {
        name: 'mariadb-backup',
        dependsOn: [mariadbContainer],
        image: 'databack/mysql-backup',
        restart: 'unless-stopped',
        command: ['dump'],
        env: objectToEnv({
          DB_SERVER: 'mariadb',
          DB_USER: 'root',
          DB_PASS: Fn.sensitive(secrets.MARIADB_PASSWORD),
          DB_DUMP_FREQUENCY: 360,
          DB_DUMP_TARGET: `s3://${secrets.R2_BUCKET_NAME}/mariadb-backup`,
          AWS_ACCESS_KEY_ID: Fn.sensitive(secrets.CLOUDFLARE_ACCESS_KEY_ID),
          AWS_SECRET_ACCESS_KEY: Fn.sensitive(secrets.CLOUDFLARE_SECRET_ACCESS_KEY),
          AWS_REGION: 'auto',
          AWS_ENDPOINT_URL: `https://${secrets.CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com`,
          DB_DUMP_COMPRESSION: 'gzip',
          DB_DUMP_RETENTION: '14d',
          DB_DEBUG: true
        })
      })
    }

    if (secrets.ENVIRONMENT === 'development') {
      // TODO restore mc data from backup
    }
  }

  private images(id: string) {
    return {
      mariadb: new Image(this, envAwareId(id, 'mariadb-image'), {
        name: 'mariadb:10.4.28'
      }),
      minecraftMain: new Image(this, envAwareId(id, 'minecraft-main-image'), {
        name: `minecraft-main-image:${hashdirSync(
          join(directory.root, 'docker/minecraft-server'),
          join(directory.root, 'lib/kotlin'),
          join(directory.root, 'plugins')
        )}`,
        buildAttribute: {
          context: directory.root,
          dockerfile: 'docker/minecraft-server/Dockerfile'
        }
      }),
      minecraftBackup: new Image(this, envAwareId(id, 'minecraft-backup-image'), {
        name: 'itzg/mc-backup:latest'
      })
    } as const
  }
}
