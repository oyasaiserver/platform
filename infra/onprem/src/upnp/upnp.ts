import { InternetGatewayDevice } from './device'
import { ssdp } from './ssdp'

export class UPnP {
  static async discover(): Promise<InternetGatewayDevice> {
    const description = await ssdp()
    return InternetGatewayDevice.fromDescription(description)
  }
}
