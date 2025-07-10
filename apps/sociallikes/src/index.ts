import { WorkerEntrypoint } from 'cloudflare:workers'

export default class extends WorkerEntrypoint<Env> {
  override async fetch() {
    return new Response('SocialLikes')
  }
}
