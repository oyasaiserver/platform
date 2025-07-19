import { secrets } from '@oyasaiserver/lib/secrets'
import { useSsh } from '@oyasaiserver/lib/ssh'
import { $, spinner } from 'zx'
import { cp, glob, mkdir } from 'node:fs/promises'
import { directory } from '@oyasaiserver/lib/directory'
import { runtimeSecrets } from '@oyasaiserver/schema/runtime-secrets'
import { download } from '@oyasaiserver/lib/download'
import { asEnvFile } from '@oyasaiserver/lib/env'
import plugins from '../plugins.json' with { type: 'json' }
import { basename, format, join } from 'node:path'
import { rf, writeFileSafe } from '@oyasaiserver/lib/fs'
import { exit } from 'node:process'
import { config } from '@oyasaiserver/onprem/config'

await spinner('prepare', async () => {
  await writeFileSafe(`dist/.env`, asEnvFile(runtimeSecrets.parse(secrets)))
  await cp(
    `${directory.root}/gen/compose/compose.${secrets.ENVIRONMENT}.yaml`,
    `dist/compose.yaml`
  )
  const dir = 'assets/overlays/minecraft-main/plugins'
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
  await mkdir(dir, rf)
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

await ssh.sftpdir('assets/overlays', dir)

await ssh.sftpdir('dist', dir)

await ssh.$`cd ${dir} && docker compose down --remove-orphans`

for (const port of [
  config.port.http,
  config.port.https,
  config.services.minecraft.port[secrets.ENVIRONMENT]
]) {
  await ssh.$`sudo upnpc -d $(hostname -I | awk '{print $1}') ${port} TCP || true`
}

await ssh.$`cd ${dir} && docker compose up --detach --wait`
