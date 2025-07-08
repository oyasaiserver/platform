import { getRawAsset } from 'node:sea'
import { writeFileSafe } from '@oyasaiserver/lib/fs'
import { join, relative } from 'path'

export async function applyOverlays(overlay: string, files: string[]) {
  const promises = files
    .filter(file => file.startsWith(overlay))
    .map(async file => {
      const relativePath = relative(overlay, file)
      const dst = join(relativePath)
      const arrayBuffer = getRawAsset(file)
      await writeFileSafe(dst, new Uint8Array(arrayBuffer))
    })
  await Promise.all(promises)
}
