package icu.oyasai.utilities.playerstate

import org.bukkit.command.CommandSender
import org.bukkit.entity.Player

interface PlayerStateBridge {
  fun enable() {}

  fun disable() {}

  fun allowFly(sender: CommandSender, player: Player, enabled: Boolean): Boolean = true

  fun syncFly(player: Player, enabled: Boolean) {}

  fun allowNick(sender: CommandSender, player: Player, nickname: String?): Boolean = true

  fun syncNick(player: Player, nickname: String?) {}
}
