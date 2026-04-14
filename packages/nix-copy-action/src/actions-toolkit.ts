/*
 * An opinionated re-implementation of GitHub Actions protocol. Ideally I should
 * be using the official npm package for these, though I believe the extra build
 * step of bundling is more expensive to maintain than these reimplementation of
 * relatively stable actions protocol. - shun 2026-04
 */
import { ok } from "node:assert";
import { env } from "node:process";

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
