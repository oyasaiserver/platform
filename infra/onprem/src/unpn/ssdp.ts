import { EventEmitter } from 'events';
import dgram from 'dgram';

interface SSDPOptions {
  timeout?: number;
  port?: number;
}

export class SSDP extends EventEmitter {
  private socket: dgram.Socket;
  private port: number;
  private timeout: number;

  constructor(options: SSDPOptions = {}) {
    super();
    this.port = options.port || 1900;
    this.timeout = options.timeout || 1800;
    this.socket = dgram.createSocket('udp4');
    this.setupSocket();
  }

  private setupSocket(): void {
    this.socket.on('error', (err) => {
      this.emit('error', err);
    });

    this.socket.on('message', (msg, rinfo) => {
      const message = msg.toString();
      if (message.indexOf('M-SEARCH') === 0) {
        this.handleSearch(message, rinfo);
      } else if (message.indexOf('HTTP/1.1 200 OK') === 0) {
        this.handleResponse(message, rinfo);
      }
    });

    this.socket.bind(this.port);
  }

  private handleSearch(message: string, rinfo: dgram.RemoteInfo): void {
    const lines = message.split('\r\n');
    const target = lines.find(line => line.startsWith('ST:'));
    if (!target) return;

    const st = target.substring(3).trim();
    this.emit('search', st, rinfo);
  }

  private handleResponse(message: string, rinfo: dgram.RemoteInfo): void {
    const lines = message.split('\r\n');
    const location = lines.find(line => line.startsWith('LOCATION:'));
    if (!location) return;

    const url = location.substring(9).trim();
    this.emit('device', { location: url }, rinfo.address);
  }

  search(target: string): SSDP {
    const message = [
      'M-SEARCH * HTTP/1.1',
      'HOST: 239.255.255.250:1900',
      'MAN: "ssdp:discover"',
      `ST: ${target}`,
      'MX: 3',
      '',
      ''
    ].join('\r\n');

    this.socket.send(message, 0, message.length, this.port, '239.255.255.250');
    return this;
  }

  close(): void {
    this.socket.close();
  }
} 