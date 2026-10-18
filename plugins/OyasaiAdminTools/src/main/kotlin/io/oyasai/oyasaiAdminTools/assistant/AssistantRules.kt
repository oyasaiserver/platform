package io.oyasai.oyasaiAdminTools.assistant

import java.util.Locale

internal object AssistantRules {
  private val playerName = Regex("[A-Za-z0-9_]{1,16}")
  val readCommands = setOf("syokaku iscandidate", "syokaku seeplayerinfo")

  fun normalize(command: String): String? {
    if (command.length > 512 || command.any { it.isISOControl() || it == '§' }) return null
    val value = command.trim().removePrefix("/").trim().replace(Regex(" +"), " ")
    if (value.isEmpty() || !Regex("[a-zA-Z][a-zA-Z0-9_]*").matches(value.substringBefore(' ')))
        return null
    return value
  }

  fun allows(command: String, allowed: List<String>): Boolean {
    val normalized = normalize(command) ?: return false
    val words = normalized.split(' ')
    if (
        words.size >= 2 &&
            words[0].equals("syokaku", true) &&
            words[1].equals("promote", true) &&
            words.drop(3).joinToString(" ").contains("GOOD", ignoreCase = true)
    )
        return false
    val lower = normalized.lowercase(Locale.ROOT)
    return allowed.any { entry ->
      val prefix = normalize(entry)?.lowercase(Locale.ROOT) ?: return@any false
      lower == prefix || lower.startsWith("$prefix ")
    }
  }

  fun allowsQuery(command: String, allowed: List<String>): Boolean {
    val normalized = normalize(command) ?: return false
    val words = normalized.split(' ')
    return words.size == 3 &&
        playerName.matches(words[2]) &&
        words.take(2).joinToString(" ").lowercase(Locale.ROOT) in readCommands &&
        allows(normalized, allowed)
  }
}
