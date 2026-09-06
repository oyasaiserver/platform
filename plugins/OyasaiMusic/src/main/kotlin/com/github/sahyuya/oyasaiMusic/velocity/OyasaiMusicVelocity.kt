package com.github.sahyuya.oyasaiMusic.velocity

import com.github.sahyuya.oyasaiMusic.interop.PluginMessageBounds
import com.google.inject.Inject
import com.velocitypowered.api.event.PostOrder
import com.velocitypowered.api.event.Subscribe
import com.velocitypowered.api.event.connection.PluginMessageEvent
import com.velocitypowered.api.event.player.ServerPostConnectEvent
import com.velocitypowered.api.event.proxy.ProxyInitializeEvent
import com.velocitypowered.api.event.proxy.ProxyShutdownEvent
import com.velocitypowered.api.plugin.Plugin
import com.velocitypowered.api.plugin.annotation.DataDirectory
import com.velocitypowered.api.proxy.Player
import com.velocitypowered.api.proxy.ProxyServer
import com.velocitypowered.api.proxy.ServerConnection
import com.velocitypowered.api.proxy.messages.MinecraftChannelIdentifier
import java.nio.file.Path
import org.slf4j.Logger

/**
 * Stateless OMMT relay for the production Velocity proxy.
 *
 * It never decodes, reassembles, hashes, stores or logs song payloads. Both directions are denied
 * by default and forwarded only between a player and that player's current `main` connection.
 */
@Plugin(
    id = "oyasaimusic",
    name = "OyasaiMusic",
    description = "OyasaiMusic OMMT relay for main",
)
class OyasaiMusicVelocity
@Inject
constructor(
    private val proxy: ProxyServer,
    private val logger: Logger,
    @DataDirectory private val dataDirectory: Path,
) {
  private val bedrockPacks = BedrockPackService(this, proxy, logger, dataDirectory)

  companion object {
    private const val MAIN_SERVER = "main"
    private val CHANNELS =
        setOf(
            MinecraftChannelIdentifier.from("oyasaimusic:upload_v1"),
            MinecraftChannelIdentifier.from("oyasaimusic:playback_v1"),
        )
  }

  @Subscribe(order = PostOrder.LAST)
  fun onProxyInitialization(event: ProxyInitializeEvent) {
    CHANNELS.forEach(proxy.channelRegistrar::register)
    proxy.channelRegistrar.register(BedrockPackService.TRANSFER_CHANNEL)
    proxy.channelRegistrar.register(BedrockPackService.STATUS_CHANNEL)
    bedrockPacks.load()
    logger.info("OyasaiMusic Velocity relay enabled for backend main.")
  }

  @Subscribe
  fun onServerPostConnect(event: ServerPostConnectEvent) {
    bedrockPacks.onBackendConnected(event.player)
  }

  @Subscribe
  fun onProxyShutdown(event: ProxyShutdownEvent) {
    bedrockPacks.shutdown()
  }

  @Subscribe
  fun onPluginMessage(event: PluginMessageEvent) {
    // Status is proxy-originated only. Consume any client/backend attempt to spoof it.
    if (event.identifier == BedrockPackService.STATUS_CHANNEL) {
      event.result = PluginMessageEvent.ForwardResult.handled()
      return
    }
    if (event.identifier == BedrockPackService.TRANSFER_CHANNEL) {
      event.result = PluginMessageEvent.ForwardResult.handled()
      bedrockPacks.handleTransferMessage(event)
      return
    }
    if (event.identifier !in CHANNELS) return
    event.result = PluginMessageEvent.ForwardResult.handled()
    // Velocity intentionally does not decode payloads, but it must still enforce the shared raw
    // transport ceiling before forwarding. This prevents the proxy's larger configured plugin-
    // message allowance from becoming an allocation/amplification path to backend main.
    if (!PluginMessageBounds.accepts(event.data.size)) return
    val allowed =
        when {
          event.source is ServerConnection && event.target is Player ->
              isCurrentMain(event.target as Player, event.source as ServerConnection)
          event.source is Player && event.target is ServerConnection ->
              isCurrentMain(event.source as Player, event.target as ServerConnection)
          else -> false
        }
    if (allowed) event.result = PluginMessageEvent.ForwardResult.forward()
  }

  private fun isCurrentMain(player: Player, connection: ServerConnection): Boolean =
      connection.serverInfo.name == MAIN_SERVER &&
          player.currentServer
              .map { current -> current.serverInfo == connection.serverInfo }
              .orElse(false)
}
