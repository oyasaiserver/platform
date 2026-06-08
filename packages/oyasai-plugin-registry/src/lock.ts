#!/usr/bin/env node --enable-source-maps
import { ok } from "node:assert/strict";
import { hash } from "node:crypto";
import { readFileSync, writeFileSync } from "node:fs";
import { argv, stderr } from "node:process";

type RegistryEntry =
  | { type: "modrinth"; slug: string; skipVersionCheck?: boolean }
  | { type: "hangar"; slug: string; skipVersionCheck?: boolean }
  | { type: "spiget"; id: number }
  | { type: "github"; owner: string; repo: string; tag: string; name: string }
  | { type: "url"; url: string };

type LockEntry = { url: string; hash: string };
type LockFile = Record<
  string,
  Record<string, LockEntry | Record<string, LockEntry>>
>;

// Platforms with no MC version concept
const UNVERSIONED_PLATFORMS = new Set(["velocity"]);

async function resolveStableUrl(
  id: string,
  platform: string,
  mcVersion: string | undefined,
  entry: RegistryEntry,
): Promise<string> {
  switch (entry.type) {
    case "github":
      return `https://github.com/${entry.owner}/${entry.repo}/releases/download/${entry.tag}/${entry.name}`;

    case "modrinth": {
      const url = new URL(
        `https://api.modrinth.com/v2/project/${entry.slug}/version`,
      );
      if (!entry.skipVersionCheck) {
        url.searchParams.set("game_versions", JSON.stringify([mcVersion]));
      }
      url.searchParams.set("loaders", JSON.stringify([platform]));
      const results = (await (await fetch(url)).json()) as {
        files: { url: string }[];
      }[];
      const resolved = results
        .flatMap((v) => v.files)
        .map((f) => f.url)
        .at(0);
      ok(resolved, `No modrinth URL for ${id} (${platform})`);
      return resolved;
    }

    case "hangar": {
      const queryHangar = async (withVersion: boolean) => {
        const url = new URL(
          `https://hangar.papermc.io/api/v1/projects/${entry.slug}/versions`,
        );
        url.searchParams.set("platform", platform.toUpperCase());
        url.searchParams.set("limit", "1");
        if (withVersion && mcVersion)
          url.searchParams.set("platformVersion", mcVersion);
        const response = (await (await fetch(url)).json()) as {
          result?: {
            downloads: Record<
              string,
              { downloadUrl?: string; externalUrl?: string }
            >;
          }[];
        };
        const d = response.result?.[0]?.downloads?.[platform.toUpperCase()];
        return d?.downloadUrl ?? d?.externalUrl;
      };
      const url =
        (!mcVersion || entry.skipVersionCheck
          ? undefined
          : await queryHangar(true)) ?? (await queryHangar(false));
      ok(url, `No hangar URL for ${id} (${platform})`);
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
  const bytes = await response.bytes();
  ok(
    zipMagic.every((b, i) => bytes[i] === b),
    `Expected a JAR (ZIP) file but got wrong magic bytes at ${url}`,
  );
  const digest = hash(hashAlgo, bytes, "base64");
  return `${hashAlgo}-${digest}`;
}

if (import.meta.main) {
  const mcVersions = argv.slice(2);
  ok(
    mcVersions.length > 0,
    "Usage: plugin-registry-lock <mc-version> [mc-version...]",
  );

  const registryPath = new URL("../registry.json", import.meta.url);
  const lockPath = new URL("../lock.json", import.meta.url);

  const registry = JSON.parse(readFileSync(registryPath, "utf8")) as Record<
    string,
    Record<string, RegistryEntry>
  >;

  const lock: LockFile = {};

  for (const [id, platforms] of Object.entries(registry)) {
    for (const [platform, entry] of Object.entries(platforms)) {
      lock[id] ??= {};
      if (UNVERSIONED_PLATFORMS.has(platform)) {
        stderr.write(`lock  ${id}@${platform} ... `);
        const url = await resolveStableUrl(id, platform, undefined, entry);
        const hash = await computeHash(url);
        lock[id][platform] = { url, hash };
        stderr.write("done\n");
      } else {
        const versionedEntry = (lock[id][platform] ??= {}) as Record<
          string,
          LockEntry
        >;
        for (const mcVersion of mcVersions) {
          stderr.write(`lock  ${id}@${platform}@${mcVersion} ... `);
          const url = await resolveStableUrl(id, platform, mcVersion, entry);
          const hash = await computeHash(url);
          versionedEntry[mcVersion] = { url, hash };
          stderr.write("done\n");
        }
      }
    }
  }

  writeFileSync(lockPath, JSON.stringify(lock, null, 2) + "\n");
}
