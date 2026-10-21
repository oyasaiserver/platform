package io.oyasai.oyasaiAdminTools.assistant

import java.util.UUID
import org.bukkit.configuration.ConfigurationSection

/** Configured approvals never replace normalization, blacklist or operator permission checks. */
internal class AssistantAutoApprove(
    settings: ConfigurationSection?,
    warn: (String) -> Unit,
    private val now: () -> Long = System::nanoTime,
) {
  internal data class Entry(
      val number: Int,
      val command: String,
      val arguments: String,
      val pattern: Regex,
      val perMinute: Int?,
      val worlds: List<String>?,
  )

  val entries: List<Entry> = run {
    val raw = settings?.get("auto-approve") ?: emptyList<Any>()
    if (raw !is List<*>) {
      warn("Assistant auto-approve: expected a list; disabled")
      emptyList()
    } else
        raw.mapIndexedNotNull { index, value ->
          try {
            val row = value as? Map<*, *> ?: error("expected a mapping")
            require(row.keys.all { it in setOf("command", "arguments", "per-minute", "worlds") }) {
              "unknown field"
            }
            val command = row["command"] as? String ?: error("command is required")
            require(command.matches(Regex("[a-z0-9_.-]+:/?[a-z0-9_.-]+"))) {
              "command must be a normalized owner:name"
            }
            val arguments =
                if (row.containsKey("arguments"))
                    row["arguments"] as? String ?: error("arguments must be a string")
                else ""
            val pattern = safePattern(arguments)
            val limit =
                if (row.containsKey("per-minute")) {
                  val n = row["per-minute"]
                  require(n is Int && n in 1..10000) { "per-minute must be an integer in 1..10000" }
                  n
                } else null
            val worlds =
                if (row.containsKey("worlds")) {
                  val names = row["worlds"]
                  require(
                      names is List<*> &&
                          names.isNotEmpty() &&
                          names.all {
                            it is String &&
                                it.isNotBlank() &&
                                it.length <= 256 &&
                                it.none(Char::isISOControl)
                          }
                  ) {
                    "worlds must be a non-empty list of names"
                  }
                  names.map { it as String }
                } else null
            Entry(index + 1, command, arguments, pattern, limit, worlds)
          } catch (failure: IllegalArgumentException) {
            warn("Assistant auto-approve:${index + 1} disabled: ${failure.message}")
            null
          } catch (failure: IllegalStateException) {
            warn("Assistant auto-approve:${index + 1} disabled: ${failure.message}")
            null
          }
        }
  }

  private val uses = mutableMapOf<Pair<UUID, Int>, ArrayDeque<Long>>()

  fun match(command: String, operator: UUID, world: String, consume: Boolean = false): Entry? {
    if (command.length > 256 || command.any { it.isISOControl() }) return null
    val label = command.substringBefore(' ')
    val arguments = command.substringAfter(' ', "")
    val time = now()
    uses.entries.removeIf { (_, history) ->
      while (history.isNotEmpty() && time - history.first() >= 60_000_000_000L) history
          .removeFirst()
      history.isEmpty()
    }
    for (entry in entries) {
      if (
          label != entry.command ||
              !entry.pattern.matches(arguments) ||
              (entry.worlds != null && world !in entry.worlds)
      )
          continue
      if (entry.perMinute != null) {
        val history = uses.getOrPut(operator to entry.number) { ArrayDeque() }
        if (history.size >= entry.perMinute) continue
        if (consume) history.addLast(time)
      }
      return entry
    }
    return null
  }

  companion object {
    const val NUMBER = "[+-]?[0-9]+(?:\\.[0-9]+)?"
    private val literal = Regex("[a-z0-9_:/~-]+")

    private fun safePattern(source: String): Regex {
      require(source.length <= 512) { "arguments pattern exceeds 512 characters" }
      if (source.isEmpty()) return Regex("")
      val tokens = source.split(' ')
      require(tokens.size <= 32 && tokens.all(::safeToken)) {
        "unsafe or unsupported arguments pattern; use space-separated literals, literal alternatives, a positive character class, or $NUMBER"
      }
      return Regex(source)
    }

    // Each token has at most one variable-length class (or the disjoint sign/digits/decimal form).
    // No token matches spaces, so matching cannot backtrack across argument boundaries.
    private fun safeToken(token: String): Boolean {
      if (
          literal.matches(token) ||
              token == NUMBER ||
              token == "[+-]?[0-9]+" ||
              token == "[0-9]+(?:\\.[0-9]+)?"
      )
          return true
      if (token.startsWith("(?:") && token.endsWith(')')) {
        val words = token.substring(3, token.length - 1).split('|')
        return words.size in 2..32 &&
            words.distinct().size == words.size &&
            words.all { literal.matches(it) }
      }
      if (!token.startsWith('[')) return false
      val end = token.indexOf(']')
      if (end <= 1) return false
      val body = token.substring(1, end).replace("a-z", "").replace("0-9", "")
      if (body.any { it !in "abcdefghijklmnopqrstuvwxyz0123456789_+.:/~-" }) return false
      val suffix = token.substring(end + 1)
      if (suffix in listOf("", "+", "?")) return true
      val bounds = Regex("\\{([0-9]{1,3})(?:,([0-9]{1,3}))?}").matchEntire(suffix) ?: return false
      val min = bounds.groupValues[1].toInt()
      val max = bounds.groupValues[2].takeIf { it.isNotEmpty() }?.toInt() ?: min
      return min in 1..256 && max in min..256
    }
  }
}
