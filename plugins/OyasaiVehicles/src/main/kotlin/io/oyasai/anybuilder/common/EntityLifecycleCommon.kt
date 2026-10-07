package io.oyasai.anybuilder.common

import io.oyasai.VehicleGarageService
import io.oyasai.anybuilder.common.event.detachPassengers
import io.oyasai.toolbox.Tools
import java.util.UUID
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.NamespacedKey
import org.bukkit.boss.KeyedBossBar
import org.bukkit.entity.ArmorStand
import org.bukkit.entity.Display
import org.bukkit.entity.Entity
import org.bukkit.entity.Player
import org.bukkit.inventory.EquipmentSlot
import org.bukkit.inventory.ItemStack

object EntityLifecycleCommon {
  fun autoSitPassengers(
      seats: Map<Pair<Int, ArmorStand>, *>,
      delayList: MutableMap<UUID, Int>,
      onDriverMounted: (Player) -> Unit,
  ) {
    for (entry in seats.entries) {
      val pair = entry.key
      val bodyArmorStands = pair.second
      if (bodyArmorStands.passengers.isEmpty()) {
        val player =
            Tools.getNearbyPlayers(bodyArmorStands.eyeLocation, 0.3, 1.5, 0.3).firstOrNull {
              !it.isSneaking && (it as Entity).isOnGround
            }

        if (player != null && delayList[player.uniqueId] == null) {
          bodyArmorStands.addPassenger(player)
          if (pair.first == 0) {
            onDriverMounted(player)
          }
        }

        if (pair.first == 0) {
          bodyArmorStands.setItem(EquipmentSlot.HEAD, ItemStack(Material.GREEN_WOOL))
        } else {
          bodyArmorStands.setItem(EquipmentSlot.HEAD, ItemStack(Material.BLACK_WOOL))
        }
      } else {
        val p = bodyArmorStands.passengers.first()
        delayList[p.uniqueId] = 10
        bodyArmorStands.setItem(EquipmentSlot.HEAD, null)
      }
    }

    val keysToRemove = mutableListOf<java.util.UUID>()
    for (entry in delayList.entries) {
      val nextVal = entry.value - 1
      if (nextVal <= 0) {
        keysToRemove.add(entry.key)
      } else {
        delayList[entry.key] = nextVal
      }
    }
    keysToRemove.forEach { delayList.remove(it) }
  }

  fun handleItemReturn(ownerUUID: UUID?, item: ItemStack?, logPrefix: String) {
    if (ownerUUID == null || item == null) return
    val offlinePlayer = Bukkit.getOfflinePlayer(ownerUUID)
    if (offlinePlayer.isOnline) {
      val player = offlinePlayer.player
      if (player != null) {
        if (player.inventory.firstEmpty() != -1) {
          player.inventory.addItem(item)
        } else {
          player.sendMessage("[OyasaiVehicles] ガレージに収納しました")
          VehicleGarageService.addItem(player, item)
        }
      } else {
        Bukkit.getLogger().warning("[$logPrefix] Online player was null for ${offlinePlayer.name}")
      }
    } else {
      VehicleGarageService.addItem(offlinePlayer, item)
    }
  }

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
      displayGroups: Iterable<Iterable<Display>>,
  ) {
    displayList.clear()
    displayGroups.forEach { displayList.addAll(it) }
  }

  fun refreshDisplayEntityIds(
      arrayEID: MutableSet<Int>,
      displayGroups: Iterable<Iterable<Display>>,
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
      sendMountPacket: (Player, Int, IntArray) -> Unit,
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
