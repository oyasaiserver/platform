import { config } from '../config.ts'
import { plugins, spigetPlugins } from '../plugins.ts'
import { secrets } from '@oyasaiserver/secrets'
import type { Service } from '@json-types/compose'
import { hashDirectories } from '@oyasaiserver/lib/hash'
import { join } from 'node:path'
import { directory } from '@oyasaiserver/lib/directory'

export const minecraftMain: Service = {
  depends_on: ['mariadb'],
  image: 'itzg/minecraft-server:java24-graalvm',
  ports: [
    `${config.port.minecraft.value}:${config.port.minecraft.value}/${config.port.minecraft.protocol}`,
    `${config.port.minecraftBedrock.value}:${config.port.minecraftBedrock.value}/${config.port.minecraftBedrock.protocol}`,
    '8192:8192/tcp', // vote
    '8100:8100/tcp', // bluemap,
    '25575:25575/tcp' // rcon
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
    MEMORY: config.services.minecraft.memory[secrets.ENVIRONMENT],
    PLUGINS: plugins.join(),
    SPIGET_RESOURCES: spigetPlugins.join(),
    ICON: 'https://avatars.githubusercontent.com/oyasaiserver',
    // TODO more granular control over secrets
    DISCORDSRV_TOKEN: secrets.DISCORD_TOKEN,
    RCON_PASSWORD: secrets.RCON_PASSWORD,
    // TODO abstract this pattern
    __SENTINEL_HASH__: await hashDirectories(
      join(directory.root, 'lib'),
      join(directory.root, 'plugins'),
      join(directory.root, 'infra/onprem/assets/minecraft-main')
    )
  },
  volumes: ['./minecraft-main:/data']
}
