import { readFile } from 'node:fs/promises'
import { join } from 'node:path'
import { parse } from '@dotenvx/dotenvx'
import { dirs } from './dirs'
import type { EnvType } from './env-type'

const environment = process.env.ENVIRONMENT || process.env.NODE_ENV || 'local'

const envFile = join(dirs.envs, environment, '.env')
const envKeysFile = join(dirs.envs, environment, '.env.keys')

const output = parse(await readFile(envFile), {
  privateKey:
    process.env.DOTENV_PRIVATE_KEY || (await readFile(envKeysFile, 'utf-8'))
})

console.log(output)

export const Env = {
  ENVIRONMENT: environment,
  ...output
} as EnvType
