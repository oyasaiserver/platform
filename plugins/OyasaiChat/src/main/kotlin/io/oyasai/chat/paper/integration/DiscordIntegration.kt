package io.oyasai.chat.paper.integration

import github.scarsz.discordsrv.DiscordSRV
import github.scarsz.discordsrv.api.Subscribe
import github.scarsz.discordsrv.api.events.DiscordGuildMessagePreProcessEvent
import github.scarsz.discordsrv.api.events.GameChatMessagePreProcessEvent
import io.oyasai.chat.common.model.ChatConfig
import io.oyasai.chat.common.protocol.MAX_PAYLOAD_LENGTH
import io.oyasai.chat.paper.OyasaiChatPlugin
import io.papermc.paper.event.player.AsyncChatEvent
import org.bukkit.entity.Player

// DiscordSRVとのチャット連携実装。
class DiscordIntegration(
    private val plugin: OyasaiChatPlugin,
    private val config: ChatConfig,
) : DiscordBridge {
  private val listener = ApiListener()
  private var subscribed = false

  override fun enable() {
    if (!config.discord.enabled) {
      plugin.logger.info("Discord integration is disabled by configuration.")
      return
    }
    if (!plugin.server.pluginManager.isPluginEnabled("DiscordSRV")) {
      plugin.logger.info("DiscordSRV is not installed; Discord integration is disabled safely.")
      return
    }
    runCatching {
          DiscordSRV.api.subscribe(listener)
          subscribed = true
          plugin.logger.info("DiscordSRV API listener registered for OyasaiChat channels.")
        }
        .onFailure {
          plugin.logger.severe(
              "DiscordSRV API listener registration failed; disabling Discord integration: ${it.message}"
          )
        }
  }

  override fun disable() {
    if (!subscribed) return
    runCatching { DiscordSRV.api.unsubscribe(listener) }
        .onFailure {
          plugin.logger.warning("DiscordSRV API listener could not be unregistered: ${it.message}")
        }
    subscribed = false
  }

  override fun onMinecraftMessage(channelName: String, sender: Player, message: String) {
    runCatching {
          val component =
              github.scarsz.discordsrv.dependencies.kyori.adventure.text.Component.text(message)
          DiscordSRV.getPlugin().processChatMessage(sender, component, channelName, false, null)
        }
        .onFailure {
          plugin.logger.warning(
              "DiscordSRV outbound bridge failed for '$channelName': ${it.message}"
          )
        }
  }

  override fun onPrivateMessage(senderName: String, targetName: String, message: String) = Unit

  inner class ApiListener {
    @Subscribe
    fun onGameChatMessage(event: GameChatMessagePreProcessEvent) {
      // DiscordSRVの汎用Paperリスナーは全メッセージをglobalとして処理するため、
      // OyasaiChatがチャンネル名付きで渡す処理との二重送信を抑止する。
      if (event.triggeringBukkitEvent is AsyncChatEvent) event.isCancelled = true
    }

    @Subscribe
    fun onDiscordMessage(event: DiscordGuildMessagePreProcessEvent) {
      val channelName =
          DiscordSRV.getPlugin().getDestinationGameChannelNameForTextChannel(event.channel)
              ?: return
      val channel =
          config.channels.channels.firstOrNull {
            it.id.equals(channelName, ignoreCase = true) ||
                it.displayName.equals(channelName, ignoreCase = true)
          } ?: return

      event.isCancelled = true
      if (event.author.isBot) return

      val text = event.message.contentDisplay.trim()
      if (text.isBlank()) return
      if (text.length > MAX_PAYLOAD_LENGTH) {
        plugin.logger.warning("Rejected oversized Discord message for '${channel.displayName}'.")
        return
      }
      val name = event.author.name
      val sender =
          ExternalSender(
              id = event.author.id,
              username = name,
              nickname = event.member?.effectiveName,
              roleColorHex =
                  event.member?.roles
                      ?.filter { it.color != null }
                      ?.maxByOrNull { it.position }
                      ?.color
                      ?.let { String.format("#%02x%02x%02x", it.red, it.green, it.blue) },
          )
      plugin.server.scheduler.runTask(
          plugin,
          Runnable {
            plugin.runtime.chat.handleExternalChat(channel.id, "Discord:$name", text, sender)
          },
      )
    }
  }
}
