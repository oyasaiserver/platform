package com.github.sahyuya.oyasaiMenu.engine

import com.github.sahyuya.oyasaiMenu.OyasaiMenu
import com.github.sahyuya.oyasaiMenu.manager.CooldownManager
import com.github.sahyuya.oyasaiMenu.model.*
import com.github.sahyuya.oyasaiMenu.util.CustomHead
import com.github.sahyuya.oyasaiMenu.util.GuiUtil.c
import com.github.sahyuya.oyasaiMenu.util.GuiUtil.comp
import io.papermc.paper.datacomponent.DataComponentTypes
import io.papermc.paper.datacomponent.item.TooltipDisplay
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
import org.bukkit.inventory.meta.BlockDataMeta

/**
 * PopupMenuEngine
 *
 * 変更点:
 *   - buildItemStack(): HIDE_ATTRIBUTES を追加してツール・防具の属性値を非表示
 *   - fallback_icon: CUSTOM_HEAD/PLAYER_HEAD + fallback_texture でカスタムヘッド表示
 *   - fallback_actions: 権限不足プレイヤーがクリックした際にアクションを実行
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

        // 表示条件を満たさないスロットのうち fallback_icon = AIR のもの → fillGlass 後に強制クリア
        val forceEmptySlots = mutableSetOf<Int>()

        def.items.forEach { item ->
            if (item.slot !in 0..44) return@forEach
            if (item.icon.isAir && item.itemSpec == null) return@forEach

            if (!item.isVisibleTo(player)) {
                val fb = item.fallbackIcon
                when {
                    item.fallbackItemSpec != null -> {
                        val fbStack = buildBaseItemStack(item.fallbackItemSpec, item.fallbackTexture)
                        val fbMeta = fbStack.itemMeta!!
                        fbMeta.displayName(comp(item.fallbackName))
                        if (item.fallbackLore.isNotEmpty()) {
                            fbMeta.lore(item.fallbackLore.map { comp(it) })
                        }
                        fbMeta.addItemFlags(ItemFlag.HIDE_ATTRIBUTES, ItemFlag.HIDE_ADDITIONAL_TOOLTIP)
                        fbStack.itemMeta = fbMeta
                        inv.setItem(item.slot, fbStack)
                    }
                    fb == null         -> { /* 未指定 → fillGlass に任せる */ }
                    fb == Material.AIR -> { forceEmptySlots.add(item.slot) }
                    else               -> {
                        // fallback_icon のマテリアルで表示
                        // PLAYER_HEAD + fallback_texture → CustomHead
                        val fbStack = if (fb == Material.PLAYER_HEAD && item.fallbackTexture != null) {
                            CustomHead.get(item.fallbackTexture)
                        } else {
                            ItemStack(fb)
                        }
                        val fbMeta = fbStack.itemMeta!!
                        fbMeta.displayName(comp(item.fallbackName))
                        if (item.fallbackLore.isNotEmpty()) {
                            fbMeta.lore(item.fallbackLore.map { comp(it) })
                        }
                        fbMeta.addItemFlags(ItemFlag.HIDE_ATTRIBUTES, ItemFlag.HIDE_ADDITIONAL_TOOLTIP)
                        fbStack.itemMeta = fbMeta
                        inv.setItem(item.slot, fbStack)
                    }
                }
                return@forEach
            }

            inv.setItem(item.slot, buildItemStack(item))
        }

        // 空きスロットをガラスで埋める
        NavBar.fillGlass(inv, def.glass)

        // icon = AIR のスロットをクリア
        def.items.filter { it.slot in 0..44 && it.icon.isAir && it.itemSpec == null }.forEach {
            inv.setItem(it.slot, null)
        }
        forceEmptySlots.forEach { inv.setItem(it, null) }

        NavBar.apply(inv, player, plugin, def.navActive)
        return inv
    }

    private fun buildItemStack(item: PopupItem): ItemStack {
        val stack = item.itemSpec?.let { buildBaseItemStack(it, item.customTexture) } ?: when {
            item.icon == Material.PLAYER_HEAD && item.customTexture != null -> CustomHead.get(item.customTexture)
            else -> ItemStack(item.icon)
        }
        val meta = stack.itemMeta ?: return stack
        if (item.name.isNotEmpty()) meta.displayName(comp(item.name))
        if (item.lore.isNotEmpty()) meta.lore(item.lore.map { comp(it) })
        meta.addItemFlags(ItemFlag.HIDE_ATTRIBUTES, ItemFlag.HIDE_ADDITIONAL_TOOLTIP)
        if (item.enchanted) {
            @Suppress("DEPRECATION")
            val unbreaking = runCatching {
                Registry.ENCHANTMENT.get(NamespacedKey.minecraft("unbreaking"))
            }.getOrNull()
            if (unbreaking != null) { meta.addEnchant(unbreaking, 1, true); meta.addItemFlags(ItemFlag.HIDE_ENCHANTS) }
        }
        stack.itemMeta = meta; return stack
    }

    private fun buildBaseItemStack(spec: PopupItemSpec, customTexture: String?): ItemStack {
        val stack = when {
            spec.material == Material.PLAYER_HEAD && customTexture != null -> CustomHead.get(customTexture)
            else -> ItemStack(spec.material, spec.amount)
        }
        if (spec.blockState.isNotEmpty()) {
            val meta = stack.itemMeta as? BlockDataMeta ?: return stack
            val blockState = spec.blockState.entries.joinToString(",") { (key, value) -> "$key=$value" }
            val data = runCatching { Bukkit.createBlockData(spec.material, "[$blockState]") }.getOrElse {
                plugin.logger.warning("Popup item '${spec.material.name}': block_state の適用に失敗しました: ${it.message}")
                return stack
            }
            meta.setBlockData(data)
            meta.addItemFlags(ItemFlag.HIDE_ADDITIONAL_TOOLTIP)
            stack.itemMeta = meta
            stack.setData(
                DataComponentTypes.TOOLTIP_DISPLAY,
                TooltipDisplay.tooltipDisplay()
                    .addHiddenComponents(DataComponentTypes.BLOCK_DATA)
                    .build()
            )
        }
        return stack
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
                player.performCommand("dp")
                player.playSound(player.location, org.bukkit.Sound.UI_BUTTON_CLICK, 0.5f, 1f)
            }
            slot in 46..53 -> {
                val entry = NavBar.entries.find { it.slot == slot } ?: return
                open(player, entry.popupId)
            }
            slot in 0..44 -> {
                val def  = plugin.popupMenuLoader.getPopup(popupId) ?: return
                val item = def.items.find { it.slot == slot } ?: return
                if (item.icon.isAir && item.itemSpec == null) return
                if (!item.isVisibleTo(player)) {
                    if (item.fallbackActions.isNotEmpty()) {
                        executeActions(player, item.fallbackActions)
                    }
                    return
                }
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
                                    Component.text("クリックで自分のプロフィールへ")
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
