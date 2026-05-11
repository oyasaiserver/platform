package io.oyasai.anybuilder.carbuilder2.command

import io.oyasai.anybuilder.common.command.BuilderCommandBase
import org.bukkit.command.Command
import org.bukkit.command.CommandSender

// carbuilder2|cbmenu [<name> [subcommand ...]]
// Examples: /cbmenu, /cbmenu <name> spawn|buy|info|save|machineset

object CarBuilder2Command : BuilderCommandBase() {

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>
  ): Boolean {
    return handleCarBuilder2Command(sender, command, label, args)
  }
}
