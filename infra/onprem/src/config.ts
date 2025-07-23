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
        development: '12G',
        local: '3G'
      }
    }
  },
  port: {
    http: 80,
    https: 443,
    minecraft: 25565
  }
} as const
