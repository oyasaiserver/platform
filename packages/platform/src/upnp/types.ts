import type { EventEmitter } from 'node:events'

/**
 * Raw SSDP/UPNP repsonse
 * Entire SSDP/UPNP schema is beyond the scope of these typings.
 * Please look up the protol documentation if you wanna do
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

type SearchArgs = [Record<string, string>, string]
export type SearchCallback = (...args: SearchArgs) => void
type SearchEvent = <E extends Events>(
  ev: E,
  ...args: E extends 'device' ? SearchArgs : []
) => boolean
type Events = 'device' | 'end'
type Event<E extends Events> = E extends 'device' ? SearchCallback : () => void
type EventListener<T> = <E extends Events>(ev: E, callback: Event<E>) => T

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
