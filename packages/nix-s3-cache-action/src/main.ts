import { writeFileSync } from "node:fs";
import { EOL } from "node:os";
import { listNixStore, STORE_SNAPSHOT_PATH } from "./common.ts";

function main() {
  writeFileSync(STORE_SNAPSHOT_PATH, listNixStore().join(EOL));
}

main();
