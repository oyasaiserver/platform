import { DockerStack } from '@oyasaiserver/cdktf/stacks/docker-stack'
import { ModrinthV2Client, type ProjectVersion } from '@xmcl/modrinth'
import { ok } from 'node:assert/strict'
import { readFile } from 'node:fs/promises'
import { URL } from 'node:url'
import type { PluginDefinition } from './registry.ts'

function incrementPatch(version: string): string {
  const [major, minor, patch] = version.split('.').map(Number) as [number, number, number]
  return [major, minor, patch + 1].join('.')
}

async function getModrinthBestMatchProjectVersion(
  slug: string,
  version: string,
  maxDelta = 5
): Promise<ProjectVersion> {
  const loaders = ['paper', 'spigot', 'bukkit']

  const client = new ModrinthV2Client()
  const project = await client.getProject(slug)

  async function go(version: string, depth: number): Promise<ProjectVersion> {
    if (depth > maxDelta) {
      throw new Error(`No compatible version found for modrinth plugin:${slug}`)
    }
    const [projectVersion] = await client.getProjectVersions(project.id, {
      gameVersions: [version],
      loaders
    })
    if (projectVersion) {
      return projectVersion
    }
    return go(incrementPatch(version), depth + 1)
  }

  return go(version, 0)
}

async function toDownloadUrl(definition: PluginDefinition): Promise<URL> {
  switch (definition.type) {
    case 'url':
      return new URL(definition.url)
    case 'spiget': {
      return new URL(`https://api.spiget.org/v2/resources/${definition.id}/download`)
    }
    case 'modrinth': {
      const version = await getModrinthBestMatchProjectVersion(
        definition.slug,
        DockerStack.minecraftVersion
      )
      const url = version.files.map(file => file.url)?.at(0)
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
