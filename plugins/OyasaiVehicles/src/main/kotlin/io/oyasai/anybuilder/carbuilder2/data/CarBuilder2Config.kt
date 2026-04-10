package io.oyasai.anybuilder.carbuilder2.data

import io.oyasai.anybuilder.common.VehicleConfigCommon
import io.oyasai.toolbox.CustomYaml
import java.util.UUID
import org.bukkit.command.CommandSender
import org.bukkit.util.Vector

class CarBuilder2Config(fileName: String) : CustomYaml(fileName) {
  companion object {
    private const val DEFAULT_BODY_SIZE = 3.5
    private const val DEFAULT_WHEEL_SIZE_RATIO = 7.0
    private const val DEFAULT_HEADLIGHT_SIZE_RATIO = 28.0
  }

  private fun bodySizeOrDefault(): Double = getDouble("Body.Size", DEFAULT_BODY_SIZE)

  fun hasSize(type: CarBuilder2BaseDataType): Boolean = contains("${type.configName}.Size")

  fun getOwnerUUID(): UUID? = VehicleConfigCommon.getOwnerUUID(this)

  fun isOwnerOrAdmin(sender: CommandSender): Boolean =
      VehicleConfigCommon.isOwnerOrAdmin(this, sender)

  @Deprecated("Use isOwnerOrAdmin")
  fun isOwnerOrOP(sender: CommandSender): Boolean = isOwnerOrAdmin(sender)

  fun getOffset(type: CarBuilder2BaseDataType): MutableMap<Int, Vector> {
    val offsets = sortedMapOf<Int, Vector>()
    val prefix = "${type.configName}.Offset."

    for (key in getKeys(true)) {
      if (!key.startsWith(prefix)) continue
      val index = key.removePrefix(prefix).toIntOrNull() ?: continue
      offsets[index] = getVector(key) ?: Vector().zero()
    }

    return offsets.toMutableMap()
  }

  fun getSeatList(): MutableMap<Int, Vector> {
    val seats = sortedMapOf<Int, Vector>()

    for (key in getKeys(true)) {
      if (!key.startsWith("Seat.")) continue
      val index = key.removePrefix("Seat.").toIntOrNull() ?: continue
      seats[index] = getVector(key) ?: Vector().zero()
    }

    if (seats.isEmpty()) {
      seats[0] = Vector(0.0, 0.1, 0.0)
    }

    return seats.toMutableMap()
  }

  fun getSize(type: CarBuilder2BaseDataType): Double {
    val default =
        when (type) {
          CarBuilder2BaseDataType.Body -> DEFAULT_BODY_SIZE
          CarBuilder2BaseDataType.Wheel,
          CarBuilder2BaseDataType.Wheel2 -> bodySizeOrDefault() / DEFAULT_WHEEL_SIZE_RATIO
          CarBuilder2BaseDataType.HeadLight -> bodySizeOrDefault() / DEFAULT_HEADLIGHT_SIZE_RATIO
        }
    return getDouble("${type.configName}.Size", default)
  }

  fun setSize(type: CarBuilder2BaseDataType, size: Double) {
    set("${type.configName}.Size", size)
  }

  fun setBodyOffset(offset: Vector) {
    set("Body.Offset", offset)
  }

  fun clearBodyOffset() {
    set("Body.Offset", null)
  }

  fun setSeatOffset(index: Int, offset: Vector) {
    set("Seat.$index", offset)
  }

  fun clearSeatOffset(index: Int) {
    set("Seat.$index", null)
  }

  fun setPartOffset(type: CarBuilder2BaseDataType, index: Int, offset: Vector) {
    set("${type.configName}.Offset.$index", offset)
  }

  fun clearPartOffset(type: CarBuilder2BaseDataType, index: Int) {
    set("${type.configName}.Offset.$index", null)
  }

  fun setHeadLightAngle(angle: Double) {
    set("HeadLight.Angle", angle)
  }

  fun setHeadLightRotateOffset(offset: Vector) {
    set("HeadLight.rOffset", offset)
  }

  fun setEGSound(sound: String) {
    set("Sound", sound)
  }

  fun setSpring(value: Double) {
    set("Spring", value)
  }

  fun getOffsetBody(): Vector {
    return getVector("Body.Offset") ?: Vector(0.0, 0.0, 0.0)
  }

  fun getSpring(): Float {
    return getDouble("Spring", 0.1).toFloat()
  }

  fun getEGSound(): String {
    return getString("Sound") ?: "entity.minecart.riding"
  }

  fun getHeadLightAngle(): Double {
    return getDouble("HeadLight.Angle", 45.0)
  }

  fun getHeadLightRotateOffsets(): MutableMap<Int, Vector> {
    val rotateOffset = getHeadLightRotateOffset()
    val indexes = getOffset(CarBuilder2BaseDataType.HeadLight).keys.sorted()
    if (indexes.isEmpty()) return mutableMapOf(0 to rotateOffset)
    return indexes.associateWith { rotateOffset.clone() }.toMutableMap()
  }

  fun getHeadLightRotateOffset(): Vector {
    return getVector("HeadLight.rOffset") ?: Vector().zero()
  }

  override fun save() {
    super.save()
  }
}
