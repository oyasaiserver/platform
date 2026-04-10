package io.oyasai.anybuilder.carbuilder2.data

import io.oyasai.toolbox.Tools
import kotlin.math.PI
import kotlin.math.sin
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.entity.Entity
import org.bukkit.inventory.EquipmentSlot
import org.bukkit.inventory.ItemStack
import org.bukkit.scheduler.BukkitRunnable
import org.bukkit.util.Transformation
import org.bukkit.util.Vector
import org.joml.Quaternionf
import org.joml.Vector3f

fun CarBuilder2EntityData.reOffsetDisplayMapImpl(
    type: CarBuilder2EntityType,
    newOffset: Map<Int, Vector>
) {
  this.reOffsetDisplay(type, newOffset.toMutableMap())
}

fun CarBuilder2EntityData.saveDefImpl(type: CarBuilder2EntityType) {
  val map = LinkedHashMap<org.bukkit.entity.BlockDisplay, Transformation>()
  this.display[type]?.values?.forEach { set ->
    set.forEach { blockDisplay -> map[blockDisplay] = blockDisplay.transformation }
  }
  this.displayDef[type] = map
}

fun CarBuilder2EntityData.reOffsetDisplayImpl(
    type: CarBuilder2EntityType,
    newOffset: MutableMap<Int, Vector>
) {
  val currentTypeMap = this.display[type] ?: return
  val hitKeys = mutableListOf<Pair<Int, Vector>>()

  for ((key, displays) in currentTypeMap) {
    val offset = newOffset[key.first]
    if (offset != null) {
      hitKeys.add(key)
      val diff = offset.clone().subtract(key.second)

      if (type == CarBuilder2EntityType.Body) {
        this.bodyReOffset.add(diff)
        for (allTypeMap in this.display.values) {
          for (displaySet in allTypeMap.values) {
            for (blockDisplay in displaySet) {
              val trans = blockDisplay.transformation
              blockDisplay.transformation =
                  Transformation(
                      Vector3f(trans.translation)
                          .add(diff.toVector3f())
                          .rotateY(Math.toRadians(this.setYaw.toDouble()).toFloat()),
                      Quaternionf(trans.leftRotation)
                          .rotationX(Math.toRadians(this.pitch.toDouble()).toFloat())
                          .rotateY(Math.toRadians(this.setYaw.toDouble()).toFloat()),
                      trans.scale,
                      trans.rightRotation)
            }
          }
        }
      } else {
        for (blockDisplay in displays) {
          val trans = blockDisplay.transformation
          blockDisplay.transformation =
              Transformation(
                  Vector3f(trans.translation)
                      .add(diff.toVector3f())
                      .rotateY(Math.toRadians(this.setYaw.toDouble()).toFloat()),
                  Quaternionf(trans.leftRotation)
                      .rotationX(Math.toRadians(this.pitch.toDouble()).toFloat())
                      .rotateY(Math.toRadians(this.setYaw.toDouble()).toFloat()),
                  trans.scale,
                  trans.rightRotation)
        }
      }
    }
  }

  for (oldKey in hitKeys) {
    val displays = currentTypeMap.remove(oldKey)
    if (displays != null) {
      newOffset[oldKey.first]?.let { offset ->
        val newKey = oldKey.first to offset
        currentTypeMap[newKey] = displays
      }
    }
  }

  this.wheelZ = this.wheelZ()
  this.handleAddYawFix = (1f - sin(PI.toFloat() / 180f * this.wheelZ * 3.14f)) / 32f
}

fun CarBuilder2EntityData.wheelZImpl(): Float {
  var maxZ = 0.0
  var minZ = 0.0

  display[CarBuilder2EntityType.Wheel]?.keys?.forEach { pair ->
    val z = pair.second.z
    if (z > maxZ) maxZ = z
    if (z < minZ) minZ = z
  }

  display[CarBuilder2EntityType.Wheel2]?.keys?.forEach { pair ->
    val z = pair.second.z
    if (z > maxZ) maxZ = z
    if (z < minZ) minZ = z
  }

  return (maxZ - minZ).toFloat()
}

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
                    "[CarBuilder2] Despawning car ${this@autoSitStartImpl.baseData.name}: No seats found!")
            this@autoSitStartImpl.exit = true
            this@autoSitStartImpl.exitTask()
            this.cancel()
            return
          }
          if (firstSeat.isDead) {
            Bukkit.getLogger()
                .warning(
                    "[CarBuilder2] Despawning car ${this@autoSitStartImpl.baseData.name}: Driver seat ArmorStand is dead!")
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
                        "[CarBuilder2] １=左ウインカー, ２=ハザード, ３=右ウインカー | ${mtStr} ８=ライトON/OFF, ９=クルーズモード切替")
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
          if (driverSeat != null &&
              driverSeat.passengers.isNotEmpty() &&
              !this@autoSitStartImpl.driveStartSwitch) {
            this@autoSitStartImpl.start()
          }
        }
      }
      .runTaskTimer(this.plugin, 20L, 10L)
}
