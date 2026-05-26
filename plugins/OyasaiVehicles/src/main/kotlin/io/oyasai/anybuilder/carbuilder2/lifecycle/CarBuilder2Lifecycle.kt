package io.oyasai.anybuilder.carbuilder2.lifecycle

import io.oyasai.anybuilder.carbuilder2.model.CarBuilder2EntityData
import io.oyasai.anybuilder.carbuilder2.model.CarBuilder2EntityList
import io.oyasai.anybuilder.common.EntityLifecycleCommon
import io.oyasai.toolbox.Tools
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.entity.Entity
import org.bukkit.inventory.EquipmentSlot
import org.bukkit.inventory.ItemStack
import org.bukkit.scheduler.BukkitRunnable

fun CarBuilder2EntityData.autoSitStartImpl() {
  val delayList = mutableMapOf<java.util.UUID, Int>()
  object : BukkitRunnable() {
        override fun run() {
          if (this@autoSitStartImpl.exit) {
            this.cancel()
            return
          }
          val firstSeat = this@autoSitStartImpl.seatArmorStands.keys.firstOrNull()?.second
          if (firstSeat == null) {
            Bukkit.getLogger()
                .warning(
                    "[CarBuilder2] Despawning car ${this@autoSitStartImpl.baseData.name}: No seats found!"
                )
            this@autoSitStartImpl.exit = true
            this@autoSitStartImpl.exitTask()
            this.cancel()
            return
          }
          if (firstSeat.isDead) {
            Bukkit.getLogger()
                .warning(
                    "[CarBuilder2] Despawning car ${this@autoSitStartImpl.baseData.name}: Driver seat ArmorStand is dead!"
                )
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
              if (bodyArmorStands.passengers.isEmpty()) {
                val player =
                    Tools.getNearbyPlayers(bodyArmorStands.eyeLocation, 0.3, 1.5, 0.3).firstOrNull {
                      !it.isSneaking && (it as Entity).isOnGround
                    }

                if (player != null && delayList[player.uniqueId] == null) {
                  bodyArmorStands.addPassenger(player)
                  if (pair.first == 0) {
                    player.sendMessage("[CarBuilder2] ホットバースロット切り替えで操作:")
                    val mtStr =
                        if (this@autoSitStartImpl.vehicle.manualTransmission)
                            "４=シフトダウン, ６=シフトアップ | "
                        else ""
                    player.sendMessage(
                        "[CarBuilder2] １=左ウインカー, ２=ハザード, ３=右ウインカー | ${mtStr} ８=ライトON/OFF, ９=クルーズモード切替"
                    )
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

fun CarBuilder2EntityData.exitTaskImpl() {
  Bukkit.getLogger().info("[CarBuilder2] exitTask() called for car ${this.baseData.name}")
  for (loc in this.lightBlockList) {
    if (loc.block.type == Material.LIGHT) {
      loc.block.setType(Material.AIR, false)
    }
  }

  EntityLifecycleCommon.handleItemReturn(this.owner, this.item, "CarBuilder2")
  this.owner = null

  EntityLifecycleCommon.teardownBossBar(this.bossBar, this.bossBarKey)
  EntityLifecycleCommon.removeEntities(this.bodyArmorStands)
  EntityLifecycleCommon.removeEntities(this.seatArmorStands.keys.map { it.second })
  EntityLifecycleCommon.removeDisplays(this.display.values.flatMap { it.values })
  CarBuilder2EntityList.removeEntity(this)
}
