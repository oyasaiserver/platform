// Manual paid comparison only. All eight requests share a hard limit of twenty HTTP sends.
import assert from "node:assert/strict";
import { spawn, spawnSync } from "node:child_process";
import { createInterface } from "node:readline";
import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { reserve } from "./comparison-budget.mjs";
const docs = process.argv[2];
const model = "deepseek/deepseek-v4.1-flash";
const questions = [
  "FAWEの使い方",
  "/bulletin の使い方",
  "pmzt を昇格して",
  "OyasaiAdminTools の運営向けの設定は？",
];
const results = [];
for (const backend of ["pi", "pi-container"])
  for (const [index, question] of questions.entries()) {
    const start = performance.now();
    const name = `oyasai-assistant-compare-${index}`;
    const args = [
      "run",
      "--rm",
      "-i",
      "--pull=never",
      "--name",
      name,
      "--network=none",
      "--ipc=none",
      "--no-hosts",
      "--cap-drop=ALL",
      "--security-opt=no-new-privileges",
      "--read-only",
      "--read-only-tmpfs=false",
      "--user=1000:1000",
      "--userns=keep-id:uid=1000,gid=1000",
      "--tmpfs=/workspace:rw,size=64m,mode=1777,noexec,nosuid,nodev",
      "--env=TMPDIR=/workspace",
      "--memory=512m",
      "--cpus=1",
      "--pids-limit=64",
      `--volume=${docs}:/docs:ro`,
      "localhost/oyasai-assistant-pi:prototype",
      model,
      "--container",
    ];
    const env =
      backend === "pi"
        ? { ...process.env, OYASAI_COMPARISON_LIMITED: "1" }
        : {
            HOME: process.env.HOME,
            PATH: process.env.PATH,
            XDG_RUNTIME_DIR: process.env.XDG_RUNTIME_DIR,
          };
    const child = spawn(
      backend === "pi" ? process.execPath : "/usr/bin/podman",
      backend === "pi"
        ? [
            "--import",
            fileURLToPath(new URL("comparison-budget.mjs", import.meta.url)),
            fileURLToPath(new URL("../dist/main.js", import.meta.url)),
            docs,
            model,
          ]
        : args,
      { env, stdio: ["pipe", "pipe", "pipe"] },
    );
    const result = {
      backend,
      question,
      startupMs: 0,
      elapsedMs: 0,
      input: 0,
      output: 0,
      total: 0,
      trace: [],
      calls: 0,
    };
    const before = Number(
      readFileSync(process.env.OYASAI_COMPARISON_BUDGET, "utf8"),
    );
    const send = (data) => child.stdin.write(JSON.stringify(data) + "\n");
    const timer = setTimeout(() => child.kill(), 90000);
    const lines = createInterface({ input: child.stdout });
    child.stderr.on("data", () => {});
    try {
      for await (const line of lines) {
        const message = JSON.parse(line);
        if (message.type === "ready") {
          result.startupMs = Math.round(performance.now() - start);
          send({
            type: "request",
            id: `compare-${index}`,
            text: question,
            maxToolCalls: 2,
            timeoutMs: 85000,
          });
        } else if (message.type === "tool") {
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
        } else if (message.type === "model") {
          reserve();
          const response = await fetch(
            "https://openrouter.ai/api/v1/chat/completions",
            {
              method: "POST",
              headers: {
                Authorization: `Bearer ${process.env.OYASAI_ASSISTANT_API_KEY}`,
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                ...message.body,
                model,
                stream: false,
                max_tokens: 2048,
              }),
              signal: AbortSignal.timeout(60000),
              redirect: "error",
            },
          );
          assert.equal(response.status, 200);
          send({
            type: "model_result",
            id: message.id,
            callId: message.callId,
            result: await response.text(),
          });
        } else if (message.type === "trace")
          result.trace.push({
            name: message.name,
            args: message.args,
            excerpt: message.result.slice(0, 160),
          });
        else if (message.type === "usage") {
          result.input += message.usage.input;
          result.output += message.usage.output;
          result.total += message.usage.totalTokens;
        } else if (message.type === "answer" || message.type === "error") {
          result.answer = message.answer || message.message;
          result.failed = message.type === "error";
          break;
        }
      }
    } catch {
      result.failed = true;
      result.answer = "Comparison request failed";
    } finally {
      clearTimeout(timer);
      result.elapsedMs = Math.round(performance.now() - start);
      result.calls =
        Number(readFileSync(process.env.OYASAI_COMPARISON_BUDGET, "utf8")) -
        before;
      child.stdin.end();
      child.kill();
      if (backend === "pi-container")
        spawnSync("/usr/bin/podman", ["rm", "--force", "--time", "0", name], {
          stdio: "ignore",
        });
      results.push(result);
      console.log(JSON.stringify(result));
    }
  }
assert.ok(
  Number(readFileSync(process.env.OYASAI_COMPARISON_BUDGET, "utf8")) <= 20,
);
