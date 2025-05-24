import { writeFile } from 'node:fs/promises'
import { EOL } from 'node:os'
import { join } from 'node:path'
import { config } from '@dotenvx/dotenvx'
import { dirs } from './dirs'
import type { EnvType } from './env-type'

console.log(process.env)

const environment = process.env.NODE_ENV || process.env.ENVIRONMENT || 'local'

console.log(`Loading environment variables for ${environment}...`)

const envFile = join(dirs.envs, environment, '.env')
const envKeysFile = join(dirs.envs, environment, '.env.keys')

if (process.env.DOTENV_PRIVATE_KEY) {
  await writeFile(
    envKeysFile,
    `DOTENV_PRIVATE_KEY=${process.env.DOTENV_PRIVATE_KEY}${EOL}`
  )
}

const output = config({
  path: envFile,
  envKeysFile
})

export const Env = {
  ENVIRONMENT: environment,
  ...output.parsed
} as EnvType

if (process.env.GITHUB_ENV) {
  const env = Object.entries(Env)
    .map(([key, value]) => `${key}=${value}`)
    .join('\n')

  await writeFile(process.env.GITHUB_ENV, env)
}
