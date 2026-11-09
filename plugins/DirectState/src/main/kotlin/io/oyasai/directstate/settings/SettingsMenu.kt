package io.oyasai.directstate.settings

import net.kyori.adventure.text.Component
import org.bukkit.*
import org.bukkit.entity.Player
import org.bukkit.event.*
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.event.inventory.InventoryDragEvent
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.InventoryHolder
import org.bukkit.inventory.ItemStack

// AI生成
/** プレイヤー設定の表示とクリック受付。 */
internal class SettingsMenu(
    private val settings: (Player) -> PlayerSettings,
    private val save: (Player, (PlayerSettings) -> Unit) -> Unit,
    private val canUse: (Player, Int) -> Boolean,
    private val toggle: (Player, Int) -> Unit,
) : Listener {
  /** このプラグインが開いた設定画面だけを、クリックイベントで識別する印。 */
  private class SettingsHolder(val page: Page = Page.MAIN) : InventoryHolder {
    lateinit var menu: Inventory

    /** Bukkitがメニュー所有者の識別に使うインベントリを返す。 */
    override fun getInventory() = menu
  }

  private enum class Page {
    MAIN,
    SETTINGS,
    HAND,
    UPDATE,
    REPLACE,
    GENERAL,
    UNIT,
  }

  /** 現在設定から27枠のメニューを作り、プレイヤーへ表示する。 */
  fun open(player: Player) {
    val holder = SettingsHolder()
    val menu = Bukkit.createInventory(holder, 27, Component.text("DirectState"))
    holder.menu = menu
    val configured = settings(player)
    val itemlessDisabled = configured.itemlessModesDisabled
    if (canUse(player, 10))
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
    if (canUse(player, 12))
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
    if (canUse(player, 14))
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
    if (canUse(player, 16))
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
    if (canUse(player, 22))
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
    menu.setItem(18, link(Material.CONDUIT, "設定"))
    player.openInventory(menu)
  }

  private fun link(material: Material, name: String) =
      ItemStack(material).apply { editMeta { it.displayName(Component.text(name)) } }

  private fun openPage(player: Player, page: Page) {
    if (page == Page.MAIN) {
      open(player)
      return
    }
    val holder = SettingsHolder(page)
    val menu =
        Bukkit.createInventory(
            holder,
            27,
            Component.text(
                when (page) {
                  Page.SETTINGS -> "DirectState Settings"
                  Page.HAND -> "Hand Settings"
                  Page.UPDATE -> "Update Settings"
                  Page.REPLACE -> "Replace Settings"
                  Page.GENERAL -> "General Settings"
                  Page.UNIT -> "Adjustment Unit"
                }
            ),
        )
    holder.menu = menu
    val configured = settings(player)
    fun boolean(
        slot: Int,
        material: Material,
        name: String,
        value: Boolean,
        vararg description: String,
    ) {
      menu.setItem(slot, settingItem(material, name, if (value) "ON" else "OFF", *description))
    }
    when (page) {
      Page.SETTINGS -> {
        menu.setItem(10, link(Material.PLAYER_HEAD, "Hand設定"))
        menu.setItem(12, link(Material.REDSTONE_TORCH, "Update設定"))
        menu.setItem(14, link(Material.GRASS_BLOCK, "Replace設定"))
        menu.setItem(16, link(Material.COMPARATOR, "General設定"))
      }
      Page.HAND -> {
        boolean(10, Material.LEVER, "Shiftで移動方向を反転", configured.inverseCushionOnShift, "クッションの移動方向")
        menu.setItem(12, link(Material.STICK, "調整単位: 1/${configured.adjustmentDivisor} block"))
      }
      Page.UPDATE -> {
        boolean(10, Material.PISTON, "強制設置", configured.forcePlacement, "更新抑制中のみ有効")
        boolean(
            12,
            Material.DAYLIGHT_DETECTOR,
            "特殊ブロックの状態保持",
            configured.keepState,
            "日照センサー・クッションなど",
        )
      }
      Page.REPLACE -> menu.setItem(13, link(Material.RED_STAINED_GLASS_PANE, "何もありません"))
      Page.GENERAL -> boolean(10, Material.NOTE_BLOCK, "編集音", configured.editSound)
      Page.UNIT ->
          listOf(64, 32, 16, 8, 4).forEachIndexed { index, divisor ->
            menu.setItem(
                9 + index * 2,
                link(Material.PAPER, "1/$divisor block").apply {
                  editMeta {
                    it.setEnchantmentGlintOverride(configured.adjustmentDivisor == divisor)
                  }
                },
            )
          }
    }
    menu.setItem(18, link(Material.ARROW, "戻る"))
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

  /** 設定画面の対象スロットだけを受け付け、変更後の画面を作り直す。 */
  @EventHandler
  fun settingsClick(event: InventoryClickEvent) {
    val holder = event.view.topInventory.holder as? SettingsHolder ?: return
    event.isCancelled = true
    val player = event.whoClicked as? Player ?: return
    val slot = event.rawSlot
    if (slot !in 0..26 || event.view.topInventory.getItem(slot) == null) return
    if (slot == 18) {
      openPage(
          player,
          when (holder.page) {
            Page.MAIN -> Page.SETTINGS
            Page.SETTINGS -> Page.MAIN
            Page.UNIT -> Page.HAND
            else -> Page.SETTINGS
          },
      )
      return
    }
    when (holder.page) {
      Page.MAIN -> {
        if (slot !in setOf(10, 12, 14, 16, 22) || !canUse(player, slot)) return
        toggle(player, slot)
        open(player)
        return
      }
      Page.SETTINGS -> {
        val target =
            mapOf(10 to Page.HAND, 12 to Page.UPDATE, 14 to Page.REPLACE, 16 to Page.GENERAL)[slot]
                ?: return
        openPage(player, target)
        return
      }
      Page.HAND ->
          when (slot) {
            10 -> save(player) { it.inverseCushionOnShift = !it.inverseCushionOnShift }
            12 -> {
              openPage(player, Page.UNIT)
              return
            }
            else -> return
          }
      Page.UPDATE ->
          when (slot) {
            10 -> save(player) { it.forcePlacement = !it.forcePlacement }
            12 -> save(player) { it.keepState = !it.keepState }
            else -> return
          }
      Page.GENERAL -> if (slot == 10) save(player) { it.editSound = !it.editSound } else return
      Page.UNIT -> {
        val divisor = mapOf(9 to 64, 11 to 32, 13 to 16, 15 to 8, 17 to 4)[slot] ?: return
        save(player) { it.adjustmentDivisor = divisor }
      }
      Page.REPLACE -> return
    }
    openPage(player, holder.page)
  }

  @EventHandler
  fun settingsDrag(event: InventoryDragEvent) {
    if (event.view.topInventory.holder is SettingsHolder && event.rawSlots.any { it < 27 })
        event.isCancelled = true
  }
}
