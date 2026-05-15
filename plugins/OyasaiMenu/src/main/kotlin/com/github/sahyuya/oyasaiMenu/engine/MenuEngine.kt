package com.github.sahyuya.oyasaiMenu.engine

import com.github.sahyuya.oyasaiMenu.OyasaiMenu
import com.github.sahyuya.oyasaiMenu.manager.CooldownManager
import com.github.sahyuya.oyasaiMenu.model.MenuDefinition
import com.github.sahyuya.oyasaiMenu.model.MenuItemDefinition
import com.github.sahyuya.oyasaiMenu.model.PlayerMenuState
import com.github.sahyuya.oyasaiMenu.util.CustomHead
import com.github.sahyuya.oyasaiMenu.util.GuiUtil.c
import com.github.sahyuya.oyasaiMenu.util.GuiUtil.comp
import me.clip.placeholderapi.PlaceholderAPI
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
 * MenuEngine
 *
 * 変更点:
 *   - openMenu() の root フォールバック判定を Elvis+if から when 式に変更
 *       root.yml が存在しない・スキップされていても必ず rootFallback を使用する
 *   - staticCache (未使用) を削除
 *   - clearCache() はプレイヤー状態のみリセット
 */
class MenuEngine(private val plugin: OyasaiMenu) : Listener {

    private val playerStates: MutableMap<String, PlayerMenuState> = mutableMapOf()

    private val rootFallback = MenuDefinition(
        id    = "root",
        title = "&8✦ おやさい鯖 メニュー ✦",
        size  = 54,
        items = emptyMap()
    )

    fun openMenu(player: Player, menuId: String, page: Int = 0) {
        val menuDef: MenuDefinition = if (menuId == "root") {
        rootFallback
    } else {
        val loaded = plugin.menuLoader.getMenu(menuId)
            ?: run {
                player.sendMessage(c("&cメニューが見つかりません: $menuId"))
                plugin.logger.warning("存在しないメニューID: $menuId (player=${player.name})")
                return
            }
        loaded
    }
        val inventory = buildInventory(player, menuDef)
        player.openInventory(inventory)
        playerStates[player.uniqueId.toString()] = PlayerMenuState(menuId = menuId, page = page)
    }

    @EventHandler
    fun onInventoryClick(event: InventoryClickEvent) {
        val player = event.whoClicked as? Player ?: return
        val state  = playerStates[player.uniqueId.toString()] ?: return
        if (event.clickedInventory == player.inventory) { if (event.isShiftClick) event.isCancelled = true; return }
        event.isCancelled = true
        if (CooldownManager.isClickOnCooldown(player.uniqueId)) return
        val slot = event.rawSlot
        if (state.menuId == "root" && slot in 45..53) {
            when (slot) {
                45 -> {
                    player.performCommand("dp")
                    player.playSound(player.location, org.bukkit.Sound.UI_BUTTON_CLICK, 0.5f, 1f)
                }
                else -> {
                    val entry = NavBar.entries.find { it.slot == slot }
                    if (entry != null) Bukkit.getScheduler().runTaskLater(plugin, Runnable { plugin.popupMenuEngine.open(player, entry.popupId) }, 1L)
                }
            }
            return
        }
        val menuDef = plugin.menuLoader.getMenu(state.menuId) ?: return
        val itemDef = menuDef.items.values.find { it.slot == slot } ?: return
        if (itemDef.icon.isAir) return
        plugin.actionEngine.executeActions(player, itemDef.actions, state)
    }

    @EventHandler
    fun onInventoryClose(event: InventoryCloseEvent) {
        playerStates.remove((event.player as? Player)?.uniqueId?.toString() ?: return)
    }

    private fun buildInventory(player: Player, menuDef: MenuDefinition): Inventory {
        val title = applyPlaceholders(player, menuDef.title)
        val inv   = Bukkit.createInventory(null, menuDef.size, comp(title))
        menuDef.items.values.forEach { itemDef ->
            if (itemDef.icon.isAir) return@forEach
            if (itemDef.permission != null && !player.hasPermission(itemDef.permission)) return@forEach
            if (itemDef.slot < menuDef.size) inv.setItem(itemDef.slot, buildItemStack(player, itemDef))
        }
        if (menuDef.id == "root") {
            val emptyGlass = makeGlass(Material.GRAY_STAINED_GLASS_PANE, " ")
            for (i in 0..44) inv.setItem(i, emptyGlass)
            val ann = plugin.announcementManager.getAnnouncements().firstOrNull()
            if (ann != null) {
                val glass = makeGlass(Material.GRAY_STAINED_GLASS_PANE, ann.title, ann.body)
                for (i in 0..44) inv.setItem(i, glass)
            }
            NavBar.apply(inv, player, plugin, activeSlot = -1)
        }
        return inv
    }

    private fun makeGlass(mat: Material, name: String, lore: List<String> = emptyList()): ItemStack {
        val item = ItemStack(mat); val meta = item.itemMeta!!
        meta.displayName(comp(name))
        if (lore.isNotEmpty()) meta.lore(lore.map { comp(it) })
        item.itemMeta = meta; return item
    }

    private fun buildItemStack(player: Player, itemDef: MenuItemDefinition): ItemStack {
        val item: ItemStack = when {
            itemDef.customTexture != null -> CustomHead.get(itemDef.customTexture)
            else -> ItemStack(itemDef.icon)
        }
        val meta = item.itemMeta ?: return item
        meta.displayName(comp(applyPlaceholders(player, itemDef.name)))
        val lore = itemDef.lore.map { comp(applyPlaceholders(player, it)) }
        if (lore.isNotEmpty()) meta.lore(lore)
        item.itemMeta = meta; return item
    }

    fun applyPlaceholders(player: Player, text: String): String {
        var result = text.replace("%player%", player.name).replace("%player_name%", player.name)
            .replace("%online%", Bukkit.getOnlinePlayers().size.toString())
            .replace("%server_tps%", String.format("%.2f", Bukkit.getTPS()[0]))
        if (Bukkit.getPluginManager().isPluginEnabled("PlaceholderAPI")) result = PlaceholderAPI.setPlaceholders(player, result)
        return result
    }

    fun getPlayerState(player: Player): PlayerMenuState? = playerStates[player.uniqueId.toString()]

    fun clearCache() = playerStates.clear()
}
