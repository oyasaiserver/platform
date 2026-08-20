package io.oyasai.chat.paper.integration

import github.scarsz.discordsrv.DiscordSRV
import github.scarsz.discordsrv.api.Subscribe
import github.scarsz.discordsrv.api.events.DiscordGuildMessagePreProcessEvent
import github.scarsz.discordsrv.util.DiscordUtil
import io.oyasai.chat.common.model.ChatConfig
import io.oyasai.chat.common.protocol.MAX_PAYLOAD_LENGTH
import io.oyasai.chat.paper.OyasaiChatPlugin

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
          plugin.logger.info("DiscordSRV API listener registered for OyasaiChat mappings.")
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

  override fun onMinecraftMessage(channelId: String, senderName: String, message: String) {
    val mapping = config.discord.channelMappings[channelId.lowercase()] ?: return
    runCatching {
          val channel =
              DiscordUtil.getTextChannelById(mapping.discordChannelId)
                  ?: error("Discord channel ${mapping.discordChannelId} is unavailable")
          val payload = "<$senderName> $message"
          channel.sendMessage(payload.take(2000)).queue()
        }
        .onFailure {
          plugin.logger.warning(
              "DiscordSRV outbound bridge failed for '${mapping.minecraftChannel}': ${it.message}"
          )
        }
  }

  override fun onPrivateMessage(senderName: String, targetName: String, message: String) = Unit

  inner class ApiListener {
    @Subscribe
    fun onDiscordMessage(event: DiscordGuildMessagePreProcessEvent) {
      val mapping =
          config.discord.channelMappings.values.firstOrNull {
            it.discordChannelId == event.channel.id
          } ?: return

      event.isCancelled = true
      if (event.author.isBot) return
      if (mapping.inboundBackend != config.network.backendId) return

      val text = event.message.contentDisplay.trim()
      if (text.isBlank()) return
      if (text.length > MAX_PAYLOAD_LENGTH) {
        plugin.logger.warning(
            "Rejected oversized Discord message for '${mapping.minecraftChannel}'."
        )
        return
      }
      val name = event.author.name
      plugin.server.scheduler.runTask(
          plugin,
          Runnable {
            plugin.runtime.chat.handleExternalChat(mapping.minecraftChannel, "Discord:$name", text)
          },
      )
    }
  }
}
