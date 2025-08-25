@file:Suppress("DEPRECATION")

package com.baakun.dynamicprofile.util

import com.baakun.dynamicprofile.DynamicProfile
import com.baakun.dynamicprofile.DynamicProfile.Companion.UUIDMap
import com.baakun.dynamicprofile.DynamicProfile.Companion.allStats
import com.baakun.dynamicprofile.data.Stats
import com.baakun.dynamicprofile.leaderBoard.LBStats
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter
import java.util.*
import me.realized.tokenmanager.api.TokenManager
import net.milkbowl.vault.economy.Economy
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
  val rewardReceiveStatus = CustomYaml("receiveStatus.yml")
  val levelGroups = CustomYaml("groups.yml")

  /**
   * @param page 0Start
   * @param amount 一度に見せる数
   */
  fun getIndexes(page: Int, amount: Int, size: Int): IntRange {
    val start = page * amount
    val end = (start + amount).coerceAtMost(size)
    return start until end
  }

  fun getFirstEnd(page: Int, amount: Int): Pair<Int, Int> {
    return Pair(page * amount, page * amount + amount - 1)
  }

  fun runEachIndex(page: Int, amount: Int, runnable: Runnable) {
    for (i in page * amount..<page * amount + amount) {
      runnable.run()
    }
  }

  fun getWeeklyLB(uuid: UUID): LBStats {
    return UUIDMap.getOrPut(uuid) { LBStats(uuid) }
  }

  fun getStats(uuid: UUID): Stats {
    return allStats.getOrPut(uuid) { Stats(uuid.toString()) }
  }

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

  /** Vaultプラグイン(お金関係の操作PL)を使うための変数 */
  val econ: Economy? by lazy { getVault() }

  /** Vaultを取得する。失敗するとnullを返す */
  private fun getVault(): Economy? {
    if (Bukkit.getServer().pluginManager.getPlugin("Vault") == null) return null
    val rsp = Bukkit.getServer().servicesManager.getRegistration(Economy::class.java) ?: return null
    return rsp.provider
  }

  /** TokenManagerプラグイン(ポイント関係の操作PL)を使うための変数 */
  val token: TokenManager? by lazy { getTokenManager() }

  /** TokenManagerを取得する。失敗するとnullを返す */
  private fun getTokenManager(): TokenManager? {
    val tokenAPI = Bukkit.getServer().pluginManager.getPlugin("TokenManager") ?: return null
    return if (tokenAPI is TokenManager) {
      tokenAPI
    } else {
      null
    }
  }
}
