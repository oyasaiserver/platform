import { lstat, mkdir, readdir, rm, unlink } from 'node:fs/promises'
import { join, relative } from 'node:path'

interface CleanConfig {
  dir: string
  except: string[]
}

export class Cleaner {
  public static async clean(config: CleanConfig): Promise<void> {
    await mkdir(config.dir, {
      recursive: true
    })
    await Cleaner.cleanDir(config.dir, config)
  }

  private static async cleanDir(
    current: string,
    config: CleanConfig
  ): Promise<boolean> {
    const rel = relative(config.dir, current)
    if (config.except.includes(rel)) {
      return true
    }
    const stat = await lstat(current)
    if (stat.isFile()) {
      if (config.except.includes(rel)) {
        return true
      }
      await unlink(current)
      return false
    }
    if (!stat.isDirectory()) {
      return false
    }
    const entries = await readdir(current)
    const childStatuses = await Promise.all(
      entries.map(async entry => {
        return await Cleaner.cleanDir(join(current, entry), config)
      })
    )
    if (!childStatuses.some(status => status)) {
      await rm(current, {
        force: true,
        recursive: true
      })
      return false
    }
    return true
  }
}
