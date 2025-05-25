import { readdir, rm } from 'node:fs/promises'
import { join } from 'node:path'
import { cwd } from 'node:process'

export class Clener {
  public static async clean(): Promise<void> {
    for (const it of await readdir(cwd())) {
      const dir = join(cwd(), it)
      await rm(dir, {
        recursive: true,
        force: true
      })
    }
  }
}
