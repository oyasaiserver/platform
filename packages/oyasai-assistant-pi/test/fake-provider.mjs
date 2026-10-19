// Test-only OpenAI stream. Refuse every real network access.
globalThis.fetch = async (_input, options) => {
  const body = JSON.parse(options.body);
  const known = body.messages
    .filter((m) => m.role !== "system")
    .some((m) => JSON.stringify(m).includes("pmzt"));
  const chunk = {
    id: "offline",
    object: "chat.completion.chunk",
    created: 0,
    model: "offline",
    choices: [
      {
        index: 0,
        delta: { role: "assistant", content: known ? "pmzt" : "unknown" },
        finish_reason: "stop",
      },
    ],
    usage: { prompt_tokens: 10, completion_tokens: 1, total_tokens: 11 },
  };
  return new Response(
    "data: " + JSON.stringify(chunk) + "\n\ndata: [DONE]\n\n",
    { status: 200, headers: { "content-type": "text/event-stream" } },
  );
};
