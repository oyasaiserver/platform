import { copyFile, mkdir, readdir } from 'node:fs/promises'
import { join } from 'node:path'

export class Overlays {
  public static async apply(overlay: string, targets: string[]): Promise<void> {
    const entries = await readdir(overlay, {
      withFileTypes: true
    })

    for (const entry of entries) {
      for (const target of targets) {
        if (entry.isDirectory()) {
          await mkdir(join(target, entry.name), {
            recursive: true
          })
        }
      }

      const src = join(overlay, entry.name)
      if (entry.isDirectory()) {
        await Overlays.apply(
          src,
          targets.map(target => join(target, entry.name))
        )
      } else if (entry.isFile()) {
        for (const targetDir of targets) {
          await copyFile(src, join(targetDir, entry.name))
        }
      }
    }
  }
}
