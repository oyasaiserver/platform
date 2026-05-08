package com.github.sahyuya.oyasaiMenu.command

import com.github.sahyuya.oyasaiMenu.OyasaiMenu
import io.papermc.paper.command.brigadier.BasicCommand
import io.papermc.paper.command.brigadier.CommandSourceStack
import org.bukkit.entity.Player

@Suppress("UnstableApiUsage")
class ShopCommand(private val plugin: OyasaiMenu) : BasicCommand {
    private val shortcuts = mapOf("bl" to "blocks","deco" to "decorations","ore" to "ores","tool" to "tools","ps" to "pointshop")
    override fun execute(source: CommandSourceStack, args: Array<out String>) {
        val player = source.sender as? Player ?: run { source.sender.sendMessage("§cゲーム内から実行してください。"); return }
        if (!player.hasPermission("oyasaimenu.use")) { player.sendMessage("§cこのコマンドを使う権限がありません。"); return }
        if (args.isEmpty()) { plugin.popupMenuEngine.open(player, "shopindex"); return }
        val input = args[0].lowercase()
        if (input == "ps" || input == "pointshop") {
            if (plugin.pointShopLoader.getAllCategories().isEmpty()) { player.sendMessage("§cポイントショップが設定されていません。"); return }
            plugin.pointShopEngine.openShop(player, plugin.pointShopLoader.getAllCategories().keys.first()); return
        }
        val resolved = shortcuts[input] ?: input
        if (player.gameMode == org.bukkit.GameMode.CREATIVE) { player.sendMessage("§cクリエイティブモードではショップを使用できません。"); return }
        val category = plugin.shopLoader.getAllCategories().values.find { it.id.equals(resolved, ignoreCase = true) || it.command?.equals(resolved, ignoreCase = true) == true }
        if (category == null) { player.sendMessage("§c'$input' が見つかりません。利用可能: §f${getSuggestions().joinToString(", ")}"); return }
        plugin.shopEngine.openShop(player, category.id)
    }
    override fun suggest(source: CommandSourceStack, args: Array<out String>): List<String> {
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