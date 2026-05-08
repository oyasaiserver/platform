package com.github.sahyuya.oyasaiMenu.command

import com.github.sahyuya.oyasaiMenu.OyasaiMenu
import io.papermc.paper.command.brigadier.BasicCommand
import io.papermc.paper.command.brigadier.CommandSourceStack
import org.bukkit.entity.Player

/** /adminmenu (/admenu) — 管理者専用メニューを開く */
@Suppress("UnstableApiUsage")
class AdminMenuCommand(private val plugin: OyasaiMenu) : BasicCommand {
    override fun execute(source: CommandSourceStack, args: Array<out String>) {
        val player = source.sender as? Player
            ?: run { source.sender.sendMessage("§cゲーム内から実行してください。"); return }
        plugin.adminEngine.openAdminMenu(player)
    }

    override fun suggest(source: CommandSourceStack, args: Array<out String>): List<String> = emptyList()
}