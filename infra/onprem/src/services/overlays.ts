import { copyFile, mkdir, readdir } from 'node:fs/promises'
import { join } from 'node:path'

export class Overlays {
  public static async apply(
    overlayDir: string,
    targetDir: string
  ): Promise<void> {
    const entries = await readdir(overlayDir, {
      withFileTypes: true
    })

    for (const entry of entries) {
      const src = join(overlayDir, entry.name)
      const dest = join(targetDir, entry.name)

      if (entry.isDirectory()) {
        await mkdir(dest, { recursive: true })
        await Overlays.apply(src, dest)
      } else if (entry.isFile()) {
        await copyFile(src, dest)
      }
    }
  }
}
