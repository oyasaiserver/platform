import { secrets } from '@oyasaiserver/lib/secrets'
import { useSsh } from '@oyasaiserver/lib/ssh'
import { $ } from 'zx'
import { cp, glob, rm } from 'node:fs/promises'
import { directory } from '@oyasaiserver/lib/directory'
import { runtimeSecrets } from '@oyasaiserver/schema/runtime-secrets'
import { asEnvFile } from '@oyasaiserver/lib/env'
import { basename, join } from 'node:path'
import { rf, writeFileSafe } from '@oyasaiserver/lib/fs'
import { exit } from 'node:process'

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

const jars = glob(`${directory.root}/plugins/*/build/libs/*.jar`)
for await (const jar of jars) {
  await cp(jar, join(paths.dist, paths.plugins, basename(jar)))
}

if (secrets.ENVIRONMENT === 'local') {
  const dir = `server/${secrets.ENVIRONMENT}`
  // TODO: remove when REMOVE_OLD_MODS is on
  for await (const plugin of glob(`${dir}/**/plugins/*.jar`)) {
    await rm(plugin)
  }
  await cp('assets', dir, rf)
  await cp('dist', dir, rf)
  await $({
    cwd: dir,
    verbose: true
  })`docker compose down --remove-orphans && docker compose up --detach --wait`
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

// TODO: remove when REMOVE_OLD_MODS is on
await ssh.$`find ${dir} -type f -name "*.jar" -path "*/plugins/*" -delete`

await ssh.putDirectory('assets', dir)

await ssh.putDirectory('dist', dir)

await ssh.$`cd ${dir} && docker compose up --detach --wait`
