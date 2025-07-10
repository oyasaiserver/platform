import { cp } from 'node:fs/promises'
import { basename } from 'node:path'
import { rf } from '@oyasaiserver/lib/fs'
import { secrets } from '@oyasaiserver/lib/secrets'
import { useSsh } from '@oyasaiserver/lib/ssh'
import packageJson from '../package.json' with { type: 'json' }

if (secrets.ENVIRONMENT === 'local') {
  await cp(
    packageJson.bin,
    `server/${secrets.ENVIRONMENT}/${basename(packageJson.bin)}`,
    rf
  )
  process.exit(0)
}

await using ssh = await useSsh({
  host: secrets.PUBLIC_IPV4,
  username: secrets.SSH_USERNAME,
  password: secrets.SSH_PASSWORD,
  privateKey: secrets.SSH_PRIVATE_KEY,
  verbose: true
})

await ssh.$`sudo mkdir -p /opt/platform/${secrets.ENVIRONMENT}`
await ssh.$`sudo chown -R ${secrets.SSH_USERNAME}:${secrets.SSH_USERNAME} /opt/platform`

await ssh.sftp(packageJson.bin, `/opt/platform/${secrets.ENVIRONMENT}/core`)

await ssh.$`sudo chmod +x /opt/platform/${secrets.ENVIRONMENT}/core`
await ssh.$`cd /opt/platform/${secrets.ENVIRONMENT} && ./core`
