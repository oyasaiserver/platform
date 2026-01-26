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

        // 引数なし: 使用方法表示
        if (args.isEmpty()) {
            playerCommands.showUsage(sender)
            return true
        }

        val subCommand = args[0].lowercase()

        // OP専用コマンド
        if (sender.isOp) {
            when (subCommand) {
                "item" -> {
                    opCommands.handleItemCommand(sender, args)
                    return true
                }
                "exp" -> {
                    opCommands.handleExperimentalSummon(sender, args)
                    return true
                }
                "shop" -> {
                    opCommands.handleShopCommand(sender, args)
                    return true
                }
                "shopremove" -> {
                    opCommands.handleShopRemove(sender)
                    return true
                }
                "shopremoveall" -> {
                    opCommands.handleShopRemoveAll(sender)
                    return true
                }
                "reload" -> {
                    opCommands.handleReload(sender)
                    return true
                }
                "version" -> {
                    opCommands.handleVersion(sender)
                    return true
                }
            }
        } else {
            // 非OPがOP専用コマンドを実行しようとした場合
            val opOnlyCommands = setOf("item", "exp", "shop", "shopremove", "shopremoveall", "reload")
            if (subCommand in opOnlyCommands) {
                sender.sendMessage(Component.text("OPのみ使用できます。", RED))
                return true
            }
        }

        // 一般プレイヤーコマンド
        when (subCommand) {
            "list" -> {
                playerCommands.handleListCommand(sender)
                return true
            }
            "storeall" -> {
                playerCommands.handleStoreAll(sender)
                return true
            }
            "version" -> {
                opCommands.handleVersion(sender)
                return true
            }
            else -> {
                // デフォルト: MOB名として扱う（購入）
                playerCommands.handleNormalSummon(sender, subCommand, args)
                return true
            }
        }
    }
}

