import type { Service } from '@oyasaiserver/json/store/compose_spec'

export const grafana: Service = {
  image: 'grafana/grafana',
  ports: ['3000:3000'],
  volumes: ['grafana_data:/var/lib/grafana']
}
