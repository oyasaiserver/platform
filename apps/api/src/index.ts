import { WorkerEntrypoint } from 'cloudflare:workers'
import { createConnectRouter } from '@connectrpc/connect'
import {
  type UniversalHandler,
  universalServerRequestFromFetch,
  universalServerResponseToFetch
} from '@connectrpc/connect/protocol'
import { HelloService } from '@oyasaiserver/proto/hello_pb'
import { hello } from './services/hello.ts'

export default class extends WorkerEntrypoint<Env> {
  private readonly router = createConnectRouter()
  private readonly handlers = new Map<string, UniversalHandler>()

  public constructor(ctx: ExecutionContext, env: Env) {
    super(ctx, env)
    this.router.service(HelloService, hello)
    for (const handler of this.router.handlers) {
      this.handlers.set(handler.requestPath, handler)
    }
  }

  public override async fetch(request: Request) {
    const { pathname } = new URL(request.url)
    const handler = this.handlers.get(pathname)
    if (!handler) {
      return new Response('Not Found', {
        status: 404
      })
    }
    const universalServerRequest = universalServerRequestFromFetch(request, {})
    const universalServerResponse = await handler(universalServerRequest)
    return universalServerResponseToFetch(universalServerResponse)
  }
}
