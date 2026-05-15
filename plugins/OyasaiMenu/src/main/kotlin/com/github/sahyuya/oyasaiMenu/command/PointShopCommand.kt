package com.github.sahyuya.oyasaiMenu.command

import com.github.sahyuya.oyasaiMenu.OyasaiMenu
import com.github.sahyuya.oyasaiMenu.util.GuiUtil.c
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.Player

class PointShopCommand(private val plugin: OyasaiMenu) : CommandExecutor, TabCompleter {

    override fun onCommand(sender: CommandSender, command: Command, label: String, args: Array<out String>): Boolean {
        val player = sender as? Player ?: run { sender.sendMessage("§cゲーム内から実行してください。"); return false }
        if (!player.hasPermission("oyasaimenu.use")) { player.sendMessage(c("&cこのコマンドを使う権限がありません。")); return false }
        val cats = plugin.pointShopLoader.getAllCategories()
        if (cats.isEmpty()) { player.sendMessage(c("&cポイントショップが設定されていません。")); return false }
        val categoryId = if (args.isNotEmpty()) args[0].lowercase() else cats.keys.first()
        plugin.pointShopEngine.openShop(player, categoryId)
        return true
    }

    override fun onTabComplete(sender: CommandSender, command: Command, alias: String, args: Array<out String>): List<String>? {
        if (!sender.hasPermission("oyasaimenu.use")) return emptyList()
        if (args.size > 1) return emptyList()
        val prefix = args.firstOrNull() ?: ""
        return plugin.pointShopLoader.getAllCategories().keys.filter { it.startsWith(prefix, ignoreCase = true) }
    }
}