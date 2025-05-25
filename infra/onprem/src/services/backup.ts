import { mkdir } from 'node:fs/promises'
import { basename, join, resolve } from 'node:path'
import { $ } from 'zx'

export class Backup {
  public constructor(
    private readonly archive: string,
    private readonly original: string
  ) {}

  public static async create(dir: string): Promise<Backup> {
    await mkdir('backup', {
      recursive: true
    })
    const archive = join('backup', `${basename(dir)}-${Date.now()}.tar.zst`)
    await $`tar -cf - ${dir} | zstd -T0 -5 -o ${archive}`
    return new Backup(archive, dir)
  }

  public async restore(destination?: string): Promise<void> {
    const target = resolve(destination ?? this.original)
    await mkdir(target, { recursive: true })
    await $`zstd -d -c ${this.archive} | tar -xf - -C ${target}`
  }
}
