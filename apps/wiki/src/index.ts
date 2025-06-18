import { WorkerEntrypoint } from 'cloudflare:workers'

export default class extends WorkerEntrypoint<Env> {
  override fetch(request: Request) {
    return this.env.assets.fetch(request)
  }
}
