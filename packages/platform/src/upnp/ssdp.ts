import { type Socket, createSocket } from 'node:dgram'
import { EventEmitter } from 'node:events'
import { type NetworkInterfaceInfo, networkInterfaces } from 'node:os'
import type { ISsdp, SearchCallback, SsdpEmitter } from './types'

export class Ssdp implements ISsdp {
  private sourcePort = this.options?.sourcePort || 0
  private bound = false
  private boundCount = 0
  private closed = false

  private readonly queue: [string, SsdpEmitter][] = []
  private readonly multicast = '239.255.255.250'
  private readonly port = 1900
  private readonly sockets
  private readonly ssdpEmitter: SsdpEmitter = new EventEmitter()

  constructor(private options?: { sourcePort?: number }) {
    // Create sockets on all external interfaces
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
      // Ignore messages after closing sockets
      if (this.closed) return

      // Parse response
      this.parseResponse(
        message.toString(),
        socket.address as unknown as string
      )
    })

    // Bind in next tick (sockets should be me in this.sockets array)
    process.nextTick((): void => {
      // Unqueue this._queue once all sockets are ready
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

      // On error - remove socket from list and execute items from queue
      socket.once('error', () => {
        socket.close()
        this.sockets.splice(this.sockets.indexOf(socket), 1)
        onready()
      })

      socket.address = iface.address
      socket.bind(this.sourcePort, iface.address)
    })

    return socket
  }

  private parseResponse(response: string, addr: string): void {
    // Ignore incorrect packets
    if (!/^(HTTP|NOTIFY)/m.test(response)) return

    const headers = parseMimeHeader(response)

    // We are only interested in messages that can be matched against the original
    // search target
    if (!headers.st) return

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

    // Send query on each socket
    for (const socket of this.sockets) {
      socket.send(query, 0, query.length, this.port, this.multicast)
    }

    const ondevice: SearchCallback = (headers, address) => {
      if (!emitter || emitter._ended || headers.st !== device) return

      emitter.emit('device', headers, address)
    }
    this.ssdpEmitter.on('device', ondevice)

    // Detach listener after receiving 'end' event
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
  const lines = headerStr.split(/\r\n/g)

  // Parse headers from lines to hashmap
  return lines.reduce<Record<string, string>>((headers, line) => {
    const [_, key, value] = line.match(/^([^:]*)\s*:\s*(.*)$/) ?? []
    if (key && value) {
      headers[key.toLowerCase()] = value
    }
    return headers
  }, {})
}
