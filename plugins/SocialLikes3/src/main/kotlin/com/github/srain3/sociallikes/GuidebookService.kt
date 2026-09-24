package com.github.srain3.sociallikes

import com.github.srain3.sociallikes.Tools.addText
import com.github.srain3.sociallikes.Tools.allFlag
import com.github.srain3.sociallikes.Tools.color
import com.github.srain3.sociallikes.command.SLtp
import com.github.srain3.sociallikes.datas.Data
import com.github.srain3.sociallikes.datas.GuidebookAnnouncement
import com.github.srain3.sociallikes.datas.GuidebookCompletion
import com.github.srain3.sociallikes.datas.GuidebookData
import com.github.srain3.sociallikes.datas.GuidebookProgress
import com.github.srain3.sociallikes.datas.GuidebookRules
import com.github.srain3.sociallikes.datas.GuidebookType
import com.github.srain3.sociallikes.datas.SLData
import com.github.srain3.sociallikes.datas.SLDatabase
import java.util.UUID
import net.kyori.adventure.key.Key
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.event.ClickEvent
import net.kyori.adventure.text.event.HoverEvent
import net.kyori.adventure.text.format.NamedTextColor
import org.bukkit.Bukkit
import org.bukkit.Color
import org.bukkit.FireworkEffect
import org.bukkit.Material
import org.bukkit.NamespacedKey
import org.bukkit.Sound
import org.bukkit.block.Sign
import org.bukkit.entity.Firework
import org.bukkit.entity.Player
import org.bukkit.event.player.PlayerTeleportEvent
import org.bukkit.inventory.ItemStack
import org.bukkit.persistence.PersistentDataType

object GuidebookService {
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
    if (type == GuidebookType.OFFICIAL && !player.isOp) {
      player.sendMessage(Tools.socialLikesLOGO + " &c公式ガイドを作成する権限がありません。".color())
      return null
    }
    if (type == GuidebookType.PERSONAL && !canCreatePersonal(player)) return null
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
      player.isOp ||
          (guidebook.type == GuidebookType.PERSONAL && guidebook.creatorUuid == player.uniqueId)

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
    if (guidebook.type == GuidebookType.PERSONAL && build.owner != guidebook.creatorUuid) {
      player.sendMessage(Tools.socialLikesLOGO + " &c個人ガイドには作者の建築だけ追加できます。".color())
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
    return added.also { if (it) markEdited(guidebookId) }
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
        if (published) announce(guidebook)
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
      if (saved) markEdited(guidebookId)
    }
  }

  fun removeBuild(player: Player, guidebookId: Int, buildId: Int): Boolean {
    editableGuidebook(player, guidebookId) ?: return false
    return SLDatabase.removeGuidebookEntryBlocking(guidebookId, buildId).also {
      if (it) markEdited(guidebookId)
    }
  }

  fun moveBuild(player: Player, guidebookId: Int, buildId: Int, offset: Int): Boolean {
    editableGuidebook(player, guidebookId) ?: return false
    return SLDatabase.moveGuidebookEntryBlocking(guidebookId, buildId, offset).also {
      if (it) markEdited(guidebookId)
    }
  }

  fun markEdited(guidebookId: Int) {
    SLDatabase.markGuidebookEditedBlocking(guidebookId)
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

  private fun teleport(player: Player, data: SLData): TeleportResult {
    val sign = findValidSign(data) ?: return TeleportResult.UNAVAILABLE
    val destination = SLtp.signLocation(sign.location)
    if (!player.teleport(destination, PlayerTeleportEvent.TeleportCause.PLUGIN)) {
      player.sendMessage(Tools.socialLikesLOGO + " &cテレポートできませんでした。".color())
      return TeleportResult.FAILED
    }
    player.sendMessage(Tools.socialLikesLOGO + " &a「${data.title}」へ案内しました。".color())
    return TeleportResult.SUCCESS
  }

  /** 本の1ページは14行。ホームの見出しぶんを残して説明文は8行まで */
  fun descriptionMaxLines(): Int =
      Tools.plugin.config.getInt("guidebook.descriptionMaxLines", 8).coerceIn(1, 8)

  /** コメントの入力は金床の50文字までなので、それが収まる5行まで */
  fun commentMaxLines(): Int =
      Tools.plugin.config.getInt("guidebook.commentMaxLines", 5).coerceIn(1, 5)

  /** ランクごとの冊数（config の guidebook.personalBookLimits）で、まだ作れるか。作れないときは理由を送る */
  fun canCreatePersonal(player: Player): Boolean {
    val limit = personalBookLimit(player)
    if (limit == 0) {
      player.sendMessage(Tools.socialLikesLOGO + " &c今のランクでは個人ガイドを作れません。".color())
      return false
    }
    if (
        !GuidebookRules.canCreatePersonal(
            SLDatabase.countPersonalGuidebooksBlocking(player.uniqueId),
            limit,
        )
    ) {
      player.sendMessage(Tools.socialLikesLOGO + " &c今のランクで作れる個人ガイドは${limit}冊までです。".color())
      return false
    }
    return true
  }

  private fun personalBookLimit(player: Player): Int {
    val limits = GuidebookRules.personalBookLimits(Tools.plugin.config)
    if (player.isOp) return limits.values.maxOrNull() ?: 0
    return GuidebookRules.personalBookLimit(limits) { player.hasPermission("group.$it") }
  }

  private fun entryLimit(): Int =
      Tools.plugin.config.getInt("guidebook.entriesPerBookLimit", 30).coerceAtLeast(1)

  private fun announce(guidebook: GuidebookData) {
    val config = Tools.plugin.config
    if (!config.getBoolean("guidebook.announce.enabled", true)) return
    val label =
        when (SLDatabase.takeGuidebookAnnouncementBlocking(guidebook.id)) {
          GuidebookAnnouncement.NEW -> "新しい旅行ガイド"
          GuidebookAnnouncement.UPDATE -> "旅行ガイド更新"
          GuidebookAnnouncement.NONE -> return
        }
    val author =
        if (guidebook.type == GuidebookType.OFFICIAL) "公式" else authorName(guidebook.creatorUuid)
    val message =
        Component.text("📖 $label: ", NamedTextColor.GOLD)
            .append(Component.text("「${guidebook.title}」", NamedTextColor.GREEN))
            .append(Component.text(" by $author ", NamedTextColor.GRAY))
            .append(
                Component.text("[クリックで入手]", NamedTextColor.AQUA)
                    .clickEvent(ClickEvent.runCommand("/slguide ${guidebook.id}"))
                    .hoverEvent(HoverEvent.showText(Component.text("クリックでガイドブックを入手")))
            )
    val soundName = config.getString("guidebook.announce.sound", "entity.player.levelup")
    val sound =
        soundName
            ?.takeIf(String::isNotBlank)
            ?.let { name ->
              runCatching { Key.key(name.trim()) }
                  .onFailure {
                    Tools.plugin.logger.warning("[SL3] Invalid guidebook.announce.sound: $name")
                  }
                  .getOrNull()
            }
            ?.let {
              net.kyori.adventure.sound.Sound.sound(
                  it,
                  net.kyori.adventure.sound.Sound.Source.MASTER,
                  config.getDouble("guidebook.announce.volume", 0.75).toFloat(),
                  config.getDouble("guidebook.announce.pitch", 1.0).toFloat(),
              )
            }
    Bukkit.getOnlinePlayers().forEach { online ->
      online.sendMessage(message)
      sound?.let { online.playSound(it) }
    }
  }

  private fun celebrateFirst(player: Player, guidebook: GuidebookData) {
    Bukkit.broadcastMessage(
        Tools.socialLikesLOGO + " &6${player.name}さんが旅行ガイド「${guidebook.title}」を初コンプリートしました！".color()
    )
    launchFirework(player)
  }

  private fun launchFirework(player: Player) {
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
    launchFirework(player)
  }
}
