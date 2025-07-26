import { defineInfra } from './lib/define-infra.ts'
import type { Service } from '@oyasaiserver/json/store/compose_spec'
import { config } from './config.ts'
import { toolVersions } from '@oyasaiserver/lib/tool-versions'

export default defineInfra(async environment => {
  const services: Record<string, Service> = {
    'minecraft-main': {
      image: `itzg/minecraft-server:java${toolVersions.java.major}`,
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
        ICON: 'https://avatars.githubusercontent.com/oyasaiserver'
      },
      volumes: ['./minecraft-main:/data'],
      env_file: '.env',
      extra_hosts: ['host.docker.internal:host-gateway']
    },
    mariadb: {
      image: 'mariadb:10.4.28',
      restart: 'unless-stopped',
      environment: {
        MARIADB_DATABASE: 'minecraft',
        MARIADB_ROOT_PASSWORD: 'pigg1524'
      },
      volumes: [
        './mariadb:/var/lib/mysql',
        './mariadb:/docker-entrypoint-initdb.d'
      ]
    }
  }
  return {
    services
  }
})
