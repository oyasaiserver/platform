package com.github.srain3.sociallikes

import com.fren_gor.ultimateAdvancementAPI.UltimateAdvancementAPI
import java.io.File
import me.realized.tokenmanager.api.TokenManager
import net.luckperms.api.LuckPermsProvider
import org.bukkit.Bukkit
import org.bukkit.ChatColor
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemFlag
import org.bukkit.inventory.ItemStack
import org.bukkit.plugin.java.JavaPlugin.getPlugin

object Tools {
  /** JavaPluginクラス(Main) */
  val plugin by lazy { getPlugin(SocialLikes::class.java) }

  /** LuckPermsクラス(API) */
  val lp by lazy { LuckPermsProvider.get() }

  /** TokenManagerを返す、無ければnull */
  fun getTokenManager(): TokenManager? {
    val tmPlugin = Bukkit.getServer().pluginManager.getPlugin("TokenManager")
    return if (tmPlugin != null) {
      tmPlugin as TokenManager
    } else {
      null
    }
  }

  fun canUseCreative(player: Player): Boolean {
    val nodes =
        listOf(
            "minecraft.command.gamemode",
            "bukkit.command.gamemode",
            "essentials.gamemode",
            "essentials.gamemode.creative",
        )
    if (player.isOp) return true
    return nodes.any { node -> player.hasPermission(node) }
  }

  /** &を§へ変換 */
  fun String.color(): String {
    return ChatColor.translateAlternateColorCodes('&', this)
  }

  /** §(カラーコード)を除去 */
  fun String.unColor(): String {
    return ChatColor.stripColor(this) ?: this
  }

  /** SocialLikeロゴ？ */
  val socialLikesLOGO = "&8(&5Social&7Likes&8)".color()

  /** SocialLikeロゴ？ */
  val socialLikesLOGOShort = "&8(&5S&7L&8)".color()

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
    ItemFlag.values().forEach { meta.addItemFlags(it) }
    this.itemMeta = meta
    return this
  }

  /** プラグイン用フォルダからnameのディレクトリ内にあるファイルを返す */
  fun getFolderToFile(name: String): List<File>? {
    val file = File(plugin.dataFolder, name)
    return if (file.isDirectory) {
      file.listFiles()?.filter { it.isFile }
    } else {
      null
    }
  }

  /** 指定されたディレクトリ内にあるファイルを返す */
  fun getFolderToFile(file: File): List<File>? {
    return if (file.isDirectory) {
      file.listFiles()?.filter { it.isFile }
    } else {
      null
    }
  }

  /** プラグイン用フォルダからnameのディレクトリ内にあるディレクトリを返す */
  fun getFolderToFolder(name: String): List<File>? {
    val file = File(plugin.dataFolder, name)
    return if (file.isDirectory) {
      file.listFiles()?.filter { it.isDirectory }
    } else {
      null
    }
  }

  /** 指定されたディレクトリ内にあるディレクトリを返す */
  fun getFolderToFolder(file: File): List<File>? {
    return if (file.isDirectory) {
      file.listFiles()?.filter { it.isDirectory }
    } else {
      null
    }
  }

  /** AdvancementAPI */
  val advAPI by lazy { UltimateAdvancementAPI.getInstance(plugin) }
}
