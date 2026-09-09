package io.oyasai.directstate.settings

import net.kyori.adventure.text.Component
import org.bukkit.*
import org.bukkit.entity.Player
import org.bukkit.event.*
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.InventoryHolder
import org.bukkit.inventory.ItemStack

// AI生成
/** プレイヤー設定の表示とクリック受付。 */
internal class SettingsMenu(
    private val settings: (Player) -> PlayerSettings,
    private val toggle: (Player, Int) -> Unit,
) : Listener {
  /** このプラグインが開いた設定画面だけを、クリックイベントで識別する印。 */
  private class SettingsHolder : InventoryHolder {
    lateinit var menu: Inventory

    /** Bukkitがメニュー所有者の識別に使うインベントリを返す。 */
    override fun getInventory() = menu
  }

  /** 現在設定から27枠のメニューを作り、プレイヤーへ表示する。 */
  fun open(player: Player) {
    val holder = SettingsHolder()
    val menu = Bukkit.createInventory(holder, 27, Component.text("DirectState Settings"))
    holder.menu = menu
    val configured = settings(player)
    val itemlessDisabled = configured.itemlessModesDisabled
    menu.setItem(
        10,
        settingItem(
            Material.PLAYER_HEAD,
            "素手デバッグ棒",
            if (configured.handEnabled) "ON" else "OFF",
            "素手が直感的なデバッグ棒として機能します。",
            "/dsh",
        ),
    )
    menu.setItem(
        12,
        settingItem(
            Material.REDSTONE_TORCH,
            "更新抑制",
            if (configured.updateEnabled) "ON" else "OFF",
            "ブロックアップデートを抑制します。",
            "/dsu",
        ),
    )
    menu.setItem(
        14,
        settingItem(
            Material.GRASS_BLOCK,
            "置換モード",
            if (configured.replacementEnabled) "ON" else "OFF",
            "ブロックを置換できます。",
            "/dsr",
        ),
    )
    val type = configured.typeReplacementMode
    menu.setItem(
        16,
        settingItem(
            Material.COMPARATOR,
            "タイプ置換",
            type.name,
            when {
              itemlessDisabled -> "一括停止中"
              configured.replacementEnabled -> "素材のみを置換します。"
              else -> "置換モードがOFFです。"
            },
            "/dsr type",
        ),
    )
    menu.setItem(
        22,
        settingItem(
            Material.LEVER,
            "一括停止",
            if (itemlessDisabled) "ON" else "OFF",
            "Hand / Update / Replaceを一時停止",
            "/ds tgl",
        ),
    )
    player.openInventory(menu)
  }

  /** 設定名・現在値・説明を共通表示のItemStackへまとめる。 */
  private fun settingItem(
      material: Material,
      name: String,
      value: String,
      vararg description: String,
  ) =
      ItemStack(material).apply {
        editMeta {
          it.displayName(Component.text("$name: $value"))
          it.lore(description.map(Component::text) + Component.text("クリックで変更"))
        }
      }

  @EventHandler
  /** 設定画面の対象スロットだけを受け付け、変更後の画面を作り直す。 */
  fun settingsClick(event: InventoryClickEvent) {
    if (event.view.topInventory.holder !is SettingsHolder) return
    event.isCancelled = true
    val player = event.whoClicked as? Player ?: return
    if (event.rawSlot !in setOf(10, 12, 14, 16, 22)) return
    toggle(player, event.rawSlot)
    open(player)
  }
}
