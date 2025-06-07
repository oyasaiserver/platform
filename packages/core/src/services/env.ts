import { parse } from '@dotenvx/dotenvx'
import type { Env as EnvType } from '@oyasaiserver/gen/common/env'

/**
 * Can't use `@oyasaiserver/env` - remember, this is a standalone cli application.
 * `.env` files are embedded to the package root during publishing.
 */
export class Env {
  public static async fetch(): Promise<EnvType> {
    return parse(process.env.DOTENV_PUBLIC_KEYS as string, {
      privateKey: process.env.DOTENV_PRIVATE_KEY
    }) satisfies EnvType
  }
}
