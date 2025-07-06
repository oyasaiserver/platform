import { writeFileSafe } from '@oyasaiserver/lib/fs'
import { getAssetContent } from '@oyasaiserver/lib/sea'
import { join, relative } from 'path'

export async function applyOverlays(overlay: string, files: string[]) {
  const promises = files
    .filter(file => file.startsWith(overlay))
    .map(async file => {
      const relativePath = relative(overlay, file)
      const dst = join(relativePath)
      await writeFileSafe(dst, getAssetContent(file))
    })
  await Promise.all(promises)
}
