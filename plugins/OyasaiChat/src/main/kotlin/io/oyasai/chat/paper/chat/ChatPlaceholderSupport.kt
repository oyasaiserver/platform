package io.oyasai.chat.paper.chat

import io.oyasai.chat.paper.OyasaiChatPlugin
import net.kyori.adventure.text.Component
import org.bukkit.entity.Player

// Vaultの表示情報取得。
internal class ChatPlaceholderSupport(private val plugin: OyasaiChatPlugin) {
  private val vault =
      if (plugin.server.pluginManager.isPluginEnabled("Vault")) {
        VaultSupport.create(plugin)
      } else {
        plugin.logger.info("Vault is not installed; prefix/suffix integration is disabled.")
        null
      }

  fun prefix(player: Player?): Component = vault?.prefix(player) ?: Component.empty()

  fun suffix(player: Player?): Component = vault?.suffix(player) ?: Component.empty()
}
