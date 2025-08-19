package icu.oyasai.utilities

import org.bukkit.ChatColor
import org.bukkit.inventory.ItemFlag
import org.bukkit.inventory.ItemStack
import org.bukkit.plugin.java.JavaPlugin.getPlugin

object OyasaiUtilities {
  /** JavaPluginクラス(Main) */
  val plugin by lazy { getPlugin(Main::class.java) }

  /** 好きな文字(デフォ:&)を§へ変換 */
  fun String.color(char: Char = '&'): String {
    return ChatColor.translateAlternateColorCodes(char, this)
  }

  /** §(カラーコード)を除去 */
  fun String.unColor(): String {
    return ChatColor.stripColor(this) ?: this
  }

  /** ItemStackに表示名と説明を追加する(自動カラー化付き) */
  fun ItemStack.addText(title: String?, lore: MutableList<String>): ItemStack {
    val meta = this.itemMeta ?: return this
    meta.setDisplayName(title?.color())
    meta.lore = lore.map { it.color() }
    this.itemMeta = meta
    return this
  }

  /** ItemStackの非表示フラグをすべて追加する */
  fun ItemStack.allHide(): ItemStack {
    val meta = this.itemMeta ?: return this
    ItemFlag.entries.forEach { flag -> meta.addItemFlags(flag) }
    this.itemMeta = meta
    return this
  }
}
