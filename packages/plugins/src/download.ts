import { DockerStack } from '@oyasaiserver/cdktf/stacks/docker-stack'
import { ModrinthV2Client } from '@xmcl/modrinth'
import { ok } from 'node:assert/strict'
import { URL } from 'node:url'
import type { PluginDefinition } from './registry.ts'

function createVersionsRange(version: string, limit = 10): string[] {
  // "look-up" for now
  const [major, minor, patch] = version.split('.').map(Number) as [number, number, number]
  return new Array(limit)
    .keys()
    .map(i => [major, minor, patch + i].join('.'))
    .toArray()
}

async function toDownloadUrl(definition: PluginDefinition): Promise<URL> {
  const modrinth = new ModrinthV2Client()
  switch (definition.type) {
    case 'url':
      return new URL(definition.url)
    case 'spiget': {
      return new URL(`https://api.spiget.org/v2/resources/${definition.id}/download`)
    }
    case 'modrinth': {
      const project = await modrinth.getProject(definition.slug)
      const versions = await modrinth.getProjectVersions(project.id, {
        gameVersions: createVersionsRange(DockerStack.minecraftVersion),
        loaders: ['bukkit', 'paper', 'spigot']
      })
      const url = versions
        .flatMap(version => version.files)
        .flatMap(file => file.url)
        .at(0)
      ok(url, `No compatible version found for ${definition.slug}`)
      return new URL(url)
    }
    case 'github': {
      return new URL(
        `https://github.com/${definition.repo}/releases/download/${definition.tag}/${definition.name}`
      )
    }
  }
}

export async function downloadJar(definition: PluginDefinition): Promise<Uint8Array> {
  const url = await toDownloadUrl(definition)
  const response = await fetch(url)
  const jarHeaders = ['application/zip', 'application/java-archive', 'application/octet-stream']
  ok(jarHeaders.includes(response.headers.get('Content-Type') ?? ''))
  const arrayBuffer = await response.arrayBuffer()
  return new Uint8Array(arrayBuffer)
}
