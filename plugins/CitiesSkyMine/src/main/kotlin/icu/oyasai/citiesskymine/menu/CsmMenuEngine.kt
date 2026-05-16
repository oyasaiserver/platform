package icu.oyasai.citiesskymine.menu

import icu.oyasai.citiesskymine.Main
import java.util.UUID
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.TextDecoration
import net.kyori.adventure.text.serializer.legacy.LegacyComponentSerializer
import org.bukkit.Bukkit
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.event.inventory.InventoryCloseEvent
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.InventoryHolder
import org.bukkit.inventory.ItemStack

// =============================================================================
// CsmMenuEngine
// =============================================================================
// OyasaiMenu の engine/MenuEngine.kt をフォーク。
//
// 変更点 (OyasaiMenu との差分):
//   - 依存を OyasaiMenu プラグインから CitiesSkyMine の Main に変更
//   - InventoryHolder として CsmMenuHolder を使用 (OyasaiMenu との干渉を防ぐ)
//   - root メニュー・NavBar・AnnouncementManager などサーバー固有機能は未移植
//   - YAML 読み込みは CsmMenuLoader に委譲 (OyasaiMenu: MenuLoader に相当)
//   - アクション実行は CsmActionEngine に委譲 (OyasaiMenu: ActionEngine に相当)
//   - CooldownManager は現時点では未実装 (TODO: 必要に応じて追加)
//
// [TODO: OyasaiMenu 統合] 将来的に OyasaiMenu へ統合する場合:
//   1. CsmMenuLoader → OyasaiMenu の MenuLoader に YAML 形式ごと移植
//   2. CsmActionEngine → OyasaiMenu の ActionEngine に新アクションを追加
//   3. CsmMenuEngine は不要になり OyasaiMenu の MenuEngine で置き換え可能
// =============================================================================
class CsmMenuEngine(private val plugin: Main) : Listener {

  val loader = CsmMenuLoader(plugin)
  private val actionEngine = CsmActionEngine(plugin, this)
  private val playerMenus: MutableMap<UUID, String> = mutableMapOf()

  /** OyasaiMenu の menus が持つ InventoryHolder と区別するための専用 Holder。 */
  inner class CsmMenuHolder(val menuId: String) : InventoryHolder {
    override fun getInventory(): Inventory = throw UnsupportedOperationException()
  }

  fun reload() {
    loader.loadAll()
  }

  fun openMenu(player: Player, menuId: String) {
    val def =
        loader.getMenu(menuId)
            ?: run {
              player.sendMessage(comp("&c[CsmMenu] メニューが見つかりません: $menuId"))
              return
            }
    val inv = buildInventory(player, def)
    player.openInventory(inv)
    playerMenus[player.uniqueId] = menuId
  }

  @EventHandler
  fun onInventoryClick(event: InventoryClickEvent) {
    val player = event.whoClicked as? Player ?: return
    val holder = event.inventory.holder as? CsmMenuHolder ?: return
    if (event.clickedInventory == player.inventory) {
      if (event.isShiftClick) event.isCancelled = true
      return
    }
    event.isCancelled = true
    val def = loader.getMenu(holder.menuId) ?: return
    val itemDef = def.items.values.find { it.slot == event.rawSlot } ?: return
    if (itemDef.icon.isAir) return
    if (itemDef.permission != null && !player.hasPermission(itemDef.permission)) return
    actionEngine.executeActions(player, itemDef.actions)
  }

  @EventHandler
  fun onInventoryClose(event: InventoryCloseEvent) {
    playerMenus.remove((event.player as? Player)?.uniqueId ?: return)
  }

  private fun buildInventory(player: Player, def: CsmMenuDef): Inventory {
    val title = applyPlaceholders(player, def.title)
    val inv = Bukkit.createInventory(CsmMenuHolder(def.id), def.size, comp(title))
    def.items.values.forEach { item ->
      if (item.icon.isAir) return@forEach
      if (item.permission != null && !player.hasPermission(item.permission)) return@forEach
      if (item.slot < def.size) inv.setItem(item.slot, buildItemStack(player, item))
    }
    return inv
  }

  private fun buildItemStack(player: Player, itemDef: CsmItemDef): ItemStack {
    val item = ItemStack(itemDef.icon)
    val meta = item.itemMeta ?: return item
    meta.displayName(comp(applyPlaceholders(player, itemDef.name)))
    if (itemDef.lore.isNotEmpty())
        meta.lore(itemDef.lore.map { comp(applyPlaceholders(player, it)) })
    item.itemMeta = meta
    return item
  }

  fun applyPlaceholders(player: Player, text: String): String {
    var result = text.replace("%player%", player.name).replace("%player_name%", player.name)
    if (Bukkit.getPluginManager().isPluginEnabled("PlaceholderAPI"))
        result = me.clip.placeholderapi.PlaceholderAPI.setPlaceholders(player, result)
    return result
  }

  private fun comp(text: String): Component =
      LegacyComponentSerializer.legacyAmpersand()
          .deserialize(text)
          .decoration(TextDecoration.ITALIC, false)
}
