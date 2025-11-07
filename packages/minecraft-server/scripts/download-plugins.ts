import { development, local, production } from '@oyasaiserver/minecraft-server/plugins'
import { getEnvironment } from '@oyasaiserver/secrets/environment'
import { glob, rm } from 'node:fs/promises'
import { downloadPlugins } from '../src/download.ts'

if (import.meta.main) {
  const environment = getEnvironment()
  const plugins = { development, local, production }[environment]

  const dir = 'plugins'

  for await (const file of glob(`${dir}/*.jar`)) {
    await rm(file)
  }

  await downloadPlugins(dir, plugins)
}
