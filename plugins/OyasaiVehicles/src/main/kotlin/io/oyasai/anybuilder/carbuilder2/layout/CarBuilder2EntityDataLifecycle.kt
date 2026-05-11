package io.oyasai.anybuilder.carbuilder2.layout

import io.oyasai.anybuilder.carbuilder2.data.CarBuilder2EntityData
import io.oyasai.anybuilder.carbuilder2.data.CarBuilder2EntityType
import java.util.LinkedHashMap
import kotlin.math.PI
import kotlin.math.sin
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
