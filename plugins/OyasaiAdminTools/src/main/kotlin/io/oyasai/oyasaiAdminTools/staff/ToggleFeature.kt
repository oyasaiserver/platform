package io.oyasai.oyasaiAdminTools.staff

import io.oyasai.oyasaiAdminTools.OyasaiAdminTools
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player

abstract class ToggleFeature(plugin: OyasaiAdminTools, name: String) : StaffFeature(plugin, name) {
  abstract fun toggle(sender: CommandSender, target: Player, enabled: Boolean?)

  override fun execute(sender: CommandSender, args: Array<out String>) {
    val others = sender.hasPermission("essentials.$name.others")
    if (
        sender is Player &&
            !(args.size == 1 && StaffRules.toggle(args[0]) == null && others) &&
            !(args.size == 2 && others)
    ) {
      toggle(sender, sender, if (args.size == 1) StaffRules.toggle(args[0]) else null)
      return
    }
    if (!others) {
      sender.sendMessage("§c他人への操作権限がありません。")
      return
    }
    if (args.isEmpty() || args[0].trim().length < 2) {
      missing(sender)
      return
    }
    val targets = plugin.server.matchPlayer(args[0]).filter { visible(sender, it) }
    if (targets.isEmpty()) missing(sender)
    targets.forEach { toggle(sender, it, StaffRules.toggle(args.getOrNull(1))) }
  }
}
