package io.oyasai.anybuilder.aircraftbuilder.data

import io.oyasai.VehicleGarageService
import io.oyasai.anybuilder.common.EntityLifecycleCommon
import io.oyasai.anybuilder.runtime.EntityRuntime
import io.oyasai.milepoint.MileageTracker
import io.oyasai.toolbox.Tools
import java.util.UUID
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.entity.Entity
import org.bukkit.inventory.EquipmentSlot
import org.bukkit.inventory.ItemStack
import org.bukkit.scheduler.BukkitRunnable
import org.bukkit.util.Transformation
import org.joml.Vector3f

fun AircraftBuilderEntityData.saveDefImpl() {
  this.displayDef.clear()
  for (displaySet in this.display.values) {
    for (blockDisplay in displaySet) {
      this.displayDef[blockDisplay] = blockDisplay.transformation
    }
  }
}

fun AircraftBuilderEntityData.reOffsetDisplayImpl(
    newOffset: MutableMap<Int, org.bukkit.util.Vector>
) {
  val hit = mutableListOf<Pair<Int, org.bukkit.util.Vector>>()

  for (entry in this.display.entries) {
    val data = entry.key
    val newOffsetVec = newOffset[data.first]
    if (newOffsetVec != null) {
      hit.add(data)
      val addVec = newOffsetVec.clone().subtract(data.second)
      this.bodyReOffset.add(addVec)

      for (allDisplay in this.display.values) {
        for (blockDisplay in allDisplay) {
          blockDisplay.setTransformation(
              Transformation(
                  Vector3f(blockDisplay.transformation.translation).add(addVec.toVector3f()),
                  blockDisplay.transformation.leftRotation,
                  blockDisplay.transformation.scale,
                  blockDisplay.transformation.rightRotation))
        }
      }
    }
  }

  for (p in hit) {
    val displaySet = this.display.remove(p)
    if (displaySet != null) {
      newOffset[p.first]?.let { offset -> this.display[p.first to offset] = displaySet }
    }
  }
}

fun AircraftBuilderEntityData.autoSitStartImpl() {
  val delayList = mutableMapOf<UUID, Int>()
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

            val keysToRemove = mutableListOf<UUID>()
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
          if (driverSeat != null &&
              driverSeat.passengers.isNotEmpty() &&
              !this@autoSitStartImpl.driveStartSwitch) {
            this@autoSitStartImpl.start()
          }
        }
      }
      .runTaskTimer(this.plugin, 20L, 10L)
}

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

          val velocity =
              this@startImpl.vehicle
                  .controlSpeed(wasd)
                  .rotateAroundY(
                      Math.toRadians(-this@startImpl.bodyArmorStands[0].eyeLocation.yaw.toDouble()))

          velocity.y += this@startImpl.vehicle.down(this@startImpl.bodyArmorStands[0])

          val addYaw = this@startImpl.vehicle.handling(wasd)
          val setYaw0 = this@startImpl.bodyArmorStands[0].location.yaw + addYaw

          val slot = player?.inventory?.heldItemSlot
          velocity.y += this@startImpl.vehicle.jetRiseAndFall(slot)

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

          this@startImpl.soundTask(wasd)
          this@startImpl.updateBar()
          AircraftBuilderEntityList.updateBarPlayer(player, this@startImpl.bossBar)
          this@startImpl.bodyLightTask()
          this@startImpl.setDisplayRotate()
        }
      }
      .runTaskTimer(this.plugin, 0L, 1L)
}

fun AircraftBuilderEntityData.exitTaskImpl() {
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
        Bukkit.getLogger()
            .warning("[AircraftBuilder] Online player was null for ${offlinePlayer.name}")
      }
    } else if (this.item != null) {
      VehicleGarageService.addItem(offlinePlayer, this.item)
    }
    this.owner = null
  }

  EntityLifecycleCommon.teardownBossBar(this.bossBar, this.bossBarKey)
  EntityLifecycleCommon.removeEntities(this.bodyArmorStands)
  EntityLifecycleCommon.removeEntities(this.seatArmorStands.keys.map { it.second })
  EntityLifecycleCommon.removeDisplays(this.display.values)
  AircraftBuilderEntityList.removeEntity(this)
}
