import type { ExecutionContext, Request } from '@cloudflare/workers-types'

export default {
  fetch(request: Request, env: unknown, ctx: ExecutionContext) {
    return new Response('OK')
  }
}
