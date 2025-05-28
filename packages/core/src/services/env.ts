import { join, resolve } from 'node:path'
import { type DotenvPopulateInput, config } from '@dotenvx/dotenvx'

/**
 * Can't use `@oyasaiserver/env` - remember, this is a standalone cli application.
 * `.env` files are embedded to the package root during publishing.
 */
export class Env {
  private static readonly path: string = resolve(
    import.meta.dirname,
    '../../envs'
  )

  public static parse(environemnt = 'local'): DotenvPopulateInput {
    const processEnv: DotenvPopulateInput = {}
    config({
      strict: true,
      quiet: true,
      processEnv,
      path: join(Env.path, environemnt, '.env')
    })
    return processEnv
  }
}
