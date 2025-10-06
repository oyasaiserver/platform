import { Container } from '@cdktf/provider-docker/lib/container/index.js'
import { Image } from '@cdktf/provider-docker/lib/image/index.js'
import { Network } from '@cdktf/provider-docker/lib/network/index.js'
import { DockerProvider } from '@cdktf/provider-docker/lib/provider/index.js'
import type { Secrets } from '@oyasaiserver/secrets'
import { Construct } from 'constructs'
import { join } from 'node:path'
import { directory } from '../directory.ts'
import { objectToEnv } from '../object.ts'
import { envAwarePlugins } from '../plugins.ts'
import { OyasaiTerraformStack } from './oyasai-terraform-stack.ts'

export class DockerStack extends OyasaiTerraformStack {
  public static readonly minecraftVersion = '1.21.5'

  private workdir = `/opt/platform/${this.secrets.ENVIRONMENT}`

  public constructor(scope: Construct, id: string, secrets: Secrets) {
    super(scope, id, secrets)

    new DockerProvider(this, id, {
      host: `tcp://${secrets.PUBLIC_IPV4}:2376`,
      caMaterial: secrets.TLS_CA_PEM,
      certMaterial: secrets.TLS_CERT_PEM,
      keyMaterial: secrets.TLS_KEY_PEM
    })

    const images = {
      mariadb: new Image(this, this.envAwareId('mariadb-image'), {
        name: 'mariadb:10.4.28'
      }),
      minecraftMain: new Image(this, this.envAwareId('minecraft-main-image'), {
        name: `minecraft-main-image:${directory.hashSync(
          join(directory.root, 'gradle'),
          join(directory.root, 'infra/minecraft-server'),
          join(directory.root, 'plugins')
        )}`,
        buildAttribute: {
          context: directory.root,
          dockerfile: 'infra/minecraft-server/Dockerfile'
        }
      }),
      minecraftBackup: new Image(this, this.envAwareId('minecraft-backup-image'), {
        name: 'itzg/mc-backup:latest'
      })
    } as const

    const network = new Network(this, this.envAwareId('network'), {
      name: 'network'
    })

    const mariadbContainer = new Container(this, this.envAwareId('mariadb-container'), {
      image: images.mariadb.imageId,
      name: 'mariadb',
      restart: 'unless-stopped',
      env: objectToEnv({
        MARIADB_ROOT_PASSWORD: secrets.MARIADB_PASSWORD
      }),
      networksAdvanced: [network],
      volumes: [
        {
          containerPath: '/var/lib/mysql',
          hostPath: join(this.workdir, 'mariadb')
        },
        {
          containerPath: '/docker-entrypoint-initdb.d',
          hostPath: join(this.workdir, 'mariadb')
        }
      ]
    })

    const plugins = this.envAwareConfig(envAwarePlugins)
    const minecraftMainContainer = new Container(
      this,
      this.envAwareId('minecraft-main-container'),
      {
        image: images.minecraftMain.imageId,
        name: 'minecraft-main',
        dependsOn: [mariadbContainer],
        restart: 'unless-stopped',
        tty: true,
        stdinOpen: true,
        destroyGraceSeconds: 2 * 60,
        init: true,
        networksAdvanced: [network],
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
          TYPE: 'PURPUR',
          VERSION: DockerStack.minecraftVersion,
          USE_MEOWICE_FLAGS: secrets.ENVIRONMENT !== 'local',
          ENABLE_ROLLING_LOGS: true,
          LOG_TIMESTAMP: true,
          MEMORY: this.envAwareConfig({
            production: '32G',
            development: '12G',
            local: '5G'
          }),
          PLUGINS: plugins.urls.join(),
          SPIGET_RESOURCES: plugins.spigetIds.join(),
          MODRINTH_PROJECTS: plugins.modrinthProjects.join(),
          MODRINTH_ALLOWED_VERSION_TYPE: 'beta',
          ICON: 'https://avatars.githubusercontent.com/oyasaiserver',
          DISCORDSRV_TOKEN: secrets.DISCORD_TOKEN,
          RCON_PASSWORD: secrets.RCON_PASSWORD,
          DISCORD_WEBHOOK_URL: secrets.DISCORD_WEBHOOK_URL
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
            hostPath: join(this.workdir, 'minecraft-main')
          }
        ]
      }
    )

    const r2CommonEnv = {
      BACKUP_METHOD: 'restic',
      RESTIC_PASSWORD: secrets.RESTIC_PASSWORD,
      AWS_ACCESS_KEY_ID: secrets.CLOUDFLARE_ACCESS_KEY_ID,
      AWS_SECRET_ACCESS_KEY: secrets.CLOUDFLARE_SECRET_ACCESS_KEY,
      RESTIC_VERBOSE: true,
      // bucket is production by default
      RESTIC_REPOSITORY: `s3:https://${secrets.CLOUDFLARE_ACCOUNT_ID}.r2.cloudflarestorage.com/production/minecraft-main-backup`
    } as const

    if (secrets.ENVIRONMENT === 'production') {
      new Container(this, this.envAwareId('minecraft-backup-container'), {
        name: 'minecraft-main-backup',
        dependsOn: [minecraftMainContainer],
        image: images.minecraftBackup.imageId,
        networksAdvanced: [network],
        restart: 'unless-stopped',
        env: objectToEnv({
          ...r2CommonEnv,
          RCON_HOST: 'minecraft-main',
          RCON_PASSWORD: secrets.RCON_PASSWORD,
          EXCLUDES: '*.jar,cache,logs,*.tmp,bluemap',
          BACKUP_INTERVAL: '6h',
          PRUNE_RESTIC_RETENTION: '--keep-daily 7 --keep-weekly 4 --keep-monthly 3'
        }),
        volumes: [
          {
            hostPath: join(this.workdir, 'minecraft-main'),
            containerPath: '/data',
            readOnly: true
          }
        ]
      })

      new Container(this, this.envAwareId('mariadb-backup-container'), {
        name: 'mariadb-backup',
        dependsOn: [mariadbContainer],
        image: 'databack/mysql-backup',
        restart: 'unless-stopped',
        networksAdvanced: [network],
        command: ['dump'],
        env: objectToEnv({
          DB_SERVER: 'mariadb',
          DB_USER: 'root',
          DB_PASS: secrets.MARIADB_PASSWORD,
          DB_DUMP_FREQUENCY: 360,
          DB_DUMP_TARGET: `s3://${secrets.R2_BUCKET_NAME}/mariadb-backup`,
          AWS_ACCESS_KEY_ID: secrets.CLOUDFLARE_ACCESS_KEY_ID,
          AWS_SECRET_ACCESS_KEY: secrets.CLOUDFLARE_SECRET_ACCESS_KEY,
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
}
