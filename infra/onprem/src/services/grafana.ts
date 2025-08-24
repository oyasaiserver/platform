import type { Service } from '@json-types/compose'

export const grafana: Service = {
  image: 'grafana/grafana',
  ports: ['3000:3000'],
  volumes: ['grafana_data:/var/lib/grafana']
}
