import { config } from '@oyasaiserver/onprem/config'
import { productionPlugins } from '@oyasaiserver/onprem/plugins'
import { ModrinthV2Client } from '@xmcl/modrinth'
import { strictEqual } from 'node:assert'
import { ok } from 'node:assert/strict'
import { suite, test } from 'node:test'

await suite(import.meta.filename, async () => {
  const modrinthV2Client = new ModrinthV2Client()

  await test('urls are valid', async () => {
    for (const url of productionPlugins.urls) {
      const response = await fetch(url, {
        method: 'HEAD'
      })
      ok(response.ok, `Failed to fetch plugin URL: ${url}`)
    }
  })

  await test('spiget plugins', async () => {
    for (const id of productionPlugins.spigetIds) {
      const response = await fetch(`https://api.spiget.org/v2/resources/${id}/download`, {
        method: 'HEAD',
        headers: {
          Accept: ['application/zip', 'application/java-archive', 'application/octet-stream'].join()
        }
      })
      ok(response.ok, `Failed to fetch spiget plugin with id: ${id}`)
    }
  })

  await test('modrinth plugins', async () => {
    const projects = await modrinthV2Client.getProjects(productionPlugins.modrinthProjects)
    strictEqual(projects.length, productionPlugins.modrinthProjects.length)
    const unsupportedPlugins = projects.filter(
      ({ game_versions }) => !game_versions.includes(config.services.minecraft.version)
    )
    ok(
      !unsupportedPlugins.length,
      `Plugins not supporting server version: ${unsupportedPlugins.map(({ slug }) => slug).join(', ')}`
    )
  })
})
