import { copyFile, mkdir, readdir } from 'node:fs/promises'
import { join } from 'node:path'

export class Overlays {
  public static async apply(overlay: string, target: string): Promise<void> {
    const entries = await readdir(overlay, {
      withFileTypes: true
    })

    for (const entry of entries) {
      const src = join(overlay, entry.name)
      const dst = join(target, entry.name)

      if (entry.isDirectory()) {
        await mkdir(dst, {
          recursive: true
        })
        await Overlays.apply(src, dst)
        continue
      }
      if (entry.isFile()) {
        await copyFile(src, dst)
      }
    }
  }
}
