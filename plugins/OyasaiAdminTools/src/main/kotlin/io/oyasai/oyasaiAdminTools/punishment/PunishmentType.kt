package io.oyasai.oyasaiAdminTools.punishment

enum class PunishmentType {
  BAN,
  TEMPBAN,
  MUTE,
  WARN,
  KICK;

  companion object {
    fun fromAdvancedBan(raw: String): PunishmentType? {
      return when (raw.uppercase().replace("-", "_")) {
        "BAN" -> BAN
        "TEMP_BAN",
        "TEMPBAN" -> TEMPBAN
        "MUTE",
        "TEMP_MUTE",
        "TEMPMUTE" -> MUTE
        "WARNING",
        "WARN",
        "TEMP_WARNING",
        "TEMPWARNING" -> WARN
        "KICK" -> KICK
        else -> null
      }
    }
  }
}
