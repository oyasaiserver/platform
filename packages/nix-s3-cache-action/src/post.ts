import { constants, mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { EOL, homedir, tmpdir } from "node:os";
import { spawnSync } from "node:child_process";
import { URL } from "node:url";
import { lsNixStore, STORE_SNAPSHOT_PATH } from "./common.ts";
import { getInput } from "./toolkit.ts";

const NIX_KEY_PATH = join(homedir(), ".nix", "nix-cache-key.sec");

function mkSubstituterUrl(endpoint: string): URL {
  const url = new URL(endpoint);
  url.searchParams.set("compression", "zstd");
  url.searchParams.set("parallel-compression", "true");
  url.searchParams.set("secret-key", NIX_KEY_PATH);
  return url;
}

function post() {
  const endpoint = getInput("endpoint", { required: true });
  const skipPush = getInput("skip-push") === "true";
  const signingKey = getInput("signing-key");

  const preBuild = new Set(
    readFileSync(STORE_SNAPSHOT_PATH).toString().split(EOL).filter(Boolean),
  );

  const newPaths = lsNixStore().filter((p) => !preBuild.has(p));
  if (signingKey) {
    mkdirSync(dirname(NIX_KEY_PATH), { recursive: true });
    writeFileSync(NIX_KEY_PATH, signingKey, { mode: constants.S_IRUSR });
  }

  if (skipPush) {
    console.log("Skipping push: skip-push is true");
    return;
  }

  if (!signingKey) {
    console.warn("Skipping push: signing-key not set");
    return;
  }

  // FIXME: assumes Nix is installed in multi-user mode (daemon runs as root)
  // and that creds are configured for root (e.g. via `sudo -i aws configure`).
  // This will break on single-user Nix installs. - shun 2026-04
  spawnSync(
    "sudo",
    ["-i", "nix", "copy", "--to", mkSubstituterUrl(endpoint).href, ...newPaths],
    { stdio: "inherit" },
  );
}

post();
