package io.oyasai.chat.paper.integration

import io.oyasai.chat.paper.OyasaiChatPlugin
import org.bukkit.entity.Player

// Discord連携の共通インターフェース。
interface DiscordBridge {
  fun enable()

  fun disable()

  fun onMinecraftMessage(channelName: String, sender: Player, message: String)

  fun onPrivateMessage(senderName: String, targetName: String, message: String)
}

class NoopDiscordBridge(private val plugin: OyasaiChatPlugin) : DiscordBridge {
  override fun enable() = Unit

  override fun disable() = Unit

  override fun onMinecraftMessage(channelName: String, sender: Player, message: String) = Unit

  override fun onPrivateMessage(senderName: String, targetName: String, message: String) = Unit
}
