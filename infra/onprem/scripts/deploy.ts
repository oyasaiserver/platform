import { secrets } from '@oyasaiserver/lib/secrets'
import { useSsh } from '@oyasaiserver/lib/ssh'
import { cp, rm } from 'node:fs/promises'
import { directory } from '@oyasaiserver/lib/directory'
import { runtimeSecrets } from '@oyasaiserver/schema/runtime-secrets'
import { asEnvFile } from '@oyasaiserver/lib/env'
import { rf, writeFileSafe } from '@oyasaiserver/lib/fs'
import { exit } from 'node:process'

if (secrets.ENVIRONMENT === 'local') {
  console.error('This script should not be run in the local environment.')
  exit(1)
}

const paths = {
  dist: 'dist',
  assets: 'assets',
  plugins: 'minecraft-main/plugins'
} as const

await rm(paths.dist, rf)

await writeFileSafe('dist/.env', asEnvFile(runtimeSecrets.parse(secrets)))

await cp(
  `${directory.root}/gen/compose/compose.${secrets.ENVIRONMENT}.yaml`,
  'dist/compose.yaml'
)

await using ssh = await useSsh({
  host: secrets.PUBLIC_IPV4,
  username: secrets.SSH_USERNAME,
  password: secrets.SSH_PASSWORD,
  privateKey: secrets.SSH_PRIVATE_KEY,
  verbose: true
})

const base = '/opt/platform'
const dir = `${base}/${secrets.ENVIRONMENT}`

await ssh.$`sudo mkdir -p ${dir}`
await ssh.$`sudo chown -R ${secrets.SSH_USERNAME}:${secrets.SSH_USERNAME} ${base}`

await ssh.$`cd ${dir} && docker compose down --remove-orphans`

await ssh.putDirectory('assets', dir)
await ssh.putDirectory('dist', dir)

await ssh.$`cd ${dir} && docker compose up --detach --wait`
