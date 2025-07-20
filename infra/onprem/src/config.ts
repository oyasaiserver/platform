export const config = {
  services: {
    minecraft: {
      version: '1.21.5',
      type: 'PURPUR',
      port: {
        production: 25565,
        development: 25566,
        local: 25565
      }
    }
  },
  port: {
    http: 80,
    https: 443,
    minecraft: 25565
  }
} as const
