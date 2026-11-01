package io.oyasai.chat.paper.chat

import io.oyasai.chat.paper.OyasaiChatPlugin
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.minimessage.MiniMessage
import net.luckperms.api.LuckPerms
import org.bukkit.Bukkit
import org.bukkit.entity.Player

// LuckPerms Chat APIによるプレフィックス・サフィックス取得。
internal class LuckPermsSupport
private constructor(
    private val plugin: OyasaiChatPlugin,
    private val luckPerms: LuckPerms,
) {
  private fun metadata(player: Player): net.luckperms.api.cacheddata.CachedMetaData? {
    val user = luckPerms.userManager.getUser(player.uniqueId) ?: return null
    val options =
        luckPerms.contextManager.getQueryOptions(user).orElseGet {
          luckPerms.contextManager.staticQueryOptions
        }
    return user.cachedData.getMetaData(options)
  }

  private val mini = MiniMessage.miniMessage()

  fun prefix(player: Player?): Component = value(player) { metadata(it)?.prefix }

  fun suffix(player: Player?): Component = value(player) { metadata(it)?.suffix }

  private fun value(player: Player?, getter: (Player) -> String?): Component {
    if (player == null) return Component.empty()
    val value =
        try {
          getter(player).orEmpty()
        } catch (error: Exception) {
          plugin.logger.warning("LuckPerms chat value failed: ${error.message}")
          return Component.empty()
        }
    if (value.isBlank()) return Component.empty()
    return try {
      mini.deserialize(value)
    } catch (error: Exception) {
      plugin.logger.warning("LuckPerms chat MiniMessage value failed: ${error.message}")
      Component.text(value)
    }
  }

  companion object {
    fun create(plugin: OyasaiChatPlugin): LuckPermsSupport? {
      val provider = Bukkit.getServicesManager().getRegistration(LuckPerms::class.java)?.provider
      if (provider == null) {
        plugin.logger.warning(
            "LuckPerms is installed but no chat provider is registered; prefix/suffix integration is disabled."
        )
        return null
      }
      plugin.logger.info("LuckPerms chat integration is available.")
      return LuckPermsSupport(plugin, provider)
    }
  }
}
