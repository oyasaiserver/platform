import { env } from 'cloudflare:workers'
import { createConnectRouter } from '@connectrpc/connect'
import {
  type UniversalHandler,
  universalServerRequestFromFetch,
  universalServerResponseToFetch
} from '@connectrpc/connect/protocol'
import { Hono } from 'hono'
import { bearerAuth } from 'hono/bearer-auth'
import { logger } from 'hono/logger'
import { chatServiceImpl } from './services/chat.ts'
import { ChatService } from '@oyasaiserver/proto/v1/chat_pb'

const router = createConnectRouter().service(ChatService, chatServiceImpl)

const handlers = new Map<string, UniversalHandler>(
  router.handlers.map(handler => [handler.requestPath, handler])
)

const app = new Hono<{ Bindings: Cloudflare.Env }>()

export default app
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
