import type { Service } from '@json-types/compose'

export const prometheus: Service = {
  image: 'prom/prometheus:v3.5.0',
  volumes: ['./prometheus:/etc/prometheus', 'prometheus_data:/prometheus'],
  extra_hosts: ['host.docker.internal:host-gateway'],
  command: ['--config.file=/etc/prometheus/prometheus.yaml']
}
