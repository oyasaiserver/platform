import { defineInfra } from '../lib/define-infra.ts'
import { readFileContent } from '@oyasaiserver/lib/fs'
import { directory } from '@oyasaiserver/lib/directory'
import { always } from '@oyasaiserver/lib/functional'

export default defineInfra(async environment => {
  const isLocal = environment === 'local'
  const caddyfile = await readFileContent(
    `${directory.root}/infra/caddy/${environment}/Caddyfile`
  ).catch(always(''))
  return {
    services: {
      ...(!isLocal && {
        caddy: {
          image: 'caddy:latest',
          restart: 'unless-stopped',
          ports: ['80:80', '443:443'],
          environment: {
            TZ: 'UTC'
          },
          volumes: ['caddy_data:/data', 'caddy_config:/config'],
          command: [
            'sh',
            '-c',
            `cat <<'EOF' > /etc/caddy/Caddyfile
${caddyfile.trim()}
EOF
caddy run --config /etc/caddy/Caddyfile --adapter caddyfile`
          ]
        }
      }),
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
    },
    volumes: {
      caddy_data: {},
      caddy_config: {}
    }
  }
})
