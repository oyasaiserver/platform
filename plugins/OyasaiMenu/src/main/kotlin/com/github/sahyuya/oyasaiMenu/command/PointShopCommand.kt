package com.github.sahyuya.oyasaiMenu.command

import com.github.sahyuya.oyasaiMenu.OyasaiMenu
import io.papermc.paper.command.brigadier.BasicCommand
import io.papermc.paper.command.brigadier.CommandSourceStack
import org.bukkit.entity.Player

@Suppress("UnstableApiUsage")
class PointShopCommand(private val plugin: OyasaiMenu) : BasicCommand {
    override fun execute(source: CommandSourceStack, args: Array<out String>) {
        val player = source.sender as? Player ?: run { source.sender.sendMessage("§cゲーム内から実行してください。"); return }
        if (!player.hasPermission("oyasaimenu.use")) { player.sendMessage("§cこのコマンドを使う権限がありません。"); return }
        val cats = plugin.pointShopLoader.getAllCategories()
        if (cats.isEmpty()) { player.sendMessage("§cポイントショップが設定されていません。"); return }
        val categoryId = if (args.isNotEmpty()) args[0].lowercase() else cats.keys.first()
        plugin.pointShopEngine.openShop(player, categoryId)
    }
    override fun suggest(source: CommandSourceStack, args: Array<out String>): List<String> {
        if (args.size > 1) return emptyList()
        val prefix = args.firstOrNull() ?: ""
        return plugin.pointShopLoader.getAllCategories().keys.filter { it.startsWith(prefix, ignoreCase = true) }
    }
}