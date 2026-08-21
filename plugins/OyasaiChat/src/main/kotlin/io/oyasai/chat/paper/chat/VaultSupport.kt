package io.oyasai.chat.paper.chat

import io.oyasai.chat.paper.OyasaiChatPlugin
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.minimessage.MiniMessage
import net.milkbowl.vault.chat.Chat
import org.bukkit.Bukkit
import org.bukkit.entity.Player

// Vault Chat APIによるプレフィックス・サフィックス取得。
internal class VaultSupport
private constructor(
    private val plugin: OyasaiChatPlugin,
    private val chat: Chat,
) {
  private val mini = MiniMessage.miniMessage()

  fun prefix(player: Player?): Component = value(player) { chat.getPlayerPrefix(it) }

  fun suffix(player: Player?): Component = value(player) { chat.getPlayerSuffix(it) }

  private fun value(player: Player?, getter: (Player) -> String?): Component {
    if (player == null) return Component.empty()
    val value =
        try {
          getter(player).orEmpty()
        } catch (error: Exception) {
          plugin.logger.warning("Vault chat value failed: ${error.message}")
          return Component.empty()
        }
    if (value.isBlank()) return Component.empty()
    return try {
      mini.deserialize(value)
    } catch (error: Exception) {
      plugin.logger.warning("Vault chat MiniMessage value failed: ${error.message}")
      Component.text(value)
    }
  }

  companion object {
    fun create(plugin: OyasaiChatPlugin): VaultSupport? {
      val provider = Bukkit.getServicesManager().getRegistration(Chat::class.java)?.provider
      if (provider == null) {
        plugin.logger.warning(
            "Vault is installed but no chat provider is registered; prefix/suffix integration is disabled."
        )
        return null
      }
      plugin.logger.info("Vault chat integration is available.")
      return VaultSupport(plugin, provider)
    }
  }
}
