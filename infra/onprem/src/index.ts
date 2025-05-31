import { UPnP } from './upnp/upnp'

const device = await UPnP.discover()

console.log(await device.getPortMappingList())
