package io.oyasai.oyasaiAdminTools.assistant

internal interface AssistantBackend : AutoCloseable {
  suspend fun run(
      request: String,
      maxToolCalls: Int,
      tools: Map<String, AssistantTool>,
      progress: AssistantProgress,
  ): String

  suspend fun runFor(
      actor: String,
      request: String,
      maxToolCalls: Int,
      tools: Map<String, AssistantTool>,
      progress: AssistantProgress,
  ): String = run(request, maxToolCalls, tools, progress)

  suspend fun reset(actor: String) {}

  suspend fun summarize(actor: String, facts: String): String = "（AI要約なし）"
}
