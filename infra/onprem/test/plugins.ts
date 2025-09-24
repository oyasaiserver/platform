import { config } from '@oyasaiserver/onprem/config'
import { production } from '@oyasaiserver/onprem/plugins'
import { ModrinthV2Client } from '@xmcl/modrinth'
import { strictEqual } from 'node:assert'
import { ok } from 'node:assert/strict'
import { suite, test } from 'node:test'

await suite(import.meta.filename, async () => {
  const modrinthV2Client = new ModrinthV2Client()

  const jarHeaders = ['application/zip', 'application/java-archive', 'application/octet-stream']

  function hasJarHeader(header: Headers): void {
    const contentType = header.get('content-type')
    return ok(contentType && jarHeaders.includes(contentType))
  }

  await test('urls are valid', async () => {
    for (const url of production.urls) {
      const response = await fetch(url, {
        method: 'HEAD'
      })
      hasJarHeader(response.headers)
    }
  })

  await test('spiget plugins', async () => {
    for (const id of production.spigetIds) {
      const response = await fetch(`https://api.spiget.org/v2/resources/${id}/download`, {
        method: 'HEAD'
      })
      hasJarHeader(response.headers)
    }
  })

  await test('modrinth plugins', async () => {
    const projects = await modrinthV2Client.getProjects(production.modrinthProjects)
    strictEqual(projects.length, production.modrinthProjects.length)
    const unsupportedPlugins = projects.filter(
      ({ game_versions }) => !game_versions.includes(config.services.minecraft.version)
    )
    ok(
      !unsupportedPlugins.length,
      `Plugins not supporting server version: ${unsupportedPlugins.map(({ slug }) => slug).join(', ')}`
    )
  })
})
