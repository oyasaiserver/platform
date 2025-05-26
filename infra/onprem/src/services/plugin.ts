import { writeFile } from 'node:fs/promises'

interface PluginDefinition {
  name: string
  url: string
}

interface DownloadConfig {
  path: string
  plugins: PluginDefinition[]
}

export class Plugin {
  public static async download({
    path,
    plugins
  }: DownloadConfig): Promise<void> {
    await Promise.all(
      plugins.map(async plugin => {
        const url = new URL(plugin.url)
        const response = await fetch(url)
        const arrayBuffer = await response.arrayBuffer()
        const data = new Uint8Array(arrayBuffer)
        await writeFile(`${path}/${plugin.name}.jar`, data)
      })
    )
  }
}
