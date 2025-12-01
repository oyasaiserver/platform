package io.oyasai.oyasaiAdminTools.commands

import io.oyasai.oyasaiAdminTools.commands.syokaku.Confirm
import io.oyasai.oyasaiAdminTools.commands.syokaku.Demote
import io.oyasai.oyasaiAdminTools.commands.syokaku.GetRank
import io.oyasai.oyasaiAdminTools.commands.syokaku.IsCandidate
import io.oyasai.oyasaiAdminTools.commands.syokaku.Promote
import io.oyasai.oyasaiAdminTools.commands.syokaku.SeePlayerInfo
import io.oyasai.oyasaiAdminTools.commands.syokaku.SeeRequirements
import io.oyasai.oyasaiAdminTools.rank.RankManager
import org.bukkit.Bukkit
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter

object SyokakuCommandExecutor : CommandExecutor, TabCompleter {
  private val subCommands =
    listOf("promote", "demote", "getrank", "iscandidate", "seerequirements", "seeplayerinfo", "confirm")

  override fun onCommand(
    sender: CommandSender,
    command: Command,
    label: String,
    args: Array<out String>,
  ): Boolean {
    if (args.isEmpty()) {
      sender.sendMessage("§cサブコマンドを指定してください。")
      return false
    }
    return when (args[0].lowercase()) {
      "promote" -> Promote.onCommand(sender, command, label, args.drop(1).toTypedArray())
      "demote" -> Demote.onCommand(sender, command, label, args.drop(1).toTypedArray())
      "getrank" -> GetRank.onCommand(sender, command, label, args.drop(1).toTypedArray())
      "iscandidate" -> IsCandidate.onCommand(sender, command, label, args.drop(1).toTypedArray())
      "seerequirements" ->
        SeeRequirements.onCommand(sender, command, label, args.drop(1).toTypedArray())
      "seeplayerinfo" ->
        SeePlayerInfo.onCommand(sender, command, label, args.drop(1).toTypedArray())
      "confirm" -> Confirm.onCommand(sender, command, label, args.drop(1).toTypedArray())
      else -> {
        sender.sendMessage("§c不明なサブコマンドです。")
        false
      }
    }
  }

  override fun onTabComplete(
    sender: CommandSender,
    command: Command,
    alias: String,
    args: Array<out String>,
  ): List<String> {
    return when {
      args.size == 1 -> subCommands.filter { it.startsWith(args[0], ignoreCase = true) }
      args.size == 2 ->
        when (args[0].lowercase()) {
          "promote",
          "demote",
          "getrank",
          "iscandidate",
          "seeplayerinfo" ->
            Bukkit.getOnlinePlayers()
              .map { it.name }
              .filter { it.startsWith(args[1], ignoreCase = true) }
          "seerequirements" ->
            RankManager.ranks.map { it.name }.filter { it.startsWith(args[1], ignoreCase = true) }
          else -> emptyList()
        }
      args.size == 3 && args[0].equals("seeplayerinfo", ignoreCase = true) -> {
        mutableListOf("1", "gui")
      }
      args.size == 3 && args[0].equals("promote", ignoreCase = true) -> listOf("note", "GOOD")
      args.size >= 3 && args[0].equals("demote", ignoreCase = true) -> listOf("note")
      args.size >= 4 && args[0].equals("promote", ignoreCase = true) -> listOf("note")
      else -> emptyList()
    }
  }
}
