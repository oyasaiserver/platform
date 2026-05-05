import { readdirSync } from "node:fs";
import { join } from "node:path";

/* _Technically_ customizable */
const NIX_STORE_PATH = "/nix/store";

/*
 * Temporary file to save the snapshot of nix-store, that can be compared after
 * the build to take the diff in the nix-store.
 */
export const NIX_STORE_SNAPSHOT_PATH = ".nix-store-snapshot";

/*
 * Inspired by: https://github.com/cachix/cachix-action/blob/a593539ec5b1ba1eb95f89a396efd45ca2cdaf5d/dist/list-nix-store.sh
 *
 * Node.js is a massive overkill for this, but the cost of spawning a
 * child process is much more complicated, dangerous, and slow.
 */
export function listNixStore(): readonly string[] {
  const skip = [".drv", ".drv.chroot", ".check", ".lock"];
  return readdirSync(NIX_STORE_PATH)
    .filter((e) => !skip.some((s) => e.endsWith(s)))
    .map((e) => join(NIX_STORE_PATH, e));
}
