import { defineInfra } from '../lib/define-infra.ts'

export default defineInfra(environment => {
  const isLocal = environment === 'local'
  return {
    services: {
      'minecraft-main': {
        image: 'itzg/minecraft-server:java24',
        ports: ['25565:25565'],
        volumes: [`./minecraft-main:/data`],
        restart: 'unless-stopped',
        tty: true,
        stdin_open: true,
        environment: {
          EULA: 'TRUE',
          TYPE: 'PURPUR',
          VERSION: '1.21.5'
        },
        env_file: '.env',
        ...(isLocal && {
          extra_hosts: ['host.docker.internal:host-gateway']
        })
      }
    }
  }
})
