import type { Service } from '@oyasaiserver/json/store/compose_spec'

export const prometheus: Service = {
  image: 'prom/prometheus:v3.5.0',
  ports: ['9090:9090'],
  volumes: ['./prometheus:/etc/prometheus', 'prometheus_data:/prometheus'],
  command: ['--config.file=/etc/prometheus/prometheus.yaml']
}
