package io.oyasai.oyasaitoken

import java.util.Locale
import me.clip.placeholderapi.expansion.PlaceholderExpansion
import org.bukkit.OfflinePlayer

/** Supplies TokenManager-compatible values through PlaceholderAPI for TAB and other consumers. */
internal class OyasaiTokenPlaceholderExpansion(private val plugin: OyasaiTokenPlugin) :
    PlaceholderExpansion() {
  override fun getIdentifier(): String = "tm"

  override fun getAuthor(): String = "OyasaiServer"

  override fun getVersion(): String = plugin.pluginMeta.version

  override fun persist(): Boolean = true

  override fun onRequest(player: OfflinePlayer?, params: String): String? {
    if (player == null || params != "tokens_commas") return null
    return String.format(Locale.ROOT, "%,d", plugin.getBalance(player.uniqueId))
  }
}
