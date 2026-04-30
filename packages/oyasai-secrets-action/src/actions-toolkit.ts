/*
 * An opinionated re-implementation of GitHub Actions protocol. Ideally I should
 * be using the official npm package for these, though I believe the extra build
 * step of bundling is more expensive to maintain than these reimplementation of
 * relatively stable actions protocol. - shun 2026-04
 */
import { ok } from "node:assert";
import { randomUUID } from "node:crypto";
import { appendFileSync } from "node:fs";
import { env } from "node:process";
import { URL } from "node:url";

export interface InputOptions {
  required?: boolean;
}

/*
 * Inspired by: https://github.com/actions/toolkit/blob/b68d046fe39bcaf86bb49660cb3f307c35d6efb9/packages/core/src/core.ts#L151
 */
export function getInput(name: string, options?: InputOptions): string {
  const val = env[`INPUT_${name.replace(/ /g, "_").toUpperCase()}`] ?? "";
  ok(!options?.required || val, `Missing required input: ${name}`);
  return val.trim();
}

export function getBooleanInput(name: string): boolean {
  const val = getInput(name).toLowerCase();
  if (["true", "yes", "1"].includes(val)) return true;
  if (["false", "no", "0"].includes(val)) return false;
  throw new TypeError(`Input "${name}" is not a boolean: "${val}"`);
}

export function setFailed(message: string): void {
  issueCommand("error", {}, message);
  process.exitCode = 1;
}

export function exportVariable(name: string, val: string): void {
  ok(
    /^[A-Za-z_][A-Za-z0-9_]*$/.test(name),
    `Invalid environment variable name: "${name}"`,
  );
  const envFile = process.env.GITHUB_ENV;
  if (envFile) {
    const delimiter = `ghadelimiter_${randomUUID()}`;
    appendFileSync(envFile, `${name}<<${delimiter}\n${val}\n${delimiter}\n`);
  } else {
    issueCommand("set-env", { name }, val);
  }
}

export function setSecret(secret: string): void {
  issueCommand("add-mask", {}, secret);
}

export async function getIDToken(audience: string): Promise<string> {
  const tokenUrl = process.env.ACTIONS_ID_TOKEN_REQUEST_URL;
  const tokenRequest = process.env.ACTIONS_ID_TOKEN_REQUEST_TOKEN;

  if (!tokenUrl || !tokenRequest) {
    throw new Error(
      "OIDC token request URL or token not available. Ensure 'id-token: write' permission is set.",
    );
  }

  const url = new URL(tokenUrl);
  if (audience) url.searchParams.set("audience", audience);

  const response = await fetch(url.href, {
    headers: { Authorization: `Bearer ${tokenRequest}` },
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch OIDC token: ${response.statusText}`);
  }

  const data = (await response.json()) as { value: string };
  return data.value;
}

export function info(message: string): void {
  process.stdout.write(`${message}\n`);
}

export function debug(message: string): void {
  issueCommand("debug", {}, message);
}

function issueCommand(
  command: string,
  properties: Record<string, string>,
  data: string,
): void {
  const cmdStr = Object.entries(properties)
    .map(([k, v]) => `${k}=${escapeProperty(v)}`)
    .join(",");
  process.stdout.write(
    `::${command}${cmdStr ? ` ${cmdStr}` : ""}::${escapeData(data)}\n`,
  );
}

function escapeData(s: string): string {
  return s.replace(/%/g, "%25").replace(/\r/g, "%0D").replace(/\n/g, "%0A");
}

function escapeProperty(s: string): string {
  return s
    .replace(/%/g, "%25")
    .replace(/\r/g, "%0D")
    .replace(/\n/g, "%0A")
    .replace(/:/g, "%3A")
    .replace(/,/g, "%2C");
}
