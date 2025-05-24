import type { EnvType } from './env-type'

export const Env = {
  ENVIRONMENT: process.env.ENVIRONMENT || process.env.NODE_ENV || 'local',
  ...process.env
} as EnvType
