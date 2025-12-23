import { DockerStack } from '@oyasaiserver/cdktf/stacks/docker-stack'
import { ModrinthV2Client, type ProjectVersion } from '@xmcl/modrinth'
import { ok } from 'node:assert/strict'
import type { PathLike } from 'node:fs'
import { readFile, writeFile } from 'node:fs/promises'
import { join } from 'node:path'
import { URL } from 'node:url'
import { type PluginDefinition, registry, type RegistryId } from './registry.ts'

async function getModrinthBestMatchProjectVersion(
  slug: string,
  version: string
): Promise<ProjectVersion> {
  const client = new ModrinthV2Client()
  const project = await client.getProject(slug)
  const [projectVersion] = await client.getProjectVersions(project.id, {
    gameVersions: [version],
    loaders: ['paper', 'spigot', 'bukkit']
  })
  ok(projectVersion)
  return projectVersion
}

async function toDownloadUrl(definition: PluginDefinition): Promise<URL> {
  switch (definition.type) {
    case 'url':
      return new URL(definition.url)
    case 'spiget': {
      return new URL(`https://api.spiget.org/v2/resources/${definition.id}/download`)
    }
    case 'modrinth': {
      const { files } = await getModrinthBestMatchProjectVersion(
        definition.slug,
        DockerStack.minecraftVersion
      )
      const url = files.map(file => file.url)?.at(0)
      ok(url, `No download URL found for modrinth plugin:${definition.slug}`)
      return new URL(url)
    }
    case 'github': {
      return new URL(
        `https://github.com/${definition.owner}/${definition.repo}/releases/download/${definition.tag}/${definition.name}`
      )
    }
    case 'local': {
      return new URL(`file://${definition.path}`)
    }
  }
}

export async function downloadJar(definition: PluginDefinition): Promise<Uint8Array> {
  const url = await toDownloadUrl(definition)
  if (url.protocol === 'file:') {
    return readFile(url.pathname) // fetching `file:` protocol is not supported
  }
  const response = await fetch(url)
  const jarHeaders = ['application/zip', 'application/java-archive', 'application/octet-stream']
  ok(jarHeaders.includes(response.headers.get('Content-Type') ?? ''))
  const arrayBuffer = await response.arrayBuffer()
  return new Uint8Array(arrayBuffer)
}

export async function downloadPlugins(dir: PathLike, ids: readonly RegistryId[]): Promise<void> {
  for (const id of ids) {
    const bytes = await downloadJar(registry[id])
    const path = join(dir.toString(), `${id}.jar`)
    await writeFile(path, bytes)
  }
}
