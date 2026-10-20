package io.oyasai.oyasaiAdminTools.assistant

internal class AssistantProgress(
    private val onLocalTool: (String, String) -> Unit = { _, _ -> },
    private val onResult: (String, String) -> Unit = { _, _ -> },
) {
  fun localTool(name: String, args: String) = onLocalTool(name, args)

  fun record(name: String, result: String) = onResult(name, result)

  fun partial(reason: String): String = "$reason。回答をまとめられませんでした。対象を絞ってもう一度依頼してください。"
}
