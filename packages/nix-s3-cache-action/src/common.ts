import { readdirSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";

const NIX_STORE_PATH = "/nix/store";

export const STORE_SNAPSHOT_PATH = join(tmpdir(), "nix-store-pre-build");

export function lsNixStore(): string[] {
  const skip = [".drv", ".drv.chroot", ".check", ".lock"];
  return readdirSync(NIX_STORE_PATH)
    .filter((e) => !skip.some((s) => e.endsWith(s)))
    .map((e) => join(NIX_STORE_PATH, e))
    .sort();
}
