package io.oyasai.anybuilder.aircraftbuilder.lifecycle

import io.oyasai.anybuilder.aircraftbuilder.model.AircraftBuilderEntityData
import io.oyasai.anybuilder.aircraftbuilder.model.AircraftBuilderEntityList
import io.oyasai.anybuilder.common.EntityLifecycleCommon
import io.oyasai.toolbox.Tools
import org.bukkit.Material
import org.bukkit.entity.Entity
import org.bukkit.inventory.EquipmentSlot
import org.bukkit.inventory.ItemStack
import org.bukkit.scheduler.BukkitRunnable

fun AircraftBuilderEntityData.autoSitStartImpl() {
  val delayList = mutableMapOf<java.util.UUID, Int>()
  object : BukkitRunnable() {
        override fun run() {
          if (this@autoSitStartImpl.exit) {
            this.cancel()
            return
          }
          val firstSeat = this@autoSitStartImpl.seatArmorStands.keys.firstOrNull()?.second
          if (firstSeat == null || firstSeat.isDead) {
            this@autoSitStartImpl.exit = true
            this@autoSitStartImpl.exitTask()
            this.cancel()
            return
          }

          val speed = this@autoSitStartImpl.vehicle.speed.z
          if (speed in -0.05..0.05) {
            for (entry in this@autoSitStartImpl.seatArmorStands.entries) {
              val pair = entry.key
              val bodyArmorStands = pair.second
              if (bodyArmorStands.passengers.isNotEmpty()) {
                val p = bodyArmorStands.passengers[0]
                delayList[p.uniqueId] = 10
                bodyArmorStands.setItem(EquipmentSlot.HEAD, null)
              } else {
                val player =
                    Tools.getNearbyPlayers(bodyArmorStands.eyeLocation, 0.3, 1.5, 0.3).firstOrNull {
                      !it.isSneaking && (it as Entity).isOnGround
                    }

                if (player != null && delayList[player.uniqueId] == null) {
                  bodyArmorStands.addPassenger(player)
                  if (pair.first == 0) {
                    player.sendMessage("[AircraftBuilder] ホットバースロットで操作:")
                    player.sendMessage("[AircraftBuilder] １～４：下降, ５：キープ, ６～９：上昇")
                  }
                }

                if (pair.first == 0) {
                  bodyArmorStands.setItem(EquipmentSlot.HEAD, ItemStack(Material.GREEN_WOOL))
                } else {
                  bodyArmorStands.setItem(EquipmentSlot.HEAD, ItemStack(Material.BLACK_WOOL))
                }
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

          this@autoSitStartImpl.joinBody()
          val driverSeat =
              this@autoSitStartImpl.seatArmorStands.keys.firstOrNull { it.first == 0 }?.second
          if (
              driverSeat != null &&
                  driverSeat.passengers.isNotEmpty() &&
                  !this@autoSitStartImpl.driveStartSwitch
          ) {
            this@autoSitStartImpl.start()
          }
        }
      }
      .runTaskTimer(this.plugin, 20L, 10L)
}

fun AircraftBuilderEntityData.exitTaskImpl() {
  EntityLifecycleCommon.handleItemReturn(this.owner, this.item, "AircraftBuilder")
  this.owner = null

  EntityLifecycleCommon.teardownBossBar(this.bossBar, this.bossBarKey)
  EntityLifecycleCommon.removeEntities(this.bodyArmorStands)
  EntityLifecycleCommon.removeEntities(this.seatArmorStands.keys.map { it.second })
  EntityLifecycleCommon.removeDisplays(this.display.values)
  AircraftBuilderEntityList.removeEntity(this)
}
