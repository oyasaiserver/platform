package com.github.sahyuya.oyasaiMusic.item

import com.github.sahyuya.oyasaiMusic.gui.formattedSongTitle
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor
import net.kyori.adventure.text.format.TextDecoration
import org.bukkit.Material
import org.bukkit.NamespacedKey
import org.bukkit.inventory.ItemFlag
import org.bukkit.inventory.ItemStack
import org.bukkit.persistence.PersistentDataType
import org.bukkit.plugin.Plugin

/** UI/UX設計書9章「環境BGM用レコード」の再生範囲(ブロック数、nullは「全体」)。 */
enum class AmbientRange(val blocks: Int?, val label: String, val permission: String) {
    SHORT(16, "16", "oyasaimusic.record.range.16"),
    MEDIUM(64, "64", "oyasaimusic.record.range.64"),
    LONG(256, "256", "oyasaimusic.record.range.256"),
    WORLD(null, "ワールド全体", "oyasaimusic.record.range.world");
}

/** UI/UX設計書9章「環境BGM用レコード」のトリガー種別。 */
enum class AmbientTrigger(val label: String) {
    JUKEBOX("ジュークボックス"),
    REDSTONE("RS信号"),
    PROXIMITY("接近");

    fun next(): AmbientTrigger = entries[(ordinal + 1) % entries.size]
}

/**
 * 購入済みレコードのPDC読み書きを担当する。
 * 楽曲ID・再生範囲・トリガー・ループ設定を1つのアイテムに保存し、購入用と環境BGM用を
 * 同じレコードとして扱う。
 */
object PhysicalRecordItem {

    private fun songIdKey(plugin: Plugin) = NamespacedKey(plugin, "record_song_id")
    private fun rangeKey(plugin: Plugin) = NamespacedKey(plugin, "record_range")
    private fun triggerKey(plugin: Plugin) = NamespacedKey(plugin, "record_trigger")
    private fun loopKey(plugin: Plugin) = NamespacedKey(plugin, "record_loop")

    /**
     * 「レコードを購入」時に生成する、環境BGM設定込みのアイテムを作る。
     * 既定値: 再生範囲=16、トリガー=ジュークボックス、ループ=OFF。
     */
    fun create(plugin: Plugin, material: Material, songId: Long, title: String, authorName: String): ItemStack {
        val item = ItemStack(material)
        item.editMeta { meta ->
            meta.displayName(
                formattedSongTitle(title)
                    .append(Component.text("  #$songId", NamedTextColor.DARK_GRAY))
                    .decoration(TextDecoration.ITALIC, false),
            )
            meta.lore(
                listOf(
                    Component.text("作者: $authorName", NamedTextColor.GRAY).decoration(TextDecoration.ITALIC, false),
                    Component.text("Shift+右クリック: 環境BGM設定を開く", NamedTextColor.DARK_GRAY).decoration(TextDecoration.ITALIC, false),
                ),
            )
            meta.addItemFlags(ItemFlag.HIDE_ADDITIONAL_TOOLTIP)
            val pdc = meta.persistentDataContainer
            pdc.set(songIdKey(plugin), PersistentDataType.LONG, songId)
            pdc.set(rangeKey(plugin), PersistentDataType.STRING, AmbientRange.SHORT.name)
            pdc.set(triggerKey(plugin), PersistentDataType.STRING, AmbientTrigger.JUKEBOX.name)
            pdc.set(loopKey(plugin), PersistentDataType.BYTE, 0)
        }
        return item
    }

    fun songId(plugin: Plugin, item: ItemStack?): Long? {
        val meta = item?.itemMeta ?: return null
        return meta.persistentDataContainer.get(songIdKey(plugin), PersistentDataType.LONG)
    }

    fun isRecordItem(plugin: Plugin, item: ItemStack?): Boolean = songId(plugin, item) != null

    fun range(plugin: Plugin, item: ItemStack): AmbientRange {
        val name = item.itemMeta?.persistentDataContainer?.get(rangeKey(plugin), PersistentDataType.STRING)
        return AmbientRange.entries.firstOrNull { it.name == name } ?: AmbientRange.MEDIUM
    }

    fun trigger(plugin: Plugin, item: ItemStack): AmbientTrigger {
        val name = item.itemMeta?.persistentDataContainer?.get(triggerKey(plugin), PersistentDataType.STRING)
        return AmbientTrigger.entries.firstOrNull { it.name == name } ?: AmbientTrigger.JUKEBOX
    }

    fun loop(plugin: Plugin, item: ItemStack): Boolean =
        (item.itemMeta?.persistentDataContainer?.get(loopKey(plugin), PersistentDataType.BYTE) ?: 0) != 0.toByte()

    fun withRange(plugin: Plugin, item: ItemStack, range: AmbientRange): ItemStack {
        val copy = item.clone()
        copy.editMeta { it.persistentDataContainer.set(rangeKey(plugin), PersistentDataType.STRING, range.name) }
        return copy
    }

    fun withTrigger(plugin: Plugin, item: ItemStack, trigger: AmbientTrigger): ItemStack {
        val copy = item.clone()
        copy.editMeta { it.persistentDataContainer.set(triggerKey(plugin), PersistentDataType.STRING, trigger.name) }
        return copy
    }

    fun withLoop(plugin: Plugin, item: ItemStack, loop: Boolean): ItemStack {
        val copy = item.clone()
        copy.editMeta { it.persistentDataContainer.set(loopKey(plugin), PersistentDataType.BYTE, if (loop) 1 else 0) }
        return copy
    }
}
