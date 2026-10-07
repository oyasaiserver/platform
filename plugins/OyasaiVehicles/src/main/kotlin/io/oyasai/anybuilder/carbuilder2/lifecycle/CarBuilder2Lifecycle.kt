package io.oyasai.anybuilder.carbuilder2.lifecycle

import io.oyasai.anybuilder.carbuilder2.model.CarBuilder2EntityData
import io.oyasai.anybuilder.carbuilder2.model.CarBuilder2EntityList
import io.oyasai.anybuilder.common.EntityLifecycleCommon
import org.bukkit.Bukkit
import org.bukkit.Material
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
            EntityLifecycleCommon.autoSitPassengers(
                this@autoSitStartImpl.seatArmorStands,
                delayList,
            ) { player ->
              player.sendMessage("[CarBuilder2] ホットバースロット切り替えで操作:")
              val mtStr =
                  if (this@autoSitStartImpl.vehicle.manualTransmission) "４=シフトダウン, ６=シフトアップ | "
                  else ""
              player.sendMessage(
                  "[CarBuilder2] １=左ウインカー, ２=ハザード, ３=右ウインカー | ${mtStr} ８=ライトON/OFF, ９=クルーズモード切替"
              )
            }
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
