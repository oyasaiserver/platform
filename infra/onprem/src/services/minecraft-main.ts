import type { Service } from '@json-types/compose'
import { directory } from '@oyasaiserver/lib/directory'
import { hashDirectories } from '@oyasaiserver/lib/hash'
import { secrets } from '@oyasaiserver/secrets'
import { join } from 'node:path'
import { config } from '../config.ts'
import { plugins, productionOnlyPlugins, spigetPlugins } from '../plugins.ts'

export const minecraftMain: Service = {
  depends_on: ['mariadb'],
  image: 'itzg/minecraft-server:java24-graalvm',
  ports: [`25565:25565`, `19132:19132/udp`, '8192:8192', '8100:8100', '25575:25575'],
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
    PLUGINS: [
      ...plugins,
      ...(secrets.ENVIRONMENT === 'production' ? productionOnlyPlugins : [])
    ].join(),
    SPIGET_RESOURCES: spigetPlugins.join(),
    ICON: 'https://avatars.githubusercontent.com/oyasaiserver',
    // TODO more granular control over secrets
    DISCORDSRV_TOKEN: secrets.DISCORD_TOKEN,
    RCON_PASSWORD: secrets.RCON_PASSWORD,
    // TODO abstract this pattern
    __SENTINEL_HASH__: await hashDirectories(
      join(directory.root, 'lib/kotlin'),
      join(directory.root, 'plugins'),
      join(directory.root, 'infra/onprem/assets/minecraft-main')
    )
  },
  volumes: ['./minecraft-main:/data']
}
