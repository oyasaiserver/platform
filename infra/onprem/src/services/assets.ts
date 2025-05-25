import { copyFile } from 'node:fs/promises'
import { join, resolve } from 'node:path'
import { cwd } from 'node:process'

export class Assets {
  public static readonly path: string = resolve(
    import.meta.dirname,
    '../../assets'
  )

  public static async clone(filename: string, destination = ''): Promise<void> {
    console.log(
      `Copying ${filename} from ${join(Assets.path, filename)} to ${join(cwd(), destination, filename)}`
    )
    await copyFile(
      join(Assets.path, filename),
      join(cwd(), destination, filename)
    )
  }
}
