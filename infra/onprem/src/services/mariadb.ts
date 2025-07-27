import type { Service } from '@oyasaiserver/json/store/compose_spec'

export const mariadb: Service = {
  image: 'mariadb:10.4.28',
  restart: 'unless-stopped',
  environment: {
    MARIADB_ROOT_PASSWORD: 'pigg1524'
  },
  volumes: ['./mariadb:/var/lib/mysql', './mariadb:/docker-entrypoint-initdb.d']
}
