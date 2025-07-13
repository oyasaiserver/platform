import { writeFileSafe } from './fs.ts'

export async function download(url: string | URL, dest: string): Promise<void> {
  const response = await fetch(url)
  const arrayBuffer = await response.arrayBuffer()
  const buffer = new Uint8Array(arrayBuffer)
  await writeFileSafe(dest, buffer)
}
