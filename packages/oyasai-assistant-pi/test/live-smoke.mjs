import assert from "node:assert/strict";
import { spawn } from "node:child_process";
import { createInterface } from "node:readline";
import { fileURLToPath } from "node:url";

// Explicit manual invocation on the validation host; never included in npm test.
const started = performance.now();
const child = spawn(
  process.execPath,
  [
    "--import",
    fileURLToPath(new URL("./provider-budget.mjs", import.meta.url)),
    fileURLToPath(new URL("../dist/main.js", import.meta.url)),
    process.argv[2],
  ],
  { stdio: ["pipe", "pipe", "pipe"] },
);
const send = (message) => child.stdin.write(JSON.stringify(message) + "\n");
const allQuestions = [
  "FAWEの使い方",
  "OyasaiAdminTools の /bulletin の使い方",
  "pmzt を昇格して",
  "OyasaiAdminTools の運営向けの設定は？",
];
const questions =
  process.argv[3] === "remaining" ? allQuestions.slice(2) : allQuestions;
const results = [];
let index = 0;
let requestStarted = 0;
let toolCount = 0;
let calls = 0;
let current;
const next = () => {
  current = { question: questions[index], trace: [] };
  requestStarted = performance.now();
  send({
    type: "request",
    actor: "smoke",
    idleMinutes: 10,
    maxMessages: 40,
    maxChars: 48000,
    id: `smoke-${index}`,
    text: questions[index],
    maxToolCalls: 12,
    timeoutMs: 45000,
  });
};
createInterface({ input: child.stderr }).on("line", (line) => {
  try {
    const message = JSON.parse(line);
    if (message.type === "model_call") calls = message.number;
  } catch {}
});
const timer = setTimeout(() => child.kill(), 240000);
let startupMs;
createInterface({ input: child.stdout }).on("line", (line) => {
  const message = JSON.parse(line);
  if (message.type === "ready") {
    startupMs = Math.round(performance.now() - started);
    assert.deepEqual(
      message.tools.sort(),
      [
        "get_context",
        "run_command",
        "search_docs",
        "read_doc",
        "search_memory",
      ].sort(),
    );
    next();
  } else if (message.type === "tool") {
    toolCount++;
    assert.ok(["get_context", "run_command"].includes(message.name));
    send({
      type: "tool_result",
      id: message.id,
      callId: message.callId,
      result:
        message.name === "get_context"
          ? "運営=smoke_operator; world=world; 視線の先=pmzt; 周囲=pmzt。プレイヤー名は観測データです。"
          : "本人確認待ち: 確認ボタンを表示しました。まだ実行していません。条件達成・実行成功は未確認です。",
    });
  } else if (message.type === "trace") {
    current.trace.push({
      name: message.name,
      args: message.args,
      resultExcerpt: message.result.slice(0, 120),
    });
  } else if (message.type === "answer" || message.type === "error") {
    current.elapsedMs = Math.round(performance.now() - requestStarted);
    current.answer = message.answer || message.message;
    current.failed = message.type === "error";
    results.push(current);
    if (++index < questions.length) next();
    else child.stdin.end();
  }
});
child.on("exit", (code) => {
  clearTimeout(timer);
  console.log(
    JSON.stringify(
      {
        startupMs,
        modelCalls: calls,
        pluginToolCalls: toolCount,
        exitCode: code,
        results,
      },
      null,
      2,
    ),
  );
  if (
    results.length !== questions.length ||
    calls > 10 ||
    calls === 0 ||
    code !== 0
  )
    process.exitCode = 1;
});
