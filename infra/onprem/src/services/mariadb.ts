import type { Service } from '@json-types/compose'
import { secrets } from "@oyasaiserver/lib/secrets";

export const mariadb: Service = {
  image: 'mariadb:10.4.28',
  restart: 'unless-stopped',
  environment: {
    MARIADB_ROOT_PASSWORD: 'pigg1524'
  },
  volumes: ['./mariadb:/var/lib/mysql', './mariadb:/docker-entrypoint-initdb.d']
}

