#!/usr/bin/env node
import { glob, rm, mkdir, writeFile } from "node:fs/promises";
import { downloadJar } from "../src/download.ts";
import { registry, type RegistryId } from "../src/index.ts";
import type { PathLike } from "node:fs";
import { join } from "node:path";

const dir = "gen";

const versions = ["1.21.8"];

await rm(dir, { recursive: true, force: true });

for (const version of versions) {
  const subdir = join(dir, version);
  await mkdir(subdir, { recursive: true });
  for (const id of Object.keys(registry) as RegistryId[]) {
    const bytes = await downloadJar(registry[id], version);
    const path = join(subdir, `${id}.jar`);
    await writeFile(path, bytes);
  }
}
