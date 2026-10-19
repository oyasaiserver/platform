import assert from "node:assert/strict";
import {
  mkdtempSync,
  mkdirSync,
  writeFileSync,
  symlinkSync,
  rmSync,
} from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import test from "node:test";
import { AssistantMessageEventStream } from "@mariozechner/pi-ai";
import { Type } from "typebox";
import { createBrain, runBrain, TOOL_NAMES, FALLBACK } from "../dist/brain.js";
import { Docs } from "../dist/docs.js";

const emptyTools = TOOL_NAMES.map((name) => ({
  name,
  label: name,
  description: name,
  parameters: Type.Object({}),
  execute: async () => ({
    content: [{ type: "text", text: "ok" }],
    details: {},
  }),
}));
const fixture = () => {
  const root = mkdtempSync(join(tmpdir(), "assistant-pi-"));
  mkdirSync(join(root, "oyasai-admin-tools"));
  writeFileSync(
    join(root, "oyasai-admin-tools/PROJECT.md"),
    "# OyasaiAdminTools\n## 広報 /bulletin\n使い方\n## 別の節\n別の説明\n",
  );
  writeFileSync(
    join(root, "oyasai-admin-tools/operator.md"),
    "# 運営設定\n非公開の設定資料\n",
  );
  return root;
};

test("only four custom tools survive activation, reload and hostile local discovery", async () => {
  const dir = fixture();
  const previous = process.cwd();
  try {
    mkdirSync(join(dir, ".pi/extensions"), { recursive: true });
    writeFileSync(join(dir, "AGENTS.md"), "DISCOVERY_MUST_NOT_LOAD");
    writeFileSync(
      join(dir, ".pi/settings.json"),
      JSON.stringify({
        defaultTools: ["bash", "write", "edit", "read"],
        extensions: ["./extensions/evil.ts"],
      }),
    );
    writeFileSync(
      join(dir, ".pi/extensions/evil.ts"),
      "throw new Error('EXTENSION_MUST_NOT_LOAD')",
    );
    process.chdir(dir);
    const session = await createBrain(
      "deepseek/deepseek-v4.1-flash",
      "fake-test-key",
      emptyTools,
    );
    try {
      assert.deepEqual(
        session.getActiveToolNames().sort(),
        [...TOOL_NAMES].sort(),
      );
      session.setActiveToolsByName([
        "bash",
        "write",
        "edit",
        "read",
        "grep",
        "find",
        "ls",
      ]);
      assert.deepEqual(session.getActiveToolNames(), []);
      await session.reload();
      assert.deepEqual(
        session
          .getAllTools()
          .map((tool) => tool.name)
          .sort(),
        [...TOOL_NAMES].sort(),
      );
      assert.ok(!session.systemPrompt.includes("DISCOVERY_MUST_NOT_LOAD"));
      assert.equal(session.sessionManager.getSessionFile(), undefined);
    } finally {
      session.dispose();
    }
  } finally {
    process.chdir(previous);
    rmSync(dir, { recursive: true });
  }
});

test("documents are bounded snapshots; traversal, other files and symlinks cannot be read", () => {
  const root = fixture();
  const outside = fixture();
  try {
    writeFileSync(join(root, "oyasai-admin-tools/secret.txt"), "SECRET");
    symlinkSync(join(outside, "oyasai-admin-tools"), join(root, "escape"));
    symlinkSync(
      join(outside, "oyasai-admin-tools/PROJECT.md"),
      join(root, "oyasai-admin-tools/player.md"),
    );
    const docs = new Docs(root);
    assert.match(docs.search("OyasaiAdminTools /bulletin"), /使い方/);
    assert.ok(!docs.search("/bulletin").includes("別の説明"));
    assert.match(docs.search("FAWE"), /外部プラグイン/);
    assert.match(
      docs.read("oyasai-admin-tools/operator.md", "運営設定"),
      /非公開/,
    );
    for (const path of [
      "../secret",
      "/etc/passwd",
      "escape/PROJECT.md",
      "oyasai-admin-tools/player.md",
      "oyasai-admin-tools/secret.txt",
    ])
      assert.match(docs.read(path, "運営設定"), /不正/);
    assert.match(
      docs.read("oyasai-admin-tools/operator.md", "存在しない節"),
      /不正/,
    );
    assert.ok(docs.search("x".repeat(201)).length < 100);
  } finally {
    rmSync(root, { recursive: true });
    rmSync(outside, { recursive: true });
  }
});

function response(content, reason = "stop") {
  return {
    role: "assistant",
    api: "openai-completions",
    provider: "openrouter",
    model: "fake",
    content,
    stopReason: reason,
    timestamp: Date.now(),
    usage: {
      input: 0,
      output: 0,
      cacheRead: 0,
      cacheWrite: 0,
      totalTokens: 0,
      cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0, total: 0 },
    },
  };
}
const text = (value) => ({ type: "text", text: value });
const call = (id, name, args = {}) => ({
  type: "toolCall",
  id,
  name,
  arguments: args,
});

test("Pi runs tools in order, caps a batch and asks for one final tool-less response", async () => {
  const root = fixture();
  const traced = [];
  const seen = [];
  let rounds = 0;
  try {
    const result = await runBrain(
      "昇格を調べて",
      2,
      5000,
      "fake",
      "fake-test-key",
      new Docs(root),
      async (name) => {
        seen.push(name);
        return "確認待ち";
      },
      (name) => traced.push(name),
      async (...args) => {
        const session = await createBrain(...args);
        session.agent.streamFn = (_model, context) => {
          rounds++;
          const stream = new AssistantMessageEventStream();
          if (rounds === 2) assert.deepEqual(context.tools, []);
          const message =
            rounds === 1
              ? response(
                  [
                    call("a", "get_context"),
                    call("b", "run_command", {
                      command: "syokaku iscandidate pmzt",
                      summary: "条件照会",
                    }),
                    call("c", "get_context"),
                  ],
                  "toolUse",
                )
              : response([
                  text("照会を依頼しました。本人画面で確認してください。"),
                ]);
          stream.push({ type: "done", reason: message.stopReason, message });
          return stream;
        };
        return session;
      },
    );
    assert.deepEqual(seen, ["get_context", "run_command"]);
    assert.deepEqual(traced, seen);
    assert.equal(rounds, 2);
    assert.match(result, /上限/);
    assert.match(result, /本人画面/);
  } finally {
    rmSync(root, { recursive: true });
  }
});

test("invalid tool loops terminate and cannot expose raw results", async () => {
  const root = fixture();
  let rounds = 0;
  try {
    await assert.rejects(
      runBrain(
        "test",
        1,
        5000,
        "fake",
        "fake-test-key",
        new Docs(root),
        async () => {
          throw new Error("must not run");
        },
        () => {},
        async (...args) => {
          const session = await createBrain(...args);
          session.agent.streamFn = () => {
            const stream = new AssistantMessageEventStream();
            const message = response(
              [call(String(++rounds), "bash", { command: "false" })],
              "toolUse",
            );
            stream.push({ type: "done", reason: "toolUse", message });
            return stream;
          };
          return session;
        },
      ),
      /Pi request failed/,
    );
    assert.ok(rounds <= 2);
  } finally {
    rmSync(root, { recursive: true });
  }
});

test("a provider stall is aborted and fails the request", async () => {
  const root = fixture();
  try {
    await assert.rejects(
      runBrain(
        "test",
        12,
        30,
        "fake",
        "fake-test-key",
        new Docs(root),
        async () => "unused",
        () => {},
        async (...args) => {
          const session = await createBrain(...args);
          session.agent.streamFn = (_model, _context, options) => {
            const stream = new AssistantMessageEventStream();
            options.signal.addEventListener(
              "abort",
              () => {
                stream.push({
                  type: "error",
                  reason: "aborted",
                  error: response([], "aborted"),
                });
              },
              { once: true },
            );
            return stream;
          };
          return session;
        },
      ),
      /Pi request failed/,
    );
  } finally {
    rmSync(root, { recursive: true });
  }
});
