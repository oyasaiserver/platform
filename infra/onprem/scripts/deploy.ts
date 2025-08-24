import { secrets } from '@oyasaiserver/lib/secrets'
import { useSsh } from '@oyasaiserver/lib/ssh'
import { cp, glob, rm, writeFile } from 'node:fs/promises'
import { directory } from '@oyasaiserver/lib/directory'
import { exit } from 'node:process'
import { join } from 'node:path'
import { basename } from 'node:path'
import { onpremInfra } from '@oyasaiserver/onprem'
import { YAML } from 'zx'

if (secrets.ENVIRONMENT === 'local') {
  console.error('This script should not be run in the local environment.')
  exit(1)
}

const paths = {
  dist: 'dist',
  assets: 'assets',
  plugins: 'minecraft-main/plugins'
} as const

await rm(paths.dist, {
  recursive: true,
  force: true
})

const jars = glob(`${directory.root}/plugins/*/build/libs/*.jar`)
for await (const jar of jars) {
  const name = `${basename(jar).split('-')[0]}.jar`
  await cp(jar, join(paths.dist, paths.plugins, name))
}

await writeFile('dist/compose.yaml', YAML.stringify(onpremInfra))

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
