import { mkdir, stat } from 'node:fs/promises'
import { basename, join } from 'node:path'
import { $ } from 'zx'

export class Backup {
  public static readonly directory: string = 'backups'

  public constructor(
    private readonly archive: string,
    private readonly original: string
  ) {}

  public static async create(dir: string): Promise<Backup | undefined> {
    try {
      if (!(await stat(dir)).isDirectory()) {
        return
      }
    } catch (_) {
      return
    }
    await mkdir(Backup.directory, {
      recursive: true
    })
    const archive = join(
      Backup.directory,
      `${basename(dir)}-${Date.now()}.tar.zst`
    )
    await $`tar -cf - ${dir} | zstd -T0 -5 -o ${archive}`
    return new Backup(archive, dir)
  }

  public async restore(): Promise<void> {
    await $`zstd -d -c ${this.archive} | tar -xf - -C .`
  }
}
