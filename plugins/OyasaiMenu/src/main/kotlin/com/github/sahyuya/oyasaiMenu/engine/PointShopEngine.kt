package com.github.sahyuya.oyasaiMenu.engine

import com.github.sahyuya.oyasaiMenu.OyasaiMenu
import com.github.sahyuya.oyasaiMenu.manager.CooldownManager
import com.github.sahyuya.oyasaiMenu.manager.EconomyManager
import com.github.sahyuya.oyasaiMenu.manager.TokenCurrencyManager
import com.github.sahyuya.oyasaiMenu.model.PlayerPointShopState
import com.github.sahyuya.oyasaiMenu.model.PointShopCategory
import com.github.sahyuya.oyasaiMenu.model.PointShopItem
import com.github.sahyuya.oyasaiMenu.util.CustomHead
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
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.ItemStack

/**
 * PointShopEngine
 *
 * 修正:
 *   - CooldownManager.isClickOnCooldown を適用
 *   - close-on-purchase: GUI を閉じてからコマンドを実行する順序に修正
 *   - CUSTOM_HEAD (customTexture) 対応: CustomHead.get() を使用
 *   - AIR スロット対応: AIR アイコンは空スロット扱い
 */
class PointShopEngine(private val plugin: OyasaiMenu) : Listener {

    private val playerStates:  MutableMap<String, PlayerPointShopState> = mutableMapOf()
    private val activePlayers: MutableSet<String>                       = mutableSetOf()

    fun openShop(player: Player, categoryId: String, page: Int = 0) {
        if (!TokenCurrencyManager.isAvailable) { player.sendMessage(c("&cポイントショップには TokenManager が必要です。")); return }
        val category = plugin.pointShopLoader.getCategory(categoryId) ?: run { player.sendMessage(c("&cカテゴリが見つかりません: $categoryId")); return }
        val clampedPage = page.coerceIn(0, category.pageCount - 1)
        val state = PlayerPointShopState(categoryId = categoryId, page = clampedPage)
        player.openInventory(buildInventory(player, category, state))
        playerStates[player.uniqueId.toString()] = state
        activePlayers.add(player.uniqueId.toString())
    }

    private fun buildInventory(player: Player, category: PointShopCategory, state: PlayerPointShopState): Inventory {
        val tokens = TokenCurrencyManager.getTokens(player)
        val inv = Bukkit.createInventory(null, 54, comp("${c(category.displayName)} &8| &f${state.page+1}&8/&f${category.pageCount}"))
        category.getPage(state.page).forEachIndexed { i, item ->
            if (!item.icon.isAir) {
                inv.setItem(i, buildItemStack(player, item, tokens))
            }
        }
        buildBottomBar(inv, player, category, state, tokens)
        return inv
    }

    private fun buildItemStack(player: Player, item: PointShopItem, tokens: Long): ItemStack {
        val stack: ItemStack = when {
            item.customTexture != null -> CustomHead.get(item.customTexture)
            else -> ItemStack(item.icon)
        }
        val meta = stack.itemMeta ?: return stack
        if (item.name.isNotEmpty()) meta.displayName(comp(item.name.replace("%player%", player.name)))
        val balance = if (EconomyManager.isAvailable) EconomyManager.getBalance(player) else 0.0
        val lore = item.lore.map { line ->
            comp(line.replace("%player%", player.name)
                     .replace("%tokens%", TokenCurrencyManager.format(tokens))
                     .replace("%price%", TokenCurrencyManager.format(item.cost))
                     .replace("%balance%", if (EconomyManager.isAvailable) EconomyManager.format(balance) else "---"))
        }.toMutableList()
        lore += comp("")
        if (tokens >= item.cost) lore += comp("&e左クリック &7→ &a購入 &7(&3${TokenCurrencyManager.format(item.cost)}&fP&7)")
        else { lore += comp("&cポイントが不足しています"); lore += comp("&7必要: &c${TokenCurrencyManager.format(item.cost)}P &7/ 所持: &f${TokenCurrencyManager.format(tokens)}P") }
        meta.lore(lore); stack.itemMeta = meta; return stack
    }

    private fun buildBottomBar(inv: Inventory, player: Player, category: PointShopCategory, state: PlayerPointShopState, tokens: Long) {
        val glass = makeItem(Material.BLACK_STAINED_GLASS_PANE, " ")
        listOf(46,47,51,52).forEach { inv.setItem(it, glass) }
        inv.setItem(45, makeItem(Material.ARROW, "&c← 戻る", listOf("&7ショップ一覧に戻ります")))
        val hasPrev = state.page > 0
        inv.setItem(48, makeItem(if (hasPrev) Material.ARROW else Material.BLACK_STAINED_GLASS_PANE, if (hasPrev) "&e← 前のページ" else "&8前のページなし"))
        inv.setItem(49, makeItem(Material.BOOK, "&fページ &e${state.page+1} &7/ &e${category.pageCount}", listOf("&7全 ${category.itemList.size} 種")))
        val hasNext = state.page < category.pageCount - 1
        inv.setItem(50, makeItem(if (hasNext) Material.ARROW else Material.BLACK_STAINED_GLASS_PANE, if (hasNext) "&e次のページ →" else "&8次のページなし"))
        val balStr = if (EconomyManager.isAvailable) EconomyManager.format(EconomyManager.getBalance(player)) else "---"
        inv.setItem(53, makeItem(Material.NETHER_STAR, "&f所持ポイント: &3${TokenCurrencyManager.format(tokens)}&fP",
            listOf("&7所持金: &6$balStr","","&eクリックで残高を更新")))
    }

    @EventHandler
    fun onInventoryClick(event: InventoryClickEvent) {
        val player = event.whoClicked as? Player ?: return
        if (!activePlayers.contains(player.uniqueId.toString())) return
        val state = playerStates[player.uniqueId.toString()] ?: return
        if (event.clickedInventory == player.inventory) { if (event.isShiftClick) event.isCancelled = true; return }
        event.isCancelled = true
        if (CooldownManager.isClickOnCooldown(player.uniqueId)) return
        val slot = event.rawSlot
        val category = plugin.pointShopLoader.getCategory(state.categoryId) ?: return
        when (slot) {
            45 -> handleBack(player)
            48 -> changePage(player, state, category, state.page - 1)
            49 -> {}
            50 -> changePage(player, state, category, state.page + 1)
            53 -> {
                val newTokens = TokenCurrencyManager.getTokens(player)
                buildBottomBar(player.openInventory.topInventory, player, category, state, newTokens)
                player.playSound(player.location, org.bukkit.Sound.UI_BUTTON_CLICK, 0.5f, 1f)
            }
            in 0..44 -> {
                if (!event.isLeftClick) return
                val item = category.getPage(state.page).getOrNull(slot) ?: return
                if (item.icon.isAir) return
                handlePurchase(player, item, state, category)
            }
        }
    }

    @EventHandler
    fun onInventoryClose(event: InventoryCloseEvent) {
        val player = event.player as? Player ?: return
        activePlayers.remove(player.uniqueId.toString())
        playerStates.remove(player.uniqueId.toString())
    }

    private fun handlePurchase(player: Player, item: PointShopItem, state: PlayerPointShopState, category: PointShopCategory) {
        val err = TokenCurrencyManager.removeTokens(player, item.cost)
        if (err != null) { player.sendMessage(c(err)); return }

        val msg = item.message.replace("%player%", player.name).replace("%price%", item.cost.toString()).replace("%tokens%", TokenCurrencyManager.format(TokenCurrencyManager.getTokens(player)))
        player.sendMessage(c(msg))
        player.playSound(player.location, org.bukkit.Sound.ENTITY_PLAYER_LEVELUP, 1f, 1.2f)

        if (item.closeOnPurchase) {
            Bukkit.getScheduler().runTaskLater(plugin, Runnable {
                player.closeInventory()
                Bukkit.getScheduler().runTaskLater(plugin, Runnable {
                    item.commands.forEach { cmd ->
                        Bukkit.dispatchCommand(Bukkit.getConsoleSender(), cmd.replace("%player%", player.name).replace("%price%", item.cost.toString()))
                    }
                }, 1L)
            }, 1L)
        } else {
            item.commands.forEach { cmd ->
                Bukkit.dispatchCommand(Bukkit.getConsoleSender(), cmd.replace("%player%", player.name).replace("%price%", item.cost.toString()))
            }
            val newTokens = TokenCurrencyManager.getTokens(player)
            val inv = player.openInventory.topInventory
            category.getPage(state.page).forEachIndexed { i, it ->
                if (!it.icon.isAir) inv.setItem(i, buildItemStack(player, it, newTokens))
            }
            buildBottomBar(inv, player, category, state, newTokens)
        }
    }

    private fun changePage(player: Player, state: PlayerPointShopState, category: PointShopCategory, newPage: Int) {
        if (newPage !in 0 until category.pageCount) return
        val newState = state.copy(page = newPage)
        player.openInventory(buildInventory(player, category, newState))
        playerStates[player.uniqueId.toString()] = newState; activePlayers.add(player.uniqueId.toString())
    }

    private fun handleBack(player: Player) {
        plugin.popupMenuEngine.open(player, "shopindex")
    }
}
