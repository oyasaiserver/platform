import { rm, writeFile } from 'node:fs/promises'
import { type DotenvPopulateInput, config } from '@dotenvx/dotenvx'
import { tmpfile } from 'zx'

/**
 * Can't use `@oyasaiserver/env` - remember, this is a standalone cli application.
 * `.env` files are embedded to the package root during publishing.
 */
export class Env {
  public static async fetch(): Promise<DotenvPopulateInput> {
    const processEnv: DotenvPopulateInput = {}
    const path = tmpfile()
    await writeFile(path, process.env.DOTENV_PUBLIC_KEYS || '')
    config({
      strict: true,
      quiet: true,
      path,
      processEnv
    })
    await rm(path)
    return processEnv
  }
}
