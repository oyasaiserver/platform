package icu.oyasai.utilities.playerstate

import org.bukkit.ChatColor
import org.bukkit.GameMode

/** Rules ported from EssentialsX 776f709, kept independent of a running server. */
object PlayerStateRules {
  const val AFK_METADATA = "oyasaiutilities-afk"
  val aliases =
      linkedMapOf(
          "gamemode" to
              listOf(
                  "gm",
                  "gmc",
                  "gms",
                  "gmsp",
                  "gma",
                  "sp",
                  "spec",
                  "spectator",
                  "survival",
                  "creative",
              ),
          "fly" to emptyList(),
          "speed" to listOf("flyspeed"),
          "jump" to listOf("j", "jumpto"),
          "time" to listOf("day", "night"),
          "weather" to listOf("sun", "rain"),
          "ptime" to listOf("playertime"),
          "heal" to emptyList(),
          "afk" to emptyList(),
          "nick" to emptyList(),
          "realname" to emptyList(),
      )

  fun mode(input: String): GameMode? {
    val s = input.lowercase()
    return when {
      s in listOf("gmc", "egmc") || s.contains("creat") || s in listOf("1", "c") ->
          GameMode.CREATIVE
      s in listOf("gms", "egms") || s.contains("survi") || s in listOf("0", "s") ->
          GameMode.SURVIVAL
      s in listOf("gma", "egma") || s.contains("advent") || s in listOf("2", "a") ->
          GameMode.ADVENTURE
      s in listOf("gmsp", "egmsp") || s.contains("spec") || s in listOf("3", "sp") ->
          GameMode.SPECTATOR
      s in listOf("gmt", "egmt") || s.contains("toggle") || s.contains("cycle") || s == "t" -> null
      else -> throw IllegalArgumentException("ゲームモードを指定してください。")
    }
  }

  fun canChangeMode(has: (String) -> Boolean, mode: GameMode) =
      has("essentials.gamemode.all") || has("essentials.gamemode.${mode.name.lowercase()}")

  fun toggle(arg: String?): Boolean? =
      when {
        arg == null -> null
        arg.equals("on", true) || arg.startsWith("ena") || arg == "1" -> true
        arg.equals("off", true) || arg.startsWith("dis") || arg == "0" -> false
        else -> null
      }

  fun speed(userSpeed: Float, fly: Boolean, bypass: Boolean, maximum: Float): Float {
    require(userSpeed.isFinite()) { "速度には有限の数値を指定してください。" }
    val n = userSpeed.coerceIn(0.0001f, 10f)
    val default = if (fly) 0.1f else 0.2f
    return if (n < 1f) default * n
    else default + (n - 1f) / 9f * ((if (bypass) 1f else maximum) - default)
  }

  fun speedType(requestedFly: Boolean, has: (String) -> Boolean): Boolean {
    val fly = has("essentials.speed.fly")
    val walk = has("essentials.speed.walk")
    return if ((requestedFly && fly) || (!requestedFly && walk) || (!fly && !walk)) requestedFly
    else !walk
  }

  fun keepInventory(has: (String) -> Boolean) = has("essentials.keepinv")

  fun keepExperience(has: (String) -> Boolean) = has("essentials.keepxp")

  fun cursePolicy(
      vanishing: Boolean,
      binding: Boolean,
      vanishingPolicy: String,
      bindingPolicy: String,
  ): String =
      when {
        vanishing && vanishingPolicy != "keep" -> vanishingPolicy
        binding && bindingPolicy != "keep" -> bindingPolicy
        else -> "keep"
      }

  val timeNames =
      mapOf(
          "sunrise" to 23000L,
          "dawn" to 23000L,
          "daystart" to 0L,
          "day" to 0L,
          "morning" to 1000L,
          "midday" to 6000L,
          "noon" to 6000L,
          "afternoon" to 9000L,
          "sunset" to 12000L,
          "dusk" to 12000L,
          "sundown" to 12000L,
          "nightfall" to 12000L,
          "nightstart" to 14000L,
          "night" to 14000L,
          "midnight" to 18000L,
      )

  fun ticks(input: String, bareTicks: Boolean = false): Long {
    val s = input.lowercase().replace(Regex("[^a-z0-9:]"), "")
    timeNames[s]?.let {
      return it
    }
    if (s.matches(Regex("[0-9]+ti?c?k?s?")) || (bareTicks && input.matches(Regex("[+-]?[0-9]+"))))
        return s.filter(Char::isDigit).toLong() % 24000
    val digits = s.filter(Char::isDigit)
    val h: Int
    val m: Int
    when {
      s.matches(Regex("[0-9]{2}:?[0-9]{2}")) -> {
        h = digits.take(2).toInt()
        m = digits.takeLast(2).toInt()
      }
      s.matches(Regex("[0-9]{1,2}(:?[0-9]{2})?(pm|am)")) -> {
        var hour = if (digits.length > 2) digits.dropLast(2).toInt() else digits.toInt()
        m = if (digits.length > 2) digits.takeLast(2).toInt() else 0
        if (s.endsWith("pm") && hour != 12) hour += 12
        if (s.endsWith("am") && hour == 12) hour = 0
        h = hour
      }
      else -> throw IllegalArgumentException("時刻を指定してください。")
    }
    return (18000 + h * 1000 + m / 60.0 * 1000).toLong() % 24000
  }

  fun plain(input: String): String = ChatColor.stripColor(input) ?: ""

  fun unformat(input: String): String =
      input
          .replace(Regex("§x((?:§[0-9a-fA-F]){6})")) { "&#" + it.groupValues[1].replace("§", "") }
          .replace('§', '&')

  fun formatNick(input: String, has: (String) -> Boolean, explicit: (String) -> Boolean?): String {
    val codes =
        ChatColor.values()
            .filter { c ->
              val individual =
                  "essentials.nick." +
                      if (c == ChatColor.MAGIC) "obfuscated" else c.name.lowercase()
              explicit(individual)
                  ?: has(
                      "essentials.nick." +
                          when {
                            c.isColor -> "color"
                            c == ChatColor.MAGIC -> "magic"
                            else -> "format"
                          }
                  )
            }
            .map { it.char }
            .toSet()
    var result =
        input.replace(Regex("§+([0-9a-fk-orA-FK-OR])")) {
          if (it.groupValues[1].lowercase()[0] in codes) it.value else ""
        }
    // Preserve the upstream && escaping and leave unauthorized ampersand codes literal.
    if (codes.isNotEmpty() || has("essentials.nick.rgb")) {
      result =
          result.replace(Regex("(&)?&([0-9a-fk-orA-FK-OR])")) {
            if (it.groupValues[1].isEmpty() && it.groupValues[2].lowercase()[0] in codes)
                "§${it.groupValues[2]}"
            else "&${it.groupValues[2]}"
          }
      if (has("essentials.nick.rgb"))
          result =
              result.replace(Regex("(&)?&#([0-9a-fA-F]{6})")) {
                if (it.groupValues[1].isEmpty())
                    "§x" + it.groupValues[2].map { c -> "§$c" }.joinToString("")
                else "&#${it.groupValues[2]}"
              }
    }
    return result
  }
}
