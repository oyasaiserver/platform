import type { Environment } from '@oyasaiserver/schema/environment'
import type { Service } from '@oyasaiserver/json/store/compose_spec'
import { config } from '../config.ts'
import { plugins } from '../plugins.ts'

export function createMinecraftMain(environment: Environment): Service {
  return {
    depends_on: ['mariadb'],
    image: 'itzg/minecraft-server:java24-graalvm',
    ports: [
      `${config.services.minecraft.port[environment]}:${config.port.minecraft.value}/${config.port.minecraft.protocol}`,
      `${config.services.minecraftBedrock.port[environment]}:${config.port.minecraftBedrock.value}/${config.port.minecraftBedrock.protocol}`,
      '8192:8192/tcp', // vote
      '8100:8100/tcp' // bluemap
    ],
    restart: 'unless-stopped',
    tty: true,
    stdin_open: true,
    environment: {
      EULA: true,
      TYPE: config.services.minecraft.type,
      VERSION: config.services.minecraft.version,
      USE_MEOWICE_FLAGS: environment !== 'local',
      ENABLE_ROLLING_LOGS: true,
      LOG_TIMESTAMP: true,
      MEMORY: config.services.minecraft.memory[environment],
      PLUGINS: plugins.join(),
      ICON: 'https://avatars.githubusercontent.com/oyasaiserver'
    },
    volumes: ['./minecraft-main:/data'],
    env_file: '.env'
  }
}
