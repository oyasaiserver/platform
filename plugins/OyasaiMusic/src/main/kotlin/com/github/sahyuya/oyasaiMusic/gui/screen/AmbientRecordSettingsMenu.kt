package com.github.sahyuya.oyasaiMusic.gui

import com.github.sahyuya.oyasaiMusic.OyasaiMusic
import com.github.sahyuya.oyasaiMusic.item.AmbientPlaybackRange
import com.github.sahyuya.oyasaiMusic.item.AmbientRange
import com.github.sahyuya.oyasaiMusic.item.PhysicalRecordItem
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.entity.Player
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.event.inventory.InventoryCloseEvent
import org.bukkit.event.inventory.InventoryType
import org.bukkit.inventory.Inventory

/**
 * 環境BGM用レコードの設定画面（UI/UX設計書9章「Shift+右クリックで設定画面(ホッパーサイズ)を開く」）。
 * プレイヤーが手に持っているレコードアイテム（[handSlot]の位置）のPDCを直接読み書きする。
 * 6×9のSPA構造とは別の、独立したホッパー(5スロット)インベントリのため[BaseGridMenu]は使わない。
 */
class AmbientRecordSettingsMenu(
    private val plugin: OyasaiMusic,
    override val viewer: Player,
    private val handSlot: Int,
) : OyasaiMusicMenu {

  companion object {
    private const val INFO_SLOT = 0
    private const val RANGE_SLOT = 1
    private const val TRIGGER_SLOT = 2
    private const val LOOP_SLOT = 3
    private const val CLOSE_SLOT = 4
  }

  override val inventory: Inventory =
      Bukkit.createInventory(
          OyasaiMusicMenuHolder(this),
          InventoryType.HOPPER,
          Component.text("環境BGM設定"),
      )

  init {
    render()
  }

  override fun refresh() = render()

  private fun currentItem(): org.bukkit.inventory.ItemStack? = viewer.inventory.getItem(handSlot)

  private fun render() {
    val item = currentItem()
    if (item == null || !PhysicalRecordItem.isRecordItem(plugin, item)) {
      (0..4).forEach { inventory.setItem(it, null) }
      inventory.setItem(
          RANGE_SLOT,
          GuiItemBuilder(Material.BARRIER)
              .name(Component.text("アイテムが見つかりません", NamedTextColor.RED))
              .build(),
      )
      return
    }
    val range = PhysicalRecordItem.range(plugin, item)
    val maximumRange = AmbientRange.maximumFor(viewer)
    val trigger = PhysicalRecordItem.trigger(plugin, item)
    val loop = PhysicalRecordItem.loop(plugin, item)

    inventory.setItem(
        INFO_SLOT,
        GuiItemBuilder(Material.KNOWLEDGE_BOOK)
            .name(Component.text("再生範囲の設定上限", NamedTextColor.YELLOW))
            .lore(
                Component.text(
                    "権限による最大値: ${maximumRange?.label ?: "設定不可"}",
                    if (maximumRange == null) NamedTextColor.RED else NamedTextColor.AQUA,
                ),
                Component.text("数値は1以上、ワールド全体は world と入力", NamedTextColor.DARK_GRAY),
            )
            .build(),
    )

    inventory.setItem(
        RANGE_SLOT,
        GuiItemBuilder(Material.BEACON)
            .name(
                Component.text(
                    "再生範囲: ${range.label}",
                    if (AmbientRange.canUse(viewer, range)) NamedTextColor.AQUA
                    else NamedTextColor.RED,
                )
            )
            .lore(
                Component.text(
                    "設定可能な最大範囲: ${maximumRange?.label ?: "権限なし"}",
                    NamedTextColor.DARK_GRAY,
                ),
                Component.text("クリックして数値を入力", NamedTextColor.DARK_GRAY),
                Component.text("ワールド全体は world と入力", NamedTextColor.DARK_GRAY),
            )
            .build(),
    )
    inventory.setItem(
        TRIGGER_SLOT,
        GuiItemBuilder(Material.REDSTONE_TORCH)
            .name(Component.text("トリガー: ${trigger.label}", NamedTextColor.GOLD))
            .lore(Component.text("クリックで切替", NamedTextColor.DARK_GRAY))
            .build(),
    )
    inventory.setItem(
        LOOP_SLOT,
        GuiItemBuilder(Material.LEAD)
            .name(Component.text("ループ: ${if (loop) "ON" else "OFF"}", NamedTextColor.LIGHT_PURPLE))
            .lore(Component.text("クリックで切替", NamedTextColor.DARK_GRAY))
            .glint(loop)
            .build(),
    )
    inventory.setItem(
        CLOSE_SLOT,
        GuiItemBuilder(Material.BARRIER).name(Component.text("閉じる", NamedTextColor.RED)).build(),
    )
  }

  override fun onClick(event: InventoryClickEvent) {
    val item = currentItem()
    if (item == null || !PhysicalRecordItem.isRecordItem(plugin, item)) return
    when (event.rawSlot) {
      RANGE_SLOT -> openRangeInput(item)
      TRIGGER_SLOT ->
          update(
              PhysicalRecordItem.withTrigger(
                  plugin,
                  item,
                  PhysicalRecordItem.trigger(plugin, item).next(),
              )
          )
      LOOP_SLOT ->
          update(PhysicalRecordItem.withLoop(plugin, item, !PhysicalRecordItem.loop(plugin, item)))
      CLOSE_SLOT -> viewer.closeInventory()
    }
  }

  override fun onClose(event: InventoryCloseEvent) {
    // ホッパーGUIはMenuManagerの通常ナビゲーション対象外（履歴に積まない一時的な小画面）のため、
    // 特別な後処理は無し。設定は都度PDCへ即時反映済み。
  }

  private fun update(newItem: org.bukkit.inventory.ItemStack) {
    viewer.inventory.setItem(handSlot, newItem)
    render()
  }

  private fun openRangeInput(item: org.bukkit.inventory.ItemStack) {
    val maximum = AmbientRange.maximumFor(viewer)
    if (maximum == null) {
      viewer.sendMessage("§c環境BGMの再生範囲を使う権限がありません。")
      return
    }
    val current = PhysicalRecordItem.range(plugin, item)
    AnvilTextInputSession.open(
        plugin = plugin,
        player = viewer,
        title = Component.text("再生範囲を入力"),
        initialText = current.blocks?.toString() ?: "world",
    ) { input ->
      val selected = parseRange(input)
      if (selected == null) {
        viewer.sendMessage("§c再生範囲は1以上の整数、または world で入力してください。")
        reopen()
        return@open
      }
      if (!AmbientRange.canUse(viewer, selected)) {
        viewer.sendMessage("§c設定可能な最大再生範囲は ${maximum.label} です。")
        reopen()
        return@open
      }
      val latest = currentItem()
      if (latest == null || !PhysicalRecordItem.isRecordItem(plugin, latest)) {
        viewer.sendMessage("§c設定対象のレコードが見つかりません。")
        return@open
      }
      viewer.inventory.setItem(handSlot, PhysicalRecordItem.withRange(plugin, latest, selected))
      viewer.sendMessage("§a再生範囲を ${selected.label} に設定しました。")
      reopen()
    }
  }

  private fun parseRange(input: String): AmbientPlaybackRange? {
    val normalized = input.trim().lowercase()
    if (normalized in setOf("world", "ワールド", "全体", "ワールド全体")) {
      return AmbientPlaybackRange.WORLD
    }
    val blocks = normalized.toIntOrNull() ?: return null
    if (blocks !in 1..AmbientPlaybackRange.MAX_NUMERIC_BLOCKS) return null
    return AmbientPlaybackRange(blocks)
  }

  private fun reopen() {
    if (!viewer.isOnline) return
    plugin.menuManager.openTransient(
        viewer,
        AmbientRecordSettingsMenu(plugin, viewer, handSlot),
    )
  }
}
