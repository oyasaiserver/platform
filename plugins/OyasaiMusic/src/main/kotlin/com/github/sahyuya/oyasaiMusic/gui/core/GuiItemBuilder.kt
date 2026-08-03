package com.github.sahyuya.oyasaiMusic.gui

import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.TextDecoration
import org.bukkit.Material
import org.bukkit.NamespacedKey
import org.bukkit.inventory.ItemFlag
import org.bukkit.inventory.ItemStack
import org.bukkit.persistence.PersistentDataType
import com.github.sahyuya.oyasaiMusic.model.Song
import net.kyori.adventure.text.format.NamedTextColor

/**
 * 楽曲題名用の`&`カラーコードを解釈する。
 * `&#` はエスケープとして扱い、文字どおりの`&`を表示する（例: `&#a` → `&a`）。
 * 色指定がない文字列は常に白で、GUIの題名としてイタリックにはしない。
 */
fun formattedSongTitle(title: String): Component {
    val colors = mapOf(
        '0' to NamedTextColor.BLACK, '1' to NamedTextColor.DARK_BLUE, '2' to NamedTextColor.DARK_GREEN,
        '3' to NamedTextColor.DARK_AQUA, '4' to NamedTextColor.DARK_RED, '5' to NamedTextColor.DARK_PURPLE,
        '6' to NamedTextColor.GOLD, '7' to NamedTextColor.GRAY, '8' to NamedTextColor.DARK_GRAY,
        '9' to NamedTextColor.BLUE, 'a' to NamedTextColor.GREEN, 'b' to NamedTextColor.AQUA,
        'c' to NamedTextColor.RED, 'd' to NamedTextColor.LIGHT_PURPLE, 'e' to NamedTextColor.YELLOW,
        'f' to NamedTextColor.WHITE,
    )
    var currentColor = NamedTextColor.WHITE
    var result = Component.empty()
    val text = StringBuilder()

    fun flush() {
        if (text.isNotEmpty()) {
            result = result.append(Component.text(text.toString(), currentColor).decoration(TextDecoration.ITALIC, false))
            text.clear()
        }
    }

    var index = 0
    while (index < title.length) {
        if (title[index] == '&' && index + 1 < title.length) {
            val code = title[index + 1]
            if (code == '#') {
                text.append('&')
                index += 2
                continue
            }
            val color = colors[code.lowercaseChar()]
            if (color != null) {
                flush()
                currentColor = color
                index += 2
                continue
            }
            if (code.equals('r', ignoreCase = true)) {
                flush()
                currentColor = NamedTextColor.WHITE
                index += 2
                continue
            }
        }
        text.append(title[index])
        index++
    }
    flush()
    return result.decoration(TextDecoration.ITALIC, false)
}

/** 楽曲名の直後に通常プレイヤーにも見えるMusic IDを一貫して表示する。 */
fun songTitle(song: Song): Component =
    formattedSongTitle(song.title).append(Component.text("  #${song.id ?: "-"}", NamedTextColor.DARK_GRAY))

/**
 * GUI表示用ItemStackを組み立てるビルダー。
 * 全アイテムに共通で「イタリック無効」を適用する（バニラ既定のイタリックはGUIでは見づらいため）。
 */
class GuiItemBuilder(private val material: Material) {

    private var name: Component? = null
    private val lore = mutableListOf<Component>()
    private var glint: Boolean = false
    private val tags = mutableMapOf<NamespacedKey, String>()

    fun name(component: Component) = apply { this.name = component.decoration(TextDecoration.ITALIC, false) }
    fun lore(vararg lines: Component) = apply { lines.forEach { lore += it.decoration(TextDecoration.ITALIC, false) } }
    fun lore(lines: List<Component>) = apply { lines.forEach { lore += it.decoration(TextDecoration.ITALIC, false) } }
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
        /** 余白埋め（灰色ガラス板等）用の空アイテムを作る。現状は未使用だが今後の調整用に用意。 */
        fun filler(material: Material = Material.GRAY_STAINED_GLASS_PANE): ItemStack =
            GuiItemBuilder(material).name(Component.empty()).build()
    }
}
