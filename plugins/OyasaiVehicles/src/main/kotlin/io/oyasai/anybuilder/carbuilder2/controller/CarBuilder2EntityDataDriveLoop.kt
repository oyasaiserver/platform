package io.oyasaiserver.anybuilder.carbuilder2.controller

import io.oyasaiserver.VehicleMenuCommand
import io.oyasaiserver.anybuilder.carbuilder2.data.CarBuilder2EntityData
import io.oyasaiserver.anybuilder.carbuilder2.data.CarBuilder2EntityList
import io.oyasaiserver.anybuilder.carbuilder2.physics.computeVelocity
import io.oyasaiserver.anybuilder.carbuilder2.physics.computeVerticalMotion
import io.oyasaiserver.anybuilder.carbuilder2.physics.computeYawDelta
import io.oyasaiserver.anybuilder.carbuilder2.physics.slipstream
import io.oyasaiserver.anybuilder.runtime.EntityRuntime
import io.oyasaiserver.milepoint.MileageTracker
import org.bukkit.scheduler.BukkitRunnable
import kotlin.math.abs

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

            val addYaw = this@startImpl.computeYawDelta(wasd)
            val slipYaw = this@startImpl.vehicle.slip(wasd)

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

            val slipstreamActive = slipstream(this@startImpl, slipYaw.toFloat(), wasd)
            val oldSpeed = this@startImpl.vehicle.speed.z
            val velocity = this@startImpl.computeVelocity(wasd, slot, slipstreamActive, setYaw0, slipYaw.toFloat())
            velocity.y = this@startImpl.computeVerticalMotion()
            this@startImpl.setYaw = -setYaw0

            with(EntityRuntime) {
                setYawAndVelocity(velocity, setYaw0, addYaw, this@startImpl.bodyArmorStands, this@startImpl.seatArmorStands, this@startImpl.getCarPlayers())
            }

            this@startImpl.setBodyRotate(oldSpeed)
            this@startImpl.soundTask(wasd)
            this@startImpl.updateBar(slipstreamActive)
            CarBuilder2EntityList.updateBarPlayer(player, this@startImpl.bossBar)
            this@startImpl.bodyLightTask(slot, wasd)
            this@startImpl.smokeParticle(this@startImpl.vehicle.speed.z, slipYaw.toFloat(), setYaw0, player)

            if (!VehicleMenuCommand.eventMode) {
                if (this@startImpl.realMode) {
                    this@startImpl.wheelTask(this@startImpl.vehicle.speed.z, this@startImpl.vehicle.handleAngle)
                } else {
                    this@startImpl.wheelTask(this@startImpl.vehicle.speed.z, this@startImpl.vehicle.oldHandlingFloat)
                }
                this@startImpl.headLightTask(setYaw0)
            }
        }
    }.runTaskTimer(this.plugin, 0L, 1L)
}
