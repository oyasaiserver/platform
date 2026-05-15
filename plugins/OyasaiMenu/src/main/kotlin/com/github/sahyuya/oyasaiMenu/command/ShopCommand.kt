package com.github.sahyuya.oyasaiMenu.command

import com.github.sahyuya.oyasaiMenu.OyasaiMenu
import com.github.sahyuya.oyasaiMenu.util.GuiUtil.c
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.Player

class ShopCommand(private val plugin: OyasaiMenu) : CommandExecutor, TabCompleter {
    private val shortcuts = mapOf("bl" to "blocks","deco" to "decorations","ore" to "ores","tool" to "tools","ps" to "pointshop")

    override fun onCommand(sender: CommandSender, command: Command, label: String, args: Array<out String>): Boolean {
        val player = sender as? Player ?: run { sender.sendMessage("§cゲーム内から実行してください。"); return false }
        if (!player.hasPermission("oyasaimenu.use")) { player.sendMessage(c("&cこのコマンドを使う権限がありません。")); return false }
        if (args.isEmpty()) { plugin.popupMenuEngine.open(player, "shopindex"); return true }
        val input = args[0].lowercase()
        if (input == "ps" || input == "pointshop") {
            if (plugin.pointShopLoader.getAllCategories().isEmpty()) { player.sendMessage(c("&cポイントショップが設定されていません。")); return false }
            plugin.pointShopEngine.openShop(player, plugin.pointShopLoader.getAllCategories().keys.first()); return true
        }
        val resolved = shortcuts[input] ?: input
        if (player.gameMode == org.bukkit.GameMode.CREATIVE) { player.sendMessage(c("&cクリエイティブモードではショップを使用できません。")); return false }
        val category = plugin.shopLoader.getAllCategories().values.find { it.id.equals(resolved, ignoreCase = true) || it.command?.equals(resolved, ignoreCase = true) == true }
        if (category == null) { player.sendMessage(c("&c'$input' が見つかりません。利用可能: &f${getSuggestions().joinToString(", ")}")); return false }
        plugin.shopEngine.openShop(player, category.id)
        return true
    }

    override fun onTabComplete(sender: CommandSender, command: Command, alias: String, args: Array<out String>): List<String>? {
        if (!sender.hasPermission("oyasaimenu.use")) return emptyList()
        if (args.size > 1) return emptyList()
        val prefix = args.firstOrNull() ?: ""
        return getSuggestions().filter { it.startsWith(prefix, ignoreCase = true) }
    }

    private fun getSuggestions(): List<String> {
        val names = mutableListOf<String>()
        names += shortcuts.keys
        names += plugin.shopLoader.getAllCategories().values.flatMap { listOfNotNull(it.id, it.command) }
        names += "pointshop"
        return names.distinct().sorted()
    }
}