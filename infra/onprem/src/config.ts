export const config = {
  minecraft: {
    version: '1.21.5',
    type: 'PURPUR',
    port: {
      default: 25565,
      production: 25565,
      development: 25566,
      local: 25565
    }
  }
} as const
