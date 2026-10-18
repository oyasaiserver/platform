package io.oyasai.oyasaiAdminTools.assistant

import java.util.Locale

internal class AssistantDocs {
  private val loader = javaClass.classLoader
  private val names =
      checkNotNull(resource("index.txt")).lineSequence().filter { it.isNotBlank() }.toList()

  private fun resource(path: String): String? =
      loader.getResourceAsStream("assistant-docs/$path")?.bufferedReader(Charsets.UTF_8)?.use {
        it.readText()
      }

  fun list(): String = names.joinToString("\n")

  fun search(query: String): String {
    val terms = query.trim().lowercase(Locale.ROOT).split(Regex("\\s+")).filter { it.isNotBlank() }
    if (terms.isEmpty() || query.length > 200) return "検索語は1〜200文字で指定してください。"
    val matches =
        names
            .flatMap { name ->
              listOf("PROJECT.md", "player.md").flatMap { file ->
                val text =
                    resource("$name/$file")
                        .orEmpty()
                        .replaceFirst(Regex("\\A---\\R[\\s\\S]*?\\R---\\R"), "")
                text.split(Regex("(?m)(?=^#{1,6} )")).mapNotNull { section ->
                  val heading = section.lineSequence().firstOrNull().orEmpty()
                  val searchable = "$name\n$section".lowercase(Locale.ROOT)
                  if (section.isBlank() || !terms.all { it in searchable }) return@mapNotNull null
                  val score =
                      terms.count { heading.contains(it, ignoreCase = true) || name.contains(it) }
                  val body = section.substringAfter('\n', "")
                  val hit =
                      terms
                          .map { body.indexOf(it, ignoreCase = true) }
                          .filter { it >= 0 }
                          .minOrNull() ?: 0
                  val start = (hit - 150).coerceAtLeast(0)
                  Triple(
                      score,
                      "$name/$file",
                      "$heading\n${if (start > 0) "…" else ""}${body.drop(start).take(1000)}",
                  )
                }
              }
            }
            .sortedByDescending { it.first }
            .take(3)
    if (matches.isEmpty())
        return "該当する同梱資料はありません。同梱は自作プラグインの資料だけです。関係のない資料を探し回らず、一般知識で回答すると明記してください。"
    return "自作プラグインの公開資料からの抜粋（外部プラグインの公式資料ではありません）:\n" +
        matches.joinToString("\n\n") { "${it.second}\n${it.third}" }.take(3900)
  }

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
