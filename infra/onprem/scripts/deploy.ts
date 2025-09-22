import { directory } from '@oyasaiserver/lib/directory'
import { sshConnection } from '@oyasaiserver/lib/ssh'
import { Yaml } from '@oyasaiserver/lib/yaml'
import { compose } from '@oyasaiserver/onprem'
import { secrets } from '@oyasaiserver/secrets'
import { execSync } from 'node:child_process'
import { cp, glob, mkdir, rm, writeFile } from 'node:fs/promises'
import { basename, join } from 'node:path'
import { exit } from 'node:process'

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

await writeFile('dist/compose.yaml', Yaml.stringify(compose))

if (secrets.ENVIRONMENT === 'local') {
  await mkdir(secrets.ENVIRONMENT, rf)
  await cp('dist', secrets.ENVIRONMENT, rf)
  execSync('docker compose up --detach --remove-orphans --wait', {
    cwd: secrets.ENVIRONMENT
  })
  exit(0)
}

await using ssh = await sshConnection({
  host: secrets.PUBLIC_IPV4,
  username: secrets.SSH_USERNAME,
  password: secrets.SSH_PASSWORD,
  privateKey: secrets.SSH_PRIVATE_KEY,
  verbose: true
})

const base = '/opt/platform'
const dir = `${base}/${secrets.ENVIRONMENT}`

await ssh.$`sudo mkdir -p ${dir}`
await ssh.$`sudo chmod -R 777 ${dir}`

await ssh.putDirectory('dist', dir)

await ssh.$`cd ${dir} && docker compose pull && docker compose up --detach --remove-orphans --wait`
