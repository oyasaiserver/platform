import { readFileSync, writeFileSync } from "node:fs";
export function reserve() {
  const path = process.env.OYASAI_COMPARISON_BUDGET;
  if (!path) throw new Error("Budget file required");
  const count = Number(readFileSync(path, "utf8"));
  if (!Number.isInteger(count) || count >= 20)
    throw new Error("Twenty HTTP requests exhausted");
  writeFileSync(path, String(count + 1));
  return count + 1;
}
if (process.env.OYASAI_COMPARISON_LIMITED === "1") {
  const fetch = globalThis.fetch;
  globalThis.fetch = (input, options) => {
    const url = new URL(
      typeof input === "string" || input instanceof URL ? input : input.url,
    );
    if (url.href !== "https://openrouter.ai/api/v1/chat/completions")
      throw new Error("Unexpected endpoint");
    const number = reserve();
    process.stderr.write(JSON.stringify({ modelCall: number }) + "\n");
    return fetch(input, options);
  };
}
