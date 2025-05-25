import { join, resolve } from 'node:path'
import { type DotenvPopulateInput, config } from '@dotenvx/dotenvx'

export class Env {
  private static readonly path: string = resolve(
    import.meta.dirname,
    '../../envs'
  )

  public static parse(environemnt: string): DotenvPopulateInput {
    const processEnv: DotenvPopulateInput = {}
    config({
      strict: true,
      processEnv,
      path: join(Env.path, environemnt, '.env')
    })
    return processEnv
  }
}
