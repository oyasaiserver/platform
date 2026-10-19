import {
  createAssistantMessageEventStream,
  type AssistantMessage,
  type Context,
  type StreamFunction,
} from "@mariozechner/pi-ai";

// Text-only OpenAI wire format: no URLs, headers or credentials cross this interface.
export function payload(context: Context) {
  const text = (content: any) =>
    typeof content === "string"
      ? content
      : content
          .filter((c: any) => c.type === "text")
          .map((c: any) => c.text)
          .join("\n");
  return {
    messages: [
      ...(context.systemPrompt
        ? [{ role: "system", content: context.systemPrompt }]
        : []),
      ...context.messages.map((m) => {
        if (m.role === "toolResult")
          return {
            role: "tool",
            tool_call_id: m.toolCallId,
            content: text(m.content),
          };
        if (m.role === "user")
          return { role: "user", content: text(m.content) };
        const calls = m.content
          .filter((c) => c.type === "toolCall")
          .map((c) => ({
            id: c.id,
            type: "function",
            function: { name: c.name, arguments: JSON.stringify(c.arguments) },
          }));
        return {
          role: "assistant",
          content: text(m.content) || null,
          ...(calls.length ? { tool_calls: calls } : {}),
        };
      }),
    ],
    tools: (context.tools || []).map((t) => ({
      type: "function",
      function: {
        name: t.name,
        description: t.description,
        parameters: t.parameters,
      },
    })),
  };
}

export function relayStream(
  exchange: (body: unknown, signal?: AbortSignal) => Promise<string>,
): StreamFunction {
  return (model, context, options) => {
    const stream = createAssistantMessageEventStream();
    const message: AssistantMessage = {
      role: "assistant",
      content: [],
      api: model.api,
      provider: model.provider,
      model: model.id,
      timestamp: Date.now(),
      stopReason: "stop",
      usage: {
        input: 0,
        output: 0,
        cacheRead: 0,
        cacheWrite: 0,
        totalTokens: 0,
        cost: { input: 0, output: 0, cacheRead: 0, cacheWrite: 0, total: 0 },
      },
    };
    stream.push({ type: "start", partial: message });
    void exchange(payload(context), options?.signal)
      .then((raw) => {
        const response = JSON.parse(raw);
        const choice = response.choices?.[0];
        if (!choice?.message || response.error)
          throw new Error("Provider failed");
        if (choice.message.content)
          message.content.push({ type: "text", text: choice.message.content });
        for (const call of choice.message.tool_calls || [])
          message.content.push({
            type: "toolCall",
            id: call.id,
            name: call.function.name,
            arguments: JSON.parse(call.function.arguments),
          });
        message.stopReason = message.content.some((c) => c.type === "toolCall")
          ? "toolUse"
          : choice.finish_reason === "length"
            ? "length"
            : "stop";
        message.usage.input = response.usage?.prompt_tokens || 0;
        message.usage.output = response.usage?.completion_tokens || 0;
        message.usage.totalTokens = response.usage?.total_tokens || 0;
        stream.push({ type: "done", reason: message.stopReason, message });
        stream.end();
      })
      .catch(() => {
        message.stopReason = options?.signal?.aborted ? "aborted" : "error";
        message.errorMessage = "Model relay failed";
        stream.push({
          type: "error",
          reason: message.stopReason,
          error: message,
        });
        stream.end();
      });
    return stream;
  };
}
