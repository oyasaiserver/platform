@file:Suppress("DEPRECATION")

package com.baakun.dynamicprofile

import java.time.LocalDateTime
import java.time.format.DateTimeFormatter
import java.util.UUID
import org.bukkit.Bukkit
import org.bukkit.ChatColor
import org.bukkit.Material
import org.bukkit.inventory.ItemFlag
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.meta.SkullMeta
import org.bukkit.plugin.java.JavaPlugin.getPlugin

/** 便利なツール(関数)まとめ */
object Tools {
  /** JavaPluginクラス(Main) */
  val plugin by lazy { getPlugin(DynamicProfile::class.java) }

  /** &を§(カラーコード)へ変換 */
  fun String.color(): String {
    return ChatColor.translateAlternateColorCodes('&', this)
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

  /** ItemStackのフラグを全て設定する */
  fun ItemStack.allFlag(): ItemStack {
    val meta = this.itemMeta ?: return this
    ItemFlag.entries.forEach { meta.addItemFlags(it) }
    this.itemMeta = meta
    return this
  }

  /** [LocalDateTime]を文字列に変える時のフォーマットパターン */
  private val formatter = DateTimeFormatter.ofPattern("YYYY-MM-dd HH:mm:ss")

  /** 「2024-02-20 11:15:20」のような文字列に変換する */
  fun LocalDateTime.toFormat(): String {
    return this.format(formatter)
  }

  /** uuidからスキンを適応したプレイヤーヘッドを返す */
  fun getPlayerHead(uuid: UUID): ItemStack {
    val headItem = ItemStack(Material.PLAYER_HEAD)
    val skullMeta = headItem.itemMeta as SkullMeta
    skullMeta.setOwningPlayer(Bukkit.getOfflinePlayer(uuid))
    headItem.itemMeta = skullMeta
    return headItem
  }
}
