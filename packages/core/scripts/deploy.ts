import { cp } from 'node:fs/promises'
import { EOL } from 'node:os'
import { basename } from 'node:path'
import { rf } from '@oyasaiserver/lib/fs'
import { secrets } from '@oyasaiserver/lib/secrets'
import { NodeSSH } from 'node-ssh'
import { bin } from '../package.json'

if (secrets.ENVIRONMENT === 'local') {
  await cp(bin, `server/${secrets.ENVIRONMENT}/${basename(bin)}`, rf)
  process.exit(0)
}

const ssh = await new NodeSSH().connect({
  host: secrets.PUBLIC_IPV4,
  username: secrets.SSH_USERNAME,
  privateKey: secrets.SSH_PRIVATE_KEY
})

const tmpfile = `/home/${secrets.SSH_USERNAME}/tmp/core`
const path = `/opt/platform/${secrets.ENVIRONMENT}`

await ssh.putFile(bin, tmpfile)

await ssh.execCommand(
  `
      sudo mkdir -p ${path} && \
      sudo mv ${tmpfile} ${path}/core && \
      sudo chmod +x ${path}/core
    `,
  {
    execOptions: {
      pty: true
    },
    stdin: secrets.SSH_PASSWORD + EOL
  }
)

await ssh.execCommand(
  `
    cd /opt/platform/${secrets.ENVIRONMENT} && \
    ./core
  `
)

ssh.dispose()
