import { sshConnection } from '@oyasaiserver/lib/ssh'
import { secrets } from '@oyasaiserver/secrets'
import { prepare, sendWebhookNotification } from './common.ts'

await prepare()

await using ssh = await sshConnection({
  host: secrets.PUBLIC_IPV4,
  username: secrets.SSH_USERNAME,
  password: secrets.SSH_PASSWORD,
  privateKey: secrets.SSH_PRIVATE_KEY,
  verbose: true
})

await sendWebhookNotification('start')

try {
  const base = '/opt/platform'
  const dir = `${base}/${secrets.ENVIRONMENT}`

  await ssh.$`sudo mkdir -p ${dir}`
  await ssh.$`sudo chmod -R 777 ${dir}`

  await ssh.putDirectory('dist', dir)

  await ssh.$`cd ${dir} && docker compose pull && docker compose up --detach --remove-orphans --wait`

  await sendWebhookNotification('end')
} catch {
  await sendWebhookNotification('error')
}
