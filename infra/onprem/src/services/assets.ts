import { copyFile } from 'node:fs/promises'
import { join, resolve } from 'node:path'
import { cwd } from 'node:process'

export class Assets {
  public static readonly path: string = resolve(
    import.meta.dirname,
    '../../assets'
  )

  public static async copy(filename: string, destination = ''): Promise<void> {
    await copyFile(
      join(Assets.path, filename),
      join(cwd(), destination, filename)
    )
  }
}
