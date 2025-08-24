package icu.oyasai.utilities.ore_reappears

import icu.oyasai.utilities.OyasaiUtilities.color
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender

object OreReappearsCommand : CommandExecutor {
  override fun onCommand(
    sender: CommandSender,
    command: Command,
    label: String,
    args: Array<out String>,
  ): Boolean {
    if (command.name == "orerepopreload") {
      if (!sender.isOp) return false
      OreReappears.reloadConfig()
      sender.sendMessage("[OreReappears] config.yml Reload!")
      return true
    }
    if (command.name == "orerepopswitch") {
      if (!sender.isOp) return false
      sender.sendMessage(
        "[OreReappears] 機能を${if (OreReappears.switching()) {"&c無効化"} else {"&a有効化"}}&rしました".color()
      )
      return true
    }
    return false
  }
}
