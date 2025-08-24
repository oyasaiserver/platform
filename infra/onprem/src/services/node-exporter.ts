import type { Service } from '@json-types/compose'

export const nodeExporter: Service = {
  image: 'prom/node-exporter:v1.9.1',
  network_mode: 'host',
  restart: 'unless-stopped',
  command: ['--path.rootfs=/host'],
  volumes: ['/:/host:ro,rslave']
}
