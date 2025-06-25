import { getAsset } from 'node:sea'
import { writeFileSafe } from '@oyasaiserver/lib/fs'
import { join, relative } from 'path'

export async function applyOverlays(
  overlay: string,
  target: string,
  files: string[]
) {
  const promises = files
    .filter(file => file.startsWith(overlay))
    .map(async file => {
      const relativePath = relative(overlay, file)
      const src = file
      const dst = join(target, relativePath)
      await writeFileSafe(dst, Buffer.from(getAsset(src)))
    })
  await Promise.all(promises)
}
