package io.oyasai.chat.paper.chat

import net.kyori.adventure.text.Component
import io.oyasai.chat.paper.OyasaiChatPlugin
import org.bukkit.entity.Player

// PlaceholderAPIとVaultの表示情報取得。
internal class ChatPlaceholderSupport(private val plugin: OyasaiChatPlugin) {
  private val placeholderApi =
      if (plugin.server.pluginManager.isPluginEnabled("PlaceholderAPI")) {
        PlaceholderApiSupport(plugin)
      } else {
        plugin.logger.info("PlaceholderAPI is not installed; placeholder expansion is disabled.")
        null
      }

  private val vault =
      if (plugin.server.pluginManager.isPluginEnabled("Vault")) {
        VaultSupport.create(plugin)
      } else {
        plugin.logger.info("Vault is not installed; prefix/suffix integration is disabled.")
        null
      }

  fun expand(player: Player, format: String): String = placeholderApi?.expand(player, format) ?: format

  fun prefix(player: Player?): Component = vault?.prefix(player) ?: Component.empty()

  fun suffix(player: Player?): Component = vault?.suffix(player) ?: Component.empty()
}
