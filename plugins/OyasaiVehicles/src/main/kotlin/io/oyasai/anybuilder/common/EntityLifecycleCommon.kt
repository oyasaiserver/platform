package io.oyasai.anybuilder.common

import org.bukkit.Bukkit
import org.bukkit.NamespacedKey
import org.bukkit.boss.KeyedBossBar
import org.bukkit.entity.Display
import org.bukkit.entity.Entity
import org.bukkit.entity.Player

object EntityLifecycleCommon {
  fun teardownBossBar(bossBar: KeyedBossBar, bossBarKey: NamespacedKey) {
    bossBar.removeAll()
    Bukkit.removeBossBar(bossBarKey)
  }

  fun removeEntities(entities: Iterable<Entity>) {
    entities.forEach { entity ->
      detachPassengers(entity)
      entity.remove()
    }
  }

  fun removeDisplays(displayGroups: Iterable<Iterable<Display>>) {
    displayGroups.forEach { displaySet -> displaySet.forEach { display -> display.remove() } }
  }

  fun refreshDisplayList(
      displayList: MutableSet<Display>,
      displayGroups: Iterable<Iterable<Display>>
  ) {
    displayList.clear()
    displayGroups.forEach { displayList.addAll(it) }
  }

  fun refreshDisplayEntityIds(
      arrayEID: MutableSet<Int>,
      displayGroups: Iterable<Iterable<Display>>
  ): List<Int> {
    arrayEID.clear()
    displayGroups.forEach { displaySet ->
      displaySet.forEach { display -> arrayEID.add(display.entityId) }
    }
    return arrayEID.toList()
  }

  fun syncMountTracking(
      trackedPlayers: MutableSet<Player>,
      nearbyPlayers: Collection<Player>,
      rootEntityId: Int,
      mountEntityIds: () -> IntArray,
      sendMountPacket: (Player, Int, IntArray) -> Unit
  ) {
    nearbyPlayers.forEach { player ->
      if (!trackedPlayers.contains(player)) {
        sendMountPacket(player, rootEntityId, mountEntityIds())
      }
    }
    trackedPlayers.clear()
    trackedPlayers.addAll(nearbyPlayers)
  }
}
