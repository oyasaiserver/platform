package io.oyasai.anybuilder.carbuilder2.model

import io.oyasai.anybuilder.runtime.BaseVehicleEntityList
import io.oyasai.toolbox.Tools
import java.util.LinkedHashSet
import java.util.UUID
import org.bukkit.entity.ArmorStand
import org.bukkit.entity.Player
import org.bukkit.scheduler.BukkitRunnable

object CarBuilder2EntityList : BaseVehicleEntityList<CarBuilder2EntityData>() {
  override val cache: MutableSet<CarBuilder2EntityData> = LinkedHashSet()

  fun getCarDataByMainArmorStand(uuid: UUID): CarBuilder2EntityData? =
      cache.firstOrNull { it.bodyArmorStands.firstOrNull()?.uniqueId == uuid }

  fun getBodyArmorStandList(uuid: UUID?): List<ArmorStand> =
      cache.mapNotNull { data ->
        data.bodyArmorStands.firstOrNull()?.takeIf { it.uniqueId != uuid }
      }

  fun getInvSlotChange(data: CarBuilder2EntityData, player: Player?): Int {
    if (player == null) {
      data.newPlayerSlot = true
      return 0
    }
    val newSlotInt = player.inventory.heldItemSlot
    if (newSlotInt != 4 && data.oldSlotInt != newSlotInt) {
      data.newPlayerSlot = true
      object : BukkitRunnable() {
            override fun run() {
              player.inventory.heldItemSlot = 4
            }
          }
          .runTaskLater(requireNotNull(Tools.pl) { "Plugin is not initialized" }, 1L)
    }
    data.oldSlotInt = newSlotInt
    return if (data.newPlayerSlot) {
      data.newPlayerSlot = false
      0
    } else {
      newSlotInt - 4
    }
  }
}
