import { URL } from 'node:url'
import { XMLParser } from 'fast-xml-parser'
import type { RawDevice, RawResponse, RawService, Service } from './types.ts'

export class Device {
  private readonly services = [
    'urn:schemas-upnp-org:service:WANIPConnection:1',
    'urn:schemas-upnp-org:service:WANIPConnection:2',
    'urn:schemas-upnp-org:service:WANPPPConnection:1'
  ]
  private readonly description: string

  constructor(description: string) {
    this.description = description
  }

  private async getXml(url: string): Promise<RawResponse> {
    try {
      const res = await fetch(url)
      const data = await res.text()
      return new XMLParser().parse(data)
    } catch {
      throw new Error('Failed to lookup device description')
    }
  }

  public async getService(types: string[]): Promise<Service> {
    return this.getXml(this.description).then(({ root: xml }) => {
      if (!xml) {
        throw new Error('Invalid XML response')
      }

      const services = this.parseDescription({
        device: xml.device as RawDevice
      }).services.filter(({ serviceType }) => types.includes(serviceType))

      if (!services[0] || !services[0].controlURL || !services[0].SCPDURL) {
        throw new Error('Service not found')
      }

      const baseUrl = new URL(xml.baseURL || '', this.description)

      function prefix(url: string): string {
        return new URL(url, baseUrl).toString()
      }

      return {
        service: services[0].serviceType,
        SCPDURL: prefix(services[0].SCPDURL),
        controlURL: prefix(services[0].controlURL)
      }
    })
  }

  public async run(
    action: string,
    args: (string | number)[][]
  ): Promise<RawResponse> {
    const info = await this.getService(this.services)

    const body = `<?xml version="1.0"?><s:Envelope xmlns:s="http://schemas.xmlsoap.org/soap/envelope/" s:encodingStyle="http://schemas.xmlsoap.org/soap/encoding/"><s:Body><u:${action} xmlns:u=${JSON.stringify(info.service)}>${args.reduce(
      (p, [a, b]) => `${p}<${a ?? ''}>${b ?? ''}</${a ?? ''}>`,
      ''
    )}</u:${action}></s:Body></s:Envelope>`

    const res = await fetch(info.controlURL, {
      method: 'POST',
      headers: {
        'Content-Type': 'text/xml; charset="utf-8"',
        'Content-Length': `${Buffer.byteLength(body)}`,
        Connection: 'close',
        SOAPAction: JSON.stringify(`${info.service}#${action}`)
      },
      body
    })
    const data = await res.text()
    return new XMLParser({ removeNSPrefix: true }).parse(data).Envelope.Body
  }

  public parseDescription(info: { device?: RawDevice }): {
    services: RawService[]
    devices: RawDevice[]
  } {
    const services: RawService[] = []
    const devices: RawDevice[] = []

    function traverseDevices(device?: RawDevice): void {
      if (!device) return
      const serviceList = device.serviceList?.service ?? []
      const deviceList = device.deviceList?.device ?? []
      devices.push(device)

      if (Array.isArray(serviceList)) {
        services.push(...serviceList)
      } else {
        services.push(serviceList)
      }

      if (Array.isArray(deviceList)) {
        deviceList.forEach(traverseDevices)
      } else {
        traverseDevices(deviceList)
      }
    }

    traverseDevices(info.device)

    return {
      services,
      devices
    }
  }
}
