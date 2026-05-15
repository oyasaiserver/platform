package io.oyasai.anybuilder.aircraftbuilder.command

import io.oyasai.anybuilder.common.command.BuilderCommandBase
import org.bukkit.command.Command
import org.bukkit.command.CommandSender

// aircraftbuilder|acmenu [<name> [subcommand ...]]
// Examples: /ac | /ac <name> spawn | /ac <name> buy | /ac <name> info

object AircraftBuilderCommand : BuilderCommandBase() {

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>
  ): Boolean {
    return handleAircraftBuilderCommand(sender, command, label, args)
  }
}
