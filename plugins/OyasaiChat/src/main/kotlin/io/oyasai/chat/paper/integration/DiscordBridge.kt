package io.oyasai.chat.paper.integration

import io.oyasai.chat.paper.OyasaiChatPlugin

// Discord連携の共通インターフェース。
interface DiscordBridge {
  fun enable()

  fun disable()

  fun onMinecraftMessage(channelId: String, senderName: String, message: String)

  fun onPrivateMessage(senderName: String, targetName: String, message: String)
}

class NoopDiscordBridge(private val plugin: OyasaiChatPlugin) : DiscordBridge {
  override fun enable() = Unit

  override fun disable() = Unit

  override fun onMinecraftMessage(channelId: String, senderName: String, message: String) = Unit

  override fun onPrivateMessage(senderName: String, targetName: String, message: String) = Unit
}
