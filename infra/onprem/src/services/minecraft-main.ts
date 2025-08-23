import { config } from '../config.ts'
import { plugins } from '../plugins.ts'
import { secrets } from '@oyasaiserver/lib/secrets'
import type { Service } from '@json-types/compose'

export const minecraftMain: Service = {
  depends_on: ['mariadb'],
  image: 'itzg/minecraft-server:java24-graalvm',
  ports: [
    `${config.services.minecraft.port[secrets.ENVIRONMENT]}:${config.port.minecraft.value}/${config.port.minecraft.protocol}`,
    `${config.services.minecraftBedrock.port[secrets.ENVIRONMENT]}:${config.port.minecraftBedrock.value}/${config.port.minecraftBedrock.protocol}`,
    '8192:8192/tcp', // vote
    '8100:8100/tcp', // bluemap,
    '25575:25575/tcp' // rcon
  ],
  restart: 'unless-stopped',
  tty: true,
  stdin_open: true,
  environment: {
    EULA: true,
    TYPE: config.services.minecraft.type,
    VERSION: config.services.minecraft.version,
    USE_MEOWICE_FLAGS: secrets.ENVIRONMENT !== 'local',
    ENABLE_ROLLING_LOGS: true,
    LOG_TIMESTAMP: true,
    MEMORY: config.services.minecraft.memory[secrets.ENVIRONMENT],
    PLUGINS: plugins.join(),
    ICON: 'https://avatars.githubusercontent.com/oyasaiserver',
    // TODO more granular control over secrets
    DISCORDSRV_TOKEN: secrets.DISCORDSRV_TOKEN,
    RCON_PASSWORD: secrets.RCON_PASSWORD
  },
  volumes: ['./minecraft-main:/data']
}
