package io.oyasai.oyasaitab.velocity

import com.google.inject.Inject
import com.velocitypowered.api.event.Subscribe
import com.velocitypowered.api.event.connection.DisconnectEvent
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
import com.velocitypowered.api.proxy.player.TabListEntry
import io.oyasai.oyasaitab.CrossServerTabEntry
import io.oyasai.oyasaitab.CrossServerTabLogic
import io.oyasai.oyasaitab.OYASAI_TAB_CHANNEL
import io.oyasai.oyasaitab.OyasaiTabSnapshotCodec
import java.nio.file.Files
import java.nio.file.Path
import java.time.Duration
import java.util.UUID
import java.util.concurrent.ConcurrentHashMap
import net.kyori.adventure.text.serializer.legacy.LegacyComponentSerializer
import org.slf4j.Logger

@Plugin(
    id = "oyasaitab",
    name = "OyasaiTab",
    version = "0.1.0",
    description = "Cross-server tab list bridge",
    authors = ["OyasaiServer"],
)
class OyasaiVelocityPlugin
@Inject
constructor(
    private val proxy: ProxyServer,
    private val logger: Logger,
    @DataDirectory private val dataDirectory: Path,
) {
  private val identifier = MinecraftChannelIdentifier.from(OYASAI_TAB_CHANNEL)
  private val legacy = LegacyComponentSerializer.legacySection()
  private val records = ConcurrentHashMap<UUID, CrossServerTabEntry>()
  private val membersByServer = ConcurrentHashMap<String, Set<UUID>>()
  private val managedByViewer = ConcurrentHashMap<UUID, MutableSet<UUID>>()
  private lateinit var configPath: Path
  private var reapplyDelay = Duration.ofMillis(200)

  @Subscribe
  fun onProxyInitialization(event: ProxyInitializeEvent) {
    configPath = dataDirectory.resolve("config.yml")
    if (!Files.exists(configPath)) {
      Files.createDirectories(dataDirectory)
      javaClass.classLoader.getResourceAsStream("velocity-config.yml")!!.use {
        Files.copy(it, configPath)
      }
    }
    reapplyDelay = loadReapplyDelay(configPath)
    proxy.channelRegistrar.register(identifier)
    logger.info("OyasaiTab Velocity bridge enabled.")
  }

  @Subscribe
  fun onProxyShutdown(event: ProxyShutdownEvent) {
    proxy.scheduler.tasksByPlugin(this).forEach { it.cancel() }
  }

  @Subscribe
  fun onPluginMessage(event: PluginMessageEvent) {
    if (event.identifier != identifier) return
    event.result = PluginMessageEvent.ForwardResult.handled()
    val source =
        event.source as? ServerConnection
            ?: run {
              logger.warn("Rejected client-originated OyasaiTab plugin message.")
              return
            }
    val sourceBackend = source.serverInfo.name
    val snapshot =
        runCatching { OyasaiTabSnapshotCodec.decode(event.data) }
            .getOrElse {
              logger.warn("Rejected malformed OyasaiTab snapshot: {}", it.message)
              return
            }
    val players =
        snapshot.players.map {
          CrossServerTabEntry(
              uuid = it.uuid,
              displayNameLegacy = it.displayNameLegacy,
              serverName = sourceBackend,
              ping = it.ping,
          )
        }
    val playerIds = players.mapTo(mutableSetOf()) { it.uuid }
    membersByServer.put(sourceBackend, playerIds).orEmpty().minus(playerIds).forEach { removed ->
      records.computeIfPresent(removed) { _, current ->
        if (current.serverName == sourceBackend) null else current
      }
    }
    players.forEach { records[it.uuid] = it }
    applyAll()
  }

  @Subscribe
  fun onServerPostConnect(event: ServerPostConnectEvent) {
    val switchedPlayerId = event.player.uniqueId
    proxy.scheduler
        .buildTask(
            this,
            Runnable {
              val switchedPlayer = proxy.getPlayer(switchedPlayerId).orElse(null) ?: return@Runnable
              applyAll(forceReaddId = switchedPlayerId)
              applyTo(switchedPlayer, forceReaddAll = true)
            },
        )
        .delay(reapplyDelay)
        .schedule()
  }

  @Subscribe
  fun onDisconnect(event: DisconnectEvent) {
    val playerId = event.player.uniqueId
    proxy.scheduler
        .buildTask(
            this,
            Runnable {
              val connected = connectedPlayerIds()
              if (!CrossServerTabLogic.shouldRemoveOnDisconnect(playerId, connected))
                  return@Runnable
              records.remove(playerId)
              managedByViewer.remove(playerId)
              membersByServer.replaceAll { _, members -> members - playerId }
              proxy.allPlayers.forEach { viewer ->
                managedByViewer[viewer.uniqueId]?.remove(playerId)
                viewer.tabList.removeEntry(playerId)
              }
            },
        )
        .delay(reapplyDelay)
        .schedule()
  }

  private fun applyAll(forceReaddId: UUID? = null) {
    proxy.allPlayers.forEach { applyTo(it, forceReaddId = forceReaddId) }
  }

  private fun applyTo(
      viewer: Player,
      forceReaddAll: Boolean = false,
      forceReaddId: UUID? = null,
  ) {
    val viewerServer = viewer.currentServer.orElse(null)?.serverInfo?.name ?: return
    val managed = managedByViewer.computeIfAbsent(viewer.uniqueId) { ConcurrentHashMap.newKeySet() }
    val diff =
        CrossServerTabLogic.diffForViewer(
            viewerServer = viewerServer,
            viewerId = viewer.uniqueId,
            managedEntries = managed,
            records = records.values,
            connectedPlayerServers = connectedPlayerServers(),
        )
    diff.remove.forEach {
      viewer.tabList.removeEntry(it)
      managed.remove(it)
    }
    val orders = CrossServerTabLogic.remoteOrders(diff.upsert)
    diff.upsert.forEach { remote ->
      val player = proxy.getPlayer(remote.uuid).orElse(null) ?: return@forEach
      if (forceReaddAll || forceReaddId == remote.uuid) {
        viewer.tabList.removeEntry(remote.uuid)
        managed.remove(remote.uuid)
      }
      val displayName = legacy.deserialize(remote.displayNameLegacy)
      val entry = viewer.tabList.getEntry(remote.uuid).orElse(null)
      if (entry == null) {
        viewer.tabList.addEntry(
            TabListEntry.builder()
                .tabList(viewer.tabList)
                .profile(player.gameProfile)
                .displayName(displayName)
                .latency(remote.ping)
                .gameMode(0)
                .listed(true)
                .listOrder(orders.getValue(remote.uuid))
                .showHat(true)
                .build()
        )
      } else {
        entry
            .setDisplayName(displayName)
            .setLatency(remote.ping)
            .setListOrder(orders.getValue(remote.uuid))
            .setListed(true)
            .setShowHat(true)
      }
      managed.add(remote.uuid)
    }
  }

  private fun connectedPlayerIds(): Set<UUID> =
      proxy.allPlayers.mapTo(mutableSetOf()) { it.uniqueId }

  private fun connectedPlayerServers(): Map<UUID, String> =
      proxy.allPlayers
          .mapNotNull { player ->
            player.currentServer.orElse(null)?.serverInfo?.name?.let { player.uniqueId to it }
          }
          .toMap()

  private fun loadReapplyDelay(path: Path): Duration {
    val millis =
        Files.readAllLines(path).firstNotNullOfOrNull { line ->
          line
              .substringBefore('#')
              .trim()
              .takeIf { it.startsWith("delayed-reapply-ms:") }
              ?.substringAfter(':')
              ?.trim()
              ?.toLongOrNull()
        } ?: 200L
    return Duration.ofMillis(millis.coerceAtLeast(0))
  }
}
