package io.oyasai.chat.paper.mute

import java.util.Calendar
import java.util.GregorianCalendar

data class MuteState(
    val muted: Boolean = false,
    val expiresAt: Long = 0,
    val reason: String? = null,
    val essentialsCleanupPending: Boolean = false,
) {
  fun active(now: Long): Boolean = muted && (expiresAt <= 0 || expiresAt > now)

  fun expired(now: Long): Boolean = muted && expiresAt > 0 && expiresAt <= now
}

object MuteRules {
  // DateUtil at EssentialsX 776f709 accepts the first matching duration, including bare seconds.
  private val timePattern =
      Regex(
          "(?:([0-9]+)\\s*y[a-z]*[,\\s]*)?" +
              "(?:([0-9]+)\\s*mo[a-z]*[,\\s]*)?" +
              "(?:([0-9]+)\\s*w[a-z]*[,\\s]*)?" +
              "(?:([0-9]+)\\s*d[a-z]*[,\\s]*)?" +
              "(?:([0-9]+)\\s*h[a-z]*[,\\s]*)?" +
              "(?:([0-9]+)\\s*m[a-z]*[,\\s]*)?" +
              "(?:([0-9]+)\\s*(?:s[a-z]*)?)?",
          RegexOption.IGNORE_CASE,
      )

  fun duration(input: String, now: Long): Long {
    val match =
        timePattern.findAll(input).firstOrNull { it.value.isNotEmpty() }
            ?: throw IllegalArgumentException("Invalid duration")
    val calendar = GregorianCalendar().apply { timeInMillis = now }
    val fields =
        listOf(
            Calendar.YEAR,
            Calendar.MONTH,
            Calendar.WEEK_OF_YEAR,
            Calendar.DAY_OF_MONTH,
            Calendar.HOUR_OF_DAY,
            Calendar.MINUTE,
            Calendar.SECOND,
        )
    fields.forEachIndexed { index, field ->
      val value = match.groupValues[index + 1].takeIf { it.isNotEmpty() }?.toInt() ?: 0
      if (value > 0) calendar.add(field, if (index == 0) value.coerceAtMost(100000) else value)
    }
    val maximum =
        GregorianCalendar().apply {
          timeInMillis = now
          add(Calendar.YEAR, 10)
        }
    return minOf(calendar.timeInMillis, maximum.timeInMillis)
  }

  fun change(previous: MuteState, args: List<String>, now: Long): MuteState {
    if (args.isEmpty()) return if (previous.active(now)) MuteState() else MuteState(muted = true)
    val expiry = runCatching { duration(args[0], now) }.getOrNull()
    val reason = (if (expiry != null) args.drop(1) else args).joinToString(" ").ifEmpty { null }
    return MuteState(true, expiry ?: 0, reason)
  }

  fun blocksCommand(message: String, configured: Set<String>): Boolean {
    val root = message.removePrefix("/").substringBefore(' ').lowercase().substringAfter(':')
    val mailRead =
        root in setOf("mail", "email") &&
            message.trim().split(Regex("\\s+")).getOrNull(1)?.lowercase() != "send"
    return "*" in configured || root in configured || (root in messagingCommands && !mailRead)
  }

  // Existing OyasaiChat aliases plus Essentials messaging roots/aliases still present in
  // coexistence.
  private val messagingCommands =
      setOf(
          "msg",
          "tell",
          "message",
          "pm",
          "r",
          "reply",
          "m",
          "t",
          "w",
          "whisper",
          "emsg",
          "etell",
          "er",
          "ereply",
          "ewhisper",
          "me",
          "eme",
          "action",
          "eaction",
          "describe",
          "edescribe",
          "mail",
          "email",
      )
}
