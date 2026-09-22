package com.github.srain3.sociallikes

import com.github.srain3.sociallikes.datas.Data
import com.github.srain3.sociallikes.datas.SLData
import org.bukkit.Bukkit
import org.bukkit.World
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.world.WorldLoadEvent
import org.bukkit.event.world.WorldUnloadEvent

internal fun SLData.resolveWorld(world: World? = Bukkit.getWorld(worldName)): World? {
  if (loc.isWorldLoaded() && loc.world === world) return world
  if (world?.name != worldName) {
    loc.world = null
    return null
  }
  loc.world = world
  return world
}

object WorldLocationListener : Listener {
  @EventHandler
  fun onWorldLoad(event: WorldLoadEvent) {
    if (!Data.loading) return
    resolveWorldLocations(event.world, "world load")
  }

  @EventHandler(priority = EventPriority.MONITOR, ignoreCancelled = true)
  fun onWorldUnload(event: WorldUnloadEvent) {
    if (!Data.loading) return
    var count = 0
    Data.getSLDataAll()
        .filter { it.worldName == event.world.name }
        .forEach {
          it.loc.world = null
          count++
        }
    if (count > 0) {
      Tools.plugin.logger.info(
          "[SL3] Cleared $count sign location reference(s) for world ${event.world.name}"
      )
    }
  }

  internal fun resolveLoadedWorldLocations() {
    val worlds = Bukkit.getWorlds().associateBy { it.name }
    val counts = mutableMapOf<String, Int>()
    Data.getSLDataAll().forEach {
      val world = worlds[it.worldName]
      val wasCurrent = it.loc.isWorldLoaded() && it.loc.world === world
      if (it.resolveWorld(world) != null && !wasCurrent) {
        counts.merge(it.worldName, 1, Int::plus)
      }
    }
    counts.forEach { (worldName, count) -> logResolved(worldName, count, "startup sweep") }
  }

  private fun resolveWorldLocations(world: World, reason: String) {
    val count =
        Data.getSLDataAll().count {
          if (it.worldName != world.name) return@count false
          val wasCurrent = it.loc.isWorldLoaded() && it.loc.world === world
          it.resolveWorld(world) != null && !wasCurrent
        }
    logResolved(world.name, count, reason)
  }

  private fun logResolved(worldName: String, count: Int, reason: String) {
    if (count > 0) {
      Tools.plugin.logger.info(
          "[SL3] Resolved $count sign location(s) for world $worldName ($reason)"
      )
    }
  }
}
