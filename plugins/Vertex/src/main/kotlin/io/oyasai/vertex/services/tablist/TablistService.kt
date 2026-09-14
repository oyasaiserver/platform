package io.oyasai.vertex.services.tablist

import io.oyasai.vertex.Vertex.Companion.plugin
import io.oyasai.vertex.services.Service
import java.text.DecimalFormat
import java.text.NumberFormat
import java.util.Locale
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
  private val integerFormat = NumberFormat.getIntegerInstance(Locale.US)
  private val moneyFormat = DecimalFormat("#,##0.##")

  fun headerLegacy(version: String, receivedLikes: Int): String =
      listOf(
              "&8&m=============================",
              "&7&l&o&nOYASAI&f&l&oSERVER &7&l&o$version",
              "&bLikes&7：&6$receivedLikes",
          )
          .joinToString("\n")

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
              "&7&o¥&r&2${moneyFormat.format(money)} &f|&r &3${integerFormat.format(tokens)}&7&oP",
              "",
              "&a$online&f &7players online &f| &f$tps &7TPS",
              "&7Total &6${integerFormat.format(allLikes)} &7Likes &f| &2${integerFormat.format(buildings)} &7SLIDs",
              "&8&m==============================",
          )
          .joinToString("\n")

  fun playerNameLegacy(groupColor: String, suffix: String, likes: Int, playerName: String): String {
    val groupMark = if (groupColor.isBlank()) "" else "$groupColor*"
    return "&r$groupMark$suffix&f&7<&6${integerFormat.format(likes)}&7>&f $playerName"
  }

  fun formatTps(tps: Double): String = String.format(Locale.US, "%.2f", tps)

  fun minecraftVersion(bukkitVersion: String): String = bukkitVersion.substringBefore('-')
}
