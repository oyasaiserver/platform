import { secrets } from '@oyasaiserver/lib/secrets'
import { useSsh } from '@oyasaiserver/lib/ssh'
import { cp, glob, mkdir, rm, writeFile } from 'node:fs/promises'
import { directory } from '@oyasaiserver/lib/directory'
import { exit } from 'node:process'
import { basename, join } from 'node:path'
import { createOnpremInfra } from '@oyasaiserver/onprem'
import { $, YAML } from 'zx'
import { hashDirectory } from '@oyasaiserver/lib/hash'

const rf = {
  recursive: true,
  force: true
} as const

await rm('dist', rf)

const jars = glob(`${directory.root}/plugins/*/build/libs/*.jar`)
for await (const jar of jars) {
  const name = `${basename(jar).split('-')[0]}.jar`
  await cp(jar, join('dist/minecraft-main/plugins', name))
}

await cp('assets', 'dist', rf)

const onpremInfra = createOnpremInfra({
  sentinel: {
    mineacraftMain: await hashDirectory('dist/minecraft-main')
  }
})

await writeFile('dist/compose.yaml', YAML.stringify(onpremInfra))

if (secrets.ENVIRONMENT === 'local') {
  await mkdir(secrets.ENVIRONMENT, rf)
  await cp('dist', secrets.ENVIRONMENT, rf)
  await $({
    cwd: secrets.ENVIRONMENT
  })`docker compose up --detach --remove-orphans --wait`
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
await ssh.$`sudo chmod 777 ${dir}`

await ssh.putDirectory('dist', dir)

await ssh.$`cd ${dir} && docker compose up --detach --remove-orphans --wait`
