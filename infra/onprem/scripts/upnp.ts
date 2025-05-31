import { Client } from 'nat-upnp-ts'

const client = new Client()

await client.createMapping({
  public: 25565,
  private: 25565
})

client.close()
