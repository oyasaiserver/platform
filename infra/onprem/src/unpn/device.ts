import { Parser } from 'xml2js';
import { promisify } from 'util';
import { URL } from 'url';

const parser = new Parser();
const parseXmlAsync = (xml: string): Promise<any> => {
  return new Promise((resolve, reject) => {
    parser.parseString(xml, (err: Error | null, result: any) => {
      if (err) reject(err);
      else resolve(result);
    });
  });
};

interface Service {
  serviceType: string;
  controlURL: string;
  SCPDURL: string;
}

interface ServiceInfo {
  service: string;
  SCPDURL: string;
  controlURL: string;
}

interface DeviceInfo {
  services: Service[];
  devices: any[];
}

interface ParsedXml {
  [key: string]: any;
}

export class Device {
  private description: string;
  private services: string[];

  constructor(url: string) {
    this.description = url;
    this.services = [
      'urn:schemas-upnp-org:service:WANIPConnection:1',
      'urn:schemas-upnp-org:service:WANPPPConnection:1'
    ];
  }

  static create(url: string): Device {
    return new Device(url);
  }

  private async getXml(url: string): Promise<ParsedXml> {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to lookup device description');
    }
    const body = await response.text();
    return parseXmlAsync(body);
  }

  async getService(types: string[]): Promise<ServiceInfo> {
    const info = await this.getXml(this.description);
    const services = this.parseDescription(info).services.filter((service: Service) => 
      types.indexOf(service.serviceType) !== -1
    );

    if (services.length === 0 || !services[0]?.controlURL || !services[0]?.SCPDURL) {
      throw new Error('Service not found');
    }

    const base = new URL(info.baseURL || this.description);
    
    const prefix = (u: string) => {
      const uri = new URL(u, base.toString());
      return uri.toString();
    };

    return {
      service: services[0].serviceType,
      SCPDURL: prefix(services[0].SCPDURL),
      controlURL: prefix(services[0].controlURL)
    };
  }

  private parseDescription(info: ParsedXml): DeviceInfo {
    const services: Service[] = [];
    const devices: any[] = [];

    const toArray = (item: any) => Array.isArray(item) ? item : [item];

    const traverseServices = (service: Service) => {
      if (!service) return;
      services.push(service);
    };

    const traverseDevices = (device: any) => {
      if (!device) return;
      devices.push(device);

      if (device.deviceList?.device) {
        toArray(device.deviceList.device).forEach(traverseDevices);
      }

      if (device.serviceList?.service) {
        toArray(device.serviceList.service).forEach(traverseServices);
      }
    };

    traverseDevices(info.device);

    return { services, devices };
  }

  async run(action: string, args: [string, any][]): Promise<any> {
    const info = await this.getService(this.services);

    const body = `<?xml version="1.0"?>
      <s:Envelope 
        xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" 
        s:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/">
        <s:Body>
          <u:${action} xmlns:u=${JSON.stringify(info.service)}>
            ${args.map(([key, value]) => 
              `<${key}>${value === undefined ? '' : value}</${key}>`
            ).join('')}
          </u:${action}>
        </s:Body>
      </s:Envelope>`;

    const response = await fetch(info.controlURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/xml; charset="utf-8"',
        'Content-Length': Buffer.byteLength(body).toString(),
        'Connection': 'close',
        'SOAPAction': JSON.stringify(`${info.service}#${action}`)
      },
      body
    });

    if (!response.ok) {
      throw new Error(`Request failed: ${response.status}`);
    }

    const responseBody = await response.text();
    const parsedBody = await parseXmlAsync(responseBody);

    const soapns = Object.keys(parsedBody).find(key => 
      key.includes('http://schemas.xmlsoap.org/soap/envelope/')
    );

    if (!soapns) {
      throw new Error('Invalid SOAP response');
    }

    return parsedBody[`${soapns}Body`];
  }
} 