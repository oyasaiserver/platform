import { readdirSync } from "node:fs";
import { join } from "node:path";
import { tmpdir } from "node:os";

const NIX_STORE_PATH = "/nix/store";

/*
 * Temporary file to save the snapshot of nix-store, that can be compared after
 * the build to take the diff in the nix-store.
 */
export const STORE_SNAPSHOT_PATH = join(tmpdir(), "nix-store-pre-build");

/*
 * Inspired by: https://github.com/cachix/cachix-action/blob/a593539ec5b1ba1eb95f89a396efd45ca2cdaf5d/dist/list-nix-store.sh
 */
export function listNixStore(): readonly string[] {
  const skip = [".drv", ".drv.chroot", ".check", ".lock"];
  return readdirSync(NIX_STORE_PATH)
    .filter((e) => !skip.some((s) => e.endsWith(s)))
    .map((e) => join(NIX_STORE_PATH, e));
}
