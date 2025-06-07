import { mkdir, readdir, rm, stat } from 'node:fs/promises'
import { basename, dirname, join, resolve } from 'node:path'
import { $ } from 'zx'

export class Backup {
  private constructor(
    private readonly name: string,
    private readonly archive: string,
    private readonly original: string,
    private readonly backupDir: string
  ) {}

  public static async create(
    dir: string,
    backupDir: string
  ): Promise<Backup | undefined> {
    try {
      if (!(await stat(dir)).isDirectory()) {
        return
      }
    } catch {
      return
    }

    const directory = resolve(backupDir)
    await mkdir(directory, {
      recursive: true
    })

    const name = basename(dir)
    const base = dirname(dir)
    const archive = join(directory, `${name}-${Date.now()}.tar.zst`)

    await $`tar -C ${base} -cf - ${name} | zstd -T0 -5 -o ${archive}`
    return new Backup(name, archive, dir, backupDir)
  }

  public async removeStale(): Promise<void> {
    const archiveName = basename(this.archive)
    for (const file of await readdir(this.backupDir)) {
      if (file.startsWith(this.name) && file !== archiveName) {
        await rm(`${this.backupDir}/${file}`, {
          force: true,
          recursive: true
        })
      }
    }
  }

  public async restore(): Promise<void> {
    const restoreTo = dirname(this.original)
    await mkdir(restoreTo, { recursive: true })
    await $`zstd -d -c ${this.archive} | tar -xf - -C ${restoreTo}`
  }
}
