package com.github.sahyuya.oyasaiMusic.gui

import com.github.sahyuya.oyasaiMusic.OyasaiMusic
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
        private const val RANGE_SLOT = 0
        private const val TRIGGER_SLOT = 1
        private const val LOOP_SLOT = 2
        private const val INFO_SLOT = 3
        private const val CLOSE_SLOT = 4
    }

    override val inventory: Inventory = Bukkit.createInventory(OyasaiMusicMenuHolder(this), InventoryType.HOPPER, Component.text("環境BGM設定"))

    init { render() }

    override fun refresh() = render()

    private fun currentItem(): org.bukkit.inventory.ItemStack? = viewer.inventory.getItem(handSlot)

    private fun render() {
        val item = currentItem()
        if (item == null || !PhysicalRecordItem.isRecordItem(plugin, item)) {
            (0..4).forEach { inventory.setItem(it, null) }
            inventory.setItem(INFO_SLOT, GuiItemBuilder(Material.BARRIER).name(Component.text("アイテムが見つかりません", NamedTextColor.RED)).build())
            return
        }
        val range = PhysicalRecordItem.range(plugin, item)
        val trigger = PhysicalRecordItem.trigger(plugin, item)
        val loop = PhysicalRecordItem.loop(plugin, item)

        inventory.setItem(
            RANGE_SLOT,
            GuiItemBuilder(Material.BEACON)
                .name(Component.text("再生範囲: ${range.label}", NamedTextColor.AQUA))
                .lore(Component.text("クリックで切替", NamedTextColor.DARK_GRAY))
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
            INFO_SLOT,
            GuiItemBuilder(item.type)
                .name(item.itemMeta?.displayName() ?: Component.text("楽曲", NamedTextColor.WHITE))
                .lore(Component.text("設定はジュークボックスへ設置時に反映されます", NamedTextColor.DARK_GRAY))
                .build(),
        )
        inventory.setItem(CLOSE_SLOT, GuiItemBuilder(Material.BARRIER).name(Component.text("閉じる", NamedTextColor.RED)).build())
    }

    override fun onClick(event: InventoryClickEvent) {
        val item = currentItem()
        if (item == null || !PhysicalRecordItem.isRecordItem(plugin, item)) return
        when (event.rawSlot) {
            RANGE_SLOT -> update(PhysicalRecordItem.withRange(plugin, item, PhysicalRecordItem.range(plugin, item).next()))
            TRIGGER_SLOT -> update(PhysicalRecordItem.withTrigger(plugin, item, PhysicalRecordItem.trigger(plugin, item).next()))
            LOOP_SLOT -> update(PhysicalRecordItem.withLoop(plugin, item, !PhysicalRecordItem.loop(plugin, item)))
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
}
