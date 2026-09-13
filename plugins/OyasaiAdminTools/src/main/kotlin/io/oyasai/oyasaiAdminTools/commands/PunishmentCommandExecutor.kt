package io.oyasai.oyasaiAdminTools.commands

import io.oyasai.oyasaiAdminTools.punishment.DurationParser
import io.oyasai.oyasaiAdminTools.punishment.PunishmentRecord
import io.oyasai.oyasaiAdminTools.punishment.PunishmentService
import io.oyasai.oyasaiAdminTools.punishment.PunishmentType
import io.oyasai.oyasaiAdminTools.utils.DateTimeUtils
import org.bukkit.Bukkit
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter

object PunishmentCommandExecutor : CommandExecutor, TabCompleter {
  private val durationHints = listOf("1mo", "2w", "3d", "4h", "5m", "6s", "perm")

  override fun onCommand(
      sender: CommandSender,
      command: Command,
      label: String,
      args: Array<out String>,
  ): Boolean {
    return when (command.name.lowercase()) {
      "unban" -> unban(sender, args)
      "mute" -> mute(sender, args)
      "unmute" -> unmute(sender, args)
      "warn" -> warn(sender, args)
      "warns" -> warns(sender, args)
      "history" -> history(sender, args)
      else -> false
    }
  }

  private fun unban(sender: CommandSender, args: Array<out String>): Boolean {
    if (args.isEmpty()) {
      sender.sendMessage("§cUsage: /unban <名前>")
      return false
    }
    val changed = PunishmentService.unban(args[0])
    if (changed <= 0) {
      sender.sendMessage("§c${args[0]} の有効なBANは見つかりませんでした。")
    } else {
      sender.sendMessage("§a${args[0]} のBANを解除しました。")
    }
    return true
  }

  private fun mute(sender: CommandSender, args: Array<out String>): Boolean {
    if (args.size < 3) {
      sender.sendMessage("§cUsage: /mute <名前> <期間> <理由>")
      return false
    }
    val duration = DurationParser.parse(args[1])
    if (duration == null) {
      sender.sendMessage("§c期間の形式が正しくありません。(例: 1mo, 2w, 3d, 4h, 5m, 6s, perm)")
      return false
    }
    val reason = args.drop(2).joinToString(" ")
    val record = PunishmentService.mute(args[0], duration, reason, sender.name)
    val until = PunishmentService.formatEnd(record.end)
    sender.sendMessage("§a${record.name} をミュートしました。解除: $until")
    Bukkit.getPlayerExact(record.name)?.sendMessage("§cあなたはミュートされました。理由: $reason")
    return true
  }

  private fun unmute(sender: CommandSender, args: Array<out String>): Boolean {
    if (args.isEmpty()) {
      sender.sendMessage("§cUsage: /unmute <名前>")
      return false
    }
    val changed = PunishmentService.unmute(args[0])
    if (changed <= 0) {
      sender.sendMessage("§c${args[0]} の有効なミュートは見つかりませんでした。")
    } else {
      sender.sendMessage("§a${args[0]} のミュートを解除しました。")
    }
    return true
  }

  private fun warn(sender: CommandSender, args: Array<out String>): Boolean {
    if (args.size < 2) {
      sender.sendMessage("§cUsage: /warn <名前> <理由>")
      return false
    }
    val reason = args.drop(1).joinToString(" ")
    val (record, count) = PunishmentService.warn(args[0], reason, sender.name)
    sender.sendMessage("§e${record.name} に警告しました。(累計 ${count} 回)")
    Bukkit.getPlayerExact(record.name)?.sendMessage("§c警告を受けました。理由: $reason")
    return true
  }

  private fun warns(sender: CommandSender, args: Array<out String>): Boolean {
    if (args.isEmpty()) {
      sender.sendMessage("§cUsage: /warns <名前>")
      return false
    }
    val (count, rows) = PunishmentService.warnHistory(args[0])
    sender.sendMessage("§e${args[0]} の警告: ${count} 回")
    rows.take(15).forEach { row -> sender.sendMessage(formatRow(row)) }
    return true
  }

  private fun history(sender: CommandSender, args: Array<out String>): Boolean {
    if (args.isEmpty()) {
      sender.sendMessage("§cUsage: /history <名前>")
      return false
    }
    val rows = PunishmentService.history(args[0])
    if (rows.isEmpty()) {
      sender.sendMessage("§7${args[0]} の処罰履歴はありません。")
      return true
    }
    sender.sendMessage("§e${args[0]} の処罰履歴 (${rows.size} 件):")
    rows.take(20).forEach { row -> sender.sendMessage(formatRow(row)) }
    return true
  }

  private fun formatRow(row: PunishmentRecord): String {
    val whenText = DateTimeUtils.formatToString(DateTimeUtils.unixToJST(row.start))
    val until =
        when (row.type) {
          PunishmentType.BAN,
          PunishmentType.TEMPBAN,
          PunishmentType.MUTE -> " 解除:${PunishmentService.formatEnd(row.end)}"
          else -> ""
        }
    val active = if (row.active) "§a有効" else "§7無効"
    return "§8- §f${row.type} §7$whenText §f${row.reason} §7by ${row.operator}$until $active"
  }

  override fun onTabComplete(
      sender: CommandSender,
      command: Command,
      alias: String,
      args: Array<out String>,
  ): List<String> {
    val online = { prefix: String ->
      Bukkit.getOnlinePlayers().map { it.name }.filter { it.startsWith(prefix, ignoreCase = true) }
    }
    return when (command.name.lowercase()) {
      "unban",
      "unmute",
      "warns",
      "history" -> if (args.size == 1) online(args[0]) else emptyList()
      "warn" -> if (args.size == 1) online(args[0]) else emptyList()
      "mute" ->
          when (args.size) {
            1 -> online(args[0])
            2 -> durationHints.filter { it.startsWith(args[1], ignoreCase = true) }
            3 -> listOf("あらし")
            else -> emptyList()
          }
      else -> emptyList()
    }
  }
}
