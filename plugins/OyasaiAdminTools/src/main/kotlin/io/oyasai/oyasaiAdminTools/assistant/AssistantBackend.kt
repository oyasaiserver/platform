package io.oyasai.oyasaiAdminTools.assistant

internal interface AssistantBackend : AutoCloseable {
  suspend fun run(
      request: String,
      maxToolCalls: Int,
      tools: Map<String, AssistantTool>,
      progress: AssistantProgress,
  ): String
}
