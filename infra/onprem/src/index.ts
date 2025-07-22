import { defineInfra } from './lib/define-infra.ts'
import type { Service } from '@oyasaiserver/json/store/compose_spec'
import { config } from './config.ts'
import { toolVersions } from '@oyasaiserver/lib/tool-versions'

export default defineInfra(async environment => {
  const services: Record<string, Service> = {
    'minecraft-main': {
      image: `itzg/minecraft-server:java${toolVersions.java.major}`,
      ports: [
        `${config.services.minecraft.port[environment]}:${config.port.minecraft}`
      ],
      volumes: ['./minecraft-main:/data'],
      restart: 'unless-stopped',
      tty: true,
      stdin_open: true,
      environment: {
        EULA: 'TRUE',
        TYPE: config.services.minecraft.type,
        VERSION: config.services.minecraft.version,
        ICON: 'https://avatars.githubusercontent.com/oyasaiserver'
      },
      env_file: '.env',
      extra_hosts: ['host.docker.internal:host-gateway']
    }
  }
  return {
    services
  }
})
