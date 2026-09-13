package io.oyasai.oyasaiAdminTools.punishment

object MuteCommands {
  val DEFAULT =
      listOf(
          "me",
          "say",
          "action",
          "eaction",
          "describe",
          "edescribe",
          "eme",
          "w",
          "m",
          "pm",
          "whisper",
          "ewhisper",
          "emsg",
          "msg",
          "etell",
          "tell",
          "er",
          "r",
          "reply",
          "ereply",
          "ac",
          "eac",
          "amsg",
          "eamsg",
          "ehelpop",
          "p msg",
      )

  fun isMuted(message: String, commands: List<String>): Boolean {
    val parts = message.removePrefix("/").trim().split(Regex("\\s+"))
    if (parts.isEmpty() || parts[0].isEmpty()) return false
    val label = parts[0].lowercase()
    val unprefixed = label.substringAfter(':', label)
    val firstArg = parts.getOrNull(1)?.lowercase()
    return commands.any { raw ->
      val tokens = raw.lowercase().trim().split(Regex("\\s+")).filter { it.isNotEmpty() }
      when (tokens.size) {
        0 -> false
        1 -> label == tokens[0] || unprefixed == tokens[0]
        else -> (label == tokens[0] || unprefixed == tokens[0]) && firstArg == tokens[1]
      }
    }
  }
}
