import { writeFile } from 'node:fs/promises'
import { join, resolve } from 'node:path'
import { config } from '@dotenvx/dotenvx'

export class Env {
  private static readonly path: string = resolve(
    import.meta.dirname,
    '../../envs'
  )

  public static async config(
    environemnt: string,
    envKey: string
  ): Promise<void> {
    const envKeysFile = join(Env.path, environemnt, '.env.keys')
    await writeFile(envKeysFile, `DOTENV_PRIVATE_KEY=${envKey}`)
    config({
      strict: true,
      path: join(Env.path, environemnt, '.env'),
      envKeysFile
    })
  }
}
