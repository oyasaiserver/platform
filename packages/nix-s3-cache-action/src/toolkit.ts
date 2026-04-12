/*
 * An opinionated re-implementation of GitHub Actions protocol. Ideally I should
 * be using the official npm package for these, though I believe the extra build
 * step of bundling is more expensive to maintain than these reimplementation of
 * relatively stable actions protocol. - shun 2026-04
 */
import { ok } from "node:assert";
import { appendFileSync } from "node:fs";
import { EOL } from "node:os";
import { env } from "node:process";

export interface InputOptions {
  required?: boolean;
}

export function getInput(name: string, options?: InputOptions): string {
  const val = env[`INPUT_${name.replace(/ /g, "_").toUpperCase()}`] || "";
  ok(!options?.required || val, `Missing required input: ${name}`);
  return val.trim();
}

export function saveState(key: string, val: string): void {
  appendFileSync(env["GITHUB_STATE"]!, `${key}=${val}` + EOL);
}

export function getState(key: string): string {
  return process.env[`STATE_${key}`] ?? "";
}
