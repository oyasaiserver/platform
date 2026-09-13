package io.oyasai.oyasaiAdminTools.punishment

sealed class PunishmentDuration {
  data object Permanent : PunishmentDuration()

  data class Temporary(val millis: Long) : PunishmentDuration()
}

object DurationParser {
  private val TOKEN = Regex("""(\d+)(mo|w|d|h|m|s)""", RegexOption.IGNORE_CASE)
  private val PERMANENT = setOf("perm", "permanent", "forever", "-1")

  fun parse(raw: String): PunishmentDuration? {
    val value = raw.trim().lowercase()
    if (value.isEmpty()) return null
    if (value in PERMANENT) return PunishmentDuration.Permanent

    var total = 0L
    var consumed = 0
    for (match in TOKEN.findAll(value)) {
      if (match.range.first != consumed) return null
      val amount = match.groupValues[1].toLongOrNull() ?: return null
      val unitMillis =
          when (match.groupValues[2].lowercase()) {
            "mo" -> 30L * 24 * 60 * 60 * 1000
            "w" -> 7L * 24 * 60 * 60 * 1000
            "d" -> 24L * 60 * 60 * 1000
            "h" -> 60L * 60 * 1000
            "m" -> 60L * 1000
            "s" -> 1000L
            else -> return null
          }
      total += amount * unitMillis
      consumed = match.range.last + 1
    }
    if (consumed != value.length || total <= 0L) return null
    return PunishmentDuration.Temporary(total)
  }

  fun label(duration: PunishmentDuration, original: String): String {
    return if (duration is PunishmentDuration.Permanent) "永久" else original
  }
}
