import { writeFileSync } from "node:fs";
import { EOL } from "node:os";
import { lsNixStore, STORE_SNAPSHOT_PATH } from "./common.ts";

function main() {
  writeFileSync(STORE_SNAPSHOT_PATH, lsNixStore().join(EOL));
}

main();
