import {
  readdirSync,
  mkdirSync,
  writeFileSync,
  readFileSync,
  constants,
} from "node:fs";
import { join, dirname } from "node:path";
import { EOL, homedir, tmpdir } from "node:os";
import { spawnSync } from "node:child_process";
import { URL } from "node:url";

const NIX_STORE_PATH = "/nix/store";
const NIX_KEY_PATH = join(homedir(), ".nix", "nix-cache-key.sec");
const STORE_SNAPSHOT_PATH = join(tmpdir(), "nix-store-pre-build");

function lsNixStore(): string[] {
  const skip = [".drv", ".drv.chroot", ".check", ".lock"];
  return readdirSync(NIX_STORE_PATH)
    .filter((e) => !skip.some((s) => e.endsWith(s)))
    .map((e) => join(NIX_STORE_PATH, e))
    .sort();
}

function mkSubstituterUrl(endpoint: string): URL {
  const url = new URL(endpoint);
  url.searchParams.set("compression", "zstd");
  url.searchParams.set("parallel-compression", "true");
  url.searchParams.set("secret-key", NIX_KEY_PATH);
  return url;
}

export function setup(signingKey: string): void {
  if (signingKey) {
    mkdirSync(dirname(NIX_KEY_PATH), { recursive: true });
    writeFileSync(NIX_KEY_PATH, signingKey, { mode: constants.S_IRUSR });
  }
  writeFileSync(STORE_SNAPSHOT_PATH, lsNixStore().join(EOL));
}

export function push(endpoint: string): void {
  const preBuild = new Set(
    readFileSync(STORE_SNAPSHOT_PATH).toString().split(EOL).filter(Boolean),
  );
  const newPaths = lsNixStore().filter((p) => !preBuild.has(p));
  // FIXME: assumes Nix is installed in multi-user mode (daemon runs as root)
  // and that creds are configured for root (e.g. via `sudo -i aws configure`).
  // This will break on single-user Nix installs. - shun 2026-04
  spawnSync(
    "sudo",
    ["-i", "nix", "copy", "--to", mkSubstituterUrl(endpoint).href, ...newPaths],
    { stdio: "inherit" },
  );
}
