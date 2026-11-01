package io.oyasai.anybuilder.aircraftbuilder.lifecycle

import io.oyasai.anybuilder.aircraftbuilder.model.AircraftBuilderEntityData
import io.oyasai.anybuilder.aircraftbuilder.model.AircraftBuilderEntityList
import io.oyasai.anybuilder.common.EntityLifecycleCommon
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
            EntityLifecycleCommon.autoSitPassengers(
                this@autoSitStartImpl.seatArmorStands,
                delayList,
            ) { player ->
              player.sendMessage("[AircraftBuilder] ホットバースロットで操作:")
              player.sendMessage("[AircraftBuilder] １～４：下降, ５：キープ, ６～９：上昇")
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

fun AircraftBuilderEntityData.exitTaskImpl() {
  EntityLifecycleCommon.handleItemReturn(this.owner, this.item, "AircraftBuilder")
  this.owner = null

  EntityLifecycleCommon.teardownBossBar(this.bossBar, this.bossBarKey)
  EntityLifecycleCommon.removeEntities(this.bodyArmorStands)
  EntityLifecycleCommon.removeEntities(this.seatArmorStands.keys.map { it.second })
  EntityLifecycleCommon.removeDisplays(this.display.values)
  AircraftBuilderEntityList.removeEntity(this)
}
