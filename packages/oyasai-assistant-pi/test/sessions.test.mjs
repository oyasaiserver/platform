import assert from "node:assert/strict";
import test from "node:test";
import { Sessions } from "../dist/sessions.js";
import { createBrain, runBrain } from "../dist/brain.js";
import { relayStream } from "../dist/relay.js";
import { Docs } from "../dist/docs.js";
import { mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";

test("sessions expire, reset and drop oversized context independently by actor", async () => {
  let now = 0,
    disposed = 0;
  const store = new Sessions(() => now);
  const create = async () => ({
    messages: [],
    dispose() {
      disposed++;
    },
  });
  const get = (actor) => store.get(actor, 100, 4, 2000, create);
  const a = await get("a"),
    b = await get("b");
  assert.equal(await get("a"), a);
  assert.notEqual(a, b);
  store.reset("a");
  assert.notEqual(await get("a"), a);
  assert.equal(await get("b"), b);
  b.messages.push(...Array(4).fill({ role: "user", content: "old" }));
  assert.notEqual(await get("b"), b);
  const oversized = await get("oversized");
  oversized.messages.push({ role: "user", content: "x".repeat(3000) });
  assert.notEqual(await get("oversized"), oversized);
  now = 101;
  store.expire(100);
  assert.ok(disposed >= 4);
});

test("retained Pi sessions keep prior actor context, refresh tool closures and reinforce observation policy", async () => {
  const root = mkdtempSync(join(tmpdir(), "pi-memory-"));
  const sessions = new Sessions();
  const traces = [];
  const docs = new Docs(root);
  let policy = "";
  try {
    for (const [actor, text] of [
      ["a", "pmzt の条件"],
      ["b", "別の人"],
      ["a", "その人を昇格して"],
    ]) {
      policy = `STYLE_${actor}_${text}`;
      writeFileSync(join(root, "AGENTS.md"), policy);
      writeFileSync(join(root, "INDEX.md"), "CURRENT_INDEX");
      let round = 0;
      const result = await runBrain(
        text,
        1,
        5000,
        "fake",
        "",
        docs,
        async () => "条件は未確認",
        (name) => traces.push(actor + name),
        (...args) =>
          sessions.get(actor, 600000, 40, 48000, async () =>
            createBrain(
              ...args,
              relayStream(async (body) => {
                assert.match(body.messages[0].content, /今回も.*観測データ/);
                assert.ok(body.messages[0].content.includes(policy));
                assert.ok(body.messages[0].content.includes("CURRENT_INDEX"));
                const history = JSON.stringify(body.messages);
                if (actor === "b") assert.ok(!history.includes("pmzt"));
                if (
                  actor === "a" &&
                  body.messages.some((m) => m.content === "その人を昇格して")
                )
                  assert.ok(history.includes("pmzt"));
                // Use the last assistant message to decide whether this request has already used its tool.
                const current = body.messages.slice(
                  body.messages.findLastIndex((m) => m.role === "user"),
                );
                const toolLess = !body.tools.length;
                return JSON.stringify({
                  choices: [
                    {
                      message: toolLess
                        ? { content: "条件を確認してください" }
                        : {
                            tool_calls: [
                              {
                                id: "t" + Date.now(),
                                function: {
                                  name: "get_context",
                                  arguments: "{}",
                                },
                              },
                            ],
                          },
                      finish_reason: toolLess ? "stop" : "tool_calls",
                    },
                  ],
                });
              }),
            ),
          ),
        false,
        true,
      );
      assert.match(result, /条件を確認/);
    }
    assert.deepEqual(traces, ["aget_context", "bget_context", "aget_context"]);
  } finally {
    sessions.reset("a");
    sessions.reset("b");
    rmSync(root, { recursive: true });
  }
});
