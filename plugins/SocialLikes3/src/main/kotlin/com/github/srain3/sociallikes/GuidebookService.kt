package com.github.srain3.sociallikes

import com.github.srain3.sociallikes.Tools.addText
import com.github.srain3.sociallikes.Tools.allFlag
import com.github.srain3.sociallikes.Tools.color
import com.github.srain3.sociallikes.command.SLtp.toYaw
import com.github.srain3.sociallikes.datas.Data
import com.github.srain3.sociallikes.datas.GuidebookCompletion
import com.github.srain3.sociallikes.datas.GuidebookData
import com.github.srain3.sociallikes.datas.GuidebookProgress
import com.github.srain3.sociallikes.datas.GuidebookRules
import com.github.srain3.sociallikes.datas.GuidebookType
import com.github.srain3.sociallikes.datas.SLData
import com.github.srain3.sociallikes.datas.SLDatabase
import java.util.UUID
import org.bukkit.Bukkit
import org.bukkit.Color
import org.bukkit.FireworkEffect
import org.bukkit.Location
import org.bukkit.Material
import org.bukkit.NamespacedKey
import org.bukkit.Sound
import org.bukkit.block.BlockFace
import org.bukkit.block.Sign
import org.bukkit.block.data.Directional
import org.bukkit.block.data.Rotatable
import org.bukkit.entity.Firework
import org.bukkit.entity.Player
import org.bukkit.event.player.PlayerTeleportEvent
import org.bukkit.inventory.ItemStack
import org.bukkit.persistence.PersistentDataType

object GuidebookService {
  const val OFFICIAL_PERMISSION = "sociallikes.guidebook.official"
  private const val MAX_TITLE_LENGTH = 32

  val touristKey = NamespacedKey(Tools.plugin, "guidebook_id")
  val editorKey = NamespacedKey(Tools.plugin, "guidebook_editor_id")

  data class EntryView(
      val buildId: Int,
      val data: SLData?,
      val valid: Boolean,
      val liked: Boolean,
  ) {
    val canGuide: Boolean
      get() = valid && !liked && data != null
  }

  private enum class TeleportResult {
    SUCCESS,
    FAILED,
    UNAVAILABLE,
  }

  fun touristId(item: ItemStack?): Int? =
      item?.itemMeta?.persistentDataContainer?.get(touristKey, PersistentDataType.INTEGER)

  fun editorId(item: ItemStack?): Int? =
      item?.itemMeta?.persistentDataContainer?.get(editorKey, PersistentDataType.INTEGER)

  fun createTouristItem(guidebook: GuidebookData): ItemStack =
      ItemStack(Material.BOOK).apply {
        allFlag()
        addText(
            "&a旅行ガイドブック&r「${guidebook.title}」",
            mutableListOf(
                if (guidebook.type == GuidebookType.OFFICIAL) "&6★ 公式ガイド" else "&7個人ガイド",
                "&7左クリック: 次の未発見建築へ",
                "&7右クリック: ガイド情報",
            ),
        )
        itemMeta =
            itemMeta.apply {
              persistentDataContainer.set(touristKey, PersistentDataType.INTEGER, guidebook.id)
            }
      }

  fun createEditorItem(guidebook: GuidebookData): ItemStack =
      ItemStack(Material.WRITABLE_BOOK).apply {
        allFlag()
        addText(
            "&e編集用ガイドブック&r「${guidebook.title}」",
            mutableListOf("&c編集キー", "&7右クリック: 編集画面を開く"),
        )
        itemMeta =
            itemMeta.apply {
              persistentDataContainer.set(editorKey, PersistentDataType.INTEGER, guidebook.id)
            }
      }

  fun give(player: Player, item: ItemStack) {
    player.inventory.addItem(item).values.forEach {
      player.world.dropItemNaturally(player.location, it)
    }
    player.playSound(player, Sound.ENTITY_ITEM_PICKUP, 1F, 1F)
  }

  fun create(player: Player, type: GuidebookType, rawTitle: String): GuidebookData? {
    val title = rawTitle.trim()
    if (!GuidebookRules.isValidTitle(title, MAX_TITLE_LENGTH)) {
      player.sendMessage(
          Tools.socialLikesLOGO + " &cタイトルは1〜${MAX_TITLE_LENGTH}文字で、カラーコードなしで入力してください。".color()
      )
      return null
    }
    if (type == GuidebookType.OFFICIAL && !player.hasPermission(OFFICIAL_PERMISSION)) {
      player.sendMessage(Tools.socialLikesLOGO + " &c公式ガイドを作成する権限がありません。".color())
      return null
    }
    if (type == GuidebookType.PERSONAL) {
      val limit = personalBookLimit()
      val count = SLDatabase.countPersonalGuidebooksBlocking(player.uniqueId)
      if (!GuidebookRules.canCreatePersonal(count, limit)) {
        player.sendMessage(Tools.socialLikesLOGO + " &c個人ガイドは${limit}冊までです。".color())
        return null
      }
    }
    val id =
        SLDatabase.createGuidebookBlocking(type, player.uniqueId, title)
            ?: run {
              player.sendMessage(Tools.socialLikesLOGO + " &cガイドブックを作成できませんでした。".color())
              return null
            }
    return SLDatabase.loadGuidebookBlocking(id)?.also {
      give(player, createEditorItem(it))
      player.sendMessage(Tools.socialLikesLOGO + " &a「${it.title}」を作成しました。".color())
    }
  }

  fun canEdit(player: Player, guidebook: GuidebookData): Boolean =
      when (guidebook.type) {
        GuidebookType.PERSONAL -> guidebook.creatorUuid == player.uniqueId
        GuidebookType.OFFICIAL -> player.hasPermission(OFFICIAL_PERMISSION)
      }

  fun entries(guidebookId: Int, playerUuid: UUID): List<EntryView> =
      SLDatabase.loadGuidebookEntriesBlocking(guidebookId).map { buildId ->
        val data = Data.getSLData(buildId)
        EntryView(
            buildId = buildId,
            data = data,
            valid =
                data?.let {
                  val world = Bukkit.getWorld(it.worldName) ?: return@let false
                  !world.isChunkLoaded(it.loc.blockX shr 4, it.loc.blockZ shr 4) ||
                      findValidSign(it) != null
                } ?: false,
            liked = data?.likes?.contains(playerUuid) == true,
        )
      }

  fun progress(entries: List<EntryView>): GuidebookProgress =
      GuidebookRules.progress(
          entries.filter(EntryView::valid).map(EntryView::buildId),
          entries.filter(EntryView::liked).map(EntryView::buildId).toSet(),
      )

  fun addBuild(player: Player, guidebookId: Int, build: SLData): Boolean {
    val guidebook = editableGuidebook(player, guidebookId) ?: return false
    if (guidebook.type == GuidebookType.PERSONAL && build.owner != player.uniqueId) {
      player.sendMessage(Tools.socialLikesLOGO + " &c個人ガイドには自分の建築だけ追加できます。".color())
      return false
    }
    val added = SLDatabase.addGuidebookEntryBlocking(guidebookId, build.id, entryLimit())
    player.sendMessage(
        Tools.socialLikesLOGO +
            if (added) {
              " &a「${build.title}」をガイドに追加しました。".color()
            } else {
              " &c追加済み、または1冊の上限${entryLimit()}件に達しています。".color()
            }
    )
    return added
  }

  fun setPublished(player: Player, guidebookId: Int, published: Boolean): Boolean {
    val guidebook = editableGuidebook(player, guidebookId) ?: return false
    if (published) {
      val builds = SLDatabase.loadGuidebookEntriesBlocking(guidebookId).mapNotNull(Data::getSLData)
      if (builds.isEmpty()) {
        player.sendMessage(Tools.socialLikesLOGO + " &c建築を1件以上追加してください。".color())
        return false
      }
      if (
          guidebook.type == GuidebookType.PERSONAL &&
              builds.any { it.owner != guidebook.creatorUuid }
      ) {
        player.sendMessage(Tools.socialLikesLOGO + " &c他のプレイヤーの建築が含まれているため公開できません。".color())
        return false
      }
    }
    return SLDatabase.setGuidebookPublishedBlocking(guidebookId, published).also { changed ->
      if (changed) {
        player.sendMessage(
            Tools.socialLikesLOGO + if (published) " &a公開しました。".color() else " &e非公開にしました。".color()
        )
      }
    }
  }

  fun setDescription(player: Player, guidebookId: Int, description: String): Boolean {
    editableGuidebook(player, guidebookId) ?: return false
    return SLDatabase.setGuidebookDescriptionBlocking(guidebookId, description).also { saved ->
      player.sendMessage(
          Tools.socialLikesLOGO +
              if (saved) " &a説明文を保存しました。".color() else " &c説明文を保存できませんでした。".color()
      )
    }
  }

  fun removeBuild(player: Player, guidebookId: Int, buildId: Int): Boolean {
    editableGuidebook(player, guidebookId) ?: return false
    return SLDatabase.removeGuidebookEntryBlocking(guidebookId, buildId)
  }

  fun moveBuild(player: Player, guidebookId: Int, buildId: Int, offset: Int): Boolean {
    editableGuidebook(player, guidebookId) ?: return false
    return SLDatabase.moveGuidebookEntryBlocking(guidebookId, buildId, offset)
  }

  fun delete(player: Player, guidebookId: Int): Boolean {
    editableGuidebook(player, guidebookId) ?: return false
    return SLDatabase.deleteGuidebookBlocking(guidebookId).also { deleted ->
      if (deleted) player.sendMessage(Tools.socialLikesLOGO + " &eガイドブックを削除しました。".color())
    }
  }

  fun teleportToNext(player: Player, guidebook: GuidebookData): Int? {
    val entries = entries(guidebook.id, player.uniqueId)
    val candidates = entries.filter(EntryView::canGuide)
    for (entry in candidates) {
      val data = entry.data ?: continue
      when (teleport(player, data)) {
        TeleportResult.SUCCESS -> return data.id
        TeleportResult.FAILED -> return null
        TeleportResult.UNAVAILABLE -> continue
      }
    }
    val progress = progress(entries)
    player.sendMessage(
        Tools.socialLikesLOGO +
            when {
              progress.complete -> " &aコンプリート済みです。".color()
              candidates.isNotEmpty() -> " &cこのガイドブックは現在案内不可です。".color()
              else -> " &e案内できる未発見の建築がありません。".color()
            }
    )
    return null
  }

  fun teleportToBuild(player: Player, buildId: Int): Boolean {
    val result = Data.getSLData(buildId)?.let { teleport(player, it) } ?: TeleportResult.UNAVAILABLE
    return when (result) {
      TeleportResult.SUCCESS -> true
      TeleportResult.FAILED -> false
      TeleportResult.UNAVAILABLE -> {
        player.sendMessage(Tools.socialLikesLOGO + " &cこの建築へは現在案内できません。".color())
        false
      }
    }
  }

  fun handleLike(player: Player, buildId: Int) {
    GuidebookListener.releaseTeleportCooldown(player.uniqueId, buildId)
    SLDatabase.loadPublishedGuidebooksContainingBuildBlocking(buildId).forEach { guidebook ->
      val guidebookProgress = progress(entries(guidebook.id, player.uniqueId))
      if (!guidebookProgress.complete) return@forEach
      SLDatabase.recordGuidebookCompletion(guidebook.id, player.uniqueId) { inserted ->
        Bukkit.getScheduler()
            .runTask(
                Tools.plugin,
                Runnable {
                  val onlinePlayer = Bukkit.getPlayer(player.uniqueId) ?: return@Runnable
                  when (GuidebookRules.completion(guidebookProgress, !inserted)) {
                    GuidebookCompletion.FIRST -> celebrateFirst(onlinePlayer, guidebook)
                    GuidebookCompletion.REPEAT -> celebrateRepeat(onlinePlayer, guidebook)
                    GuidebookCompletion.NONE -> Unit
                  }
                },
            )
      }
    }
  }

  fun authorName(uuid: UUID): String = Bukkit.getOfflinePlayer(uuid).name ?: "不明"

  private fun editableGuidebook(player: Player, id: Int): GuidebookData? {
    val guidebook = SLDatabase.loadGuidebookBlocking(id)
    if (guidebook == null || !canEdit(player, guidebook)) {
      player.sendMessage(Tools.socialLikesLOGO + " &cこのガイドブックは編集できません。".color())
      return null
    }
    return guidebook
  }

  private fun findValidSign(data: SLData): Sign? {
    val world = Bukkit.getWorld(data.worldName) ?: return null
    if (!world.getChunkAt(data.loc.blockX shr 4, data.loc.blockZ shr 4).load()) return null
    val sign =
        world.getBlockAt(data.loc.blockX, data.loc.blockY, data.loc.blockZ).state as? Sign
            ?: return null
    if (Tools.isSLSign(sign)) {
      if (Events.readSignId(sign) != data.id) return null
    } else if (!Tools.isLegacySLSign(sign)) {
      return null
    }
    return sign
  }

  private fun safeDestination(data: SLData): Location? {
    val sign = findValidSign(data) ?: return null
    val face =
        when (val blockData = sign.blockData) {
          is Directional -> blockData.facing
          is Rotatable -> blockData.rotation
          else -> BlockFace.NORTH
        }
    val destination =
        sign.location
            .clone()
            .add(face.modX.toDouble(), 0.0, face.modZ.toDouble())
            .add(0.5, 0.0, 0.5)
    destination.yaw = face.oppositeFace.toYaw()
    destination.pitch = 0F
    val feet = destination.block
    val head = feet.getRelative(BlockFace.UP)
    val support = feet.getRelative(BlockFace.DOWN)
    val dangerous = listOf(feet.type, head.type, support.type).any(::isDangerous)
    return destination.takeIf {
      GuidebookRules.isSafeDestination(
          signValid = true,
          worldLoaded = Bukkit.getWorld(data.worldName) != null,
          feetPassable = feet.isPassable,
          headPassable = head.isPassable,
          supportSolid = support.type.isSolid,
          dangerous = dangerous,
      )
    }
  }

  private fun teleport(player: Player, data: SLData): TeleportResult {
    val destination = safeDestination(data) ?: return TeleportResult.UNAVAILABLE
    if (!player.teleport(destination, PlayerTeleportEvent.TeleportCause.PLUGIN)) {
      player.sendMessage(Tools.socialLikesLOGO + " &cテレポートできませんでした。".color())
      return TeleportResult.FAILED
    }
    player.sendMessage(Tools.socialLikesLOGO + " &a「${data.title}」へ案内しました。".color())
    return TeleportResult.SUCCESS
  }

  private fun isDangerous(material: Material): Boolean =
      material in
          setOf(
              Material.LAVA,
              Material.FIRE,
              Material.SOUL_FIRE,
              Material.MAGMA_BLOCK,
              Material.CACTUS,
              Material.CAMPFIRE,
              Material.SOUL_CAMPFIRE,
              Material.SWEET_BERRY_BUSH,
              Material.POWDER_SNOW,
              Material.WITHER_ROSE,
          )

  private fun personalBookLimit(): Int =
      Tools.plugin.config.getInt("guidebook.personalBookLimit", 5).coerceAtLeast(1)

  private fun entryLimit(): Int =
      Tools.plugin.config.getInt("guidebook.entriesPerBookLimit", 30).coerceAtLeast(1)

  private fun celebrateFirst(player: Player, guidebook: GuidebookData) {
    Bukkit.broadcastMessage(
        Tools.socialLikesLOGO + " &6${player.name}さんが旅行ガイド「${guidebook.title}」を初コンプリートしました！".color()
    )
    player.world.spawn(player.location, Firework::class.java).apply {
      fireworkMeta =
          fireworkMeta.apply {
            addEffect(
                FireworkEffect.builder()
                    .with(FireworkEffect.Type.BALL_LARGE)
                    .withColor(Color.LIME, Color.YELLOW)
                    .withTrail()
                    .build()
            )
            power = 1
          }
    }
  }

  private fun celebrateRepeat(player: Player, guidebook: GuidebookData) {
    player.sendMessage(
        Tools.socialLikesLOGO + " &a旅行ガイド「${guidebook.title}」をもう一度コンプリートしました！".color()
    )
    player.playSound(player, Sound.UI_TOAST_CHALLENGE_COMPLETE, 1F, 1F)
  }
}
