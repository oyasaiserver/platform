package io.oyasai.anybuilder.aircraftbuilder.controller

import io.oyasai.anybuilder.aircraftbuilder.model.AircraftBuilderEntityData
import io.oyasai.anybuilder.aircraftbuilder.model.AircraftBuilderEntityList
import io.oyasai.anybuilder.aircraftbuilder.physics.computeVelocity
import io.oyasai.anybuilder.aircraftbuilder.physics.computeVerticalMotion
import io.oyasai.anybuilder.aircraftbuilder.physics.computeYawDelta
import io.oyasai.anybuilder.runtime.EntityRuntime
import io.oyasai.milepoint.MileageTracker
import org.bukkit.scheduler.BukkitRunnable

fun AircraftBuilderEntityData.startImpl() {
  this.driveStartSwitch = true

  for (armorStand in this.bodyArmorStands) {
    armorStand.setGravity(true)
  }

  MileageTracker.start(this.bodyArmorStands[0], this.seatArmorStands.keys, 1.0)
  object : BukkitRunnable() {
        override fun run() {
          if (this@startImpl.exit) {
            this.cancel()
            return
          }
          if (this@startImpl.bodyArmorStands[0].isDead) {
            if (!this@startImpl.exit) {
              this@startImpl.exit = true
              this@startImpl.exitTask()
            }
            this.cancel()
            return
          }

          val player = AircraftBuilderEntityList.getControlPlayer(this@startImpl)
          val controlKey = EntityRuntime.getWASD(player)
          val wasd = controlKey?.first

          val velocity = this@startImpl.computeVelocity(wasd)
          val addYaw = this@startImpl.computeYawDelta(wasd)
          val setYaw0 = this@startImpl.bodyArmorStands[0].location.yaw + addYaw

          val slot = player?.inventory?.heldItemSlot
          velocity.y += this@startImpl.computeVerticalMotion(slot)

          this@startImpl.setYaw = -setYaw0
          with(EntityRuntime) {
            setYawAndVelocity(
                velocity,
                setYaw0,
                addYaw,
                this@startImpl.bodyArmorStands,
                this@startImpl.seatArmorStands,
                this@startImpl.getCarPlayers(),
            )
          }

          this@startImpl.soundTask(wasd)
          this@startImpl.updateBar()
          AircraftBuilderEntityList.updateBarPlayer(player, this@startImpl.bossBar)
          this@startImpl.bodyLightTask()
          this@startImpl.setDisplayRotate()
        }
      }
      .runTaskTimer(this.plugin, 0L, 1L)
}
