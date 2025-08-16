export const config = {
  services: {
    minecraft: {
      version: '1.21.5',
      type: 'PURPUR',
      port: {
        production: 25565,
        development: 25566,
        local: 25565
      },
      memory: {
        production: '32G',
        development: '16G',
        local: '3G'
      }
    },
    minecraftBedrock: {
      port: {
        production: 19132,
        development: 19133,
        local: 19132
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
