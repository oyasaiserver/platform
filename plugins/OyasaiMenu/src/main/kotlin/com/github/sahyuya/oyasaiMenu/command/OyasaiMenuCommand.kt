package com.github.sahyuya.oyasaiMenu.command

import com.github.sahyuya.oyasaiMenu.OyasaiMenu
import com.github.sahyuya.oyasaiMenu.util.GuiUtil.c
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter

class OyasaiMenuCommand(private val plugin: OyasaiMenu) : CommandExecutor, TabCompleter {

    override fun onCommand(sender: CommandSender, command: Command, label: String, args: Array<out String>): Boolean {
        when (args.getOrNull(0)?.lowercase()) {
            "reload" -> {
                if (!sender.hasPermission("oyasaimenu.admin")) {
                    sender.sendMessage(c("&cリロード権限がありません。")); return true
                }
                sender.sendMessage(c("&7リロード中...")); plugin.reload()
                sender.sendMessage(c("&aOyasaiMenu をリロードしました。"))
            }
            else -> {
                sender.sendMessage(c("&b&lOyasaiMenu &7v${plugin.pluginMeta.version}"))
                sender.sendMessage(c("&7/oyasaimenu reload &8— &7設定と YAML を再読み込みします。"))
            }
        }
        return true
    }

    override fun onTabComplete(sender: CommandSender, command: Command, alias: String, args: Array<out String>): List<String>? {
        if (!sender.hasPermission("oyasaimenu.admin")) return emptyList()
        if (args.size > 1) return emptyList()
        val prefix = args.firstOrNull() ?: ""
        return listOf("reload").filter { it.startsWith(prefix, ignoreCase = true) }
    }
}
