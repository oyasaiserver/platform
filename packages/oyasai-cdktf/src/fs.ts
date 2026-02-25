import { type PathLike, readFileSync } from "node:fs";
import { join } from "node:path";

export const directory = {
  root: join(import.meta.dirname, "../../.."),
} as const;

export function readJsonFileSync(path: PathLike): any {
  const content = readFileSync(path, "utf-8");
  return JSON.parse(content);
}
