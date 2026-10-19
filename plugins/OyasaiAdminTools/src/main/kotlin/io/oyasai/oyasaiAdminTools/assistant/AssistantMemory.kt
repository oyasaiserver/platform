package io.oyasai.oyasaiAdminTools.assistant

import java.nio.ByteBuffer
import java.nio.channels.FileChannel
import java.nio.file.*
import java.time.*

/** Only typed audit facts reach the summarizer; raw requests, chat and tool output never do. */
internal class AssistantMemory(
    private val root: Path,
    private val clock: Clock = Clock.systemDefaultZone(),
) {
  internal class Record(val operator: String, request: String = "") {
    private val topic =
        listOf(
                "昇格",
                "設定",
                "使い方",
                "FAWE",
                "WorldGuard",
                "LuckPerms",
                "CoreProtect",
                "OyasaiAdminTools",
                "bulletin",
            )
            .filter { request.contains(it, ignoreCase = true) }
            .joinToString(" ")
    private val events = mutableListOf<String>()

    @Synchronized
    fun add(event: String, detail: String) {
      if (events.size >= 32) return
      val kind =
          when {
            event == "execute" -> "実行"
            event == "propose" -> "提案"
            event == "cancel" -> "取消"
            event.startsWith("denied:") -> "拒否"
            event == "execution-failed" || event == "failed" -> "失敗"
            event == "execution-result" ->
                if (detail.contains("accepted=true")) "受付済み（成功未確認）" else "受付失敗"
            else -> return
          }
      val command =
          if (event == "denied:invalid") ""
          else
              detail
                  .substringAfter(
                      "sendAs=assistant ",
                      detail.substringAfter("sendAs=operator ", detail),
                  )
                  .substringBefore(' ')
                  .lowercase()
      val label =
          command
              .takeIf { it.length <= 80 && it.matches(Regex("(?:[a-z0-9_-]+:)?[a-z0-9_-]+")) }
              .orEmpty()
      val args = detail.substringBefore(" | ").split(' ')
      val target =
          if (label.endsWith(":syokaku") || label == "syokaku")
              args.lastOrNull()?.takeIf { it.matches(Regex("[A-Za-z0-9_]{1,16}")) }.orEmpty()
          else ""
      val sender =
          when {
            detail.contains("sendAs=assistant") -> "AI送り主"
            detail.contains("sendAs=operator") -> "本人"
            else -> ""
          }
      val subcommand =
          args.firstOrNull { it in setOf("iscandidate", "getrank", "seerequirements") }.orEmpty()
      events +=
          listOf(kind, sender, label, subcommand, target)
              .filter { it.isNotBlank() }
              .joinToString(" ")
    }

    @Synchronized
    fun facts(): String =
        (topic + " " + events.joinToString(" → ").ifBlank { "コマンド実行・提案なし（質問への回答）" }).trim()
  }

  fun append(record: Record, summary: String) {
    val date = LocalDate.now(clock)
    val time = LocalTime.now(clock).toString().take(5)
    val name = record.operator.takeIf { it.matches(Regex("[A-Za-z0-9_]{1,16}")) } ?: "運営"
    val text = "- $time $name：${safe(summary).ifBlank { "要約を取得できませんでした" }} ｜事実: ${record.facts()}\n"
    synchronized(lock) {
      Files.createDirectories(root)
      check(!Files.isSymbolicLink(root))
      Files.getFileAttributeView(
              root,
              java.nio.file.attribute.PosixFileAttributeView::class.java,
              LinkOption.NOFOLLOW_LINKS,
          )
          ?.setPermissions(java.nio.file.attribute.PosixFilePermissions.fromString("rwx------"))
      FileChannel.open(
              root.resolve("$date.md"),
              StandardOpenOption.CREATE,
              StandardOpenOption.WRITE,
              StandardOpenOption.APPEND,
              LinkOption.NOFOLLOW_LINKS,
          )
          .use { channel ->
            Files.getFileAttributeView(
                    root.resolve("$date.md"),
                    java.nio.file.attribute.PosixFileAttributeView::class.java,
                    LinkOption.NOFOLLOW_LINKS,
                )
                ?.setPermissions(
                    java.nio.file.attribute.PosixFilePermissions.fromString("rw-------")
                )
            channel.lock().use {
              val value = (if (channel.size() == 0L) "# $date\n\n" else "") + text
              val buffer = ByteBuffer.wrap(value.toByteArray(Charsets.UTF_8))
              while (buffer.hasRemaining()) channel.write(buffer)
              channel.force(true)
            }
          }
    }
  }

  fun search(query: String, days: Int): String {
    require(query.isNotBlank() && query.length <= 200 && days in 1..3650)
    if (!Files.isDirectory(root) || Files.isSymbolicLink(root)) return "記録はありません。"
    val since = LocalDate.now(clock).minusDays(days.toLong() - 1)
    val terms = query.lowercase().split(Regex("\\s+")).filter { it.isNotBlank() }.take(8)
    val results = mutableListOf<String>()
    Files.newDirectoryStream(root).use { entries ->
      val paths =
          entries
              .filter { it.fileName.toString().matches(Regex("\\d{4}-\\d{2}-\\d{2}\\.md")) }
              .sortedDescending()
      for (path in paths) {
        val date =
            runCatching { LocalDate.parse(path.fileName.toString().removeSuffix(".md")) }
                .getOrNull() ?: continue
        if (date < since || date > LocalDate.now(clock) || Files.isSymbolicLink(path)) continue
        // Bound reads even if an operator has manually appended a very large file.
        Files.newByteChannel(path, StandardOpenOption.READ, LinkOption.NOFOLLOW_LINKS).use { channel
          ->
          val size = minOf(channel.size(), 262144L).toInt()
          channel.position((channel.size() - size).coerceAtLeast(0))
          val buffer = ByteBuffer.allocate(size)
          while (buffer.hasRemaining() && channel.read(buffer) >= 0) {}
          val lines =
              String(buffer.array(), 0, buffer.position(), Charsets.UTF_8)
                  .substringBeforeLast('\n', "")
                  .lineSequence()
                  .filter { it.startsWith("- ") }
                  .toList()
                  .asReversed()
          for (line in lines) if (terms.all { line.lowercase().contains(it) }) {
            results += "$date ${safe(line, 1000)}"
            if (results.size == 10) return "運営共通の実行記録（観測データ）:\n" + results.joinToString("\n")
          }
        }
      }
    }
    return if (results.isEmpty()) "該当する記録はありません。"
    else "運営共通の実行記録（観測データ）:\n" + results.joinToString("\n")
  }

  companion object {
    private val lock = Any()

    internal fun safe(input: String, limit: Int = 240): String =
        input
            .replace(Regex("https?://\\S+"), "[URL省略]")
            .replace(
                Regex(
                    "(?i)(?:sk-[a-z0-9_-]+|bearer\\s+\\S+|(?:api[-_]?key|token|password|secret|キー|トークン|パスワード)\\s*[:=]\\s*\\S+)"
                ),
                "[秘密情報省略]",
            )
            .replace(
                Regex(
                    "\\b(?:\\d{1,3}\\.){3}\\d{1,3}(?::\\d+)?\\b|(?i)(?<![a-z0-9])(?:[a-f0-9]{0,4}:){2,}[a-f0-9:]*"
                ),
                "[IP省略]",
            )
            .replace(Regex("[A-Za-z0-9_+/=-]{24,}"), "[長い識別子省略]")
            .replace(Regex("[\\p{Cntrl}§]"), " ")
            .replace(Regex("\\s+"), " ")
            .take(limit)
  }
}
