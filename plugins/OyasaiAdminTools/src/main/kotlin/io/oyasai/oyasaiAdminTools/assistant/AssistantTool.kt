package io.oyasai.oyasaiAdminTools.assistant

internal class AssistantTool(
    val name: String,
    private val action: suspend (Map<String, String>) -> String,
) {
  suspend fun execute(args: Map<String, String>): String = action(args)
}
