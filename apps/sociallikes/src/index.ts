import { WorkerEntrypoint } from 'cloudflare:workers'

export default class extends WorkerEntrypoint<Env> {
  override async fetch(request: Request) {
    return new Response('SocialLikes')
  }
}
