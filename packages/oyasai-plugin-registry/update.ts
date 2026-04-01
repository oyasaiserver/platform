#!/usr/bin/env node

import { execFileSync } from "node:child_process";
import { setTimeout } from "node:timers/promises";
import * as TOML from "@iarna/toml";

interface ModrinthPlugin {
  type: "modrinth";
  slug: string;
}

interface SpigetPlugin {
  type: "spiget";
  id: number;
  version?: number;
}

interface GithubPlugin {
  type: "github";
  owner: string;
  repo: string;
  tag: string;
  name: string;
}

interface StaticPlugin {
  type: "static";
  name: string;
}

interface LocalPlugin {
  type: "local";
  name: string;
}

interface GeyserMCPlugin {
  type: "geysermc";
  project: string;
}

interface UrlPlugin {
  type: "url";
  url: string;
}

type PluginDefinition =
  | ModrinthPlugin
  | SpigetPlugin
  | GithubPlugin
  | StaticPlugin
  | LocalPlugin
  | GeyserMCPlugin
  | UrlPlugin;

interface DataToml {
  versions: Record<string, { plugins: Record<string, PluginDefinition> }>;
}

interface LockEntry {
  url: string;
  hash: string;
  filename?: string;
  version?: string | number;
}

interface LockToml {
  versions: Record<string, { plugins: Record<string, LockEntry | { type: "static" | "local"; name: string }> }>;
}

async function resolveModrinthUrl(
  slug: string,
  gameVersion: string
): Promise<{ url: string; filename: string }> {
  const projectRes = await fetch(
    `https://api.modrinth.com/v2/project/${slug}`
  );
  if (!projectRes.ok) throw new Error(`Failed to fetch modrinth project: ${slug}`);
  const project = (await projectRes.json()) as { id: string };

  const versionsRes = await fetch(
    `https://api.modrinth.com/v2/project/${project.id}/version?game_versions=["${gameVersion}"]&loaders=["paper","spigot","bukkit"]`
  );
  if (!versionsRes.ok) throw new Error(`Failed to fetch modrinth versions: ${slug}`);
  const versions = (await versionsRes.json()) as Array<{ files: Array<{ url: string; filename: string }> }>;

  const file = versions[0]?.files?.[0];
  if (!file) throw new Error(`No download found for modrinth plugin: ${slug}`);

  return { url: file.url, filename: file.filename };
}

interface SpigetVersion {
  id: number;
  name: string;
}

async function fetchWithTimeout(url: string, timeoutMs = 10000): Promise<Response> {
  const controller = new AbortController();
  const timeoutId = global.setTimeout(() => controller.abort(), timeoutMs);
  try {
    const response = await fetch(url, { signal: controller.signal });
    return response;
  } finally {
    global.clearTimeout(timeoutId);
  }
}

async function resolveSpigetUrl(
  id: number,
  version?: number
): Promise<{ url: string; filename: string; version: number }> {
  // Fetch latest version ID if not specified
  let versionId = version;
  if (!versionId) {
    const versionsRes = await fetchWithTimeout(
      `https://api.spiget.org/v2/resources/${id}/versions?size=1&sort=-id`
    );
    if (!versionsRes.ok) {
      throw new Error(`Failed to fetch spiget versions for resource ${id}`);
    }
    const versions = (await versionsRes.json()) as SpigetVersion[];
    if (!versions[0]) {
      throw new Error(`No versions found for spiget resource ${id}`);
    }
    versionId = versions[0].id;
  }

  // Delay between requests to avoid rate limiting
  await setTimeout(300);

  // Use versioned proxy endpoint - stable URL
  const url = `https://api.spiget.org/v2/resources/${id}/versions/${versionId}/download/proxy`;

  return { url, filename: `${id}.jar`, version: versionId };
}

function resolveGithubUrl(
  owner: string,
  repo: string,
  tag: string,
  name: string
): { url: string; filename: string } {
  return {
    url: `https://github.com/${owner}/${repo}/releases/download/${tag}/${name}`,
    filename: name,
  };
}

interface GeyserMCBuildsResponse {
  version: string;
  builds: Array<{
    build: number;
    downloads: {
      spigot: { name: string };
    };
  }>;
}

async function resolveGeyserMCUrl(
  project: string
): Promise<{ url: string; filename: string; version: string; build: string }> {
  const buildsRes = await fetch(
    `https://download.geysermc.org/v2/projects/${project}/versions/latest/builds`
  );
  if (!buildsRes.ok) throw new Error(`Failed to fetch geysermc builds: ${project}`);
  const buildsData = (await buildsRes.json()) as GeyserMCBuildsResponse;

  const latestBuild = buildsData.builds[buildsData.builds.length - 1];
  if (!latestBuild) throw new Error(`No builds found for geysermc project: ${project}`);
  const download = latestBuild.downloads.spigot;

  return {
    url: `https://download.geysermc.org/v2/projects/${project}/versions/${buildsData.version}/builds/${latestBuild.build}/downloads/spigot`,
    filename: download.name,
    version: buildsData.version,
    build: String(latestBuild.build),
  };
}

function computeHash(url: string, name?: string): string {
  try {
    const safeName = name ?? "download.jar";
    const result = execFileSync(
      "nix-prefetch-url",
      ["--type", "sha256", "--name", safeName, url],
      { encoding: "utf-8", stdio: ["pipe", "pipe", "pipe"], timeout: 60000 }
    ).trim();
    // Convert to SRI format
    const sriResult = execFileSync(
      "nix",
      ["hash", "convert", "--hash-algo", "sha256", "--to", "sri", result],
      { encoding: "utf-8", timeout: 10000 }
    ).trim();
    return sriResult;
  } catch (error) {
    console.error(`Failed to compute hash for: ${url}`);
    throw error;
  }
}

async function resolvePlugin(
  name: string,
  plugin: PluginDefinition,
  gameVersion: string
): Promise<LockEntry | { type: "static" | "local"; name: string }> {
  console.error(`Resolving ${name}...`);

  switch (plugin.type) {
    case "modrinth": {
      const { url, filename } = await resolveModrinthUrl(plugin.slug, gameVersion);
      const hash = computeHash(url, `${name}.jar`);
      return { url, hash, filename };
    }
    case "spiget": {
      const { url, filename, version } = await resolveSpigetUrl(plugin.id, plugin.version);
      const hash = computeHash(url, `${name}.jar`);
      return { url, hash, filename, version };
    }
    case "github": {
      const { url, filename } = resolveGithubUrl(
        plugin.owner,
        plugin.repo,
        plugin.tag,
        plugin.name
      );
      const hash = computeHash(url, filename);
      return { url, hash, filename };
    }
    case "geysermc": {
      const { url, filename } = await resolveGeyserMCUrl(plugin.project);
      const hash = computeHash(url, `${name}.jar`);
      return { url, hash, filename };
    }
    case "url": {
      const hash = computeHash(plugin.url, `${name}.jar`);
      return { url: plugin.url, hash };
    }
    case "static":
    case "local":
      return { type: plugin.type, name: plugin.name };
  }
}

async function readStdin(): Promise<string> {
  const chunks: Buffer[] = [];
  for await (const chunk of process.stdin) {
    chunks.push(chunk);
  }
  return Buffer.concat(chunks).toString("utf-8");
}

async function main() {
  const dataContent = await readStdin();
  const data = TOML.parse(dataContent) as unknown as DataToml;

  const lock: LockToml = { versions: {} };

  for (const [gameVersion, versionData] of Object.entries(data.versions)) {
    console.error(`\nProcessing version ${gameVersion}...`);
    lock.versions[gameVersion] = { plugins: {} };

    for (const [pluginName, plugin] of Object.entries(versionData.plugins)) {
      try {
        const resolved = await resolvePlugin(pluginName, plugin, gameVersion);
        lock.versions[gameVersion].plugins[pluginName] = resolved;
      } catch (error) {
        console.error(`Failed to resolve ${pluginName}:`, error);
        throw error;
      }
    }
  }

  const lockContent = JSON.stringify(lock, null, 2);
  process.stdout.write(lockContent + "\n");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
