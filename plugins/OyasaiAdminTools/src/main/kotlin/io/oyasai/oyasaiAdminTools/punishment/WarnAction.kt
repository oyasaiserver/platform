package io.oyasai.oyasaiAdminTools.punishment

sealed class WarnAction {
  data object Kick : WarnAction()

  data class Ban(val duration: PunishmentDuration) : WarnAction()
}

object WarnActionParser {
  fun parse(raw: String): WarnAction? {
    val tokens =
        raw.trim()
            .replace("%PLAYER%", "", ignoreCase = true)
            .replace("%COUNT%", "", ignoreCase = true)
            .replace("%REASON%", "", ignoreCase = true)
            .split(Regex("\\s+"))
            .filter { it.isNotEmpty() }
    if (tokens.isEmpty()) return null
    return when (tokens[0].lowercase()) {
      "kick" -> WarnAction.Kick
      "ban" -> WarnAction.Ban(PunishmentDuration.Permanent)
      "tempban" -> {
        val durationToken = tokens.drop(1).firstOrNull { DurationParser.parse(it) != null }
        val duration = durationToken?.let { DurationParser.parse(it) } ?: return null
        WarnAction.Ban(duration)
      }
      else -> null
    }
  }
}
