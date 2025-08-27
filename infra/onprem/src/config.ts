export const config = {
  services: {
    minecraft: {
      version: '1.21.5',
      type: 'PURPUR',
      memory: {
        production: '32G',
        development: '12G',
        local: '5G'
      }
    }
  },
  port: {
    ssh: {
      protocol: 'tcp',
      value: 22
    },
    http: {
      protocol: 'tcp',
      value: 80
    },
    https: {
      protocol: 'tcp',
      value: 443
    },
    minecraft: {
      protocol: 'tcp',
      value: 25565
    },
    minecraftBedrock: {
      protocol: 'udp',
      value: 19132
    }
  }
} as const
