import { secrets } from '@oyasaiserver/lib/secrets'
import { useSsh } from '@oyasaiserver/lib/ssh'
import { cp, glob, mkdir, rm, writeFile } from 'node:fs/promises'
import { directory } from '@oyasaiserver/lib/directory'
import { exit } from 'node:process'
import { basename, join } from 'node:path'
import { onpremInfra } from '@oyasaiserver/onprem'
import { $, YAML } from 'zx'
import type { CopyOptions, MakeDirectoryOptions } from 'node:fs'

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

if (secrets.ENVIRONMENT === 'local') {
  const options: MakeDirectoryOptions & CopyOptions = { recursive: true }
  await mkdir(secrets.ENVIRONMENT, options)
  await cp('dist', secrets.ENVIRONMENT, options)
  await cp('assets', secrets.ENVIRONMENT, options)
  await $({
    cwd: secrets.ENVIRONMENT
  })`docker compose up --detach --wait`
  exit(0)
}

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
