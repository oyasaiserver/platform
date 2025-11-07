import { mkdtempDisposable } from 'node:fs/promises'
import { suite, test } from 'node:test'
import { downloadPlugins } from '../src/download.ts'
import { pluginRegistry, type RegistryId } from '../src/plugin-registry.ts'

await suite(import.meta.filename, async () => {
  const ids = Object.keys(pluginRegistry) as RegistryId[]

  await test('all plugins can be downloaded', async () => {
    await using tempdir = await mkdtempDisposable('test-plugins-')
    await downloadPlugins(tempdir.path, ids)
  })
})
