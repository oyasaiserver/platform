import type { Environment } from '@oyasaiserver/schema/environment'
import type { Service } from '@oyasaiserver/json/store/compose_spec'
import { config } from '../config.ts'
import { plugins } from '../plugins.ts'

export function createMinecraft(
  name: string,
  environment: Environment
): Service {
  return {
    depends_on: ['mariadb'],
    image: 'itzg/minecraft-server:java24',
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
      PLUGINS: plugins.map(plugin => plugin.url).join(),
      ICON: 'https://avatars.githubusercontent.com/oyasaiserver'
      // TODO: turn this on when we have fully managed plugins
      // REMOVE_OLD_MODS: true,
    },
    volumes: [`./minecraft-${name}:/data`],
    env_file: '.env'
  }
}
