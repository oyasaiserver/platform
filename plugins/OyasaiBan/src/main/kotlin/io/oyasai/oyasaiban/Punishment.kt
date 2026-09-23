package io.oyasai.oyasaiban

import java.util.UUID

enum class PunishmentType {
  BAN,
  TEMP_BAN,
}

data class PunishmentRecord(
    val id: Long = 0,
    val uuid: UUID,
    val name: String,
    val type: PunishmentType,
    val reason: String,
    val operator: String,
    val start: Long,
    val end: Long?,
) {
  fun isActiveAt(now: Long): Boolean = end == null || end > now
}

sealed interface PunishmentDuration {
  data object Permanent : PunishmentDuration

  data class Temporary(val millis: Long) : PunishmentDuration
}

object DurationParser {
  private val token = Regex("""(\d+)(mo|mi|w|d|h|s|y)""", RegexOption.IGNORE_CASE)

  fun parse(raw: String): PunishmentDuration? {
    val value = raw.trim().lowercase()
    if (value.isEmpty()) return null

    var total = 0L
    var consumed = 0
    for (match in token.findAll(value)) {
      if (match.range.first != consumed) return null
      val amount = match.groupValues[1].toLongOrNull() ?: return null
      val unit =
          when (match.groupValues[2].lowercase()) {
            "y" -> 365L * 24 * 60 * 60 * 1000
            "mo" -> 30L * 24 * 60 * 60 * 1000
            "w" -> 7L * 24 * 60 * 60 * 1000
            "d" -> 24L * 60 * 60 * 1000
            "h" -> 60L * 60 * 1000
            "mi" -> 60L * 1000
            "s" -> 1000L
            else -> return null
          }
      total =
          runCatching { Math.addExact(total, Math.multiplyExact(amount, unit)) }.getOrNull()
              ?: return null
      consumed = match.range.last + 1
    }
    return total
        .takeIf { consumed == value.length && it > 0 }
        ?.let { PunishmentDuration.Temporary(it) }
  }
}

sealed interface BanArguments {
  data class Valid(
      val duration: PunishmentDuration,
      val durationLabel: String,
      val reason: String,
      val notificationReason: String,
  ) : BanArguments

  data class Invalid(val message: String) : BanArguments

  companion object {
    fun parse(arguments: List<String>): BanArguments {
      if (arguments.isEmpty()) return Invalid("§c理由を指定してください。")
      val first = arguments.first()
      val duration = DurationParser.parse(first)
      if (duration != null) {
        if (arguments.size < 2) return Invalid("§c理由を指定してください。")
        return Valid(
            duration,
            if (duration is PunishmentDuration.Permanent) "永久" else first,
            arguments.drop(1).joinToString(" "),
            arguments[1],
        )
      }
      if (first.firstOrNull()?.isDigit() == true) {
        return Invalid("§c期間の形式が不正です。使用可能: s, mi, h, d, w, mo, y")
      }
      return Valid(PunishmentDuration.Permanent, "永久", arguments.joinToString(" "), first)
    }
  }
}
