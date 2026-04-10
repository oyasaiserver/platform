package io.oyasai.anybuilder.carbuilder2.data

import io.oyasai.VehicleGarageService
import io.oyasai.VehicleMenuCommand
import io.oyasai.anybuilder.common.EntityLifecycleCommon
import io.oyasai.anybuilder.runtime.EntityRuntime
import io.oyasai.milepoint.MileageTracker
import kotlin.math.abs
import kotlin.math.max
import kotlin.math.min
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.scheduler.BukkitRunnable

fun CarBuilder2EntityData.startImpl() {
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

          val player = CarBuilder2EntityList.getControlPlayer(this@startImpl)
          val wasd = EntityRuntime.getWASD(player)?.first
          val slot = CarBuilder2EntityList.getInvSlotChange(this@startImpl, player)

          var addYaw = this@startImpl.vehicle.handling(wasd, this@startImpl.wheelZ)
          val slipYaw = this@startImpl.vehicle.slip(wasd)

          if (this@startImpl.realMode) {
            addYaw *=
                max(min(this@startImpl.vehicle.speed.z * 20.0, 1.0), -1.0).toFloat() *
                    this@startImpl.handleAddYawFix
          }

          val setYaw0 = addYaw + this@startImpl.bodyArmorStands[0].eyeLocation.yaw
          if (abs(addYaw) > 2.5f || addYaw == 0.0f) {
            val slipstream = abs(this@startImpl.setYaw) % 22.5f
            if (slipstream in 0.0f..2.5f) {
              if (this@startImpl.setYaw >= 0.0f) {
                this@startImpl.setYaw -= slipstream
              } else {
                this@startImpl.setYaw += slipstream
              }
            } else if (slipstream in 20.0f..22.5f) {
              if (this@startImpl.setYaw >= 0.0f) {
                this@startImpl.setYaw += (22.5f - slipstream)
              } else {
                this@startImpl.setYaw -= (22.5f - slipstream)
              }
            }
          }

          val slipstreamActive =
              CarBuilder2EntityList.slipstream(this@startImpl, slipYaw.toFloat(), wasd)
          val oldSpeed = this@startImpl.vehicle.speed.z
          val velocity =
              this@startImpl.vehicle
                  .controlSpeed(
                      wasd,
                      slot,
                      slipstreamActive,
                      if (this@startImpl.vehicle.underBlockCheck0)
                          CarBuilder2EntityList.underBlockCheck(this@startImpl)
                      else 1.0)
                  .rotateAroundY(Math.toRadians(-(setYaw0.toDouble() + slipYaw)))

          var jumpY = this@startImpl.vehicle.jump(this@startImpl.bodyArmorStands[0])
          if (jumpY == 0.0) {
            jumpY = this@startImpl.vehicle.down(this@startImpl.bodyArmorStands[0])
          }

          velocity.y = jumpY
          this@startImpl.setYaw = -setYaw0

          with(EntityRuntime) {
            setYawAndVelocity(
                velocity,
                setYaw0,
                addYaw,
                this@startImpl.bodyArmorStands,
                this@startImpl.seatArmorStands,
                this@startImpl.getCarPlayers())
          }

          this@startImpl.setBodyRotate(oldSpeed)
          this@startImpl.soundTask(wasd)
          this@startImpl.updateBar(slipstreamActive)
          CarBuilder2EntityList.updateBarPlayer(player, this@startImpl.bossBar)
          this@startImpl.bodyLightTask(slot, wasd)
          this@startImpl.smokeParticle(
              this@startImpl.vehicle.speed.z, slipYaw.toFloat(), setYaw0, player)

          if (!VehicleMenuCommand.eventMode) {
            if (this@startImpl.realMode) {
              this@startImpl.wheelTask(
                  this@startImpl.vehicle.speed.z, this@startImpl.vehicle.handleAngle)
            } else {
              this@startImpl.wheelTask(
                  this@startImpl.vehicle.speed.z, this@startImpl.vehicle.oldHandlingFloat)
            }
            this@startImpl.headLightTask(setYaw0)
          }
        }
      }
      .runTaskTimer(this.plugin, 0L, 1L)
}

fun CarBuilder2EntityData.exitTaskImpl() {
  Bukkit.getLogger().info("[CarBuilder2] exitTask() called for car ${this.baseData.name}")
  for (loc in this.lightBlockList) {
    if (loc.block.type == Material.LIGHT) {
      loc.block.setType(Material.AIR, false)
    }
  }

  val ownerUUID = this.owner
  if (ownerUUID != null) {
    val offlinePlayer = Bukkit.getOfflinePlayer(ownerUUID)
    if (offlinePlayer.isOnline) {
      val player = offlinePlayer.player
      if (player != null) {
        if (player.inventory.firstEmpty() != -1) {
          if (this.item != null) {
            player.inventory.addItem(this.item)
          }
        } else if (this.item != null) {
          player.sendMessage("[OyasaiVehicles] ガレージに収納しました")
          VehicleGarageService.addItem(player, this.item)
        }
      } else {
        Bukkit.getLogger().warning("[CarBuilder2] Online player was null for ${offlinePlayer.name}")
      }
    } else if (this.item != null) {
      VehicleGarageService.addItem(offlinePlayer, this.item)
    }
    this.owner = null
  }

  EntityLifecycleCommon.teardownBossBar(this.bossBar, this.bossBarKey)
  EntityLifecycleCommon.removeEntities(this.bodyArmorStands)
  EntityLifecycleCommon.removeEntities(this.seatArmorStands.keys.map { it.second })
  EntityLifecycleCommon.removeDisplays(this.display.values.flatMap { it.values })
  CarBuilder2EntityList.removeCarEntity(this)
}
