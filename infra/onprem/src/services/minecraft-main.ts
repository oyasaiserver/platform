import type { Service } from '@json-types/compose'
import { directory } from '@oyasaiserver/lib/directory'
import { hashdir } from '@oyasaiserver/lib/hash'
import { secrets } from '@oyasaiserver/secrets'
import { join } from 'node:path'
import { config } from '../config.ts'
import { plugins } from '../plugins.ts'

export const minecraftMain: Service = {
  depends_on: ['mariadb'],
  image: 'itzg/minecraft-server:java24-graalvm',
  ports: [
    '25565:25565', // java
    '19132:19132/udp', // bedrock
    '8192:8192', // votifier
    '8100:8100', // bluemap
    '25575:25575' // rcon
  ],
  restart: 'unless-stopped',
  tty: true,
  stdin_open: true,
  stop_grace_period: '2m',
  environment: {
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
    // TODO more granular control over secrets
    DISCORDSRV_TOKEN: secrets.DISCORD_TOKEN,
    RCON_PASSWORD: secrets.RCON_PASSWORD,
    // TODO abstract this pattern
    __SENTINEL_HASH__: await hashdir(
      join(directory.root, 'lib/kotlin'),
      join(directory.root, 'plugins'),
      join(directory.root, 'infra/onprem/assets/minecraft-main')
    )
  },
  healthcheck: {
    test: 'mc-health',
    start_period: '1m',
    interval: '5s',
    retries: 20
  },
  volumes: ['./minecraft-main:/data']
}
