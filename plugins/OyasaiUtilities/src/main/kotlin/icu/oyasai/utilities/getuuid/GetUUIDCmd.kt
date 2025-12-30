package icu.oyasai.utilities.getuuid

import icu.oyasai.utilities.OyasaiUtilities.color
import net.md_5.bungee.api.chat.ClickEvent
import net.md_5.bungee.api.chat.HoverEvent
import net.md_5.bungee.api.chat.TextComponent
import net.md_5.bungee.api.chat.hover.content.Text
import org.bukkit.Bukkit
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender

object GetUUIDCmd : CommandExecutor {
  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    if (command.name != "uuid") return false
    if (args.size != 1) return false
    val offPlayer = Bukkit.getOfflinePlayer(args[0])
    if (offPlayer.firstPlayed == 0L) {
      sender.sendMessage("${args[0]}というユーザーは鯖に一度もログインしていません。")
      return true
    }
    val comp = TextComponent("${args[0]}: ${offPlayer.uniqueId}")
    comp.clickEvent = ClickEvent(ClickEvent.Action.COPY_TO_CLIPBOARD, offPlayer.uniqueId.toString())
    comp.hoverEvent = HoverEvent(HoverEvent.Action.SHOW_TEXT, Text("&7クリックでコピー".color()))
    sender.spigot().sendMessage(comp)
    val comp2 = TextComponent("${args[0]}: ${offPlayer.uniqueId.toString().replace("-","")}")
    comp2.clickEvent =
        ClickEvent(
            ClickEvent.Action.COPY_TO_CLIPBOARD,
            offPlayer.uniqueId.toString().replace("-", ""),
        )
    comp2.hoverEvent = HoverEvent(HoverEvent.Action.SHOW_TEXT, Text("&7クリックでコピー".color()))
    sender.spigot().sendMessage(comp2)
    return true
  }
}
