package io.oyasai.oyasaiAdminTools.assistant

internal class AssistantDocs {
  private val loader = javaClass.classLoader
  private val names =
      checkNotNull(resource("index.txt")).lineSequence().filter { it.isNotBlank() }.toList()

  private fun resource(path: String): String? =
      loader.getResourceAsStream("assistant-docs/$path")?.bufferedReader(Charsets.UTF_8)?.use {
        it.readText()
      }

  fun list(): String = names.joinToString("\n")

  fun read(name: String, part: String): String {
    if (name !in names) return "資料がありません。list_docs の名前をそのまま指定してください。"
    val parts =
        listOf("PROJECT.md", "player.md")
            .mapNotNull { file -> resource("$name/$file")?.let { "\n# $file\n$it" } }
            .joinToString("\n")
            .chunked(6000)
    val page = part.toIntOrNull() ?: return "part は1からの整数を指定してください。"
    if (page !in 1..parts.size) return "part は1〜${parts.size}です。"
    return "$name part=$page/${parts.size}\n${parts[page - 1]}"
  }
}
