import { defineInfra } from '../lib/define-infra.ts'
import { envShort } from '@oyasaiserver/lib/environments'
import dedent from 'dedent'

export default defineInfra(async environment => {
  const isLocal = environment === 'local'
  const redirect = {
    production: 'https://wiki.oyasai.io',
    development: 'http://wiki.dev.oyasai.io',
    local: ''
  }[environment]
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
            dedent`
              cat <<'EOF' > /etc/caddy/${environment}.Caddyfile
              ${new URL(redirect).hostname.replace('wiki.', '')} {
                redir ${redirect}{uri} permanent
              }
              EOF
              caddy run --config /etc/caddy/${environment}.Caddyfile --adapter caddyfile
            `.trim()
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
