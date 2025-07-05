import { defineInfra } from '../lib/define-infra.ts'

export default defineInfra(environment => {
  return {
    services: {
      [`minecraft-main-${environment}`]: {
        image: 'itzg/minecraft-server:java24',
        ports: ['25565:25565'],
        volumes: [`./${environment}/minecraft-main:/data`]
      }
    }
  }
})
