import { createSocket } from 'node:dgram'

export function ssdp(): Promise<string> {
  return new Promise((resolve, reject) => {
    const query = Buffer.from(
      'M-SEARCH * HTTP/1.1\r\nHOST: 239.255.255.250:1900\r\nMAN: "ssdp:discover"\r\nMX: 3\r\nST: urn:schemas-upnp-org:device:InternetGatewayDevice:1\r\n\r\n',
      'ascii'
    )

    const socket = createSocket('udp4')

    socket.on('error', reject)

    socket.on('message', (msg: Buffer) => {
      if (/USN: (.*)InternetGatewayDevice:1/.test(msg.toString())) {
        socket.close(() => resolve(msg.toString()))
      }
    })

    socket.on('listening', () => {
      socket.send(query, 0, query.length, 1900, '239.255.255.250')
    })

    socket.bind(Number(process.env.PORT))
  })
}
