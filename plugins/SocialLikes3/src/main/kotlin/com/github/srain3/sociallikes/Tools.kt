package com.github.srain3.sociallikes

import com.fren_gor.ultimateAdvancementAPI.UltimateAdvancementAPI
import com.github.srain3.sociallikes.Events.idKey
import com.github.srain3.sociallikes.command.SLUpdate
import com.github.srain3.sociallikes.datas.Data
import com.github.srain3.sociallikes.datas.SLData
import com.github.srain3.sociallikes.discord.SLDiscord
import java.io.File
import me.realized.tokenmanager.api.TokenManager
import net.luckperms.api.LuckPermsProvider
import org.bukkit.Bukkit
import org.bukkit.ChatColor
import org.bukkit.Material
import org.bukkit.block.BlockState
import org.bukkit.block.Sign
import org.bukkit.block.sign.Side
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemFlag
import org.bukkit.inventory.ItemStack
import org.bukkit.persistence.PersistentDataType
import org.bukkit.plugin.java.JavaPlugin.getPlugin
import kotlin.collections.set

object Tools {
  /** JavaPluginクラス(Main) */
  val plugin by lazy { getPlugin(SocialLikes::class.java) }
  /** (SocialLikes)←これの判定用 */
  val slSignRegex = Regex("""\(SocialLikes\)""")
  /** \[SocialLikes]←これの判定用(エルちゃん(カイザー)製SL看板用) */
  val oldSlSignRegex = Regex("""\[SocialLikes]""")
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

  fun isSLSign(block: BlockState): Boolean {
    if (block !is Sign) return false
    val unColorFrontL0 = block.getSide(Side.FRONT).getLine(0).unColor()
    return slSignRegex.containsMatchIn(unColorFrontL0)
  }

  fun isLegacySLSign(block: BlockState): Boolean {
    if (block !is Sign) return false
    val unColorFrontL0 = block.getSide(Side.FRONT).getLine(0).unColor()
    return oldSlSignRegex.containsMatchIn(unColorFrontL0)
  }

  fun updateSLSign(currentSLData: SLData, block: BlockState){
    val newData =
      SLData(
        currentSLData.id,
        block.location,
        currentSLData.time,
        currentSLData.owner,
        currentSLData.title,
        currentSLData.likes,
        currentSLData.likesWithTimestamp,
        currentSLData.check,
        currentSLData.comment,
        block.world.name,
        currentSLData.discordTextID,
      )
    Data.delID(currentSLData, true)
    Data.save(newData)
    if (currentSLData.loc.world != null) {
      val state = currentSLData.loc.block.state
      if (state is Sign) {
        state.block.blockData = Material.AIR.createBlockData()
        state.update()
      }
    }
    // Discordへ反映
    SLDiscord.changeSLDataToMsg(newData)
  }

  fun updateLegacySLSign(currentSLData: SLData, block: BlockState) {
    if (block !is Sign) return
    var id =
      block
        .getSide(Side.FRONT)
        .line(0)
        .style()
        .color()
        ?.asHexString()
        ?.substring(1)
        ?.toIntOrNull(16) ?: return
    id = -id
    val newData =
      SLData(
        currentSLData.id,
        block.location,
        currentSLData.time,
        currentSLData.owner,
        currentSLData.title,
        currentSLData.likes,
        currentSLData.likesWithTimestamp,
        currentSLData.check,
        currentSLData.comment,
        block.world.name,
        currentSLData.discordTextID,
      )
    Data.delID(currentSLData, true)
    Data.save(newData)
    // 看板の装飾
    block.setLine(0, Tools.socialLikesLOGO)
    block.setLine(1, "&a".color() + currentSLData.title)
    block.setLine(2, "&f${Bukkit.getOfflinePlayer(currentSLData.owner).name}".color())
    block.setLine(
      3,
      "&7Likes&8: &6${currentSLData.likes.count()}${if(currentSLData.check){" &e✓"}else{""}}".color(),
    )

    block.isWaxed = true
    block.persistentDataContainer.set(idKey, PersistentDataType.INTEGER, id)
    block.update()


  }

  /** AdvancementAPI */
  val advAPI by lazy { UltimateAdvancementAPI.getInstance(plugin) }
}
