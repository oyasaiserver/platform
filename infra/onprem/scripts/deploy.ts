import { secrets } from '@oyasaiserver/lib/secrets'
import { useSsh } from '@oyasaiserver/lib/ssh'
import { $, spinner } from 'zx'
import { cp, glob, rm } from 'node:fs/promises'
import { directory } from '@oyasaiserver/lib/directory'
import { runtimeSecrets } from '@oyasaiserver/schema/runtime-secrets'
import { download } from '@oyasaiserver/lib/fetch'
import { asEnvFile } from '@oyasaiserver/lib/env'
import plugins from '../plugins.json' with { type: 'json' }
import { basename, format, join } from 'node:path'
import { rf, writeFileSafe } from '@oyasaiserver/lib/fs'
import { exit } from 'node:process'
import { config } from '@oyasaiserver/onprem/config'

await spinner('prepare', async () => {
  await writeFileSafe('dist/.env', asEnvFile(runtimeSecrets.parse(secrets)))
  await cp(
    `${directory.root}/gen/compose/compose.${secrets.ENVIRONMENT}.yaml`,
    'dist/compose.yaml'
  )
  const dir = 'dist/minecraft-main/plugins'
  const jars = glob(`${directory.root}/plugins/*/build/libs/*.jar`)
  for await (const jar of jars) {
    await cp(jar, join(dir, basename(jar)))
  }
  for (const { name, url } of plugins) {
    await download(url, format({ dir, name, ext: '.jar' }))
  }
})

if (secrets.ENVIRONMENT === 'local') {
  const dir = `server/${secrets.ENVIRONMENT}`
  for await (const plugin of glob('server/**/plugins/*.jar')) {
    await rm(plugin)
  }
  await cp('assets/overlays', dir, rf)
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

await ssh.$`find ${secrets.ENVIRONMENT} -type f -name "*.jar" -path "*/plugins/*" -delete`

await ssh.putDirectory('assets/overlays', dir)

await ssh.putDirectory('dist', dir)

await ssh.$`cd ${dir} && docker compose down --remove-orphans`

await ssh.$`sudo upnpc -r ${[
  config.port.ssh,
  config.port.http,
  config.port.https,
  config.services.minecraft.port[secrets.ENVIRONMENT]
]
  .map(port => `${port} tcp`)
  .join(' ')}`

await ssh.$`cd ${dir} && docker compose up --detach --wait`
