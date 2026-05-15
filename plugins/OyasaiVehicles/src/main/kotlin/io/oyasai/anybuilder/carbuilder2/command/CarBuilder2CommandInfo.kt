package io.oyasai.anybuilder.carbuilder2.command

import io.oyasai.anybuilder.carbuilder2.model.CarBuilder2BaseData
import io.oyasai.anybuilder.carbuilder2.model.CarBuilder2BaseDataType
import io.oyasai.anybuilder.common.BuilderInfoCommon
import io.oyasai.canUseCarBuilder2
import org.bukkit.command.CommandSender

fun handleCarBuilder2Info(sender: CommandSender, name: String, data: CarBuilder2BaseData?) {
  if (!sender.canUseCarBuilder2()) {
    sender.sendMessage(CarBuilder2_PERMISSION_DENIED)
    return
  }
  if (data == null) return
  val config = data.config
  val info =
      mutableListOf(
          "[CarBuilder2] --- Current settings for $name ---",
          "Entity count: ${data.totalEntity()}",
          "[Body]",
          "  Size: ${BuilderInfoCommon.formatNumber(config.getSize(CarBuilder2BaseDataType.Body))}",
          "  Offset: ${BuilderInfoCommon.formatVector(config.getOffsetBody())}")

  listOf(
          CarBuilder2BaseDataType.Wheel,
          CarBuilder2BaseDataType.Wheel2,
          CarBuilder2BaseDataType.HeadLight)
      .forEach { type ->
        info.add("[${type.configName}]")
        info.add("  Size: ${BuilderInfoCommon.formatNumber(config.getSize(type))}")
        val offsets = config.getOffset(type)
        if (offsets.isEmpty()) {
          info.add("  Offsets: none")
        } else {
          offsets.toSortedMap().forEach { (index, vector) ->
            info.add("  #$index: ${BuilderInfoCommon.formatVector(vector)}")
          }
        }
        if (type == CarBuilder2BaseDataType.HeadLight) {
          info.add("  Angle: ${BuilderInfoCommon.formatNumber(config.getHeadLightAngle())}")
          info.add(
              "  RotateOffset: ${BuilderInfoCommon.formatVector(config.getHeadLightRotateOffset())}")
        }
      }

  info.add("[Seats]")
  config
      .getSeatList()
      .toList()
      .sortedBy { it.first }
      .forEach { (index, vector) ->
        info.add("  #$index: ${BuilderInfoCommon.formatVector(vector)}")
      }
  info.add("[Vehicle]")
  info.add("  Sound: ${config.getEGSound()}")
  info.add("  Spring: ${BuilderInfoCommon.formatNumber(config.getSpring().toDouble())}")
  info.forEach { sender.sendMessage(it) }
}
