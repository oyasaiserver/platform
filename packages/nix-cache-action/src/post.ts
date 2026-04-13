import { constants, readFileSync, writeFileSync } from "node:fs";
import { EOL, homedir } from "node:os";
import { spawnSync } from "node:child_process";
import { URL } from "node:url";
import { listNixStore, NIX_STORE_SNAPSHOT_PATH } from "./common.ts";
import { getInput } from "./actions-toolkit.ts";
import { join } from "node:path";

function post() {
  const endpoint = getInput("endpoint", { required: true });
  const skipPush = getInput("skip-push") === "true";
  const signingKey = getInput("signing-key");

  if (skipPush) {
    console.log("Skipping push: skip-push is true");
    return;
  }

  if (!signingKey) {
    console.warn("Skipping push: signing-key not set");
    return;
  }

  const snapshot = new Set(
    readFileSync(NIX_STORE_SNAPSHOT_PATH).toString().split(EOL).filter(Boolean),
  );
  const pathsToPush = new Set(listNixStore()).difference(snapshot);

  const signingKeyPath = join(homedir(), ".nix-cache-signing-key");
  writeFileSync(signingKeyPath, signingKey, { mode: constants.S_IRUSR });

  const url = new URL(endpoint);
  url.searchParams.set("secret-key", signingKeyPath);

  // FIXME: assumes Nix is installed in multi-user mode (daemon runs as root)
  // and that creds are configured for root (e.g. via `sudo -i aws configure`).
  // This will break on single-user Nix installs. - shun 2026-04
  spawnSync("sudo", ["-i", "nix", "copy", "--to", url.href, ...pathsToPush], {
    stdio: "inherit",
  });
}

post();
