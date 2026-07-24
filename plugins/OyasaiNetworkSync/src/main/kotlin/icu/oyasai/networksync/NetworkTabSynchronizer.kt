package icu.oyasai.networksync

import com.velocitypowered.api.proxy.Player
import com.velocitypowered.api.proxy.ProxyServer
import com.velocitypowered.api.proxy.player.TabListEntry
import java.util.UUID
import java.util.concurrent.ConcurrentHashMap
import net.kyori.adventure.text.minimessage.MiniMessage

class NetworkTabSynchronizer(
    private val proxy: ProxyServer,
    private val config: NetworkSyncConfig,
    private val serverDiscovery: NetworkServerDiscovery,
) {
  private val managedTabEntries = ConcurrentHashMap<UUID, MutableSet<UUID>>()
  private val miniMessage = MiniMessage.miniMessage()

  fun syncAll() {
    if (!config.tabEnabled) return
    proxy.allPlayers.forEach(::syncPlayer)
  }

  fun remove(playerId: UUID) {
    managedTabEntries.remove(playerId)
  }

  private fun syncPlayer(viewer: Player) {
    val managed =
        managedTabEntries.computeIfAbsent(viewer.uniqueId) { ConcurrentHashMap.newKeySet<UUID>() }
    val viewerServer = viewer.currentServer.map { it.serverInfo.name }.orElse("")
    if (!serverDiscovery.isManagedServer(viewerServer)) return
    val onlineIds = proxy.allPlayers.map { it.uniqueId }.toSet()
    managed.removeIf { uuid ->
      val entry = viewer.tabList.getEntry(uuid).orElse(null)
      val player = proxy.getPlayer(uuid).orElse(null)
      val playerServer = player?.currentServer?.map { it.serverInfo.name }?.orElse("")
      val sameServer = playerServer?.equals(viewerServer, ignoreCase = true) == true
      val unmanagedServer = playerServer == null || !serverDiscovery.isManagedServer(playerServer)
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
      if (!serverDiscovery.isManagedServer(playerServer)) return@forEach
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
}
