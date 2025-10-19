import { development, local, production } from '@oyasaiserver/plugins'
import { downloadJar } from '@oyasaiserver/plugins/download'
import { registry } from '@oyasaiserver/plugins/registry'
import { getEnvironment } from '@oyasaiserver/secrets/environment'
import { glob, rm, writeFile } from 'node:fs/promises'
import { format } from 'node:path'

if (import.meta.main) {
  const environment = getEnvironment()
  const plugins = { development, local, production }[environment]

  const dir = 'plugins'

  for await (const file of glob(`${dir}/*.jar`)) {
    await rm(file)
  }

  const downloaded = await Promise.all(
    plugins.map(async plugin => ({
      name: plugin,
      byte: await downloadJar(registry[plugin])
    }))
  )

  for (const { name, byte } of downloaded) {
    const path = format({ dir, name, ext: '.jar' })
    await writeFile(path, byte)
  }
}
