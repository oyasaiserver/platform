import { writeFileSync } from "node:fs";
import { EOL } from "node:os";
import { listNixStore, NIX_STORE_SNAPSHOT_PATH } from "./common.ts";

/*
 * Create a snapshot of Nix store to compare later and push the diff to cache.
 */
async function main() {
  writeFileSync(NIX_STORE_SNAPSHOT_PATH, listNixStore().join(EOL));
}

main();
