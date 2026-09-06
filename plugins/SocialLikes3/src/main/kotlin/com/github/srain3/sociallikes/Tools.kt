package com.github.srain3.sociallikes

import com.github.srain3.sociallikes.datas.Data
import com.github.srain3.sociallikes.datas.SLData
import com.github.srain3.sociallikes.datas.SLDatabase
import com.github.srain3.sociallikes.discord.SLDiscord
import java.io.File
import java.lang.reflect.Method
import java.util.UUID
import java.util.concurrent.CompletableFuture
import java.util.concurrent.ExecutionException
import java.util.concurrent.TimeUnit
import java.util.concurrent.TimeoutException
import java.util.concurrent.atomic.AtomicBoolean
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
import org.bukkit.plugin.java.JavaPlugin.getPlugin

object Tools {
  private val warnedTokenCommitFallback = AtomicBoolean(false)
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

  /**
   * Looks up the additive API without linking SocialLikes3 against OyasaiToken. This keeps a
   * third-party TokenManager binary-compatible and lets the caller preserve the legacy path.
   */
  fun findAddTokensWithCommit(tokenManager: TokenManager): TokenCommitAdd? {
    val method =
        runCatching {
              tokenManager.javaClass.getMethod(
                  "addTokensWithCommit",
                  UUID::class.java,
                  java.lang.Long.TYPE,
              )
            }
            .getOrNull() ?: return null
    if (!CompletableFuture::class.java.isAssignableFrom(method.returnType)) return null
    return TokenCommitAdd(tokenManager, method)
  }

  fun warnTokenCommitFallback() {
    if (warnedTokenCommitFallback.compareAndSet(false, true)) {
      plugin.logger.warning(
          "TokenManager does not provide addTokensWithCommit(UUID, long); falling back to queue acceptance before clearing offline-like rewards."
      )
    }
  }

  fun awaitTokenCommit(
      tokenCommitAdd: TokenCommitAdd,
      uuid: UUID,
      amount: Long,
      timeoutMillis: Long,
  ): Boolean {
    return try {
      val completion = tokenCommitAdd.method.invoke(tokenCommitAdd.tokenManager, uuid, amount)
      (completion as? CompletableFuture<*>)?.get(timeoutMillis, TimeUnit.MILLISECONDS) == true
    } catch (exception: TimeoutException) {
      plugin.logger.warning(
          "Timed out after ${timeoutMillis}ms waiting to commit offline-like reward $amount for $uuid; leaving it pending."
      )
      false
    } catch (exception: InterruptedException) {
      Thread.currentThread().interrupt()
      plugin.logger.warning(
          "Interrupted while waiting to commit offline-like reward $amount for $uuid."
      )
      false
    } catch (exception: ExecutionException) {
      plugin.logger.warning(
          "Failed to commit offline-like reward $amount for $uuid: ${exception.cause?.message ?: exception.message}"
      )
      false
    } catch (exception: ReflectiveOperationException) {
      plugin.logger.warning(
          "Could not invoke TokenManager addTokensWithCommit for offline-like reward $amount for $uuid: ${exception.message}"
      )
      false
    } catch (exception: IllegalArgumentException) {
      plugin.logger.warning(
          "TokenManager addTokensWithCommit rejected offline-like reward $amount for $uuid: ${exception.message}"
      )
      false
    }
  }

  class TokenCommitAdd
  internal constructor(
      internal val tokenManager: TokenManager,
      internal val method: Method,
  )

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

  fun updateSLSign(currentSLData: SLData, block: BlockState, actorUuid: UUID? = null) {
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

    Data.save(currentSLData, actorUuid)

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
    SLDatabase.recordEvent(currentSLData.id, "moved", actorUuid, beforeJson, afterJson)

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

  fun updateLegacySLSign(currentSLData: SLData, block: BlockState, actorUuid: UUID? = null) {
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

    Data.save(currentSLData, actorUuid)

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
    SLDatabase.recordEvent(currentSLData.id, "moved", actorUuid, beforeJson, afterJson)

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
    Events.markSignIdGeneration2(block, resolvedId)
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
