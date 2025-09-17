import { productionPlugins } from '@oyasaiserver/onprem/plugins'
import { strictEqual } from 'node:assert'
import { ok } from 'node:assert/strict'
import { suite, test } from 'node:test'

await suite(import.meta.filename, async () => {
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
    const url = new URL('https://api.modrinth.com/v2/projects')
    url.searchParams.append('ids', JSON.stringify(productionPlugins.modrinthProjects))
    const response = await fetch(url)
    const json = (await response.json()) as unknown[]
    strictEqual(productionPlugins.modrinthProjects.length, json.length)
  })
})
