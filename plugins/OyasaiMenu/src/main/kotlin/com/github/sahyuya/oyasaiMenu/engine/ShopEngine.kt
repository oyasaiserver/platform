package com.github.sahyuya.oyasaiMenu.engine

import com.github.sahyuya.oyasaiMenu.OyasaiMenu
import com.github.sahyuya.oyasaiMenu.manager.CooldownManager
import com.github.sahyuya.oyasaiMenu.manager.EconomyManager
import com.github.sahyuya.oyasaiMenu.model.PlayerShopState
import com.github.sahyuya.oyasaiMenu.model.ShopCategory
import com.github.sahyuya.oyasaiMenu.model.ShopItem
import com.github.sahyuya.oyasaiMenu.model.ShopQuantity
import com.github.sahyuya.oyasaiMenu.util.GuiUtil.c
import com.github.sahyuya.oyasaiMenu.util.GuiUtil.comp
import com.github.sahyuya.oyasaiMenu.util.GuiUtil.makeItem
import net.kyori.adventure.text.Component
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.event.inventory.InventoryCloseEvent
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.ItemFlag
import org.bukkit.inventory.ItemStack

/**
 * ShopEngine
 *
 * 変更点:
 *   - buildShopItemStack(): エンチャント付きアイテムでも isInverted を反映した lore を表示
 *     (旧: 反転モードでも常に「左クリック→購入」と表示していた)
 */
class ShopEngine(private val plugin: OyasaiMenu) : Listener {

    private val playerStates:      MutableMap<String, PlayerShopState> = mutableMapOf()
    private val activeShopPlayers: MutableSet<String>                  = mutableSetOf()

    fun openShop(player: Player, categoryId: String, page: Int = 0) {
        if (player.gameMode == org.bukkit.GameMode.CREATIVE) {
            player.sendMessage(c("&cクリエイティブモードではショップを使用できません。"))
            return
        }
        if (!EconomyManager.isAvailable) {
            player.sendMessage(c("&cショップには Vault と経済プラグインが必要です。"))
            return
        }
        val category = plugin.shopLoader.getCategory(categoryId) ?: run {
            player.sendMessage(c("&cカテゴリが見つかりません: $categoryId"))
            return
        }
        val clampedPage = page.coerceIn(0, category.pageCount - 1)
        val state = playerStates.getOrPut(player.uniqueId.toString()) { PlayerShopState(categoryId, clampedPage) }.copy(categoryId = categoryId, page = clampedPage)
        playerStates[player.uniqueId.toString()] = state
        player.openInventory(buildShopInventory(player, category, state))
        activeShopPlayers.add(player.uniqueId.toString())
    }

    private fun buildShopInventory(player: Player, category: ShopCategory, state: PlayerShopState): Inventory {
        val inv = Bukkit.createInventory(null, 54, comp("${c(category.displayName)} &8| &f${state.page + 1}&8/&f${category.pageCount}"))
        category.getPage(state.page).forEachIndexed { i, item ->
            if (item.material != null) inv.setItem(i, buildShopItemStack(item, if (item.enchantments.isNotEmpty()) 1 else state.quantity.amount, state.isInverted))
        }
        buildBottomBar(inv, player, category, state)
        return inv
    }

    private fun buildShopItemStack(item: ShopItem, quantity: Int, isInverted: Boolean = false): ItemStack {
        val stack = ItemStack(item.material!!, quantity.coerceIn(1, 64))
        val meta = stack.itemMeta ?: return stack
        if (item.customName?.isNotEmpty() == true) meta.displayName(comp(item.customName))
        val lore = mutableListOf<Component>()
        item.customLore.forEach { lore += comp(it) }
        if (item.customLore.isNotEmpty()) lore += comp("")
        if (item.canBuy) lore += comp("&a購入: &f${EconomyManager.format(item.buyPrice)} &7× $quantity = &f${EconomyManager.format(item.buyPrice * quantity)}")
        else lore += comp("&7購入: &c不可")
        if (item.canSell) lore += comp("&b売却: &f${EconomyManager.format(item.sellPrice)} &7× $quantity = &f${EconomyManager.format(item.sellPrice * quantity)}")
        else lore += comp("&7売却: &c不可")
        lore += comp("")
        if (item.enchantments.isEmpty()) {
            // 通常アイテム: 反転モードを反映
            if (!isInverted) {
                lore += comp("&e左クリック &7→ &a購入  &e右クリック &7→ &b売却")
                lore += comp("&eShift+左 &7→ &a64個購入  &eShift+右 &7→ &b全売却")
            } else {
                lore += comp("&e左クリック &7→ &b売却  &e右クリック &7→ &a購入")
                lore += comp("&eShift+左 &7→ &b全売却  &eShift+右 &7→ &a64個購入")
            }
        } else {
            // エンチャント付きアイテム (ツール等): 反転モードでも正しい操作説明を表示
            if (!isInverted) {
                lore += comp("&e左クリック &7→ &a購入 &71個固定")
            } else {
                lore += comp("&e左クリック &7→ &b売却 &71個固定")
            }
        }
        meta.lore(lore)
        item.enchantments.forEach { (ench, lvl) -> meta.addEnchant(ench, lvl, true) }
        stack.itemMeta = meta
        return stack
    }

    /**
     * ショップ下段バーを描画する。
     *
     * スロット配置:
     *   45 : ← 戻る
     *   46,47 : ガラス
     *   48 : ← 前ページ
     *   49 : ページ情報
     *   50 : 次ページ →
     *   51 : ガラス
     *   52 : 数量セレクタ
     *   53 : 所持金表示 + 左右反転ボタン
     */
    private fun buildBottomBar(inv: Inventory, player: Player, category: ShopCategory, state: PlayerShopState) {
        val glass = makeItem(Material.BLACK_STAINED_GLASS_PANE, " ")
        listOf(46, 47, 51).forEach { inv.setItem(it, glass) }

        inv.setItem(45, makeItem(Material.ARROW, "&c← 戻る", listOf("&7ショップ一覧に戻ります")))

        val hasPrev = state.page > 0
        inv.setItem(48, makeItem(if (hasPrev) Material.ARROW else Material.BLACK_STAINED_GLASS_PANE, if (hasPrev) "&e← 前のページ" else "&8前のページなし"))
        inv.setItem(49, makeItem(Material.BOOK, "&fページ &e${state.page+1} &7/ &e${category.pageCount}", listOf("&7全 ${category.items.size} 種 / このページ ${category.getPage(state.page).size} 種")))
        val hasNext = state.page < category.pageCount - 1
        inv.setItem(50, makeItem(if (hasNext) Material.ARROW else Material.BLACK_STAINED_GLASS_PANE, if (hasNext) "&e次のページ →" else "&8次のページなし"))

        val qty = state.quantity
        val quantitySelector = makeItem(Material.BUNDLE, "${qty.label} &7でやりとり",
            listOf("&7クリックで切替:", "${mark(qty,ShopQuantity.ONE)} 1個","${mark(qty,ShopQuantity.FOUR)} 4個","${mark(qty,ShopQuantity.SIXTEEN)} 16個","${mark(qty,ShopQuantity.SIXTY_FOUR)} 64個"))
        quantitySelector.itemMeta?.let { meta ->
            meta.addItemFlags(ItemFlag.HIDE_ADDITIONAL_TOOLTIP)
            quantitySelector.itemMeta = meta
        }
        inv.setItem(52, quantitySelector)

        val balance = if (EconomyManager.isAvailable) EconomyManager.getBalance(player) else 0.0
        val (invertMat, invertTitle, invertDesc) = if (state.isInverted) {
            Triple(Material.REDSTONE, "&c反転中", "&c左=売却 右=購入")
        } else {
            Triple(Material.GOLD_INGOT, "&a通常", "&a左=購入 右=売却")
        }
        inv.setItem(53, makeItem(invertMat, "&f操作モード: $invertTitle",
            listOf(
                "&7所持金: &6${if (EconomyManager.isAvailable) EconomyManager.format(balance) else "---"}",
                "",
                "&7現在: $invertDesc",
                "&7※統合版は左クリックとして実行されます",
                "",
                "&eクリックで左右クリックを反転"
            )))
    }

    private fun mark(c: ShopQuantity, t: ShopQuantity) = if (c == t) "&a▶" else "&7 "

    @EventHandler
    fun onInventoryClick(event: InventoryClickEvent) {
        val player = event.whoClicked as? Player ?: return
        if (!activeShopPlayers.contains(player.uniqueId.toString())) return
        val state = playerStates[player.uniqueId.toString()] ?: return
        if (event.clickedInventory == player.inventory) {
            if (event.isShiftClick) event.isCancelled = true
            return
        }
        event.isCancelled = true
        if (CooldownManager.isClickOnCooldown(player.uniqueId)) return
        val slot = event.rawSlot
        val category = plugin.shopLoader.getCategory(state.categoryId) ?: return
        when (slot) {
            45 -> handleBack(player)
            48 -> changePage(player, state, category, state.page - 1)
            49 -> {}
            50 -> changePage(player, state, category, state.page + 1)
            52 -> cycleQuantity(player, state, category)
            53 -> toggleInversion(player, state, category)
            in 0..44 -> {
                val item = category.getPage(state.page).getOrNull(slot) ?: return
                if (item.material == null) return
                val inv = state.isInverted
                when {
                    event.isShiftClick && event.isLeftClick  -> if (inv) handleSellAll(player, item)       else handleBuy(player, item, 64)
                    event.isShiftClick && event.isRightClick -> if (inv) handleBuy(player, item, 64)        else handleSellAll(player, item)
                    event.isLeftClick                        -> if (inv) handleSell(player, item, state.quantity.amount) else handleBuy(player, item, state.quantity.amount)
                    event.isRightClick                       -> if (inv) handleBuy(player, item, state.quantity.amount)  else handleSell(player, item, state.quantity.amount)
                }
                refreshInventory(player, category, state)
            }
        }
    }

    @EventHandler
    fun onInventoryClose(event: InventoryCloseEvent) {
        val player = event.player as? Player ?: return
        if (!activeShopPlayers.remove(player.uniqueId.toString())) return
        playerStates[player.uniqueId.toString()]?.let { state ->
            playerStates[player.uniqueId.toString()] = state.copy(quantity = ShopQuantity.ONE, isInverted = false)
        }
    }

    private fun handleBuy(player: Player, item: ShopItem, quantity: Int) {
        if (!item.canBuy) {
            player.sendMessage(c("&cこのアイテムは購入できません。"))
            return
        }
        val actualQty = if (item.enchantments.isNotEmpty()) 1 else quantity
        val err = EconomyManager.withdraw(player, item.buyPrice * actualQty)
        if (err != null) {
            player.sendMessage(c(err))
            return
        }
        val give = ItemStack(item.material!!, actualQty)
        item.enchantments.forEach { (ench, lvl) -> give.addUnsafeEnchantment(ench, lvl) }
        val leftover = player.inventory.addItem(give)
        leftover.values.forEach { player.world.dropItemNaturally(player.location, it) }
        player.sendMessage(c("&a購入: &7${item.materialId} ×$actualQty  残高: &7${EconomyManager.format(EconomyManager.getBalance(player))}"))
        player.playSound(player.location, org.bukkit.Sound.ENTITY_EXPERIENCE_ORB_PICKUP, 1f, 1.2f)
    }

    private fun handleSell(player: Player, item: ShopItem, quantity: Int) {
        if (!item.canSell) {
            player.sendMessage(c("&cこのアイテムは売却できません。"))
            return
        }
        val removed = removeFromInventory(player, item.material!!, quantity)
        if (removed == 0) {
            player.sendMessage(c("&c${item.materialId} を持っていません。"))
            return
        }
        EconomyManager.deposit(player, item.sellPrice * removed)
        player.sendMessage(c("&b売却: &7${item.materialId} ×$removed  残高: &7${EconomyManager.format(EconomyManager.getBalance(player))}"))
        player.playSound(player.location, org.bukkit.Sound.ENTITY_EXPERIENCE_ORB_PICKUP, 1f, 0.8f)
    }

    private fun handleSellAll(player: Player, item: ShopItem) {
        if (!item.canSell) {
            player.sendMessage(c("&cこのアイテムは売却できません。"))
            return
        }
        val total = countInInventory(player, item.material!!)
        if (total == 0) {
            player.sendMessage(c("&c${item.materialId} を持っていません。"))
            return
        }
        removeFromInventory(player, item.material, total)
        EconomyManager.deposit(player, item.sellPrice * total)
        player.sendMessage(c("&b全売却: &7${item.materialId} ×$total  残高: &7${EconomyManager.format(EconomyManager.getBalance(player))}"))
        player.playSound(player.location, org.bukkit.Sound.ENTITY_EXPERIENCE_ORB_PICKUP, 1f, 0.8f)
    }

    private fun changePage(player: Player, state: PlayerShopState, category: ShopCategory, newPage: Int) {
        if (newPage !in 0 until category.pageCount) return
        val newState = state.copy(page = newPage)
        player.openInventory(buildShopInventory(player, category, newState))
        playerStates[player.uniqueId.toString()] = newState
        activeShopPlayers.add(player.uniqueId.toString())
    }

    private fun cycleQuantity(player: Player, state: PlayerShopState, category: ShopCategory) {
        val newState = state.copy(quantity = state.quantity.next())
        playerStates[player.uniqueId.toString()] = newState
        refreshInventory(player, category, newState)
    }

    private fun toggleInversion(player: Player, state: PlayerShopState, category: ShopCategory) {
        val newState = state.copy(isInverted = !state.isInverted)
        playerStates[player.uniqueId.toString()] = newState
        refreshInventory(player, category, newState)
        val msg = if (newState.isInverted) "&c左右反転: 左=売却 右=購入" else "&a通常モード: 左=購入 右=売却"
        player.sendMessage(c(msg))
        player.playSound(player.location, org.bukkit.Sound.UI_BUTTON_CLICK, 0.5f, if (newState.isInverted) 0.8f else 1.2f)
    }

    private fun refreshInventory(player: Player, category: ShopCategory, state: PlayerShopState) {
        val inv = player.openInventory.topInventory
        for (i in 0..44) inv.setItem(i, null)
        category.getPage(state.page).forEachIndexed { i, item ->
            if (item.material != null) inv.setItem(i, buildShopItemStack(item, if (item.enchantments.isNotEmpty()) 1 else state.quantity.amount, state.isInverted))
        }
        buildBottomBar(inv, player, category, state)
    }

    private fun handleBack(player: Player) {
        plugin.popupMenuEngine.open(player, "shopindex")
    }

    private fun countInInventory(player: Player, material: Material): Int =
        player.inventory.contents.filterNotNull().filter { it.type == material }.sumOf { it.amount }

    private fun removeFromInventory(player: Player, material: Material, quantity: Int): Int {
        var remaining = quantity
        player.inventory.contents.forEachIndexed { i, item ->
            if (remaining <= 0 || item == null || item.type != material) return@forEachIndexed
            if (item.amount <= remaining) {
                remaining -= item.amount
                player.inventory.setItem(i, null)
            } else {
                item.amount -= remaining
                remaining = 0
            }
        }
        return quantity - remaining
    }
}
