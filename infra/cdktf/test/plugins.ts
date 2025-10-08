import { ModrinthV2Client } from '@xmcl/modrinth'
import { strictEqual } from 'node:assert'
import { ok } from 'node:assert/strict'
import { suite, test } from 'node:test'
import { envAwarePlugins } from '../src/plugins.ts'
import { DockerStack } from '../src/stacks/docker-stack.ts'

await suite(import.meta.filename, async () => {
  const modrinthV2Client = new ModrinthV2Client()
  const plugins = envAwarePlugins.production

  const jarHeaders = ['application/zip', 'application/java-archive', 'application/octet-stream']

  function hasJarHeader(header: Headers): void {
    const contentType = header.get('content-type')
    return ok(contentType && jarHeaders.includes(contentType))
  }

  await test('urls are valid', async () => {
    for (const url of plugins.urls) {
      const response = await fetch(url, {
        method: 'HEAD'
      })
      hasJarHeader(response.headers)
    }
  })

  await test('spiget plugins', async () => {
    for (const id of plugins.spigetIds) {
      const response = await fetch(`https://api.spiget.org/v2/resources/${id}/download`, {
        method: 'HEAD'
      })
      hasJarHeader(response.headers)
    }
  })

  await test('modrinth plugins', async () => {
    const taggedSlugs = plugins.modrinthProjects.toSorted()
    const slugs = taggedSlugs.map(it => it.split(':')[0]!)
    const projects = (await modrinthV2Client.getProjects(slugs)).toSorted((a, b) =>
      a.slug.localeCompare(b.slug)
    )
    strictEqual(projects.length, plugins.modrinthProjects.length)
    const unsupportedPlugins = projects.filter(({ slug, game_versions }, i) => {
      const hasVersionTag = taggedSlugs[i]?.includes(':')
      const isVersionSupported = game_versions.includes(DockerStack.minecraftVersion)
      if (hasVersionTag && isVersionSupported) {
        console.warn(`Plugin ${slug} has unnecessary version tag`)
      }
      return !hasVersionTag && !isVersionSupported
    })
    ok(
      !unsupportedPlugins.length,
      `Plugins not supporting server version: ${unsupportedPlugins.map(({ slug }) => slug).join(', ')}`
    )
  })
})
