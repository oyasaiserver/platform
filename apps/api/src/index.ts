import { env } from 'cloudflare:workers'
import { createConnectRouter } from '@connectrpc/connect'
import {
  type UniversalHandler,
  universalServerRequestFromFetch,
  universalServerResponseToFetch
} from '@connectrpc/connect/protocol'
import { HelloService } from '@oyasaiserver/proto/hello_pb'
import { Hono } from 'hono'
import { bearerAuth } from 'hono/bearer-auth'
import { logger } from 'hono/logger'
import { hello } from './services/hello.ts'

const router = createConnectRouter().service(HelloService, hello)

const handlers = new Map<string, UniversalHandler>(
  router.handlers.map(handler => [handler.requestPath, handler])
)

const app = new Hono<{ Bindings: Cloudflare.Env }>()

app
  .use(logger())
  .use(bearerAuth({ token: env.BEARER }))
  .all('*', async ctx => {
    const { pathname } = new URL(ctx.req.url)
    const handler = handlers.get(pathname)
    if (!handler) {
      return ctx.notFound()
    }
    const req = universalServerRequestFromFetch(ctx.req.raw, {})
    const res = await handler(req)
    return universalServerResponseToFetch(res)
  })

export default app
