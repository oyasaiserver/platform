package com.github.srain3.sociallikes

import com.github.srain3.sociallikes.Events.idKey
import com.github.srain3.sociallikes.datas.Data
import com.github.srain3.sociallikes.datas.SLData
import com.github.srain3.sociallikes.datas.SLDatabase
import com.github.srain3.sociallikes.discord.SLDiscord
import java.io.File
import kotlin.collections.set
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
    Bukkit.getServer().servicesManager.getRegistration(TokenManager::class.java)?.provider?.let {
      return it
    }

    return Bukkit.getServer().pluginManager.getPlugin("TokenManager") as? TokenManager
  }

  fun addTokens(player: Player, amount: Long): Boolean {
    val tokenManager = getTokenManager()
    if (tokenManager == null) {
      plugin.logger.warning(
          "TokenManager is not available. Failed to add $amount tokens to ${player.name}."
      )
      return false
    }
    return tokenManager.addTokens(player, amount)
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

  private val legacyAmpersandColorRegex = Regex("(?i)&[0-9A-FK-OR]")
  private var advancementToastDisabled = false

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

  fun updateSLSign(currentSLData: SLData, block: BlockState) {
    val beforeJson =
        com.google.gson
            .Gson()
            .toJson(
                mapOf(
                    "world" to currentSLData.worldName,
                    "x" to currentSLData.loc.x,
                    "y" to currentSLData.loc.y,
                    "z" to currentSLData.loc.z,
                    "sign_material" to currentSLData.signMaterial,
                )
            )

    val oldLoc = currentSLData.loc
    currentSLData.loc = block.location
    currentSLData.worldName = block.world.name
    currentSLData.signMaterial = block.type.name

    Data.save(currentSLData)

    val afterJson =
        com.google.gson
            .Gson()
            .toJson(
                mapOf(
                    "world" to block.world.name,
                    "x" to block.location.x,
                    "y" to block.location.y,
                    "z" to block.location.z,
                    "sign_material" to block.type.name,
                )
            )
    SLDatabase.recordEvent(currentSLData.id, "moved", null, beforeJson, afterJson)

    if (oldLoc.world != null) {
      val state = oldLoc.block.state
      if (state is Sign && state.location != block.location) {
        state.block.blockData = Material.AIR.createBlockData()
        state.update()
      }
    }
    // Discordへ反映
    SLDiscord.changeSLDataToMsg(currentSLData)
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
    val resolvedId = SLDatabase.resolveMigratedId(id)

    val beforeJson =
        com.google.gson
            .Gson()
            .toJson(
                mapOf(
                    "world" to currentSLData.worldName,
                    "x" to currentSLData.loc.x,
                    "y" to currentSLData.loc.y,
                    "z" to currentSLData.loc.z,
                    "sign_material" to currentSLData.signMaterial,
                )
            )

    val oldLoc = currentSLData.loc
    currentSLData.loc = block.location
    currentSLData.worldName = block.world.name
    currentSLData.signMaterial = block.type.name

    Data.save(currentSLData)

    val afterJson =
        com.google.gson
            .Gson()
            .toJson(
                mapOf(
                    "world" to block.world.name,
                    "x" to block.location.x,
                    "y" to block.location.y,
                    "z" to block.location.z,
                    "sign_material" to block.type.name,
                )
            )
    SLDatabase.recordEvent(currentSLData.id, "moved", null, beforeJson, afterJson)

    if (oldLoc.world != null) {
      val state = oldLoc.block.state
      if (state is Sign && state.location != block.location) {
        state.block.blockData = Material.AIR.createBlockData()
        state.update()
      }
    }

    // 看板の装飾
    block.setLine(0, Tools.socialLikesLOGO)
    block.setLine(1, "&a".color() + currentSLData.title)
    block.setLine(2, "&f${Bukkit.getOfflinePlayer(currentSLData.owner).name}".color())
    block.setLine(
        3,
        "&7Likes&8: &6${currentSLData.likes.count()}${if(currentSLData.check){" &e✓"}else{""}}"
            .color(),
    )

    block.isWaxed = true
    block.persistentDataContainer.set(idKey, PersistentDataType.INTEGER, resolvedId)
    block.update()
  }

  fun displaySocialLikeToast(player: Player, icon: ItemStack, text: String): Boolean {
    val fallbackText = text.withoutLegacyColorCodes()
    if (advancementToastDisabled) {
      sendSocialLikeActionBar(player, fallbackText)
      return false
    }
    return try {
      SocialLikeToastSender.display(player, icon, text)
      true
    } catch (throwable: LinkageError) {
      handleAdvancementToastFailure(player, fallbackText, throwable)
    } catch (throwable: RuntimeException) {
      handleAdvancementToastFailure(player, fallbackText, throwable)
    }
  }

  private fun String.withoutLegacyColorCodes(): String {
    return (ChatColor.stripColor(this) ?: this).replace(legacyAmpersandColorRegex, "")
  }

  private fun handleAdvancementToastFailure(
      player: Player,
      text: String,
      throwable: Throwable,
  ): Boolean {
    disableAdvancementToast(throwable)
    sendSocialLikeActionBar(player, text)
    return false
  }

  private fun sendSocialLikeActionBar(player: Player, text: String) {
    player.sendActionBar(text.lines().filter { it.isNotBlank() }.joinToString(" "))
  }

  private fun disableAdvancementToast(throwable: Throwable) {
    advancementToastDisabled = true
    plugin.logger.warning(
        "[SocialLikes3] Advancement toast notification has been disabled: " +
            "${throwable.javaClass.name}: ${throwable.message}"
    )
    plugin.logger.warning("[SocialLikes3] Likes, rewards, and sign updates will continue.")
  }
}
