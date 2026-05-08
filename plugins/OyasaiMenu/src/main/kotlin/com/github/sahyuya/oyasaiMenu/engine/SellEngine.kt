package com.github.sahyuya.oyasaiMenu.engine

import com.github.sahyuya.oyasaiMenu.OyasaiMenu
import com.github.sahyuya.oyasaiMenu.manager.EconomyManager
import com.github.sahyuya.oyasaiMenu.util.GuiUtil.c
import com.github.sahyuya.oyasaiMenu.util.GuiUtil.comp
import com.github.sahyuya.oyasaiMenu.util.GuiUtil.makeItem
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.event.inventory.InventoryCloseEvent
import org.bukkit.event.inventory.InventoryDragEvent
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.ItemStack

/**
 * SellEngine
 *
 * ■ 売却ロジック
 *   SellWhitelistManager.hasCustomContent() でカスタム判定:
 *     false → ショップ売値 (バニラ名・マテリアル一致)
 *     true  → ホワイトリスト厳密照合 (displayName / BookMeta / CustomModelData 等)
 */
class SellEngine(private val plugin: OyasaiMenu) : Listener {

    private val openPlayers: MutableSet<String> = mutableSetOf()

    fun openSellMenu(player: Player) {
        if (player.gameMode == org.bukkit.GameMode.CREATIVE) {
            player.sendMessage(c("&cクリエイティブモードでは売却できません。")); return
        }
        if (!EconomyManager.isAvailable) {
            player.sendMessage(c("&cショップには Vault と経済プラグインが必要です。")); return
        }
        player.openInventory(buildSellInventory())
        openPlayers.add(player.uniqueId.toString())
        player.sendMessage(c("&a売却したいアイテムを入れて &e「売却実行」 &aを押してください。"))
    }

    // ============================
    // 売却価格の統一取得
    // ============================

    fun getSellPrice(item: ItemStack): Double? {
        if (item.type.isAir) return null
        val isCustom = plugin.sellWhitelistManager.hasCustomContent(item)
        return if (!isCustom) {
            plugin.shopLoader.getSellPrice(item.type)
        } else {
            plugin.sellWhitelistManager.getPrice(item)
        }
    }

    // ============================
    // インベントリ構築
    // ============================

    private fun buildSellInventory(): Inventory {
        val inv = Bukkit.createInventory(null, 54, comp("&6アイテム一括売却"))
        buildControlBar(inv, null)
        return inv
    }

    private fun buildControlBar(inv: Inventory, result: String?) {
        val glass = makeItem(Material.BLACK_STAINED_GLASS_PANE, " ")
        listOf(46, 48, 50, 51, 52, 53).forEach { inv.setItem(it, glass) }
        inv.setItem(45, makeItem(Material.ARROW, "&c閉じる",
            listOf("&7アイテムを返却して閉じます")))
        if (result == null) {
            inv.setItem(47, makeItem(Material.BOOK, "&7売却結果",
                listOf("&7売却実行後にここに金額が表示されます")))
        } else {
            inv.setItem(47, makeItem(Material.EMERALD, "&a売却完了!", listOf(result)))
        }
        inv.setItem(49, makeItem(Material.LIME_CONCRETE, "&a▶ 売却実行",
            listOf(
                "&7バニラ名: ショップ登録価格で売却",
                "&7カスタム名・特殊アイテム: ホワイトリスト登録のみ売却可",
                "&7売却不可アイテムはインベントリへ返却"
            )))
    }

    // ============================
    // イベントハンドラ
    // ============================

    @EventHandler
    fun onInventoryClick(event: InventoryClickEvent) {
        val player = event.whoClicked as? Player ?: return
        if (!openPlayers.contains(player.uniqueId.toString())) return
        val slot = event.rawSlot

        if (event.clickedInventory == player.inventory) {
            if (event.isShiftClick) {
                event.isCancelled = true
                val item = event.currentItem?.clone() ?: return
                val inv = player.openInventory.topInventory
                val emptySlot = (0..44).firstOrNull { inv.getItem(it) == null }
                if (emptySlot != null) {
                    inv.setItem(emptySlot, item)
                    if (event.currentItem!!.amount == item.amount) player.inventory.setItem(event.slot, null)
                    Bukkit.getScheduler().runTaskLater(plugin, Runnable { buildControlBar(inv, null) }, 1L)
                } else {
                    player.sendMessage(c("&c投入エリアがいっぱいです。"))
                }
            }
            return
        }

        if (slot in 45..53) {
            event.isCancelled = true
            when (slot) {
                45 -> player.closeInventory()
                49 -> handleSell(player)
            }
            return
        }
    }

    @EventHandler
    fun onInventoryDrag(event: InventoryDragEvent) {
        val player = event.whoClicked as? Player ?: return
        if (!openPlayers.contains(player.uniqueId.toString())) return
        if (event.rawSlots.any { it in 45..53 }) event.isCancelled = true
    }

    @EventHandler
    fun onInventoryClose(event: InventoryCloseEvent) {
        val player = event.player as? Player ?: return
        if (!openPlayers.remove(player.uniqueId.toString())) return
        returnItems(player, event.inventory)
    }

    // ============================
    // 売却処理
    // ============================

    private fun handleSell(player: Player) {
        val inv   = player.openInventory.topInventory
        val items = getInputItems(inv)
        if (items.isEmpty()) { player.sendMessage(c("&c売却できるアイテムがありません。")); return }

        var earned     = 0.0
        var count      = 0
        var unsellable = 0

        items.forEach { (slot, stack) ->
            val price = getSellPrice(stack)
            if (price != null && price > 0) {
                earned += price * stack.amount; count += stack.amount; inv.setItem(slot, null)
            } else {
                unsellable++
            }
        }

        if (count == 0) {
            player.sendMessage(c("&c売却可能なアイテムがありませんでした。" +
                if (unsellable > 0) " &7(未登録/ホワイトリスト対象外: ${unsellable}種)" else ""))
            return
        }

        EconomyManager.deposit(player, earned)
        val suffix = if (unsellable > 0) " &7(不可 ${unsellable}種はGUIに残ります)" else ""
        buildControlBar(inv, "&f${count}個 → &a+${EconomyManager.format(earned)}$suffix")
        player.sendMessage(c("&a一括売却完了! &f${count}個 &7→ &f+${EconomyManager.format(earned)}\n&7残高: &f${EconomyManager.format(EconomyManager.getBalance(player))}"))
        if (unsellable > 0) player.sendMessage(c("&7売却不可アイテム (${unsellable}種) はGUIに残っています。閉じると返却されます。"))
        player.playSound(player.location, org.bukkit.Sound.ENTITY_PLAYER_LEVELUP, 1f, 1f)
    }

    // ============================
    // ユーティリティ
    // ============================

    private fun getInputItems(inv: Inventory): Map<Int, ItemStack> =
        (0..44).mapNotNull { i -> inv.getItem(i)?.takeIf { !it.type.isAir }?.let { i to it } }.toMap()

    private fun returnItems(player: Player, inv: Inventory) {
        for (i in 0..44) {
            val item = inv.getItem(i)?.takeIf { !it.type.isAir } ?: continue
            player.inventory.addItem(item).values.forEach { player.world.dropItemNaturally(player.location, it) }
        }
    }
}