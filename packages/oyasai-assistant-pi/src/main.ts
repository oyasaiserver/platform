import { randomUUID } from "node:crypto";
import { Docs } from "./docs.js";
import {
  FALLBACK,
  runBrain,
  TOOL_NAMES,
  CONTAINER_TOOLS,
  createBrain,
} from "./brain.js";

import { relayStream } from "./relay.js";

const container = process.argv.includes("--container");
const started = performance.now();
const send = (value: unknown) =>
  process.stdout.write(JSON.stringify(value) + "\n");
const key = process.env.OYASAI_ASSISTANT_API_KEY;
if ((!container && !key) || !process.argv[2]) process.exit(1);
const docs = new Docs(process.argv[2]);
const model = process.argv[3] || "deepseek/deepseek-v4.1-flash";
let active: string | undefined;
const waiting = new Map<string, (result: string) => void>();

function exchange(
  type: string,
  fields: object,
  signal?: AbortSignal,
): Promise<string> {
  return new Promise((resolve, reject) => {
    const callId = randomUUID();
    const abort = () => {
      waiting.delete(callId);
      reject(new Error("Aborted"));
    };
    if (signal?.aborted) {
      abort();
      return;
    }
    signal?.addEventListener("abort", abort, { once: true });
    waiting.set(callId, (result) => {
      signal?.removeEventListener("abort", abort);
      resolve(result);
    });
    send({ type, id: active, callId, ...fields });
  });
}

function handle(message: any) {
  if (
    message.type === "tool_result" ||
    (container && message.type === "model_result")
  ) {
    if (
      message.id !== active ||
      typeof message.result !== "string" ||
      message.result.length > (container ? 524288 : 16000) ||
      !waiting.has(message.callId)
    )
      throw new Error("Unexpected tool result");
    waiting.get(message.callId)!(message.result);
    waiting.delete(message.callId);
    return;
  }
  if (
    message.type !== "request" ||
    active ||
    typeof message.id !== "string" ||
    !/^[a-zA-Z0-9-]{1,64}$/.test(message.id) ||
    typeof message.text !== "string" ||
    !message.text.trim() ||
    message.text.length > 1000 ||
    !Number.isInteger(message.maxToolCalls) ||
    message.maxToolCalls < 1 ||
    message.maxToolCalls > 32 ||
    !Number.isInteger(message.timeoutMs) ||
    message.timeoutMs < 1 ||
    message.timeoutMs > 180000
  )
    throw new Error("Invalid request");
  active = message.id;
  const id = active;
  void runBrain(
    message.text,
    message.maxToolCalls,
    message.timeoutMs,
    model,
    key!,
    docs,
    (name, args, signal) => exchange("tool", { name, args }, signal),
    (name, args, result) =>
      send({ type: "trace", id, name, args, result: result.slice(0, 4500) }),
    async (model, key, tools) => {
      const session = container
        ? await createBrain(
            model,
            "",
            tools,
            relayStream((body, signal) => exchange("model", { body }, signal)),
          )
        : await createBrain(model, key, tools);
      session.subscribe((event) => {
        if (event.type === "message_end" && event.message.role === "assistant")
          send({ type: "usage", id, usage: event.message.usage });
      });
      return session;
    },
    container,
  )
    .then(
      (answer) => send({ type: "answer", id, answer }),
      () => send({ type: "error", id, message: FALLBACK }),
    )
    .finally(() => {
      active = undefined;
      waiting.clear();
    });
}

// Bound a line before JSON parsing, including peers that never send a newline.
process.stdin.setEncoding("utf8");
let buffer = "";
process.stdin.on("data", (chunk) => {
  buffer += chunk;
  try {
    while (buffer.includes("\n")) {
      const end = buffer.indexOf("\n");
      if (end > 1048576) throw new Error("Long line");
      const line = buffer.slice(0, end);
      buffer = buffer.slice(end + 1);
      handle(JSON.parse(line));
    }
    if (buffer.length > 1048576) throw new Error("Long line");
  } catch {
    process.exit(1);
  }
});
process.stdin.on("end", () => process.exit(0));
process.on("SIGTERM", () => process.exit(0));
process.on("uncaughtException", () => process.exit(1));
process.on("unhandledRejection", () => process.exit(1));
send({
  type: "ready",
  protocol: 1,
  tools: container ? CONTAINER_TOOLS : TOOL_NAMES,
  startupMs: Math.round(performance.now() - started),
});
