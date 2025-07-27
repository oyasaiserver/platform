import type { Service } from '@oyasaiserver/json/store/compose_spec'

export const portical: Service = {
  image: 'danielbodart/portical:latest',
  restart: 'unless-stopped',
  volumes: ['/var/run/docker.sock:/var/run/docker.sock'],
  network_mode: 'host',
  command: '/opt/portical/run poll'
}
