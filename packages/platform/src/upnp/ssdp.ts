import { createSocket, type Socket } from 'node:dgram'
import { EventEmitter } from 'node:events'
import type { IPVersion, SocketAddress } from 'node:net'
import { type NetworkInterfaceInfo, networkInterfaces } from 'node:os'
import type { SsdpEmitter } from './types.ts'

export class Ssdp {
  private bound = false
  private boundCount = 0
  private closed = false

  private readonly sourcePort = 0
  private readonly queue: [string, SsdpEmitter][] = []
  private readonly multicast = '239.255.255.250'
  private readonly port = 1900
  private readonly sockets
  private readonly ssdpEmitter: SsdpEmitter = new EventEmitter()

  public constructor() {
    const interfaces = networkInterfaces()
    this.sockets = Object.keys(interfaces).reduce<Socket[]>(
      (arr, key) =>
        arr.concat(
          interfaces[key]
            ?.filter(item => !item.internal)
            .map(item => this.createSocket(item)) ?? []
        ),
      []
    )
  }

  private createSocket(iface: NetworkInterfaceInfo): Socket {
    const socket = createSocket(iface.family === 'IPv4' ? 'udp4' : 'udp6')
    socket.on('message', message => {
      if (this.closed) {
        return
      }
      this.parseResponse(message.toString(), socket.address().address)
    })

    process.nextTick((): void => {
      const onready = (): void => {
        if (this.boundCount < this.sockets.length) return

        this.bound = true
        for (const [device, emitter] of this.queue) {
          this.search(device, emitter)
        }
      }

      socket.on('listening', () => {
        this.boundCount++
        onready()
      })

      socket.once('error', () => {
        socket.close()
        this.sockets.splice(this.sockets.indexOf(socket), 1)
        onready()
      })

      socket.address = (): SocketAddress => {
        return {
          address: iface.address,
          family: iface.family.toLowerCase() as IPVersion,
          port: this.sourcePort,
          flowlabel: 0
        }
      }
      socket.bind(this.sourcePort, iface.address)
    })

    return socket
  }

  private parseResponse(response: string, addr: string): void {
    if (!/^(HTTP|NOTIFY)/m.test(response)) {
      return
    }
    const headers = parseMimeHeader(response)
    if (!headers.st) {
      return
    }
    this.ssdpEmitter.emit('device', headers, addr)
  }

  public search(device: string, emitter: SsdpEmitter): SsdpEmitter {
    if (!this.bound) {
      this.queue.push([device, emitter])
      return emitter
    }

    const query = Buffer.from(
      `M-SEARCH * HTTP/1.1\r\nHOST: ${this.multicast}:${this.port}\r\nMAN: "ssdp:discover"\r\nMX: 1\r\nST: ${device}\r\n\r\n`
    )

    for (const socket of this.sockets) {
      socket.send(query, 0, query.length, this.port, this.multicast)
    }

    function ondevice(headers: Record<string, string>, address: string): void {
      if (!emitter || emitter._ended || headers.st !== device) {
        return
      }
      emitter.emit('device', headers, address)
    }

    this.ssdpEmitter.on('device', ondevice)

    emitter.once('end', () =>
      this.ssdpEmitter.removeListener('device', ondevice)
    )

    return emitter
  }

  public close(): void {
    for (const socket of this.sockets) {
      socket.close()
    }
    this.closed = true
  }
}

function parseMimeHeader(headerStr: string): Record<string, string> {
  const headers: Record<string, string> = {}
  const lines = headerStr.split(/\r\n/g)
  for (const line of lines) {
    const [_, key, value] = line.match(/^([^:]*)\s*:\s*(.*)$/) || []
    if (key && value) {
      headers[key.toLowerCase()] = value
    }
  }
  return headers
}
