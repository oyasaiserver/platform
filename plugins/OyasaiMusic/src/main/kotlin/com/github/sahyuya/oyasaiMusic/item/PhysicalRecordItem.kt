package com.github.sahyuya.oyasaiMusic.item

import com.github.sahyuya.oyasaiMusic.gui.formattedSongTitle
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor
import net.kyori.adventure.text.format.TextDecoration
import org.bukkit.Material
import org.bukkit.NamespacedKey
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemFlag
import org.bukkit.inventory.ItemStack
import org.bukkit.persistence.PersistentDataType
import org.bukkit.plugin.Plugin

/** UI/UX設計書9章「環境BGM用レコード」の再生範囲(ブロック数、nullは「全体」)。 */
enum class AmbientRange(val blocks: Int?, val label: String, val permission: String) {
  SHORT(16, "16", "oyasaimusic.record.range.16"),
  MEDIUM(64, "64", "oyasaimusic.record.range.64"),
  LONG(256, "256", "oyasaimusic.record.range.256"),
  WORLD(null, "ワールド全体", "oyasaimusic.record.range.world"),
  ;

  companion object {
    /** プレイヤーが使用できる最大範囲。entriesの後ろほど上位の権限として扱う。 */
    fun maximumFor(player: Player): AmbientRange? =
        entries.lastOrNull { player.hasPermission(it.permission) }

    fun canUse(player: Player, range: AmbientPlaybackRange): Boolean {
      val maximum = maximumFor(player) ?: return false
      val requestedBlocks = range.blocks ?: return maximum == WORLD
      return maximum.blocks?.let { requestedBlocks <= it } ?: true
    }
  }
}

/** 実際にレコードへ保存する再生範囲。nullはワールド全体、数値は任意の半径ブロック数。 */
data class AmbientPlaybackRange(val blocks: Int?) {
  init {
    require(blocks == null || blocks in 1..MAX_NUMERIC_BLOCKS)
  }

  val label: String
    get() = blocks?.toString() ?: "ワールド全体"

  companion object {
    const val MAX_NUMERIC_BLOCKS = 30_000_000
    val DEFAULT = AmbientPlaybackRange(16)
    val WORLD = AmbientPlaybackRange(null)
  }
}

/** UI/UX設計書9章「環境BGM用レコード」のトリガー種別。 */
enum class AmbientTrigger(val label: String) {
  JUKEBOX("ジュークボックス"),
  REDSTONE("RS信号"),
  PROXIMITY("接近");

  fun next(): AmbientTrigger = entries[(ordinal + 1) % entries.size]
}

/** 購入済みレコードのPDC読み書きを担当する。 楽曲ID・再生範囲・トリガー・ループ設定を1つのアイテムに保存し、購入用と環境BGM用を 同じレコードとして扱う。 */
object PhysicalRecordItem {

  private fun songIdKey(plugin: Plugin) = NamespacedKey(plugin, "record_song_id")

  private fun rangeKey(plugin: Plugin) = NamespacedKey(plugin, "record_range")

  private fun triggerKey(plugin: Plugin) = NamespacedKey(plugin, "record_trigger")

  private fun loopKey(plugin: Plugin) = NamespacedKey(plugin, "record_loop")

  /** 「レコードを購入」時に生成する、環境BGM設定込みのアイテムを作る。 既定値: 再生範囲=16、トリガー=ジュークボックス、ループ=OFF。 */
  fun create(
      plugin: Plugin,
      material: Material,
      songId: Long,
      title: String,
      authorName: String,
  ): ItemStack {
    val item = ItemStack(material)
    item.editMeta { meta ->
      meta.displayName(
          formattedSongTitle(title)
              .append(Component.text("  #$songId", NamedTextColor.DARK_GRAY))
              .decoration(TextDecoration.ITALIC, false),
      )
      meta.lore(
          listOf(
              Component.text("作者: $authorName", NamedTextColor.GRAY)
                  .decoration(TextDecoration.ITALIC, false),
              Component.text("Shift+右クリック: 環境BGM設定を開く", NamedTextColor.DARK_GRAY)
                  .decoration(TextDecoration.ITALIC, false),
          ),
      )
      meta.addItemFlags(ItemFlag.HIDE_ADDITIONAL_TOOLTIP)
      val pdc = meta.persistentDataContainer
      pdc.set(songIdKey(plugin), PersistentDataType.LONG, songId)
      pdc.set(rangeKey(plugin), PersistentDataType.INTEGER, AmbientPlaybackRange.DEFAULT.blocks!!)
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

  fun range(plugin: Plugin, item: ItemStack): AmbientPlaybackRange {
    val pdc = item.itemMeta?.persistentDataContainer ?: return AmbientPlaybackRange.DEFAULT
    val numeric = pdc.get(rangeKey(plugin), PersistentDataType.INTEGER)
    if (numeric != null) {
      return if (numeric < 0) AmbientPlaybackRange.WORLD
      else AmbientPlaybackRange(numeric.coerceIn(1, AmbientPlaybackRange.MAX_NUMERIC_BLOCKS))
    }

    // 旧仕様（SHORT/MEDIUM/LONG/WORLD）のアイテムもそのまま利用できるようにする。
    val legacyName = pdc.get(rangeKey(plugin), PersistentDataType.STRING)
    val legacy = AmbientRange.entries.firstOrNull { it.name == legacyName } ?: AmbientRange.SHORT
    return legacy.blocks?.let(::AmbientPlaybackRange) ?: AmbientPlaybackRange.WORLD
  }

  fun trigger(plugin: Plugin, item: ItemStack): AmbientTrigger {
    val name =
        item.itemMeta?.persistentDataContainer?.get(triggerKey(plugin), PersistentDataType.STRING)
    return AmbientTrigger.entries.firstOrNull { it.name == name } ?: AmbientTrigger.JUKEBOX
  }

  fun loop(plugin: Plugin, item: ItemStack): Boolean =
      (item.itemMeta?.persistentDataContainer?.get(loopKey(plugin), PersistentDataType.BYTE)
          ?: 0) != 0.toByte()

  fun withRange(plugin: Plugin, item: ItemStack, range: AmbientPlaybackRange): ItemStack {
    val copy = item.clone()
    copy.editMeta {
      it.persistentDataContainer.set(
          rangeKey(plugin),
          PersistentDataType.INTEGER,
          range.blocks ?: -1,
      )
    }
    return copy
  }

  fun withTrigger(plugin: Plugin, item: ItemStack, trigger: AmbientTrigger): ItemStack {
    val copy = item.clone()
    copy.editMeta {
      it.persistentDataContainer.set(triggerKey(plugin), PersistentDataType.STRING, trigger.name)
    }
    return copy
  }

  fun withLoop(plugin: Plugin, item: ItemStack, loop: Boolean): ItemStack {
    val copy = item.clone()
    copy.editMeta {
      it.persistentDataContainer.set(loopKey(plugin), PersistentDataType.BYTE, if (loop) 1 else 0)
    }
    return copy
  }
}
