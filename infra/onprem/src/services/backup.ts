import { mkdir, stat } from 'node:fs/promises'
import { basename, dirname, join } from 'node:path'
import { $ } from 'zx'

$.quiet = true

export class Backup {
  private static readonly directory: string = 'backups'

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

    const name = basename(dir)
    const base = join(dir, '..')
    const archive = join(Backup.directory, `${name}-${Date.now()}.tar.zst`)

    await $`tar -C ${base} -cf - ${name} | zstd -T0 -5 -o ${archive}`
    return new Backup(archive, dir)
  }

  public async restore(): Promise<void> {
    const restoreTo = dirname(this.original)
    await mkdir(restoreTo, {
      recursive: true
    })
    await $`zstd -d -c ${this.archive} | tar -xf - -C ${restoreTo}`
  }
}
