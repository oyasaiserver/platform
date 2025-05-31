import { SSDP } from './ssdp';
import { Device } from './device';

interface PortMappingOptions {
  public?: number | string | { port: number; host?: string };
  private?: number | string | { port: number; host?: string };
  protocol?: 'TCP' | 'UDP';
  description?: string;
  ttl?: number | string;
}

interface PortMapping {
  public: {
    host: string;
    port: number;
  };
  private: {
    host: string;
    port: number;
  };
  protocol: string;
  enabled: boolean;
  description: string;
  ttl: number;
  local: boolean;
}

export class Client {
  private ssdp: SSDP;
  private timeout: number;

  constructor() {
    this.ssdp = new SSDP();
    this.timeout = 1800;
  }

  static create(): Client {
    return new Client();
  }

  private normalizeOptions(options: PortMappingOptions): {
    remote: { port: number; host?: string };
    internal: { port: number; host?: string };
  } {
    const toObject = (addr: number | string | { port: number; host?: string } | undefined): { port: number; host?: string } => {
      if (typeof addr === 'number') return { port: addr };
      if (typeof addr === 'string' && !isNaN(Number(addr))) return { port: Number(addr) };
      if (typeof addr === 'object' && addr !== null) return addr;
      return { port: 0 };
    };

    return {
      remote: toObject(options.public),
      internal: toObject(options.private)
    };
  }

  async portMapping(options: PortMappingOptions): Promise<void> {
    const [gateway, address] = await this.findGateway();
    const ports = this.normalizeOptions(options);
    const ttl = typeof options.ttl === 'number' ? options.ttl :
               typeof options.ttl === 'string' && !isNaN(Number(options.ttl)) ? Number(options.ttl) :
               60 * 30;

    await gateway.run('AddPortMapping', [
      ['NewRemoteHost', ports.remote.host],
      ['NewExternalPort', ports.remote.port],
      ['NewProtocol', options.protocol?.toUpperCase() || 'TCP'],
      ['NewInternalPort', ports.internal.port],
      ['NewInternalClient', ports.internal.host || address],
      ['NewEnabled', 1],
      ['NewPortMappingDescription', options.description || 'node:nat:upnp'],
      ['NewLeaseDuration', ttl]
    ]);
  }

  async portUnmapping(options: PortMappingOptions): Promise<void> {
    const [gateway] = await this.findGateway();
    const ports = this.normalizeOptions(options);

    await gateway.run('DeletePortMapping', [
      ['NewRemoteHost', ports.remote.host],
      ['NewExternalPort', ports.remote.port],
      ['NewProtocol', options.protocol?.toUpperCase() || 'TCP']
    ]);
  }

  async getMappings(options: { local?: boolean; description?: string | RegExp } = {}): Promise<PortMapping[]> {
    const [gateway, address] = await this.findGateway();
    const results: PortMapping[] = [];
    let i = 0;
    let end = false;

    while (!end) {
      try {
        const data = await gateway.run('GetGenericPortMappingEntry', [
          ['NewPortMappingIndex', i++]
        ]);

        const key = Object.keys(data).find(k => !/:GetGenericPortMappingEntryResponse/.test(k));
        if (!key) continue;

        const result: PortMapping = {
          public: {
            host: typeof data[key].NewRemoteHost === 'string' ? data[key].NewRemoteHost : '',
            port: parseInt(data[key].NewExternalPort, 10)
          },
          private: {
            host: data[key].NewInternalClient,
            port: parseInt(data[key].NewInternalPort, 10)
          },
          protocol: data[key].NewProtocol.toLowerCase(),
          enabled: data[key].NewEnabled === '1',
          description: data[key].NewPortMappingDescription,
          ttl: parseInt(data[key].NewLeaseDuration, 10),
          local: data[key].NewInternalClient === address
        };

        results.push(result);
      } catch (err) {
        if (i !== 1) {
          end = true;
        }
      }
    }

    return results.filter(item => {
      if (options.local && !item.local) return false;
      if (options.description) {
        if (typeof item.description !== 'string') return false;
        if (options.description instanceof RegExp) {
          return item.description.match(options.description) !== null;
        }
        return item.description.indexOf(options.description as string) !== -1;
      }
      return true;
    });
  }

  async externalIp(): Promise<string> {
    const [gateway] = await this.findGateway();
    const data = await gateway.run('GetExternalIPAddress', []);
    
    const key = Object.keys(data).find(k => !/:GetExternalIPAddressResponse$/.test(k));
    if (!key) throw new Error('Incorrect response');
    
    return data[key].NewExternalIPAddress;
  }

  private findGateway(): Promise<[Device, string]> {
    return new Promise((resolve, reject) => {
      const timeout = setTimeout(() => {
        p.emit('end');
        reject(new Error('timeout'));
      }, this.timeout);

      const p = this.ssdp.search('urn:schemas-upnp-org:device:InternetGatewayDevice:1');

      p.on('device', (info: any, address: string) => {
        p.emit('end');
        clearTimeout(timeout);
        resolve([Device.create(info.location), address]);
      });
    });
  }

  close(): void {
    this.ssdp.close();
  }
} 