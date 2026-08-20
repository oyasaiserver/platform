package io.oyasai.chat.paper.chat

import me.clip.placeholderapi.PlaceholderAPI
import io.oyasai.chat.paper.OyasaiChatPlugin
import org.bukkit.entity.Player

// PlaceholderAPIによるプレースホルダー展開。
internal class PlaceholderApiSupport(private val plugin: OyasaiChatPlugin) {
  init {
    plugin.logger.info("PlaceholderAPI integration is available.")
  }

  fun expand(player: Player, format: String): String =
      try {
        PlaceholderAPI.setPlaceholders(player, format)
      } catch (error: Exception) {
        plugin.logger.warning("PlaceholderAPI expansion failed: ${error.message}")
        format
      }
}
