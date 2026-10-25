package io.oyasai.chat.paper.chat

import io.oyasai.chat.paper.OyasaiChatPlugin
import net.kyori.adventure.text.Component
import org.bukkit.entity.Player

// LuckPermsの表示情報取得。
internal class ChatPlaceholderSupport(private val plugin: OyasaiChatPlugin) {
  private val luckPerms =
      if (plugin.server.pluginManager.isPluginEnabled("LuckPerms")) {
        LuckPermsSupport.create(plugin)
      } else {
        plugin.logger.info("LuckPerms is not installed; prefix/suffix integration is disabled.")
        null
      }

  fun prefix(player: Player?): Component = luckPerms?.prefix(player) ?: Component.empty()

  fun suffix(player: Player?): Component = luckPerms?.suffix(player) ?: Component.empty()
}
