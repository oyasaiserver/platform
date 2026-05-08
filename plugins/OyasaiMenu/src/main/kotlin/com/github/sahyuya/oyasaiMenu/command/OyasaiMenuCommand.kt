package com.github.sahyuya.oyasaiMenu.command

import com.github.sahyuya.oyasaiMenu.OyasaiMenu
import com.github.sahyuya.oyasaiMenu.util.GuiUtil.c
import io.papermc.paper.command.brigadier.BasicCommand
import io.papermc.paper.command.brigadier.CommandSourceStack

@Suppress("UnstableApiUsage")
class OyasaiMenuCommand(private val plugin: OyasaiMenu) : BasicCommand {
    override fun execute(source: CommandSourceStack, args: Array<out String>) {
        val sender = source.sender
        when (args.getOrNull(0)?.lowercase()) {
            "reload" -> {
                if (!sender.hasPermission("oyasaimenu.admin")) { sender.sendMessage(c("&cリロード権限 (oyasaimenu.admin) がありません。")); return }
                sender.sendMessage(c("&7リロード中...")); plugin.reload()
                sender.sendMessage(c("&aOyasaiMenu をリロードしました。"))
            }
            else -> {
                sender.sendMessage(c("&b&lOyasaiMenu &7v${plugin.description.version}"))
                sender.sendMessage(c("&7/oyasaimenu reload &8— &7設定と YAML を再読み込みします。"))
            }
        }
    }
    override fun suggest(source: CommandSourceStack, args: Array<out String>): List<String> {
        if (args.size > 1) return emptyList()
        val prefix = args.firstOrNull() ?: ""
        return listOf("reload").filter { it.startsWith(prefix, ignoreCase = true) }
    }
}