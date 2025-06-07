import type { EventEmitter } from 'node:events'

/**
 * Raw SSDP/UPNP response
 * Entire SSDP/UPNP schema is beyond the scope of these typings.
 * Please look up the protocol documentation if you want to do
 * lower level communication.
 */
export type RawResponse = Partial<
  Record<
    string,
    {
      '@': { 'xmlns:u': string }
      [key: string]: unknown
    }
  >
>

// SSDP Types
export type SearchArgs = [Record<string, string>, string]
export type SearchCallback = (...args: SearchArgs) => void
export type SearchEvent = <E extends Events>(
  ev: E,
  ...args: E extends 'device' ? SearchArgs : []
) => boolean
export type Events = 'device' | 'end'
export type Event<E extends Events> = E extends 'device'
  ? SearchCallback
  : () => void
export type EventListener<T> = <E extends Events>(
  ev: E,
  callback: Event<E>
) => T

export interface SsdpEmitter extends EventEmitter {
  removeListener: EventListener<this>
  addListener: EventListener<this>
  once: EventListener<this>
  on: EventListener<this>
  emit: SearchEvent
  _ended?: boolean
}

export interface ISsdp {
  /**
   * Search for a SSDP compatible server on the network
   * @param device Search Type (ST) header, specifying which device to search for
   * @param emitter An existing EventEmitter to emit event on
   * @returns The event emitter provided in Promise, or a newly instantiated one.
   */
  search(device: string, emitter?: SsdpEmitter): SsdpEmitter
  /**
   * Close all sockets
   */
  close(): void
}

// Device Types
export interface Service {
  service: string
  SCPDURL: string
  controlURL: string
}

export interface RawService {
  serviceType: string
  serviceId: string
  controlURL?: string
  eventSubURL?: string
  SCPDURL?: string
}

export interface RawDevice {
  deviceType: string
  presentationURL: string
  friendlyName: string
  manufacturer: string
  manufacturerURL: string
  modelDescription: string
  modelName: string
  modelNumber: string
  modelURL: string
  serialNumber: string
  UDN: string
  UPC: string
  serviceList?: { service: RawService | RawService[] }
  deviceList?: { device: RawDevice | RawDevice[] }
}

export interface IDevice {
  getService(types: string[]): Promise<Service>
  parseDescription(info: { device?: RawDevice }): {
    services: RawService[]
    devices: RawDevice[]
  }
  run(action: string, kvpairs: (string | number)[][]): Promise<RawResponse>
}

// Client Types
export interface Mapping {
  public: { host: string; port: number }
  private: { host: string; port: number }
  protocol: string
  enabled: boolean
  description: string
  ttl: number
  local: boolean
}

export interface StandardOpts {
  public?: number | { port?: number; host?: string }
  private?: number | { port?: number; host?: string }
  protocol?: string
}

export interface NewPortMappingOpts extends StandardOpts {
  description?: string
  ttl?: number
}

export type DeletePortMappingOpts = StandardOpts

export interface GetMappingOpts {
  local?: boolean
  description?: RegExp | string
}
