import { EventEmitter } from 'node:events'
import { ensure } from '../utils.ts'
import { Device } from './device.ts'
import { Ssdp } from './ssdp.ts'
import type {
  DeletePortMappingOpts,
  GetMappingOpts,
  Mapping,
  NewPortMappingOpts,
  RawResponse,
  StandardOpts
} from './types.ts'

export class UpnpClient {
  private readonly timeout: number
  private readonly ssdp = new Ssdp()

  constructor(options: { timeout?: number } = {}) {
    this.timeout = options.timeout || 1800
  }

  public async createMapping(
    options: NewPortMappingOpts
  ): Promise<RawResponse> {
    return this.getGateway().then(({ gateway, address }) => {
      const ports = normalizeOptions(options)
      return gateway.run('AddPortMapping', [
        ['NewRemoteHost', ports.remote.host || ''],
        ['NewExternalPort', ports.remote.port || 0],
        [
          'NewProtocol',
          options.protocol ? options.protocol.toUpperCase() : 'TCP'
        ],
        ['NewInternalPort', ports.internal.port || 0],
        ['NewInternalClient', ports.internal.host || address],
        ['NewEnabled', 1],
        ['NewPortMappingDescription', options.description || 'node:nat:upnp'],
        ['NewLeaseDuration', options.ttl ?? 60 * 30]
      ])
    })
  }

  public async removeMapping(
    options: DeletePortMappingOpts
  ): Promise<RawResponse> {
    return this.getGateway().then(({ gateway }) => {
      const ports = normalizeOptions(options)

      return gateway.run('DeletePortMapping', [
        ['NewRemoteHost', ports.remote.host || ''],
        ['NewExternalPort', ports.remote.port || 0],
        [
          'NewProtocol',
          options.protocol ? options.protocol.toUpperCase() : 'TCP'
        ]
      ])
    })
  }

  public async getMappings(options: GetMappingOpts = {}): Promise<Mapping[]> {
    const { gateway, address } = await this.getGateway()
    let i = 0
    let end = false
    const results: Mapping[] = []

    while (true) {
      const data = await gateway
        .run('GetGenericPortMappingEntry', [['NewPortMappingIndex', i++]])
        .catch(() => {
          if (i !== 1) {
            end = true
          }
          return undefined
        })

      if (end || !data) break

      const key = Object.keys(data).find(k =>
        /^GetGenericPortMappingEntryResponse/.test(k)
      )

      if (!key) {
        throw new Error('Incorrect response')
      }

      const res = data[key] as Record<string, string>

      if (
        !res.NewProtocol ||
        !res.NewPortMappingDescription ||
        !res.NewLeaseDuration
      ) {
        throw new Error('Invalid response data')
      }

      const result: Mapping = {
        description: res.NewPortMappingDescription,
        enabled: res.NewEnabled === '1',
        local: false,
        private: {
          host: res.NewInternalClient || '',
          port: Number.parseInt(ensure(res.NewInternalPort), 10)
        },
        protocol: res.NewProtocol.toLowerCase(),
        public: {
          host: res.NewRemoteHost || '',
          port: Number.parseInt(ensure(res.NewExternalPort), 10)
        },
        ttl: Number.parseInt(res.NewLeaseDuration, 10)
      }
      result.local = result.private.host === address

      if (options.local && !result.local) {
        continue
      }

      if (options.description) {
        if (options.description instanceof RegExp) {
          if (!options.description.test(result.description)) continue
        } else {
          if (result.description.indexOf(options.description) === -1) continue
        }
      }

      results.push(result)
    }

    return results
  }

  public async getPublicIp(): Promise<string> {
    return this.getGateway().then(async ({ gateway }) => {
      const data = await gateway.run('GetExternalIPAddress', [])

      const key = Object.keys(data || {}).find(k =>
        /^GetExternalIPAddressResponse$/.test(k)
      )

      if (!key || !data[key]) throw new Error('Incorrect response')
      return data[key].NewExternalIPAddress as string
    })
  }

  public async getGateway(): Promise<{
    gateway: Device
    address: string
  }> {
    let timeouted = false
    const p = this.ssdp.search(
      'urn:schemas-upnp-org:device:InternetGatewayDevice:1',
      new EventEmitter()
    )

    return new Promise<{ gateway: Device; address: string }>((s, r) => {
      const timeout = setTimeout(() => {
        timeouted = true
        p.emit('end')
        r(new Error('Connection timed out while searching for the gateway.'))
      }, this.timeout)
      p.on('device', (info, address) => {
        if (timeouted) return
        p.emit('end')
        clearTimeout(timeout)

        if (!info.location) {
          r(new Error('Invalid device info'))
          return
        }

        // Create gateway
        s({ address, gateway: new Device(info.location) })
      })
    })
  }

  public close(): void {
    this.ssdp.close()
  }
}

function normalizeOptions(options: StandardOpts): {
  remote: { port?: number; host?: string }
  internal: { port?: number; host?: string }
} {
  function toObject(addr: StandardOpts['public']): {
    port?: number
    host?: string
  } {
    if (typeof addr === 'number') return { port: addr }
    if (typeof addr === 'object') return addr
    return {}
  }

  return {
    internal: toObject(options.private),
    remote: toObject(options.public)
  }
}
