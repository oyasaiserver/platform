package com.github.sahyuya.oyasaiMusic.gui

import com.github.sahyuya.oyasaiMusic.OyasaiMusic
import com.github.sahyuya.oyasaiMusic.item.PhysicalRecordItem
import com.github.sahyuya.oyasaiMusic.model.Song
import java.util.UUID
import org.bukkit.Bukkit
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.player.PlayerQuitEvent
import org.bukkit.event.server.PluginDisableEvent

object SongAccess {
  data class Snapshot(val viewer: UUID, val tokens: Map<Long, Set<String>>) {
    fun possesses(song: Song): Boolean =
        tokens[song.id]?.let { song.recordIdentity in it || "" in it } == true

    fun canListen(song: Song) = song.canListen(viewer, possesses(song))
  }

  fun snapshot(plugin: OyasaiMusic, viewer: Player): Snapshot {
    val items =
        viewer.inventory.contents.filterNotNull() +
            runCatching { RecordStorage.all(viewer) }.getOrDefault(emptyList())
    val tokens = mutableMapOf<Long, MutableSet<String>>()
    items.forEach { item ->
      if (item.amount <= 0 || !PhysicalRecordItem.isRecordItem(plugin, item)) return@forEach
      val id = PhysicalRecordItem.songId(plugin, item) ?: return@forEach
      tokens.getOrPut(id) { mutableSetOf() }.add(PhysicalRecordItem.identity(plugin, item) ?: "")
    }
    return Snapshot(viewer.uniqueId, tokens)
  }

  fun canListen(plugin: OyasaiMusic, viewer: Player, song: Song): Boolean {
    if (song.limitedPublication && song.collectible) upgrade(plugin, viewer, listOf(song))
    return snapshot(plugin, viewer).canListen(song)
  }

  fun canSocial(plugin: OyasaiMusic, viewer: Player, song: Song) =
      song.released && canListen(plugin, viewer, song)

  fun upgrade(plugin: OyasaiMusic, viewer: Player, songs: List<Song>) {
    val valid = songs.filter { it.limitedPublication && it.collectible }.associateBy { it.id }
    if (valid.isEmpty()) return
    for (slot in 0 until viewer.inventory.size) {
      val item = viewer.inventory.getItem(slot) ?: continue
      val song = valid[PhysicalRecordItem.songId(plugin, item)] ?: continue
      if (PhysicalRecordItem.identity(plugin, item) == null)
          viewer.inventory.setItem(
              slot,
              PhysicalRecordItem.withIdentity(plugin, item, song.recordIdentity),
          )
    }
    // Storage can also contain records predating conversion to collectible publication.
    for (page in 0 until RecordStorage.MAX_PAGES) {
      val items = runCatching { RecordStorage.page(viewer, page) }.getOrNull() ?: return
      var changed = false
      items.forEachIndexed { slot, item ->
        val song = valid[PhysicalRecordItem.songId(plugin, item)] ?: return@forEachIndexed
        if (item != null && PhysicalRecordItem.identity(plugin, item) == null) {
          items[slot] = PhysicalRecordItem.withIdentity(plugin, item, song.recordIdentity)
          changed = true
        }
      }
      if (changed)
          runCatching { RecordStorage.save(plugin, viewer, page, items) }
              .onFailure {
                plugin.logger.warning(
                    "Legacy record storage upgrade deferred: ${it.javaClass.simpleName}"
                )
              }
    }
  }

  fun start(plugin: OyasaiMusic) {
    val pending = mutableSetOf<UUID>()
    Bukkit.getPluginManager()
        .registerEvents(
            object : Listener {
              @EventHandler(priority = EventPriority.MONITOR)
              fun quit(event: PlayerQuitEvent) {
                RecordStorage.forget(event.player.uniqueId)
              }

              @EventHandler
              fun disable(event: PluginDisableEvent) {
                if (event.plugin === plugin) RecordStorage.clear()
              }
            },
            plugin,
        )
    // Scan only physical inventory for unmarked records; one batched DB read per changed inventory.
    val seen = mutableMapOf<UUID, Set<Long>>()
    Bukkit.getScheduler()
        .runTaskTimer(
            plugin,
            Runnable {
              val online = Bukkit.getOnlinePlayers()
              seen.keys.retainAll(online.map { it.uniqueId }.toSet())
              online.forEach { player ->
                val ids =
                    player.inventory.contents
                        .filterNotNull()
                        .filter { PhysicalRecordItem.identity(plugin, it) == null }
                        .mapNotNull { PhysicalRecordItem.songId(plugin, it) }
                        .toSet()
                if (ids.isEmpty()) {
                  seen.remove(player.uniqueId)
                  return@forEach
                }
                if (seen[player.uniqueId] == ids || !pending.add(player.uniqueId)) return@forEach
                val id = player.uniqueId
                Bukkit.getScheduler()
                    .runTaskAsynchronously(
                        plugin,
                        Runnable {
                          val result = runCatching { plugin.songRepository.findByIds(ids) }
                          if (!plugin.isEnabled) return@Runnable
                          Bukkit.getScheduler()
                              .runTask(
                                  plugin,
                                  Runnable {
                                    pending.remove(id)
                                    if (Bukkit.getPlayer(id) === player && player.isOnline)
                                        result.onSuccess { songs ->
                                          upgrade(plugin, player, songs)
                                          seen[id] = ids
                                        }
                                  },
                              )
                        },
                    )
              }
            },
            20L,
            20L,
        )
  }
}
