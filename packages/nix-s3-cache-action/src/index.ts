import fs from "node:fs";
import path from "node:path";
import { spawnSync } from "node:child_process";

const IS_POST = !!process.env["STATE_isPost"];

// GitHub Actions protocol — no dependencies needed
function getInput(name: string): string {
  return (
    process.env[`INPUT_${name.toUpperCase().replace(/-/g, "_")}`] ?? ""
  ).trim();
}

function info(msg: string): void {
  console.log(msg);
}

function setFailed(msg: string): void {
  console.error(`::error::${msg}`);
  process.exitCode = 1;
}

function saveState(key: string, val: string): void {
  // GITHUB_STATE is always set in a GitHub Actions runner
  fs.appendFileSync(process.env["GITHUB_STATE"]!, `${key}=${val}\n`);
}

function errorMessage(e: unknown): string {
  return e instanceof Error ? e.message : String(e);
}

// ---

// HOME and GITHUB_STATE are always set in a GitHub Actions runner
const NIX_KEY_PATH = path.join(process.env["HOME"]!, ".nix", "nix-cache-key.sec");
const STORE_SNAPSHOT_PATH = "/tmp/nix-store-pre-build";

function listNixStore(): string[] {
  const skip = [".drv", ".drv.chroot", ".check", ".lock"];
  return fs
    .readdirSync("/nix/store")
    .filter((e) => !skip.some((s) => e.endsWith(s)))
    .map((e) => `/nix/store/${e}`)
    .sort();
}

function buildCacheUrl(endpoint: string): string {
  const sep = endpoint.includes("?") ? "&" : "?";
  const keyParam = `secret-key=${encodeURIComponent(NIX_KEY_PATH)}`;
  return `${endpoint}${sep}compression=zstd&parallel-compression=true&${keyParam}`;
}

function setup(): void {
  const signingKey = getInput("signing-key");

  if (signingKey) {
    fs.mkdirSync(path.dirname(NIX_KEY_PATH), { recursive: true });
    fs.writeFileSync(NIX_KEY_PATH, signingKey, { mode: 0o600 });
  }

  fs.writeFileSync(STORE_SNAPSHOT_PATH, listNixStore().join("\n"));
}

function push(): void {
  const endpoint = getInput("endpoint");
  const signingKey = getInput("signing-key");
  const skipPush = getInput("skip-push") === "true";

  if (skipPush) {
    info("Skipping push: skip-push is true");
    return;
  }

  if (!signingKey) {
    info("Skipping push: signing-key not set");
    return;
  }

  const preBuild = new Set(
    fs.readFileSync(STORE_SNAPSHOT_PATH, "utf8").split("\n").filter(Boolean),
  );
  const newPaths = listNixStore().filter((p) => !preBuild.has(p));

  if (newPaths.length === 0) {
    info("No new store paths to push");
    return;
  }

  info(`Pushing ${newPaths.length} paths to ${endpoint}`);

  const result = spawnSync(
    "nix",
    ["copy", "--to", buildCacheUrl(endpoint), ...newPaths],
    { stdio: "inherit" },
  );

  if (result.status !== 0) {
    throw new Error(`nix copy exited with status ${result.status ?? "unknown"}`);
  }
}

// ---

if (!IS_POST) {
  saveState("isPost", "true");
  try {
    setup();
  } catch (e) {
    setFailed(errorMessage(e));
  }
} else {
  try {
    push();
  } catch (e) {
    setFailed(errorMessage(e));
  }
}
