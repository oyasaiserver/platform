import type { Service } from '@oyasaiserver/json/store/compose_spec'

export const prometheus: Service = {
  image: 'prom/prometheus:v3.5.0',
  volumes: ['./prometheus:/etc/prometheus', 'prometheus_data:/prometheus'],
  extra_hosts: ['host.docker.internal:host-gateway'],
  command: ['--config.file=/etc/prometheus/prometheus.yaml']
}
