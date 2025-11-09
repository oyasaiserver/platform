import { plugins } from '@oyasaiserver/plugins'
import { downloadPlugins } from '@oyasaiserver/plugins/download'
import { getEnvironment } from '@oyasaiserver/secrets/environment'
import { glob, rm } from 'node:fs/promises'

if (import.meta.main) {
  const environment = getEnvironment()
  const dir = 'plugins'

  for await (const file of glob(`${dir}/*.jar`)) {
    await rm(file)
  }

  await downloadPlugins(dir, plugins[environment])
}
