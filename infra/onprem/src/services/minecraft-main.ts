import { toolVersions } from '@oyasaiserver/lib/tool-versions'
import config from '../../config.json' with { type: 'json' }
import type { Environment } from '@oyasaiserver/schema/environment'
import type { Service } from '@oyasaiserver/json/store/compose_spec'

export function createMinecraftMain(environment: Environment): Service {
  return {
    depends_on: ['mariadb', 'portical'],
    image: `itzg/minecraft-server:java${toolVersions.java.major}`,
    ports: [
      `${config.services.minecraft.port[environment]}:${config.port.minecraft.value}/${config.port.minecraft.protocol}`,
      `${config.services.minecraftBedrock.port[environment]}:${config.port.minecraftBedrock.value}/${config.port.minecraftBedrock.protocol}`
    ],
    labels: [
      `portical.upnp.forward=${[
        `${config.services.minecraft.port[environment]}/${config.port.minecraft.protocol}`,
        `${config.services.minecraftBedrock.port[environment]}/${config.port.minecraftBedrock.protocol}`
      ]}`
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
      ICON: 'https://avatars.githubusercontent.com/oyasaiserver'
    },
    volumes: ['./minecraft-main:/data'],
    env_file: '.env',
    extra_hosts: ['host.docker.internal:host-gateway']
  }
}
