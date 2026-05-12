package io.oyasai.anybuilder.aircraftbuilder.command

import io.oyasai.anybuilder.aircraftbuilder.model.AircraftBuilderBaseData
import io.oyasai.anybuilder.common.BuilderInfoCommon
import io.oyasai.canUseAircraftBuilder
import org.bukkit.command.CommandSender

// aircraftbuilder|acmenu <name> info

fun AircraftBuilderCommand.handleAircraftBuilderInfo(
    sender: CommandSender,
    data: AircraftBuilderBaseData?
) {
  if (!sender.canUseAircraftBuilder()) {
    sender.sendMessage(AircraftBuilder_PERMISSION_DENIED)
    return
  }
  if (data == null) {
    sender.sendMessage("[AircraftBuilder] Data does not exist!")
    return
  }
  val config = data.config
  val info =
      mutableListOf(
          "[AircraftBuilder] --- Current settings for ${data.name} ---",
          "Entity count: ${data.totalEntity()}",
          "[Body]",
          "  Size: ${BuilderInfoCommon.formatNumber(config.getBodySize())}",
          "  Offset: ${BuilderInfoCommon.formatVector(config.getOffsetBody())}",
          "  Rotate: ${BuilderInfoCommon.formatNumber(config.getRotateBody())}",
          "[Seats]")
  config
      .getSeatList()
      .toList()
      .sortedBy { it.first }
      .forEach { (index, vec) -> info.add("  #$index: ${BuilderInfoCommon.formatVector(vec)}") }
  info.forEach { sender.sendMessage(it) }
}
