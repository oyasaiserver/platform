import assert from "node:assert/strict";
import test from "node:test";
import { mkdtempSync, readFileSync, rmSync } from "node:fs";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { createBrain, CONTAINER_TOOLS, runBrain } from "../dist/brain.js";
import { relayStream, payload } from "../dist/relay.js";
import { Docs } from "../dist/docs.js";

test("stdio provider runs builtin write/read with one bounded final response, without network or credentials", async () => {
  const root = mkdtempSync(join(tmpdir(), "pi-container-test-"));
  const path = join(root, "draft.txt");
  let calls = 0;
  const traced = [];
  const originalFetch = globalThis.fetch;
  globalThis.fetch = () => {
    throw new Error("Network must not be used");
  };
  try {
    const answer = await runBrain(
      "下書き",
      2,
      5000,
      "fake",
      "",
      new Docs(root),
      async () => {
        throw new Error("No Minecraft operation");
      },
      (name) => traced.push(name),
      async (model, key, tools) => {
        const session = await createBrain(
          model,
          key,
          tools,
          relayStream(async (body) => {
            calls++;
            assert.deepEqual(Object.keys(body).sort(), ["messages", "tools"]);
            assert.ok(!JSON.stringify(body).includes("stdio-no-auth"));
            if (calls === 1)
              return JSON.stringify({
                choices: [
                  {
                    message: {
                      tool_calls: [
                        {
                          id: "one",
                          function: {
                            name: "write",
                            arguments: JSON.stringify({
                              path,
                              content: "draft",
                            }),
                          },
                        },
                        {
                          id: "two",
                          function: {
                            name: "read",
                            arguments: JSON.stringify({ path }),
                          },
                        },
                        {
                          id: "three",
                          function: {
                            name: "bash",
                            arguments: JSON.stringify({ command: "false" }),
                          },
                        },
                      ],
                    },
                  },
                ],
              });
            assert.deepEqual(body.tools, []);
            return JSON.stringify({
              choices: [
                {
                  message: { content: "下書きを確認しました。" },
                  finish_reason: "stop",
                },
              ],
              usage: {
                prompt_tokens: 10,
                completion_tokens: 5,
                total_tokens: 15,
              },
            });
          }),
        );
        assert.deepEqual(
          session.getActiveToolNames().sort(),
          [...CONTAINER_TOOLS].sort(),
        );
        return session;
      },
      true,
    );
    assert.match(answer, /下書きを確認/);
    assert.equal(readFileSync(path, "utf8"), "draft");
    assert.deepEqual(traced, ["write", "read"]);
    assert.equal(calls, 2);
  } finally {
    globalThis.fetch = originalFetch;
    rmSync(root, { recursive: true });
  }
});

test("wire conversion retains tool identities and rejects provider errors without exposing response text", async () => {
  const converted = payload({
    messages: [
      {
        role: "toolResult",
        toolCallId: "one",
        toolName: "read",
        content: [{ type: "text", text: "data" }],
        timestamp: 0,
        isError: false,
      },
    ],
  });
  assert.equal(converted.messages[0].tool_call_id, "one");
  const model = { api: "openai-completions", provider: "stdio", id: "fake" };
  const message = await relayStream(async () =>
    JSON.stringify({ error: "PRIVATE_RESPONSE" }),
  )(model, { messages: [] }).result();
  assert.equal(message.stopReason, "error");
  assert.ok(!JSON.stringify(message).includes("PRIVATE_RESPONSE"));
});
