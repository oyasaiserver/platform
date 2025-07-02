import type { ServiceImpl } from '@connectrpc/connect'
import { HelloService } from '@oyasaiserver/proto/hello_pb'

export const hello: ServiceImpl<typeof HelloService> = {
  async sayHello(req) {
    return {
      message: `Hello, ${req.name}!`
    }
  }
}
