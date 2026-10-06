package io.oyasai.oyasaiAdminTools.sudo

import io.oyasai.oyasaiAdminTools.OyasaiAdminTools
import io.oyasai.oyasaiAdminTools.staff.StaffFeature
import org.bukkit.Bukkit
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player

class SudoFeature(plugin: OyasaiAdminTools) : StaffFeature(plugin, "sudo") {
  override fun execute(sender: CommandSender, args: Array<out String>) {
    if (args.size < 2) {
      sender.sendMessage("/sudo <player|*> <command|c:message>")
      return
    }
    val multiple = sender !is Player || sender.hasPermission("essentials.sudo.multiple")
    val targets =
        if (multiple && args[0] in setOf("*", "**"))
            Bukkit.getOnlinePlayers().filter { visible(sender, it) }
        else
            listOfNotNull(
                if (sender is Player && args[0] in setOf("@s", "@p")) sender
                else online(sender, args[0])
            )
    if (targets.isEmpty()) {
      missing(sender)
      return
    }
    val input = args.drop(1).joinToString(" ")
    targets.forEach { target ->
      if (target == sender) return@forEach
      if (sender is Player && target.hasPermission("essentials.sudo.exempt")) {
        sender.sendMessage("§c${target.name} は sudo を免除されています。")
        return@forEach
      }
      if (input.startsWith("c:", true)) target.chat(input.substring(2))
      else
          plugin.server.scheduler.runTask(
              plugin,
              Runnable { if (target.isOnline) target.chat("/" + input) },
          )
      sender.sendMessage("§6${target.name}: $input")
    }
  }
}
