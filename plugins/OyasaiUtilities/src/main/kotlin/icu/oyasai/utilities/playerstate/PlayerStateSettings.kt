package icu.oyasai.utilities.playerstate

import java.io.File
import org.bukkit.configuration.file.YamlConfiguration

class PlayerStateSettings(file: File) {
  private val yaml =
      YamlConfiguration().apply {
        if (file.exists()) load(file)
        mapOf<String, Any>(
                "auto-afk" to 600,
                "auto-afk-kick" to -1,
                "cancel-afk-on-move" to true,
                "cancel-afk-on-interact" to true,
                "cancel-afk-on-chat" to true,
                "cancel-afk-on-fish" to true,
                "sleep-ignores-afk-players" to true,
                "freeze-afk-players" to false,
                "broadcast-afk-message" to true,
                "max-fly-speed" to 0.8,
                "max-walk-speed" to 0.8,
                "nickname-prefix" to "",
                "max-nick-length" to 32,
                "change-displayname" to true,
                "allowed-nicks-regex" to "^[a-zA-Z_0-9§]+$",
                "ignore-colors-in-max-nick-length" to false,
                "nick-blacklist" to emptyList<String>(),
                "heal-cooldown" to 60,
                "remove-effects-on-heal" to true,
                "world-time-permissions" to false,
                "world-change-fly-reset" to true,
                "world-change-speed-reset" to true,
                "world-change-preserve-flying" to true,
                "vanishing-items-policy" to "keep",
                "binding-items-policy" to "keep",
            )
            .forEach { (key, value) -> addDefault(key, value) }
        options().copyDefaults(true)
        file.parentFile.mkdirs()
        save(file)
      }

  fun bool(key: String) = yaml.getBoolean(key)

  fun int(key: String) = yaml.getInt(key)

  fun string(key: String) = yaml.getString(key)!!

  val vanishingPolicy =
      string("vanishing-items-policy").also { require(it in listOf("keep", "drop", "delete")) }
  val bindingPolicy =
      string("binding-items-policy").also { require(it in listOf("keep", "drop", "delete")) }
  val maxFly = yaml.getDouble("max-fly-speed").toFloat().also { require(it in 0.1f..1f) }
  val maxWalk = yaml.getDouble("max-walk-speed").toFloat().also { require(it in 0.1f..1f) }
  val nickRegex = Regex(string("allowed-nicks-regex"))
  val nickBlacklist =
      yaml.getStringList("nick-blacklist").map { Regex(it, RegexOption.IGNORE_CASE) }
}
