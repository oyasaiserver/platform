import { constants, writeFileSync, type PathLike } from "node:fs";
import { homedir } from "node:os";
import { spawnSync } from "node:child_process";
import { URL } from "node:url";
import { getInput } from "./actions-toolkit.ts";
import { join } from "node:path";
import { readdirSync } from "node:fs";

/*
 * Inspired by: https://github.com/cachix/cachix-action/blob/a593539ec5b1ba1eb95f89a396efd45ca2cdaf5d/dist/list-nix-store.sh
 *
 * Node.js is a massive overkill for this, but the cost of spawning a
 * child process is much more complicated, dangerous, and slow.
 */
function listNixStore(storePath: PathLike): readonly string[] {
  const skip = [".drv", ".drv.chroot", ".check", ".lock"];
  return readdirSync(storePath)
    .filter((e) => !skip.some((s) => e.endsWith(s)))
    .map((e) => join(storePath.toString(), e));
}

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

  // _Technically_ customizable
  const nixStorePath = "/nix/store";
  const pathsToPush = listNixStore(nixStorePath);

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
