package io.oyasai.vertex.services.tablist

import io.oyasai.vertex.Vertex.Companion.plugin
import io.oyasai.vertex.services.Service
import java.text.DecimalFormat
import java.text.DecimalFormatSymbols
import org.bukkit.Bukkit

object TablistService : Service() {
  private var runtime: TablistRuntime? = null

  override fun onEnable() {
    plugin.saveDefaultConfig()

    val missingPlugins =
        listOfNotNull(
            "SocialLikes3".takeIf { Bukkit.getPluginManager().getPlugin(it) == null },
            "TokenManager"
                .takeIf {
                  Bukkit.getPluginManager().getPlugin("TokenManager") == null &&
                      Bukkit.getPluginManager().getPlugin("OyasaiToken") == null
                },
            "Vault".takeIf { Bukkit.getPluginManager().getPlugin(it) == null },
            "LuckPerms".takeIf { Bukkit.getPluginManager().getPlugin(it) == null },
        )
    if (missingPlugins.isNotEmpty()) {
      plugin.logger.info(
          "TablistService disabled: missing plugins ${missingPlugins.joinToString()}"
      )
      return
    }
    runtime = TablistRuntime.start()
  }

  override fun onDisable() {
    runtime?.stop()
    runtime = null
  }
}

object TablistFormatter {
  private val symbols = DecimalFormatSymbols(java.util.Locale.US)
  private val moneyFormat = DecimalFormat("#,##0.##", symbols)
  private val tpsFormat = DecimalFormat("#.##", symbols)
  private val tokenFormat = DecimalFormat("#,##0", symbols)

  fun headerLegacy(version: String, receivedLikes: Int): String =
      listOf(
              "&8&m=============================",
              "&7&l&o&nOYASAI&f&l&oSERVER &7&l&o$version",
              "&bLikes&7：&6$receivedLikes",
          )
          .joinToString("\n")

  fun playerDisplayNameLegacy(playerName: String, afk: Boolean): String =
      if (afk) "&7$playerName &o[AFK]" else playerName

  fun footerLegacy(
      money: Double,
      tokens: Long,
      online: Int,
      tps: String,
      allLikes: Int,
      buildings: Int,
  ): String =
      listOf(
              "",
              "&7&o¥&r&2${moneyFormat.format(money)} &f|&r &3${tokenFormat.format(tokens)}&7&oP",
              "",
              "&a$online&f &7players online &f| &f$tps &7TPS",
              "&7Total &6$allLikes &7Likes &f| &2$buildings &7SLIDs",
              "&8&m==============================",
          )
          .joinToString("\n")

  fun playerNameLegacy(groupColor: String, suffix: String, likes: Int, playerName: String): String {
    val groupMark = if (groupColor.isBlank()) "" else "$groupColor*"
    return "&r$groupMark$suffix&f&7<&6$likes&7>&f $playerName"
  }

  fun formatTps(tps: Double): String = tpsFormat.format(tps.coerceAtMost(20.0))
}
