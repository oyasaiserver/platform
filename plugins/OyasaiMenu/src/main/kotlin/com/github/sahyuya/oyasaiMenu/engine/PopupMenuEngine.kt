package com.github.sahyuya.oyasaiMenu.engine

import com.github.sahyuya.oyasaiMenu.OyasaiMenu
import com.github.sahyuya.oyasaiMenu.manager.CooldownManager
import com.github.sahyuya.oyasaiMenu.model.*
import com.github.sahyuya.oyasaiMenu.util.CustomHead
import com.github.sahyuya.oyasaiMenu.util.GuiUtil.c
import com.github.sahyuya.oyasaiMenu.util.GuiUtil.comp
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.event.ClickEvent
import net.kyori.adventure.text.event.HoverEvent
import net.kyori.adventure.text.format.NamedTextColor
import net.kyori.adventure.text.format.TextDecoration
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.NamespacedKey
import org.bukkit.Registry
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.event.inventory.InventoryCloseEvent
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.ItemFlag
import org.bukkit.inventory.ItemStack

/**
 * PopupMenuEngine
 *
 * 変更点:
 *   - fallbackIcon: op_only=true の非OPプレイヤーに指定のアイコンを表示
 *     fallback_icon 未指定なら fillGlass のガラスが埋める (従来通り)
 *   - AIR スロット: fillGlass 後にクリアして空欄を維持
 *   - opOnly のクリックは非OP側で無視
 */
class PopupMenuEngine(private val plugin: OyasaiMenu) : Listener {

    private val activePlayers: MutableMap<String, String> = mutableMapOf()

    fun open(player: Player, popupId: String) {
        val uid = player.uniqueId.toString()
        if (activePlayers[uid] == popupId) {
            Bukkit.getScheduler().runTaskLater(plugin, Runnable { plugin.menuEngine.openMenu(player, "root") }, 1L)
            return
        }
        val def = plugin.popupMenuLoader.getPopup(popupId) ?: run {
            plugin.logger.warning("Popup '$popupId' が見つかりません。menus/popup/$popupId.yml を確認してください。")
            player.sendMessage(c("&c内部エラー: popup '$popupId' が見つかりません。")); return
        }
        player.openInventory(buildInventory(player, def))
        activePlayers[uid] = popupId
    }

    private fun buildInventory(player: Player, def: PopupMenuDef): Inventory {
        val inv = Bukkit.createInventory(null, 54, comp(def.title))

        def.items.forEach { item ->
            if (item.slot !in 0..44) return@forEach
            if (item.icon.isAir) return@forEach

            if (item.opOnly && !player.isOp) {
                val fb = item.fallbackIcon
                if (fb != null && !fb.isAir) {
                    val fbStack = ItemStack(fb)
                    val fbMeta  = fbStack.itemMeta!!
                    fbMeta.displayName(comp(item.fallbackName))
                    fbStack.itemMeta = fbMeta
                    inv.setItem(item.slot, fbStack)
                }
                return@forEach
            }

            inv.setItem(item.slot, buildItemStack(item))
        }

        // 空きスロットをガラスで埋める
        NavBar.fillGlass(inv, def.glass)

        // icon=AIR のスロットのみクリア (opOnly スロットはガラスのまま)
        def.items.filter { it.slot in 0..44 && it.icon.isAir }.forEach {
            inv.setItem(it.slot, null)
        }

        NavBar.apply(inv, player, plugin, def.navActive)
        return inv
    }

    private fun buildItemStack(item: PopupItem): ItemStack {
        val stack = when {
            item.icon == Material.PLAYER_HEAD && item.customTexture != null -> CustomHead.get(item.customTexture)
            else -> ItemStack(item.icon)
        }
        val meta = stack.itemMeta ?: return stack
        if (item.name.isNotEmpty()) meta.displayName(comp(item.name))
        if (item.lore.isNotEmpty()) meta.lore(item.lore.map { comp(it) })
        if (item.enchanted) {
            val unbreaking = runCatching { Registry.ENCHANTMENT.get(NamespacedKey.minecraft("unbreaking")) }.getOrNull()
            if (unbreaking != null) { meta.addEnchant(unbreaking, 1, true); meta.addItemFlags(ItemFlag.HIDE_ENCHANTS) }
        }
        stack.itemMeta = meta; return stack
    }

    @EventHandler
    fun onInventoryClick(event: InventoryClickEvent) {
        val player = event.whoClicked as? Player ?: return
        val uid    = player.uniqueId.toString()
        if (!activePlayers.containsKey(uid)) return
        if (event.clickedInventory == player.inventory) { if (event.isShiftClick) event.isCancelled = true; return }
        event.isCancelled = true
        if (CooldownManager.isClickOnCooldown(player.uniqueId)) return
        val slot    = event.rawSlot
        val popupId = activePlayers[uid] ?: return
        when {
            slot == 45 -> {
                val def = plugin.popupMenuLoader.getPopup(popupId) ?: return
                NavBar.apply(player.openInventory.topInventory, player, plugin, def.navActive)
                player.playSound(player.location, org.bukkit.Sound.UI_BUTTON_CLICK, 0.5f, 1f)
            }
            slot in 46..53 -> {
                val entry = NavBar.entries.find { it.slot == slot } ?: return
                open(player, entry.popupId)
            }
            slot in 0..44 -> {
                val def  = plugin.popupMenuLoader.getPopup(popupId) ?: return
                val item = def.items.find { it.slot == slot } ?: return
                if (item.icon.isAir) return
                if (item.opOnly && !player.isOp) return
                executeActions(player, item.actions)
            }
        }
    }

    @EventHandler
    fun onInventoryClose(event: InventoryCloseEvent) {
        activePlayers.remove((event.player as? Player)?.uniqueId?.toString() ?: return)
    }

    private fun executeActions(player: Player, actions: List<PopupAction>) {
        for (action in actions) {
            when (action.type) {
                PopupActionType.URL ->
                    player.sendMessage(c("&e${action.value}\n&7URLをクリックまたはコピーしてアクセスしてください。"))
                PopupActionType.CHAT_PASTE ->
                    player.sendMessage(c("&7チャット欄にコピーして使用してください: &f${action.value}"))
                else -> {}
            }
        }

        val needsCloseFirst = actions.any {
            it.type in setOf(
                PopupActionType.CLOSE,
                PopupActionType.OPEN_POPUP,
                PopupActionType.OPEN_SHOP,
                PopupActionType.OPEN_SELL,
                PopupActionType.OPEN_MACRO,
                PopupActionType.OPEN_POINT_SHOP,
                PopupActionType.OPEN_MENU,
                PopupActionType.SUGGEST_COMMAND,
                PopupActionType.OP_PLAYER_CMD
            )
        }

        if (needsCloseFirst) {
            Bukkit.getScheduler().runTaskLater(plugin, Runnable {
                player.closeInventory()
                Bukkit.getScheduler().runTaskLater(plugin, Runnable { dispatchDeferred(player, actions) }, 1L)
            }, 1L)
        } else {
            Bukkit.getScheduler().runTaskLater(plugin, Runnable { dispatchDeferred(player, actions) }, 1L)
        }
    }

    private fun dispatchDeferred(player: Player, actions: List<PopupAction>) {
        for (action in actions) {
            when (action.type) {
                PopupActionType.PLAYER_CMD ->
                    player.performCommand(action.value.replace("%player%", player.name))
                PopupActionType.CONSOLE_CMD ->
                    Bukkit.dispatchCommand(Bukkit.getConsoleSender(), action.value.replace("%player%", player.name))
                PopupActionType.OP_PLAYER_CMD -> {
                    if (!player.isOp) return
                    player.performCommand(action.value.replace("%player%", player.name))
                }
                PopupActionType.SUGGEST_COMMAND -> {
                    val cmd = action.value.replace("%player%", player.name)
                    val msg = Component.text()
                        .decoration(TextDecoration.ITALIC, false)
                        .append(Component.text("▶ ").color(NamedTextColor.GREEN))
                        .append(
                            Component.text(cmd).color(NamedTextColor.YELLOW)
                                .clickEvent(ClickEvent.suggestCommand(cmd))
                                .hoverEvent(HoverEvent.showText(
                                    Component.text("クリックでチャット欄に入力")
                                        .color(NamedTextColor.GRAY).decoration(TextDecoration.ITALIC, false)
                                ))
                        ).build()
                    player.sendMessage(msg)
                }
                PopupActionType.OPEN_POPUP  -> open(player, action.value)
                PopupActionType.OPEN_SHOP   -> {
                    val cat = action.value
                    if (cat.isEmpty()) open(player, "shopindex") else plugin.shopEngine.openShop(player, cat)
                }
                PopupActionType.OPEN_SELL        -> plugin.sellEngine.openSellMenu(player)
                PopupActionType.OPEN_MACRO       -> plugin.macroEngine.openMacroList(player)
                PopupActionType.OPEN_POINT_SHOP  -> {
                    val catId = if (action.value.isEmpty() || action.value == "true")
                        plugin.pointShopLoader.getAllCategories().keys.firstOrNull() ?: return
                    else action.value
                    plugin.pointShopEngine.openShop(player, catId)
                }
                PopupActionType.OPEN_MENU -> plugin.menuEngine.openMenu(player, action.value)
                else -> {}
            }
        }
    }
}