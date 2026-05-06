#!/usr/bin/env node --enable-source-maps
import { ModrinthV2Client } from "@xmcl/modrinth";
import { ok } from "node:assert";
import { writeFile } from "node:fs/promises";
import { URL } from "node:url";
import { parseArgs } from "node:util";

const args = parseArgs({
  options: {
    type: {
      type: "string",
    },
    out: {
      type: "string",
    },
    // modrinth
    slug: {
      type: "string",
    },
    version: {
      type: "string",
    },
    // spigot
    id: {
      type: "string",
    },
    // github
    owner: {
      type: "string",
    },
    repo: {
      type: "string",
    },
    tag: {
      type: "string",
    },
    name: {
      type: "string",
    },
    // url
    url: {
      type: "string",
    },
  },
});

const bytes = await downloadJar(args.values);
await writeFile(args.values.out!, bytes);

async function toDownloadUrl(definition: any): Promise<URL> {
  switch (definition.type) {
    case "url":
      return new URL(definition.url);
    case "spiget": {
      return new URL(
        `https://api.spiget.org/v2/resources/${definition.id}/download`,
      );
    }
    case "modrinth": {
      const client = new ModrinthV2Client();
      const project = await client.getProject(definition.slug);
      const projectVersions = await client.getProjectVersions(project.id, {
        gameVersions: [definition.version],
        loaders: ["paper", "spigot", "bukkit"],
      });
      const url = projectVersions
        .flatMap((version) => version.files)
        .map((file) => file.url)
        .at(0);
      ok(url, `No download URL found for modrinth plugin: ${definition.slug}`);
      return new URL(url);
    }
    case "github": {
      return new URL(
        `https://github.com/${definition.owner}/${definition.repo}/releases/download/${definition.tag}/${definition.name}`,
      );
    }
  }
  throw new Error("");
}

export async function downloadJar(definition: any): Promise<Uint8Array> {
  const url = await toDownloadUrl(definition);
  const response = await fetch(url);
  const jarHeaders = [
    "application/zip",
    "application/java-archive",
    "application/octet-stream",
  ];
  ok(
    jarHeaders.includes(response.headers.get("Content-Type") ?? ""),
    JSON.stringify(definition),
  );
  const arrayBuffer = await response.arrayBuffer();
  return new Uint8Array(arrayBuffer);
}
