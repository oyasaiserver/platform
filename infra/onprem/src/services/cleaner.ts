import { readdir, rm } from 'node:fs/promises'
import { join } from 'node:path'
import { cwd } from 'node:process'

type CleanArgs = {
  exclude: string[]
}

export class Clener {
  public static async clean({ exclude }: CleanArgs): Promise<void> {
    for (const it of await readdir(cwd())) {
      if (exclude.includes(it)) {
        continue
      }
      const dir = join(cwd(), it)
      await rm(dir, {
        recursive: true,
        force: true
      })
    }
  }
}
