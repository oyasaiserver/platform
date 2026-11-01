package com.github.sahyuya.oyasaiMusic.gui

import com.github.sahyuya.oyasaiMusic.model.Song
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor
import net.kyori.adventure.text.format.TextDecoration
import org.bukkit.Material
import org.bukkit.NamespacedKey
import org.bukkit.inventory.ItemFlag
import org.bukkit.inventory.ItemStack
import org.bukkit.persistence.PersistentDataType

/** 楽曲題名は装飾コードとして解釈せず素通しで表示する。`&`/`§`を含む題名（`R&B`等）が 色・装飾化けや消失を起こさないようにする。色指定がない部分は白、イタリックは無効。 */
fun formattedSongTitle(title: String): Component =
    Component.text(title, NamedTextColor.WHITE).decoration(TextDecoration.ITALIC, false)

/** 楽曲名の直後に通常プレイヤーにも見えるMusic IDを一貫して表示する。 */
fun songTitle(song: Song): Component =
    formattedSongTitle(song.title)
        .append(Component.text("  #${song.id ?: "-"}", NamedTextColor.DARK_GRAY))

/** GUI表示用ItemStackを組み立てるビルダー。 全アイテムに共通で「イタリック無効」を適用する（バニラ既定のイタリックはGUIでは見づらいため）。 */
class GuiItemBuilder(private val material: Material) {

  private var name: Component? = null
  private val lore = mutableListOf<Component>()
  private var glint: Boolean = false
  private val tags = mutableMapOf<NamespacedKey, String>()

  fun name(component: Component) = apply {
    this.name = component.decoration(TextDecoration.ITALIC, false)
  }

  fun lore(vararg lines: Component) = apply {
    lines.forEach { lore += it.decoration(TextDecoration.ITALIC, false) }
  }

  fun lore(lines: List<Component>) = apply {
    lines.forEach { lore += it.decoration(TextDecoration.ITALIC, false) }
  }

  fun glint(glint: Boolean = true) = apply { this.glint = glint }

  fun tag(key: NamespacedKey, value: String) = apply { tags[key] = value }

  fun build(): ItemStack {
    val item = ItemStack(material)
    item.editMeta { meta ->
      name?.let { meta.displayName(it) }
      // バニラのレコード名やBundleの「空」など、素材由来のLoreをGUIへ持ち込まない。
      meta.lore(lore)
      // レコードの演奏者名やBundleの内容量は通常のLoreではなく「追加ツールチップ」なので、
      // 専用フラグで非表示にする（このビルダーで指定したLoreは維持される）。
      meta.addItemFlags(ItemFlag.HIDE_ADDITIONAL_TOOLTIP)
      // Paper 1.20.5+: 偽エンチャント無しで光沢のみ付与できるAPI。
      meta.setEnchantmentGlintOverride(if (glint) true else null)
      val pdc = meta.persistentDataContainer
      tags.forEach { (key, value) -> pdc.set(key, PersistentDataType.STRING, value) }
    }
    return item
  }

  companion object {
    /** 余白埋め（灰色ガラス板等）用の空アイテムを作る。ContentGridの枠埋めに使用する。 */
    fun filler(material: Material = Material.GRAY_STAINED_GLASS_PANE): ItemStack =
        GuiItemBuilder(material).name(Component.empty()).build()
  }
}
