import { promises as fs } from 'node:fs'
import path from 'node:path'
import { JSDOM } from 'jsdom'
import { Soap } from './soap'

interface DeviceDescription {
  type: string
  id: string
  scpdURL: string
  controlURL: string
  eventSubURL: string
}

interface PortMappingOptions {
  ip: string
  internalPort: number
  externalPort: number
  protocol: string
  description?: string
  lease?: string
  enabled?: boolean
}

interface PortMapping {
  ip: string
  internalPort: number
  externalPort: number
  protocol: string
  description: string
  lease: number
}

function _parseLocation(description: string): string | undefined {
  const regex = /LOCATION:(.*)/.exec(description)
  if (regex?.[1]) {
    return regex[1].trim()
  }
}

async function _sendControlAction(
  instance: InternetGatewayDevice,
  action: string,
  options: Record<string, string | number>
): Promise<Document> {
  const fileBuffer = await fs.readFile(
    path.resolve(__dirname, `../xml/${action}.xml`)
  )
  let file = fileBuffer.toString()
  file = file.replace(
    `<u:${action}>`,
    `<u:${action} xmlns:u="${instance.type}">`
  )
  for (const key in options) {
    file = file.replace(`<${key}>`, `<${key}>${options[key]}`)
  }
  const {
    window: { document }
  } = await JSDOM.fromURL(instance.controlURL, {
    resources: new Soap({
      serviceType: instance.type,
      body: file,
      action
    })
  })
  return document
}

export class InternetGatewayDevice {
  private readonly type: string
  private readonly id: string
  private readonly scpdURL: string
  private readonly controlURL: string
  private readonly eventSubURL: string

  static async fromDescription(
    description: string
  ): Promise<InternetGatewayDevice> {
    const location = _parseLocation(description)
    if (location) {
      const {
        window: { document }
      } = await JSDOM.fromURL(location)

      const services = Array.from(document.querySelectorAll('service'))
      const service = services.find(service => {
        const serviceType =
          service.querySelector('serviceType')?.textContent || ''
        return /WANIPConnection|WANPPPConnection/.test(serviceType)
      })

      const { origin } = new URL(location)

      if (service) {
        return new InternetGatewayDevice({
          type: service.querySelector('serviceType')?.textContent || '',
          id: service.querySelector('serviceId')?.textContent || '',
          scpdURL:
            origin + (service.querySelector('SCPDURL')?.textContent || ''),
          controlURL:
            origin + (service.querySelector('controlURL')?.textContent || ''),
          eventSubURL:
            origin + (service.querySelector('eventSubURL')?.textContent || '')
        })
      }
      throw `WANIPConnection and WANPPPConnection Service could not be found from the given description document at ${location}`
    }
    throw `Location could not be found from the given description:\n\n${description}`
  }

  constructor(deviceDescription: DeviceDescription) {
    this.type = deviceDescription.type
    this.id = deviceDescription.id
    this.scpdURL = deviceDescription.scpdURL
    this.controlURL = deviceDescription.controlURL
    this.eventSubURL = deviceDescription.eventSubURL
  }

  async addPortMapping({
    ip,
    internalPort,
    externalPort,
    protocol,
    description = '',
    lease = '',
    enabled = true
  }: PortMappingOptions): Promise<boolean> {
    try {
      await _sendControlAction(this, 'AddPortMapping', {
        NewExternalPort: externalPort,
        NewProtocol: protocol,
        NewInternalPort: internalPort,
        NewInternalClient: ip,
        NewPortMappingDescription: description,
        NewLeaseDuration: lease,
        NewEnabled: enabled ? 1 : 0
      })
      return true
    } catch (error) {
      return false
    }
  }

  async deletePortMapping({
    externalPort,
    protocol
  }: { externalPort: number; protocol: string }): Promise<boolean> {
    try {
      await _sendControlAction(this, 'DeletePortMapping', {
        NewExternalPort: externalPort,
        NewProtocol: protocol
      })
      return true
    } catch (error) {
      return false
    }
  }

  async getExternalIPAddress(): Promise<string> {
    const doc = await _sendControlAction(this, 'GetExternalIPAddress')
    return doc.querySelector('NewExternalIPAddress')?.textContent || ''
  }

  async getPortMappingList(list: PortMapping[] = []): Promise<PortMapping[]> {
    try {
      const portmap = await this.getPortMapping(list.length)
      list.push(portmap)
      return this.getPortMappingList(list)
    } catch (error) {
      return list
    }
  }

  async getPortMapping(index = 0): Promise<PortMapping> {
    const doc = await _sendControlAction(this, 'GetGenericPortMappingEntry', {
      NewPortMappingIndex: index
    })
    return {
      ip: doc.querySelector('NewInternalClient')?.textContent || '',
      internalPort: Number(
        doc.querySelector('NewInternalPort')?.textContent || '0'
      ),
      externalPort: Number(
        doc.querySelector('NewExternalPort')?.textContent || '0'
      ),
      protocol: doc.querySelector('NewProtocol')?.textContent || '',
      description:
        doc.querySelector('NewPortMappingDescription')?.textContent || '',
      lease: Number(doc.querySelector('NewLeaseDuration')?.textContent || '0')
    }
  }
}
