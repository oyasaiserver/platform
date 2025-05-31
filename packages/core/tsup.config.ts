import { readFile } from 'node:fs/promises'
import { defineConfig } from 'tsup'

const environment = process.env.ENVIRONMENT

if (!environment) {
  throw new Error('ENVIRONMENT variable is not set')
}

const dotenvPublicKeys = await readFile(
  `../../envs/${process.env.ENVIRONMENT}/.env`,
  'utf-8'
)

if (!dotenvPublicKeys) {
  throw new Error(`No .env file found for environment: ${environment}`)
}

export default defineConfig({
  entry: ['src/index.ts'],
  format: 'esm',
  target: 'es2022',
  platform: 'node',
  clean: true,
  env: {
    DOTENV_PUBLIC_KEYS: dotenvPublicKeys
  }
})
