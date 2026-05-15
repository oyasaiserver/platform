package com.github.sahyuya.oyasaiMenu.command

import com.github.sahyuya.oyasaiMenu.OyasaiMenu
import com.github.sahyuya.oyasaiMenu.manager.CooldownManager
import com.github.sahyuya.oyasaiMenu.manager.EconomyManager
import com.github.sahyuya.oyasaiMenu.util.GuiUtil.c
import org.bukkit.command.Command
import org.bukkit.command.CommandExecutor
import org.bukkit.command.CommandSender
import org.bukkit.command.TabCompleter
import org.bukkit.entity.Player

class SellCommand(private val plugin: OyasaiMenu) : CommandExecutor, TabCompleter {

    override fun onCommand(sender: CommandSender, command: Command, label: String, args: Array<out String>): Boolean {
        val player = sender as? Player
            ?: run { sender.sendMessage("§cゲーム内から実行してください。"); return false }
        if (!player.hasPermission("oyasaimenu.use")) {
            player.sendMessage(c("&cこのコマンドを使う権限がありません。")); return false
        }
        if (player.gameMode == org.bukkit.GameMode.CREATIVE) {
            player.sendMessage(c("&cクリエイティブモードでは売却できません。")); return false
        }
        when (args.getOrNull(0)?.lowercase()) {
            "hand" -> sellHand(player)
            "all"  -> sellAll(player)
            else   -> plugin.sellEngine.openSellMenu(player)
        }
        return true
    }

    override fun onTabComplete(sender: CommandSender, command: Command, alias: String, args: Array<out String>): List<String>? {
        if (!sender.hasPermission("oyasaimenu.use")) return emptyList()
        if (args.size > 1) return emptyList()
        val prefix = args.firstOrNull() ?: ""
        return listOf("hand", "all").filter { it.startsWith(prefix, ignoreCase = true) }
    }

    private fun sellHand(player: Player) {
        if (CooldownManager.isCommandOnCooldown(player.uniqueId)) {
            player.sendMessage(c("&cもう少し待ってから実行してください。")); return
        }
        val item = player.inventory.itemInMainHand
        if (item.type.isAir) { player.sendMessage(c("&c手に何も持っていません。")); return }

        val price = plugin.sellEngine.getSellPrice(item)
        if (price == null || price <= 0) {
            val hasCustom = plugin.sellWhitelistManager.hasCustomContent(item)
            val hint = if (hasCustom) " &7(カスタムアイテムはホワイトリスト登録が必要です)"
                       else " &7(ショップに売却登録されていません)"
            player.sendMessage(c("&c${item.type.name.lowercase()} は売却できません。$hint"))
            return
        }

        val total = price * item.amount
        EconomyManager.deposit(player, total)
        player.inventory.setItemInMainHand(null)
        player.sendMessage(c("&b売却: &f${item.type.name.lowercase()} ×${item.amount}  +${EconomyManager.format(total)}"))
        player.playSound(player.location, org.bukkit.Sound.ENTITY_EXPERIENCE_ORB_PICKUP, 1f, 0.8f)
    }

    private fun sellAll(player: Player) {
        if (CooldownManager.isCommandOnCooldown(player.uniqueId)) {
            player.sendMessage(c("&c時間を置いて実行してください。")); return
        }

        var earned  = 0.0
        var count   = 0
        var skipped = 0

        player.inventory.contents.forEachIndexed { i, stack ->
            if (stack == null || stack.type.isAir) return@forEachIndexed
            val price = plugin.sellEngine.getSellPrice(stack)
            if (price != null && price > 0) {
                earned += price * stack.amount; count += stack.amount
                player.inventory.setItem(i, null)
            } else {
                skipped++
            }
        }

        if (count == 0) {
            player.sendMessage(c("&c売却できるアイテムがありませんでした." +
                if (skipped > 0) " &7(売却不可 ${skipped}種あり)" else ""))
            return
        }

        EconomyManager.deposit(player, earned)
        val suffix = if (skipped > 0) " &7(スキップ ${skipped}種)" else ""
        player.sendMessage(c("&a全売却: &f${count}個  +${EconomyManager.format(earned)} &7残高: &f${EconomyManager.format(EconomyManager.getBalance(player))}$suffix"))
        player.playSound(player.location, org.bukkit.Sound.ENTITY_PLAYER_LEVELUP, 1f, 1f)
    }
}