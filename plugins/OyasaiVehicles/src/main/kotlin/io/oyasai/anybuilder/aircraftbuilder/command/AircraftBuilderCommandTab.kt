package io.oyasai.anybuilder.aircraftbuilder.command

import io.oyasai.anybuilder.aircraftbuilder.data.AircraftBuilderBaseCache
import io.oyasai.anybuilder.common.BuilderCommandTabSupport
import io.oyasai.canCreateAircraftBuilder
import io.oyasai.canRideAircraftBuilderOrAdmin
import io.oyasai.canUseAircraftBuilder
import io.oyasai.hasOyasaiAdminPermission
import org.bukkit.command.Command
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter

// aircraftbuilder|acmenu tab completion for: <name>
// spawn|buy|info|machineset|eventcar|save|offset|size

object AircraftBuilderCommandTab : TabCompleter {
  override fun onTabComplete(
      sender: CommandSender,
      command: Command,
      alias: String,
      args: Array<out String>
  ): MutableList<String>? {
    return handleAircraftBuilderTab(sender, command, alias, args)
  }
}

fun handleAircraftBuilderTab(
    sender: CommandSender,
    command: Command,
    alias: String,
    args: Array<out String>
): MutableList<String>? {
  if (command.name != "aircraftbuilder") return null

  return when (args.size) {
    1 -> {
      val list = AircraftBuilderBaseCache.getNameList()
      BuilderCommandTabSupport.filterStartsWith(args[0], list)
    }
    2 -> {
      val data = AircraftBuilderBaseCache.getBaseData(args[0])
      if (data == null) {
        val subCommands = if (sender.canCreateAircraftBuilder()) listOf("save") else emptyList()
        return BuilderCommandTabSupport.filterStartsWith(args[1], subCommands)
      }
      val subCommands = mutableListOf<String>()
      if (sender.canRideAircraftBuilderOrAdmin()) {
        subCommands.add("spawn")
      }
      if (sender.canUseAircraftBuilder()) {
        subCommands.add("buy")
        subCommands.add("info")
      }
      if (sender.canManageAircraftBuilder(data)) {
        subCommands.addAll(listOf("offset", "save", "size", "delete", "create"))
      }
      if (sender.hasOyasaiAdminPermission()) {
        subCommands.addAll(listOf("machineset", "eventcar"))
      }
      BuilderCommandTabSupport.filterStartsWith(args[1], subCommands)
    }
    3 -> {
      when (args[1]) {
        "offset" -> {
          val types = listOf("body", "seat")
          BuilderCommandTabSupport.filterStartsWith(args[2], types)
        }
        else -> null
      }
    }
    4 -> {
      if (args[1] == "offset") {
        mutableListOf("0", "1", "2", "3")
      } else null
    }
    5 -> {
      if (args[1] == "offset") {
        mutableListOf("del", "0.0")
      } else null
    }
    else -> null
  }
}
