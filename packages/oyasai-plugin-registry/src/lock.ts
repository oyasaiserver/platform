#!/usr/bin/env node --enable-source-maps
import { ModrinthV2Client } from "@xmcl/modrinth";
import { createHash } from "node:crypto";
import { readFile, writeFile } from "node:fs/promises";

type RegistryEntry =
  | { type: "modrinth"; slug: string }
  | { type: "spiget"; id: number }
  | { type: "github"; owner: string; repo: string; tag: string; name: string }
  | { type: "url"; url: string }
  | { type: "static"; name: string };

type Registry = Record<string, Record<string, RegistryEntry>>;
type LockEntry = { url: string; hash: string };
type LockFile = Record<string, Record<string, LockEntry>>;

async function resolveStableUrl(
  id: string,
  version: string,
  entry: RegistryEntry,
): Promise<string | null> {
  switch (entry.type) {
    case "static":
      return null;

    case "github":
      return `https://github.com/${entry.owner}/${entry.repo}/releases/download/${entry.tag}/${entry.name}`;

    case "modrinth": {
      const client = new ModrinthV2Client();
      const project = await client.getProject(entry.slug);
      const versions = await client.getProjectVersions(project.id, {
        gameVersions: [version],
        loaders: ["paper", "spigot", "bukkit"],
      });
      const url = versions
        .flatMap((v) => v.files)
        .map((f) => f.url)
        .at(0);
      if (!url) throw new Error(`No modrinth URL for ${id}@${version}`);
      return url;
    }

    case "spiget": {
      const res = await fetch(
        `https://api.spiget.org/v2/resources/${entry.id}/download`,
        { redirect: "follow" },
      );
      return res.url;
    }

    case "url": {
      // Follow redirects to get a stable, non-"latest" URL
      const res = await fetch(entry.url, {
        method: "HEAD",
        redirect: "follow",
      });
      return res.url;
    }
  }
}

const ZIP_MAGIC = [0x50, 0x4b, 0x03, 0x04];

async function computeHash(url: string): Promise<string> {
  const res = await fetch(url);
  const buffer = await res.arrayBuffer();
  const bytes = new Uint8Array(buffer);
  if (!ZIP_MAGIC.every((b, i) => bytes[i] === b)) {
    throw new Error(`Expected a JAR (ZIP) file but got wrong magic bytes at ${url}`);
  }
  const digest = createHash("sha256").update(bytes).digest("base64");
  return `sha256-${digest}`;
}

const registry = JSON.parse(
  await readFile(new URL("../registry.json", import.meta.url), "utf-8"),
) as Registry;

const lock: LockFile = {};

for (const [id, versions] of Object.entries(registry)) {
  for (const [version, entry] of Object.entries(versions)) {
    process.stdout.write(`lock  ${id}@${version} ... `);
    const url = await resolveStableUrl(id, version, entry);
    if (url == null) {
      console.log("static, skipped");
      continue;
    }

    const hash = await computeHash(url);
    lock[id] ??= {};
    lock[id][version] = { url, hash };
    console.log("done");
  }
}

await writeFile(
  new URL("../lock.json", import.meta.url),
  JSON.stringify(lock, null, 2) + "\n",
);
console.log("\nlock.json updated");
