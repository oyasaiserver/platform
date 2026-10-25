package icu.oyasai.citiesskymine.util

import icu.oyasai.citiesskymine.Main
import kotlin.contracts.ExperimentalContracts
import kotlin.contracts.contract
import net.kyori.adventure.text.minimessage.MiniMessage
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player

object MessageUtil {

  private val mm = MiniMessage.miniMessage()

  val prefix: String
    get() = Main.instance.config.getString("prefix") ?: "<gray>[<gold>CitiesSkyMine</gold>]</gray> "

  fun send(sender: CommandSender, message: String) {
    sender.sendMessage(mm.deserialize(prefix + message))
  }

  @OptIn(ExperimentalContracts::class)
  fun requirePlayer(sender: CommandSender): Boolean {
    contract { returns(true) implies (sender is Player) }
    if (sender is Player) return true
    error(sender, "このコマンドはプレイヤーから実行してください。")
    return false
  }

  fun undoResult(sender: CommandSender, recorded: Boolean, success: String, failure: String) {
    if (recorded) info(sender, success) else warn(sender, failure)
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
        mm.deserialize("<dark_gray>===[ <gold><bold>$title</bold></gold> <dark_gray>]===")
    )
  }

  fun helpEntry(sender: CommandSender, cmd: String, desc: String) {
    sender.sendMessage(
        mm.deserialize("  <gold>$cmd</gold> <dark_gray>-</dark_gray> <gray>$desc</gray>")
    )
  }
}
