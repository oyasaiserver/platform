import { networkInterfaces } from 'node:os'
import { Client } from '../src/unpn/client'

const client = Client.create()
console.log(client)

export function getLocalIp(): string {
  const interfaces = networkInterfaces()
  for (const interfaceName of Object.keys(interfaces)) {
    const iface = interfaces[interfaceName]
    if (!iface) {
      continue
    }
    for (const alias of iface) {
      if (alias.family === 'IPv4' && !alias.internal) {
        return alias.address
      }
    }
  }
  return ''
}
