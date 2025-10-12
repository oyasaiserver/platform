import { development, local, production } from '@oyasaiserver/plugins'
import { downloadJar } from '@oyasaiserver/plugins/download'
import { registry } from '@oyasaiserver/plugins/registry'
import { createSecrets } from '@oyasaiserver/secrets'
import { glob, rm, writeFile } from 'node:fs/promises'
import { format } from 'node:path'

if (import.meta.main) {
  const secrets = await createSecrets()
  const envAwarePlugins = { development, local, production } as const

  const dir = 'plugins'

  for await (const file of glob(`${dir}/*.jar`)) {
    await rm(file)
  }

  const downloaded = await Promise.all(
    envAwarePlugins[secrets.ENVIRONMENT].map(async plugin => ({
      name: plugin,
      byte: await downloadJar(registry[plugin])
    }))
  )

  for (const { name, byte } of downloaded) {
    const path = format({ dir, name, ext: '.jar' })
    await writeFile(path, byte)
  }
}
