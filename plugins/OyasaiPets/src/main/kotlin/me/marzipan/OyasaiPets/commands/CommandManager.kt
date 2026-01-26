package me.marzipan.OyasaiPets.commands

import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor.*
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player

/**
 * コマンドマネージャー
 * コマンドのルーティングとディスパッチを管理
 */
class CommandManager(
    private val playerCommands: PlayerCommands,
    private val opCommands: OpCommands
) : CommandExecutor {

    override fun onCommand(
        sender: CommandSender,
        command: Command,
        label: String,
        args: Array<out String>
    ): Boolean {
        if (sender !is Player) {
            sender.sendMessage(Component.text("プレイヤーのみ可能です。", RED))
            return true
        }

        return when (command.name.lowercase()) {
            "bigwolf" -> handlePlayerCommand(sender, args)
            "bigwolfop" -> handleOpCommand(sender, args)
            else -> true
        }
    }

    private fun handlePlayerCommand(player: Player, args: Array<out String>): Boolean {
        playerCommands.handleCommand(player, args)
        return true
    }

    private fun handleOpCommand(player: Player, args: Array<out String>): Boolean {
        if (!player.isOp) {
            player.sendMessage(Component.text("このコマンドはOP専用です。", RED))
            return true
        }

        opCommands.handleCommand(player, args)
        return true
    }
}
