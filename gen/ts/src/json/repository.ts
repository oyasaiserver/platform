import { z } from '@oyasaiserver/lib/zod'

export const repository = z
  .object({
    organization: z.literal('oyasaiserver'),
    name: z.literal('platform'),
    description: z.literal('Proof of concept for stateless Minecraft server.'),
    homepage: z.literal('https://oyasai.io'),
    url: z.literal('https://github.com/oyasaiserver/platform'),
    icon: z.literal('https://avatars.githubusercontent.com/oyasaiserver')
  })
  .strict()
  .readonly()

export type Repository = z.infer<typeof repository>
