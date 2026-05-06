package icu.oyasai.citiesskymine.util

import icu.oyasai.citiesskymine.Main
import net.kyori.adventure.text.minimessage.MiniMessage
import org.bukkit.command.CommandSender

object MessageUtil {

  private val mm = MiniMessage.miniMessage()

  val prefix: String
    get() = Main.instance.config.getString("prefix") ?: "<gray>[<gold>CitiesSkyMine</gold>]</gray> "

  fun send(sender: CommandSender, message: String) {
    sender.sendMessage(mm.deserialize(prefix + message))
  }

  fun sendRaw(sender: CommandSender, message: String) {
    sender.sendMessage(mm.deserialize(message))
  }

  fun error(sender: CommandSender, message: String) {
    sender.sendMessage(mm.deserialize("$prefix<red>$message</red>"))
  }

  fun success(sender: CommandSender, message: String) {
    sender.sendMessage(mm.deserialize("$prefix<green>$message</green>"))
  }

  fun info(sender: CommandSender, message: String) {
    sender.sendMessage(mm.deserialize("$prefix<aqua>$message</aqua>"))
  }

  fun warn(sender: CommandSender, message: String) {
    sender.sendMessage(mm.deserialize("$prefix<yellow>$message</yellow>"))
  }

  fun header(sender: CommandSender, title: String) {
    sender.sendMessage(
        mm.deserialize("<dark_gray>===[ <gold><bold>$title</bold></gold> <dark_gray>]==="))
  }

  fun helpEntry(sender: CommandSender, cmd: String, desc: String) {
    sender.sendMessage(
        mm.deserialize("  <gold>$cmd</gold> <dark_gray>-</dark_gray> <gray>$desc</gray>"))
  }
}
