package icu.oyasai.networksync

import com.google.inject.Inject
import com.velocitypowered.api.event.Subscribe
import com.velocitypowered.api.event.connection.DisconnectEvent
import com.velocitypowered.api.event.connection.PluginMessageEvent
import com.velocitypowered.api.event.player.PlayerChatEvent
import com.velocitypowered.api.event.player.ServerConnectedEvent
import com.velocitypowered.api.event.proxy.ProxyInitializeEvent
import com.velocitypowered.api.event.proxy.ProxyShutdownEvent
import com.velocitypowered.api.plugin.annotation.DataDirectory
import com.velocitypowered.api.proxy.Player
import com.velocitypowered.api.proxy.ProxyServer
import com.velocitypowered.api.proxy.ServerConnection
import com.velocitypowered.api.proxy.messages.MinecraftChannelIdentifier
import java.nio.file.Path
import java.util.concurrent.TimeUnit
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.minimessage.MiniMessage
import org.slf4j.Logger

class OyasaiNetworkSync
@Inject
constructor(
    val proxy: ProxyServer,
    val logger: Logger,
    @DataDirectory val dataDirectory: Path,
) {
  private lateinit var config: NetworkSyncConfig
  private lateinit var ventureChatChannel: MinecraftChannelIdentifier
  private lateinit var serverDiscovery: NetworkServerDiscovery
  private lateinit var ventureChatBridge: VentureChatBridge
  private lateinit var tabSynchronizer: NetworkTabSynchronizer
  private val miniMessage = MiniMessage.miniMessage()

  @Subscribe
  fun onProxyInitialize(@Suppress("UNUSED_PARAMETER") event: ProxyInitializeEvent) {
    config = NetworkSyncConfig.load(dataDirectory, javaClass.classLoader)
    serverDiscovery = NetworkServerDiscovery(proxy, config)
    ventureChatChannel = channelIdentifier(config.ventureChatChannel)
    ventureChatBridge =
        VentureChatBridge(proxy, logger, config, ventureChatChannel, serverDiscovery)
    tabSynchronizer = NetworkTabSynchronizer(proxy, config, serverDiscovery)
    proxy.channelRegistrar.register(ventureChatChannel)
    logger.info(
        "OyasaiNetworkSync enabled for host prefix '${config.serverHostPrefix}' " +
            "(direct chat suffixes: ${config.directChatHostSuffixes.joinToString(", ")})"
    )
    proxy.scheduler.buildTask(this, Runnable { syncAll() }).delay(1, TimeUnit.SECONDS).schedule()
  }

  @Subscribe
  fun onProxyShutdown(@Suppress("UNUSED_PARAMETER") event: ProxyShutdownEvent) {
    if (::ventureChatChannel.isInitialized) {
      proxy.channelRegistrar.unregister(ventureChatChannel)
    }
  }

  @Subscribe
  fun onServerConnected(event: ServerConnectedEvent) {
    if (!::config.isInitialized) return
    syncAll()
    sendPlayerNames()
  }

  @Subscribe
  fun onDisconnect(event: DisconnectEvent) {
    if (!::config.isInitialized) return
    tabSynchronizer.remove(event.player.uniqueId)
    proxy.scheduler
        .buildTask(
            this,
            Runnable {
              syncAll()
              sendPlayerNames()
            },
        )
        .delay(250, TimeUnit.MILLISECONDS)
        .schedule()
  }

  @Subscribe
  fun onPluginMessage(event: PluginMessageEvent) {
    if (!::config.isInitialized || event.identifier != ventureChatChannel) return
    event.result = PluginMessageEvent.ForwardResult.handled()
    val source = event.source as? ServerConnection ?: return
    ventureChatBridge.handleMessage(source.serverInfo.name, event.data)
  }

  @Subscribe
  fun onPlayerChat(event: PlayerChatEvent) {
    if (!::config.isInitialized || !config.directChatEnabled) return
    val player = event.player
    val server = player.currentServer.map { it.serverInfo.name }.orElse(null) ?: return
    if (!serverDiscovery.isDirectChatServer(server)) return

    val message = formatDirectChatMessage(player, event.message)
    if (config.cancelDirectChatBackend) {
      event.result = PlayerChatEvent.ChatResult.denied()
    }
    proxy.allPlayers.forEach { it.sendMessage(message) }
  }

  private fun syncAll() {
    tabSynchronizer.syncAll()
  }

  private fun sendPlayerNames() {
    ventureChatBridge.sendPlayerNames()
  }

  private fun formatDirectChatMessage(player: Player, message: String): Component {
    val safePlayer = miniMessage.escapeTags(player.username)
    val safeMessage = miniMessage.escapeTags(message)
    return miniMessage.deserialize(
        config.directChatFormat.replace("{player}", safePlayer).replace("{message}", safeMessage)
    )
  }

  private fun channelIdentifier(value: String): MinecraftChannelIdentifier {
    val parts = value.split(':', limit = 2)
    require(parts.size == 2) { "VentureChat channel must be namespace:name" }
    return MinecraftChannelIdentifier.create(parts[0], parts[1])
  }
}
