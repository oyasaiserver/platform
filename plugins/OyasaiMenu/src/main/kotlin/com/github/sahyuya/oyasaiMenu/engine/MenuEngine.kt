package com.github.sahyuya.oyasaiMenu.engine

import com.github.sahyuya.oyasaiMenu.OyasaiMenu
import com.github.sahyuya.oyasaiMenu.manager.CooldownManager
import com.github.sahyuya.oyasaiMenu.manager.EconomyManager
import com.github.sahyuya.oyasaiMenu.manager.TokenCurrencyManager
import com.github.sahyuya.oyasaiMenu.model.MenuDefinition
import com.github.sahyuya.oyasaiMenu.model.MenuItemDefinition
import com.github.sahyuya.oyasaiMenu.model.PlayerMenuState
import com.github.sahyuya.oyasaiMenu.util.CustomHead
import com.github.sahyuya.oyasaiMenu.util.GuiUtil.c
import com.github.sahyuya.oyasaiMenu.util.GuiUtil.comp
import com.github.sahyuya.oyasaiMenu.util.ItemVisuals
import com.github.sahyuya.oyasaiMenu.util.PlayerAccess
import me.clip.placeholderapi.PlaceholderAPI
import org.bukkit.Bukkit
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.event.inventory.InventoryCloseEvent
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.meta.SkullMeta

class MenuEngine(private val plugin: OyasaiMenu) : Listener {

  private val playerStates: MutableMap<String, PlayerMenuState> = mutableMapOf()
  private var cachedTpsAtMillis: Long = 0L
  private var cachedTps: Double = 20.0

  private val rootFallback =
      MenuDefinition(id = "root", title = "&8✦ おやさい鯖 メニュー ✦", size = 54, items = emptyMap())

  fun openMenu(player: Player, menuId: String, page: Int = 0) {
    val menuDef: MenuDefinition =
        plugin.menuLoader.getMenu(menuId)
            ?: if (menuId == "root") rootFallback
            else {
              player.sendMessage(c("&cメニューが見つかりません: $menuId"))
              plugin.logger.warning("存在しないメニューID: $menuId (player=${player.name})")
              return
            }
    val inventory = buildInventory(player, menuDef)
    player.openInventory(inventory)
    playerStates[player.uniqueId.toString()] = PlayerMenuState(menuId = menuId, page = page)
  }

  @EventHandler
  fun onInventoryClick(event: InventoryClickEvent) {
    val player = event.whoClicked as? Player ?: return
    val state = playerStates[player.uniqueId.toString()] ?: return
    if (event.clickedInventory == player.inventory) {
      if (event.isShiftClick) event.isCancelled = true
      return
    }
    event.isCancelled = true
    if (CooldownManager.isClickOnCooldown(player.uniqueId)) return
    val slot = event.rawSlot
    val menuDef =
        plugin.menuLoader.getMenu(state.menuId)
            ?: if (state.menuId == "root") rootFallback else return
    val itemDef = menuDef.items.values.find { it.slot == slot } ?: return
    if (itemDef.icon.isAir) return
    if (!PlayerAccess.hasRequirement(player, itemDef.permission)) return
    plugin.actionEngine.executeActions(player, itemDef.actions, state)
  }

  @EventHandler
  fun onInventoryClose(event: InventoryCloseEvent) {
    playerStates.remove((event.player as? Player)?.uniqueId?.toString() ?: return)
  }

  private fun buildInventory(player: Player, menuDef: MenuDefinition): Inventory {
    val context = PlaceholderContext(player)
    val title = applyPlaceholders(menuDef.title, context)
    val inv = Bukkit.createInventory(null, menuDef.size, comp(title))
    menuDef.items.values.forEach { itemDef ->
      if (itemDef.icon.isAir) return@forEach
      if (!PlayerAccess.hasRequirement(player, itemDef.permission)) return@forEach
      if (itemDef.slot < menuDef.size)
          inv.setItem(itemDef.slot, buildItemStack(player, itemDef, context))
    }
    return inv
  }

  private fun buildItemStack(
      player: Player,
      itemDef: MenuItemDefinition,
      context: PlaceholderContext
  ): ItemStack {
    val item: ItemStack =
        when {
          itemDef.customTexture != null -> CustomHead.get(itemDef.customTexture)
          else -> ItemStack(itemDef.icon)
        }
    val meta = item.itemMeta ?: return item
    if (meta is SkullMeta && itemDef.customTexture == null) {
      meta.owningPlayer = player
    }
    meta.displayName(comp(applyPlaceholders(itemDef.name, context)))

    val lore =
        itemDef.lore
            .flatMap { line ->
              if (line == "%announcement_body%") context.announcementBody else listOf(line)
            }
            .map { comp(applyPlaceholders(it, context)) }
    if (lore.isNotEmpty()) meta.lore(lore)

    ItemVisuals.applyEnchantVisual(meta, itemDef.enchanted)
    item.itemMeta = meta
    return item
  }

  fun applyPlaceholders(player: Player, text: String): String {
    return applyPlaceholders(text, PlaceholderContext(player))
  }

  fun getCachedTps(): Double {
    val now = System.currentTimeMillis()
    if (now - cachedTpsAtMillis >= 1000L) {
      cachedTps = Bukkit.getTPS()[0]
      cachedTpsAtMillis = now
    }
    return cachedTps
  }

  private fun applyPlaceholders(text: String, context: PlaceholderContext): String {
    if (text.isEmpty()) return text

    var result = text
    if (result.contains("%player%")) result = result.replace("%player%", context.player.name)
    if (result.contains("%player_name%"))
        result = result.replace("%player_name%", context.player.name)
    if (result.contains("%online%")) result = result.replace("%online%", context.onlinePlayers)
    if (result.contains("%server_tps%"))
        result = result.replace("%server_tps%", context.tpsTwoDecimals)
    if (result.contains("%tps%")) result = result.replace("%tps%", context.tpsTwoDecimals)
    if (result.contains("%dp_level%")) result = result.replace("%dp_level%", context.dpLevel)
    if (result.contains("%money%")) result = result.replace("%money%", context.balance)
    if (result.contains("%tokens%")) result = result.replace("%tokens%", context.tokens)
    if (result.contains("%announcement_title%"))
        result = result.replace("%announcement_title%", context.announcementTitle)
    for (index in 0 until 10) {
      val key = "%announcement_line_${index + 1}%"
      if (result.contains(key)) result = result.replace(key, context.announcementLine(index))
    }
    if (context.placeholderApiAvailable && result.contains('%'))
        result = PlaceholderAPI.setPlaceholders(context.player, result)
    return result
  }

  fun getPlayerState(player: Player): PlayerMenuState? = playerStates[player.uniqueId.toString()]

  fun clearCache() = playerStates.clear()

  private inner class PlaceholderContext(val player: Player) {
    val placeholderApiAvailable: Boolean =
        Bukkit.getPluginManager().isPluginEnabled("PlaceholderAPI")
    val onlinePlayers: String by
        lazy(LazyThreadSafetyMode.NONE) { Bukkit.getOnlinePlayers().size.toString() }
    val tpsTwoDecimals: String by
        lazy(LazyThreadSafetyMode.NONE) { String.format("%.2f", getCachedTps()) }
    val dpLevel: String by
        lazy(LazyThreadSafetyMode.NONE) {
          if (placeholderApiAvailable)
              runCatching { PlaceholderAPI.setPlaceholders(player, "%dp_level%") }
                  .getOrElse { "---" }
          else "---"
        }
    val balance: String by
        lazy(LazyThreadSafetyMode.NONE) {
          if (EconomyManager.isAvailable) EconomyManager.format(EconomyManager.getBalance(player))
          else "---"
        }
    val tokens: String by
        lazy(LazyThreadSafetyMode.NONE) {
          if (TokenCurrencyManager.isAvailable)
              TokenCurrencyManager.format(TokenCurrencyManager.getTokens(player))
          else "---"
        }
    private val announcement by
        lazy(LazyThreadSafetyMode.NONE) {
          plugin.announcementManager.getAnnouncements().firstOrNull()
        }
    val announcementTitle: String by lazy(LazyThreadSafetyMode.NONE) { announcement?.title ?: "" }
    val announcementBody: List<String> by
        lazy(LazyThreadSafetyMode.NONE) { announcement?.body ?: emptyList() }

    fun announcementLine(index: Int): String = announcementBody.getOrNull(index) ?: ""
  }
}
