import type { ServiceImpl } from '@connectrpc/connect'
import { ChatService } from '@oyasaiserver/proto/v1/chat_pb'
import { toHiragana } from '@koozaki/romaji-conv'
import { fetchJsonWithSchema } from '@oyasaiserver/lib/fetch'
import { z } from 'zod'

const url = new URL('https://www.google.com/transliterate')
const schema = z.tuple([z.string(), z.string().array()]).array()

export const chatServiceImpl: ServiceImpl<typeof ChatService> = {
  async transliterate(req) {
    url.searchParams.set('langpair', 'ja-Hira|ja')
    url.searchParams.set('text', toHiragana(req.romaji))
    const json = await fetchJsonWithSchema(schema, url)
    return {
      transliterated: json.reduce((acc, [, variants]) => acc + variants[0], '')
    }
  }
}
