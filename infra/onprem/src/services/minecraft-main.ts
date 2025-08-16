import type { Environment } from '@oyasaiserver/schema/environment'
import type { Service } from '@oyasaiserver/json/store/compose_spec'
import { config } from '../config.ts'
import { customPlugins, plugins, staticPugins } from '../plugins.ts'

export function createMinecraftMain(environment: Environment): Service {
  return {
    depends_on: ['mariadb'],
    image: 'itzg/minecraft-server:java24-graalvm',
    ports: [
      `${config.services.minecraft.port[environment]}:${config.port.minecraft.value}/${config.port.minecraft.protocol}`,
      `${config.services.minecraftBedrock.port[environment]}:${config.port.minecraftBedrock.value}/${config.port.minecraftBedrock.protocol}`
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
      ICON: 'https://avatars.githubusercontent.com/oyasaiserver',
      REMOVE_OLD_MODS: true,
      REMOVE_OLD_MODS_EXCLUDE: [...staticPugins, ...customPlugins].join()
    },
    volumes: ['./minecraft-main:/data'],
    env_file: '.env'
  }
}
