import type { EnvType } from './env-type'

export const Env = {
  ENVIRONMENT: process.env.NODE_ENV || process.env.ENVIRONMENT || 'local',
  ...process.env
} as EnvType
