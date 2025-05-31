import { Client } from 'nat-upnp-ts'

export class Upnp {
  public static async createMapping(port: number): Promise<void> {
    const client = new Client()
    await client.createMapping({
      public: port,
      private: port
    })
    client.close()
  }
}
