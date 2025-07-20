import { defineInfra } from './lib/define-infra.ts'
import type { Service } from '@oyasaiserver/json/store/compose_spec'
import { config } from './config.ts'

export default defineInfra(async environment => {
  const services: Record<string, Service> = {
    'minecraft-main': {
      image: 'itzg/minecraft-server:java24',
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
        VERSION: config.services.minecraft.version
      },
      env_file: '.env',
      extra_hosts: ['host.docker.internal:host-gateway']
    }
  }
  return {
    services
  }
})
