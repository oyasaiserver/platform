#!/usr/bin/env node --enable-source-maps
import { ok } from "node:assert/strict";
import { createHash } from "node:crypto";
import { writeFile } from "node:fs/promises";
import { stdout } from "node:process";
import registry from "../registry.json" with { type: "json" };

type RegistryEntry =
  | { type: "modrinth"; slug: string }
  | { type: "spiget"; id: number }
  | { type: "github"; owner: string; repo: string; tag: string; name: string }
  | { type: "url"; url: string };

type LockEntry = { url: string; hash: string };
type LockFile = Record<string, Record<string, LockEntry>>;

async function resolveStableUrl(
  id: string,
  version: string,
  entry: RegistryEntry,
): Promise<string> {
  switch (entry.type) {
    case "github":
      return `https://github.com/${entry.owner}/${entry.repo}/releases/download/${entry.tag}/${entry.name}`;

    case "modrinth": {
      const params = new URLSearchParams({
        game_versions: JSON.stringify([version]),
        loaders: JSON.stringify(["paper", "spigot", "bukkit"]),
      });
      const response = await fetch(
        `https://api.modrinth.com/v2/project/${entry.slug}/version?${params}`,
      );
      const versions = (await response.json()) as {
        files: { url: string }[];
      }[];
      const url = versions
        .flatMap((v) => v.files)
        .map((f) => f.url)
        .at(0);
      ok(url, `No modrinth URL for ${id}@${version}`);
      return url;
    }

    case "spiget": {
      const { url } = await fetch(
        `https://api.spiget.org/v2/resources/${entry.id}/download`,
        { redirect: "follow" },
      );
      return url;
    }

    case "url": {
      // Follow redirects to get a stable, non-"latest" URL
      const { url } = await fetch(entry.url, {
        method: "HEAD",
        redirect: "follow",
      });
      return url;
    }
  }
}

// File magic number for zip files, best effort.
const zipMagic = [0x50, 0x4b, 0x03, 0x04] as const;

const hashAlgo = "sha256" as const;

async function computeHash(url: string): Promise<string> {
  const response = await fetch(url);
  const buffer = await response.arrayBuffer();
  const bytes = new Uint8Array(buffer);
  ok(
    zipMagic.every((b, i) => bytes[i] === b),
    `Expected a JAR (ZIP) file but got wrong magic bytes at ${url}`,
  );
  const digest = createHash(hashAlgo).update(bytes).digest("base64");
  return `${hashAlgo}-${digest}`;
}

const lock: LockFile = {};

for (const [id, versions] of Object.entries(registry)) {
  for (const [version, entry] of Object.entries(versions)) {
    stdout.write(`lock  ${id}@${version} ... `);
    const url = await resolveStableUrl(id, version, entry);
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
