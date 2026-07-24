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
import com.velocitypowered.api.proxy.player.TabListEntry
import com.velocitypowered.api.proxy.server.RegisteredServer
import java.io.ByteArrayInputStream
import java.io.ByteArrayOutputStream
import java.io.DataInputStream
import java.io.DataOutputStream
import java.nio.file.Path
import java.util.UUID
import java.util.concurrent.ConcurrentHashMap
import java.util.concurrent.TimeUnit
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.minimessage.MiniMessage
import net.kyori.adventure.text.serializer.gson.GsonComponentSerializer
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
  private val managedTabEntries = ConcurrentHashMap<UUID, MutableSet<UUID>>()
  private val recentMessages = ConcurrentHashMap<String, Long>()
  private val miniMessage = MiniMessage.miniMessage()

  @Subscribe
  fun onProxyInitialize(@Suppress("UNUSED_PARAMETER") event: ProxyInitializeEvent) {
    config = NetworkSyncConfig.load(dataDirectory, javaClass.classLoader)
    ventureChatChannel = channelIdentifier(config.ventureChatChannel)
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
    managedTabEntries.remove(event.player.uniqueId)
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
    handleVentureChatMessage(source.serverInfo.name, event.data)
  }

  @Subscribe
  fun onPlayerChat(event: PlayerChatEvent) {
    if (!::config.isInitialized || !config.directChatEnabled) return
    val player = event.player
    val server = player.currentServer.map { it.serverInfo.name }.orElse(null) ?: return
    if (!isManagedServer(server) || !isDirectChatServer(server)) return

    val message = formatDirectChatMessage(player, event.message)
    if (config.cancelDirectChatBackend) {
      event.result = PlayerChatEvent.ChatResult.denied()
    }
    proxy.allPlayers.forEach { it.sendMessage(message) }
  }

  private fun handleVentureChatMessage(sourceServer: String, data: ByteArray) {
    try {
      DataInputStream(ByteArrayInputStream(data)).use { input ->
        when (input.readUTF()) {
          "PlayerNames" -> return
          "Chat" -> handleChatPayload(sourceServer, input)
          else -> debug("Ignored unsupported VentureChat message from $sourceServer")
        }
      }
    } catch (exception: Exception) {
      logger.warn("Could not decode VentureChat message from $sourceServer: ${exception.message}")
    }
  }

  private fun handleChatPayload(sourceServer: String, input: DataInputStream) {
    val channel = input.readUTF()
    val senderName = input.readUTF()
    val senderUuid = input.readUTF()
    val bungeeToggle = input.readBoolean()
    val hash = input.readInt()
    val format = input.readUTF()
    val chat = input.readUTF()
    val json = input.readUTF()
    val primaryGroup = input.readUTF()
    val nickname = input.readUTF()
    val messageKey = "$sourceServer:$senderUuid:$hash"
    val now = System.currentTimeMillis()
    val previous = recentMessages.put(messageKey, now)
    if (previous != null && now - previous < MESSAGE_DEDUPLICATION_MILLIS) return
    recentMessages.entries.removeIf { now - it.value > MESSAGE_DEDUPLICATION_MILLIS }

    val shouldSync =
        config.syncedChannels.any { it.equals(channel, ignoreCase = true) } || bungeeToggle
    if (!shouldSync) return

    val outgoing =
        ventureChatPayload(
            sourceServer,
            channel,
            senderName,
            senderUuid,
            hash,
            format,
            chat,
            json,
            primaryGroup,
            nickname,
        )
    ventureChatServers().forEach { target ->
      val targetName = target.serverInfo.name
      if (!targetName.equals(sourceServer, ignoreCase = true)) sendToServer(targetName, outgoing)
    }
    managedServers().filter(::isDirectChatServer).forEach { target ->
      sendJsonToPlayersOnServer(target.serverInfo.name, json)
    }
  }

  private fun sendPlayerNames() {
    if (!::config.isInitialized || !::ventureChatChannel.isInitialized) return
    val payload =
        ByteArrayOutputStream()
            .also { bytes ->
              DataOutputStream(bytes).use { output ->
                output.writeUTF("PlayerNames")
                output.writeInt(proxy.playerCount)
                proxy.allPlayers.forEach { output.writeUTF(it.username) }
              }
            }
            .toByteArray()
    ventureChatServers().forEach { sendToServer(it.serverInfo.name, payload) }
  }

  private fun sendToServer(serverName: String, payload: ByteArray) {
    if (!isVentureChatServer(serverName)) return
    proxy.getServer(serverName).ifPresent { server ->
      if (server.playersConnected.isNotEmpty())
          server.sendPluginMessage(ventureChatChannel, payload)
    }
  }

  private fun sendJsonToPlayersOnServer(serverName: String, json: String) {
    val component =
        runCatching { GsonComponentSerializer.gson().deserialize(json) }
            .getOrElse {
              debug("Could not decode VentureChat JSON for $serverName: ${it.message}")
              return
            }
    proxy.allPlayers
        .filter { player ->
          player.currentServer.map { it.serverInfo.name }.orElse("").equals(serverName, true)
        }
        .forEach { it.sendMessage(component) }
  }

  private fun formatDirectChatMessage(player: Player, message: String): Component {
    val safePlayer = miniMessage.escapeTags(player.username)
    val safeMessage = miniMessage.escapeTags(message)
    return miniMessage.deserialize(
        config.directChatFormat.replace("{player}", safePlayer).replace("{message}", safeMessage)
    )
  }

  private fun syncAll() {
    if (!::config.isInitialized || !config.tabEnabled) return
    proxy.allPlayers.forEach(::syncTabFor)
  }

  private fun syncTabFor(viewer: Player) {
    val managed =
        managedTabEntries.computeIfAbsent(viewer.uniqueId) { ConcurrentHashMap.newKeySet<UUID>() }
    val viewerServer = viewer.currentServer.map { it.serverInfo.name }.orElse("")
    if (!isManagedServer(viewerServer)) return
    val onlineIds = proxy.allPlayers.map { it.uniqueId }.toSet()
    managed.removeIf { uuid ->
      val entry = viewer.tabList.getEntry(uuid).orElse(null)
      val player = proxy.getPlayer(uuid).orElse(null)
      val playerServer = player?.currentServer?.map { it.serverInfo.name }?.orElse("")
      val sameServer = playerServer?.equals(viewerServer, ignoreCase = true) == true
      val unmanagedServer = playerServer == null || !isManagedServer(playerServer)
      if (
          entry != null &&
              (player == null || sameServer || unmanagedServer || !onlineIds.contains(uuid))
      ) {
        viewer.tabList.removeEntry(uuid)
      }
      player == null || sameServer || unmanagedServer || !onlineIds.contains(uuid)
    }

    proxy.allPlayers.forEach { player ->
      if (player.uniqueId == viewer.uniqueId) return@forEach
      val playerServer = player.currentServer.map { it.serverInfo.name }.orElse("")
      if (!isManagedServer(playerServer)) return@forEach
      if (playerServer.equals(viewerServer, ignoreCase = true)) return@forEach
      if (viewer.tabList.containsEntry(player.uniqueId)) return@forEach
      val displayName =
          miniMessage.deserialize(
              config.tabRemoteDisplayName.replace(
                  "{player}",
                  miniMessage.escapeTags(player.username),
              )
          )
      val entry =
          TabListEntry.builder()
              .tabList(viewer.tabList)
              .profile(player.gameProfile)
              .displayName(displayName)
              .latency(player.ping.coerceIn(0L, Int.MAX_VALUE.toLong()).toInt())
              .gameMode(0)
              .listed(true)
              .listOrder(config.tabRemoteListOrder)
              .showHat(true)
              .build()
      viewer.tabList.addEntry(entry)
      managed.add(player.uniqueId)
    }
  }

  private fun ventureChatPayload(
      sourceServer: String,
      channel: String,
      senderName: String,
      senderUuid: String,
      hash: Int,
      format: String,
      chat: String,
      json: String,
      primaryGroup: String,
      nickname: String,
  ): ByteArray =
      ByteArrayOutputStream()
          .also { bytes ->
            DataOutputStream(bytes).use { output ->
              output.writeUTF("Chat")
              output.writeUTF(sourceServer)
              output.writeUTF(channel)
              output.writeUTF(senderName)
              output.writeUTF(senderUuid)
              output.writeInt(hash)
              output.writeUTF(format)
              output.writeUTF(chat)
              output.writeUTF(json)
              output.writeUTF(primaryGroup)
              output.writeUTF(nickname)
            }
          }
          .toByteArray()

  private fun channelIdentifier(value: String): MinecraftChannelIdentifier {
    val parts = value.split(':', limit = 2)
    require(parts.size == 2) { "VentureChat channel must be namespace:name" }
    return MinecraftChannelIdentifier.create(parts[0], parts[1])
  }

  private fun debug(message: String) {
    if (config.debug) logger.info("[debug] $message")
  }

  private fun managedServers(): List<RegisteredServer> =
      proxy.allServers.filter { isManagedServer(it) }

  private fun ventureChatServers(): List<RegisteredServer> =
      managedServers().filterNot(::isDirectChatServer)

  private fun isManagedServer(serverName: String): Boolean =
      proxy.getServer(serverName).map(::isManagedServer).orElse(false)

  private fun isVentureChatServer(serverName: String): Boolean =
      proxy.getServer(serverName).map(::isVentureChatServer).orElse(false)

  private fun isManagedServer(server: RegisteredServer): Boolean =
      server.serverInfo.address.hostString.startsWith(config.serverHostPrefix, ignoreCase = true)

  private fun isVentureChatServer(server: RegisteredServer): Boolean =
      isManagedServer(server) && !isDirectChatServer(server)

  private fun isDirectChatServer(serverName: String): Boolean =
      proxy.getServer(serverName).map(::isDirectChatServer).orElse(false)

  private fun isDirectChatServer(server: RegisteredServer): Boolean =
      config.directChatHostSuffixes.any {
        server.serverInfo.address.hostString.endsWith(it, ignoreCase = true)
      }

  companion object {
    private const val MESSAGE_DEDUPLICATION_MILLIS = 5_000L
  }
}
