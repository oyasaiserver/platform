package io.oyasaiserver.milepoint

import io.oyasaiserver.anybuilder.common.command.BuilderCommandTabSupport
import io.oyasaiserver.hasOyasaiAdminPermission
import io.oyasaiserver.toolbox.Tools.color
import org.bukkit.Bukkit
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.Player

// milepoint add <amount> [player]
// milepoint check <player>

object MileagePointCommand : CommandExecutor, TabCompleter {
    private const val COMMAND_NAME = "milepoint"
    private const val SUB_ADD = "add"
    private const val SUB_CHECK = "check"

    override fun onCommand(sender: CommandSender, command: Command, label: String, args: Array<out String>): Boolean {
        if (command.name != COMMAND_NAME) return false

        if (args.isEmpty()) {
            if (sender is Player) {
                sender.sendMessage(color("&9現在のマイルポイント&7: &b${MileagePoint.getUserPoint(sender.uniqueId)}p"))
            }
            return true
        }

        if (!sender.hasOyasaiAdminPermission()) {
            sender.sendMessage(color("&c権限がありません。"))
            return true
        }

        return when (args[0]) {
            SUB_ADD -> handleAdd(sender, args)
            SUB_CHECK -> handleCheck(sender, args)
            else -> {
                sender.sendMessage(color("&c/milepoint add <amount> [player] / check <player>"))
                true
            }
        }
    }

    override fun onTabComplete(sender: CommandSender, command: Command, label: String, args: Array<out String>): MutableList<String>? {
        if (command.name != COMMAND_NAME || !sender.hasOyasaiAdminPermission()) return null

        val completions = when (args.size) {
            1 -> BuilderCommandTabSupport.filterStartsWith(args[0], listOf(SUB_ADD, SUB_CHECK))
            2 -> when (args[0]) {
                SUB_ADD -> BuilderCommandTabSupport.filterStartsWith(args[1], listOf("-10", "10", "25", "50", "100"))
                SUB_CHECK -> BuilderCommandTabSupport.filterStartsWith(args[1], Bukkit.getOnlinePlayers().map { it.name })
                else -> mutableListOf()
            }
            3 -> if (args[0] == SUB_ADD) {
                BuilderCommandTabSupport.filterStartsWith(args[2], Bukkit.getOnlinePlayers().map { it.name })
            } else {
                mutableListOf()
            }
            else -> mutableListOf()
        }
        completions.sort()
        return completions
    }

    private fun handleAdd(sender: CommandSender, args: Array<out String>): Boolean {
        when (args.size) {
            2 -> {
                val player = sender as? Player ?: run {
                    sender.sendMessage(color("&c/milepoint add <amount> <player>"))
                    return true
                }
                val amount = parseAmount(sender, args[1]) ?: return true
                sender.sendMessage("${player.name}のマイルポイントを${MileagePoint.changePoint(player.uniqueId, amount)}pに変更しました")
                return true
            }
            3 -> {
                val amount = parseAmount(sender, args[1]) ?: return true
                val targetPlayer = resolveOnlinePlayer(sender, args[2]) ?: return true
                sender.sendMessage("${args[2]}のマイルポイントを${MileagePoint.changePoint(targetPlayer.uniqueId, amount)}pに変更しました")
                return true
            }
            else -> sender.sendMessage(color("&c/milepoint add <amount> [player]"))
        }
        return true
    }

    private fun handleCheck(sender: CommandSender, args: Array<out String>): Boolean {
        if (args.size == 2) {
            val targetPlayer = resolveOnlinePlayer(sender, args[1]) ?: return true
            sender.sendMessage("${args[1]}のマイルポイントは${MileagePoint.getUserPoint(targetPlayer.uniqueId)}p")
            return true
        }
        sender.sendMessage(color("&c/milepoint check <player>"))
        return true
    }

    private fun parseAmount(sender: CommandSender, raw: String): Int? {
        return raw.toIntOrNull() ?: run {
            sender.sendMessage(color("&c数値を指定してください。"))
            null
        }
    }

    private fun resolveOnlinePlayer(sender: CommandSender, name: String): Player? {
        val targetPlayer = Bukkit.getPlayer(name)
        return when {
            targetPlayer == null -> {
                sender.sendMessage("プレイヤーが見つかりません")
                null
            }
            targetPlayer.isOnline -> targetPlayer
            else -> {
                sender.sendMessage("プレイヤーがオンラインではありません")
                null
            }
        }
    }
}
