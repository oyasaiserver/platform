import assert from "node:assert/strict";
import test from "node:test";
import { spawn } from "node:child_process";
import { createInterface } from "node:readline";
import { mkdtempSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

test("limited pi stdio retains and resets only the chosen actor without network", async () => {
  const root = mkdtempSync(join(tmpdir(), "pi-stdio-memory-"));
  const child = spawn(
    process.execPath,
    [
      "--import",
      fileURLToPath(new URL("fake-provider.mjs", import.meta.url)),
      fileURLToPath(new URL("../dist/main.js", import.meta.url)),
      root,
      "fake",
    ],
    {
      env: { ...process.env, OYASAI_ASSISTANT_API_KEY: "offline-placeholder" },
      stdio: ["pipe", "pipe", "pipe"],
    },
  );
  const requests = [
    ["a", "pmzt を覚えて", "pmzt"],
    ["b", "誰でしたか", "unknown"],
    ["a", "その人は", "pmzt"],
    ["a", "reset", null],
    ["a", "誰でしたか", "unknown"],
  ];
  let index = 0;
  const next = () => {
    const [actor, text] = requests[index];
    child.stdin.write(
      JSON.stringify({
        type: text === "reset" ? "reset" : "request",
        id: "test-" + index,
        actor,
        text,
        maxToolCalls: 2,
        timeoutMs: 3000,
        idleMinutes: 10,
        maxMessages: 40,
        maxChars: 48000,
      }) + "\n",
    );
  };
  const timer = setTimeout(() => child.kill(), 10000);
  try {
    for await (const line of createInterface({ input: child.stdout })) {
      const m = JSON.parse(line);
      if (m.type === "ready") next();
      else if (m.type === "answer") {
        if (requests[index][2]) assert.equal(m.answer, requests[index][2]);
        if (++index === requests.length) break;
        next();
      } else if (m.type === "error") assert.fail("stdio request failed");
    }
    assert.equal(index, requests.length);
  } finally {
    clearTimeout(timer);
    child.stdin.end();
    child.kill();
    rmSync(root, { recursive: true });
  }
});
