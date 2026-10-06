package io.oyasai.oyasaiAdminTools.playerhistory

import io.oyasai.oyasaiAdminTools.OyasaiAdminTools
import java.io.File
import java.util.UUID
import org.bukkit.*
import org.bukkit.entity.Player
import org.bukkit.event.*
import org.bukkit.event.player.*

class PlayerHistoryFeature(private val plugin: OyasaiAdminTools) : Listener {
  val store =
      PlayerHistoryStore(plugin.db, File(plugin.dataFolder.parentFile, "Essentials/userdata"))

  fun enable() {
    plugin.server.pluginManager.registerEvents(this, plugin)
    plugin.server.onlinePlayers.forEach { p ->
      safely {
        store.joined(
            p.uniqueId,
            p.name,
            p.lastLogin.takeIf { it > 0 } ?: System.currentTimeMillis(),
            p.address?.address?.hostAddress,
        )
      }
    }
  }

  fun disable() {
    plugin.server.onlinePlayers.forEach { recordQuit(it) }
    HandlerList.unregisterAll(this)
  }

  private fun safely(block: () -> Unit) {
    try {
      block()
    } catch (e: Exception) {
      plugin.logger.log(java.util.logging.Level.SEVERE, "Player history write failed", e)
    }
  }

  @EventHandler(priority = EventPriority.MONITOR)
  fun join(e: PlayerJoinEvent) {
    safely {
      store.joined(
          e.player.uniqueId,
          e.player.name,
          System.currentTimeMillis(),
          e.player.address?.address?.hostAddress,
      )
    }
  }

  @EventHandler(priority = EventPriority.MONITOR)
  fun quit(e: PlayerQuitEvent) {
    recordQuit(e.player)
  }

  private fun recordQuit(p: Player) {
    safely {
      val l = p.location
      store.quit(
          p.uniqueId,
          p.name,
          System.currentTimeMillis(),
          LastLocation(l.world.uid.toString(), l.world.name, l.x, l.y, l.z, l.yaw, l.pitch),
      )
    }
  }

  fun resolve(name: String): OfflinePlayer? {
    val p =
        Bukkit.getPlayerExact(name)
            ?: Bukkit.getOfflinePlayerIfCached(name)
            ?: runCatching { Bukkit.getOfflinePlayer(UUID.fromString(name)) }.getOrNull()
    return p?.takeIf {
      it.isOnline ||
          it.hasPlayedBefore() ||
          File(plugin.dataFolder.parentFile, "Essentials/userdata/${it.uniqueId}.yml").isFile
    }
  }

  fun location(l: LastLocation): Location? {
    val world =
        runCatching { Bukkit.getWorld(UUID.fromString(l.world)) }.getOrNull()
            ?: Bukkit.getWorld(l.world)
            ?: l.worldName?.let(Bukkit::getWorld)
            ?: return null
    return Location(world, l.x, l.y, l.z, l.yaw, l.pitch)
  }
}
