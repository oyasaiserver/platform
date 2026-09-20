package com.github.srain3.sociallikes.gui

import com.github.srain3.sociallikes.GuidebookListener
import com.github.srain3.sociallikes.GuidebookService
import com.github.srain3.sociallikes.Tools
import com.github.srain3.sociallikes.Tools.addText
import com.github.srain3.sociallikes.Tools.allFlag
import com.github.srain3.sociallikes.Tools.color
import com.github.srain3.sociallikes.datas.GuidebookData
import com.github.srain3.sociallikes.datas.GuidebookType
import com.github.srain3.sociallikes.datas.SLDatabase
import java.util.UUID
import net.kyori.adventure.inventory.Book
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.TextComponent
import net.kyori.adventure.text.event.ClickEvent
import net.kyori.adventure.text.format.NamedTextColor
import net.kyori.adventure.text.format.TextDecoration
import org.bukkit.Material
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack

internal object GuidebookBookRules {
  fun <T> paginate(items: List<T>, perPage: Int): List<List<T>> {
    require(perPage > 0)
    return items.chunked(perPage).ifEmpty { listOf(emptyList()) }
  }

  fun canConfirmDelete(
      expectedGuidebookId: Int?,
      expiresAt: Long?,
      requestedId: Int,
      now: Long,
  ): Boolean = expectedGuidebookId == requestedId && expiresAt != null && now <= expiresAt
}

object GuidebookBookUI {
  private const val COMMAND = "/sociallikes3:slguide"
  private const val DELETE_CONFIRM_MILLIS = 15_000L
  private val deleteConfirmations = mutableMapOf<UUID, DeleteConfirmation>()

  fun openCatalog(player: Player) {
    val guidebooks = SLDatabase.loadPublishedGuidebooksBlocking()
    val pages = mutableListOf<Component>()
    val catalog =
        page()
            .append(title("旅行ガイドブック"))
            .append(line("公開中のガイドを選べます。", NamedTextColor.DARK_GRAY))
            .append(blank())
            .append(command("[個人ガイドを作成]", "$COMMAND create personal"))
            .append(newline())
    if (player.hasPermission(GuidebookService.OFFICIAL_PERMISSION)) {
      catalog.append(command("[公式ガイドを作成]", "$COMMAND create official", NamedTextColor.GOLD))
      catalog.append(newline())
    }
    catalog
        .append(command("[自分の編集用ガイド]", "$COMMAND editable", NamedTextColor.DARK_GREEN))
        .append(newline())
        .append(blank())
        .append(
            line(
                if (guidebooks.isEmpty()) "公開中のガイドはありません。" else "次のページから一覧です。",
                NamedTextColor.GRAY,
            )
        )
    pages += catalog.build()

    if (guidebooks.isNotEmpty()) {
      GuidebookBookRules.paginate(guidebooks, 2).forEach { guidebookPage ->
        val content = page().append(title("公開ガイド"))
        guidebookPage.forEach { guidebook ->
          val progress =
              GuidebookService.progress(GuidebookService.entries(guidebook.id, player.uniqueId))
          content
              .append(
                  command(
                      (if (guidebook.type == GuidebookType.OFFICIAL) "★ " else "") +
                          guidebook.title,
                      "$COMMAND info ${guidebook.id}",
                      if (guidebook.type == GuidebookType.OFFICIAL) NamedTextColor.GOLD
                      else NamedTextColor.DARK_GREEN,
                  )
              )
              .append(newline())
              .append(
                  line("進捗: ${progress.discovered}/${progress.total}", NamedTextColor.DARK_GRAY)
              )
              .append(
                  line(
                      "作成: ${GuidebookService.authorName(guidebook.creatorUuid)}",
                      NamedTextColor.DARK_GRAY,
                  )
              )
              .append(command("[詳細]", "$COMMAND info ${guidebook.id}"))
              .append(Component.space())
              .append(command("[本を入手]", "$COMMAND get ${guidebook.id}", NamedTextColor.DARK_GREEN))
              .append(blank())
        }
        pages += content.build()
      }
    }
    open(player, "旅行ガイド", pages)
  }

  fun openInfo(player: Player, guidebook: GuidebookData) {
    if (!guidebook.published) {
      player.sendMessage(Tools.socialLikesLOGO + " &cこのガイドブックは現在公開されていません。".color())
      return
    }
    val entries = GuidebookService.entries(guidebook.id, player.uniqueId)
    val progress = GuidebookService.progress(entries)
    val pages =
        mutableListOf(
            page()
                .append(title(guidebook.title))
                .append(
                    line("進捗: ${progress.discovered}/${progress.total}", NamedTextColor.DARK_GREEN)
                )
                .append(
                    line(
                        "作成: ${GuidebookService.authorName(guidebook.creatorUuid)}",
                        NamedTextColor.DARK_GRAY,
                    )
                )
                .append(blank())
                .append(command("[観光用の本を入手]", "$COMMAND get ${guidebook.id}"))
                .append(newline())
                .append(command("[カタログへ戻る]", "$COMMAND catalog", NamedTextColor.DARK_GREEN))
                .append(blank())
                .append(
                    line(
                        if (entries.isEmpty()) "掲載建築はありません。" else "次のページから掲載建築です。",
                        NamedTextColor.GRAY,
                    )
                )
                .build()
        )
    if (entries.isNotEmpty()) {
      GuidebookBookRules.paginate(entries.withIndex().toList(), 3).forEach { entryPage ->
        val content = page().append(title("掲載建築"))
        entryPage.forEach { indexed ->
          val entry = indexed.value
          val state =
              when {
                !entry.valid -> "案内不可（進捗対象外）"
                entry.liked -> "いいね済み"
                else -> "未発見"
              }
          val stateColor =
              when {
                !entry.valid -> NamedTextColor.RED
                entry.liked -> NamedTextColor.DARK_GREEN
                else -> NamedTextColor.GOLD
              }
          content
              .append(line("${indexed.index + 1}. ${entry.data?.title ?: "建築ID:${entry.buildId}"}"))
              .append(line(state, stateColor))
              .append(
                  line(
                      "作者: ${entry.data?.owner?.let(GuidebookService::authorName) ?: "不明"}",
                      NamedTextColor.DARK_GRAY,
                  )
              )
              .append(blank())
        }
        pages += content.build()
      }
    }
    open(player, guidebook.title, pages)
  }

  fun openInfo(player: Player, guidebookId: Int) {
    val guidebook = SLDatabase.loadGuidebookBlocking(guidebookId)
    if (guidebook == null) {
      player.sendMessage(Tools.socialLikesLOGO + " &cガイドブックが見つかりません。".color())
      return
    }
    openInfo(player, guidebook)
  }

  fun openEditor(player: Player, guidebookId: Int) {
    deleteConfirmations.remove(player.uniqueId)
    val guidebook = editableGuidebook(player, guidebookId) ?: return
    val entries = GuidebookService.entries(guidebook.id, player.uniqueId)
    val pages =
        mutableListOf(
            page()
                .append(title("編集: ${guidebook.title}"))
                .append(
                    line(
                        if (guidebook.published) "公開中" else "非公開",
                        if (guidebook.published) NamedTextColor.DARK_GREEN else NamedTextColor.GRAY,
                    )
                )
                .append(blank())
                .append(command("[建築追加モード]", "$COMMAND add ${guidebook.id}"))
                .append(newline())
                .append(
                    command(
                        if (guidebook.published) "[非公開にする]" else "[公開する]",
                        "$COMMAND toggle ${guidebook.id}",
                        if (guidebook.published) NamedTextColor.GRAY else NamedTextColor.DARK_GREEN,
                    )
                )
                .append(newline())
                .append(
                    command(
                        "[ガイドを削除]",
                        "$COMMAND delete-request ${guidebook.id}",
                        NamedTextColor.RED,
                    )
                )
                .append(newline())
                .append(command("[編集用一覧へ]", "$COMMAND editable", NamedTextColor.DARK_GREEN))
                .append(blank())
                .append(
                    line(
                        if (entries.isEmpty()) "掲載建築はありません。" else "次のページから掲載建築を編集できます。",
                        NamedTextColor.GRAY,
                    )
                )
                .build()
        )
    if (entries.isNotEmpty()) {
      GuidebookBookRules.paginate(entries.withIndex().toList(), 2).forEach { entryPage ->
        val content = page().append(title("掲載建築の編集"))
        entryPage.forEach { indexed ->
          val entry = indexed.value
          content
              .append(line("${indexed.index + 1}. ${entry.data?.title ?: "建築ID:${entry.buildId}"}"))
              .append(
                  line(
                      if (entry.valid) "案内可能" else "案内不可（進捗対象外）",
                      if (entry.valid) NamedTextColor.DARK_GREEN else NamedTextColor.RED,
                  )
              )
              .append(command("[↑ 前へ]", "$COMMAND move ${guidebook.id} ${entry.buildId} -1"))
              .append(Component.space())
              .append(command("[↓ 後ろへ]", "$COMMAND move ${guidebook.id} ${entry.buildId} 1"))
              .append(Component.space())
              .append(
                  command(
                      "[削除]",
                      "$COMMAND remove ${guidebook.id} ${entry.buildId}",
                      NamedTextColor.RED,
                  )
              )
              .append(blank())
        }
        pages += content.build()
      }
    }
    open(player, "ガイド編集", pages)
  }

  fun openEditable(player: Player) {
    val guidebooks =
        SLDatabase.loadEditableGuidebooksBlocking(
            player.uniqueId,
            player.hasPermission(GuidebookService.OFFICIAL_PERMISSION),
        )
    val pages =
        mutableListOf(
            page()
                .append(title("編集用ガイド"))
                .append(command("[カタログへ戻る]", "$COMMAND catalog", NamedTextColor.DARK_GREEN))
                .append(blank())
                .append(
                    line(
                        if (guidebooks.isEmpty()) "編集できるガイドはありません。" else "次のページから選べます。",
                        NamedTextColor.GRAY,
                    )
                )
                .build()
        )
    if (guidebooks.isNotEmpty()) {
      GuidebookBookRules.paginate(guidebooks, 2).forEach { guidebookPage ->
        val content = page().append(title("編集用ガイド"))
        guidebookPage.forEach { guidebook ->
          content
              .append(
                  line(
                      (if (guidebook.type == GuidebookType.OFFICIAL) "★ " else "") +
                          guidebook.title,
                      if (guidebook.type == GuidebookType.OFFICIAL) NamedTextColor.GOLD
                      else NamedTextColor.BLACK,
                  )
              )
              .append(
                  line(
                      if (guidebook.published) "公開中" else "非公開",
                      if (guidebook.published) NamedTextColor.DARK_GREEN else NamedTextColor.GRAY,
                  )
              )
              .append(command("[編集]", "$COMMAND edit ${guidebook.id}"))
              .append(Component.space())
              .append(
                  command("[編集キー入手]", "$COMMAND key ${guidebook.id}", NamedTextColor.DARK_GREEN)
              )
              .append(blank())
        }
        pages += content.build()
      }
    }
    open(player, "編集用ガイド", pages)
  }

  fun giveTourist(player: Player, guidebookId: Int) {
    val guidebook = SLDatabase.loadGuidebookBlocking(guidebookId)
    if (guidebook == null || !guidebook.published) {
      player.sendMessage(Tools.socialLikesLOGO + " &cこのガイドブックは現在公開されていません。".color())
    } else {
      GuidebookService.give(player, GuidebookService.createTouristItem(guidebook))
      player.sendMessage(Tools.socialLikesLOGO + " &a観光用ガイドブックを入手しました。".color())
    }
    openCatalog(player)
  }

  fun giveEditor(player: Player, guidebookId: Int) {
    val guidebook = editableGuidebook(player, guidebookId)
    if (guidebook != null) {
      GuidebookService.give(player, GuidebookService.createEditorItem(guidebook))
      player.sendMessage(Tools.socialLikesLOGO + " &a編集キーを入手しました。".color())
    }
    openEditable(player)
  }

  fun openTitleInput(player: Player, type: GuidebookType) {
    if (
        type == GuidebookType.OFFICIAL &&
            !player.hasPermission(GuidebookService.OFFICIAL_PERMISSION)
    ) {
      player.sendMessage(Tools.socialLikesLOGO + " &c公式ガイドを作成する権限がありません。".color())
      openCatalog(player)
      return
    }
    val item =
        ItemStack(Material.WRITABLE_BOOK)
            .allFlag()
            .addText("新しいガイド", mutableListOf("&7右側の本をクリックして確定します"))
    SocialLikesAnvilInput.open(
        player,
        Tools.socialLikesLOGOShort + "&0ガイド名".color(),
        item,
    ) { target, enteredTitle ->
      GuidebookService.create(target, type, enteredTitle)?.let { openEditor(target, it.id) }
    }
  }

  fun moveBuild(player: Player, guidebookId: Int, buildId: Int, offset: Int) {
    GuidebookService.moveBuild(player, guidebookId, buildId, offset)
    openEditor(player, guidebookId)
  }

  fun removeBuild(player: Player, guidebookId: Int, buildId: Int) {
    GuidebookService.removeBuild(player, guidebookId, buildId)
    openEditor(player, guidebookId)
  }

  fun startAddMode(player: Player, guidebookId: Int) {
    if (editableGuidebook(player, guidebookId) == null) return
    GuidebookListener.startAddMode(player, guidebookId)
    player.closeInventory()
  }

  fun togglePublished(player: Player, guidebookId: Int) {
    val guidebook = editableGuidebook(player, guidebookId) ?: return
    GuidebookService.setPublished(player, guidebookId, !guidebook.published)
    openEditor(player, guidebookId)
  }

  fun requestDelete(player: Player, guidebookId: Int) {
    val guidebook = editableGuidebook(player, guidebookId) ?: return
    deleteConfirmations[player.uniqueId] =
        DeleteConfirmation(guidebookId, System.currentTimeMillis() + DELETE_CONFIRM_MILLIS)
    open(
        player,
        "削除の確認",
        listOf(
            page()
                .append(title("本当に削除しますか？", NamedTextColor.RED))
                .append(line("「${guidebook.title}」", NamedTextColor.BLACK))
                .append(blank())
                .append(line("この操作は取り消せません。", NamedTextColor.RED))
                .append(line("15秒以内にもう一度クリックしてください。", NamedTextColor.DARK_GRAY))
                .append(blank())
                .append(
                    command(
                        "[削除を確定]",
                        "$COMMAND delete-confirm ${guidebook.id}",
                        NamedTextColor.RED,
                    )
                )
                .append(newline())
                .append(
                    command("[キャンセル]", "$COMMAND edit ${guidebook.id}", NamedTextColor.DARK_GREEN)
                )
                .build()
        ),
    )
  }

  fun confirmDelete(player: Player, guidebookId: Int) {
    val confirmation = deleteConfirmations.remove(player.uniqueId)
    if (
        !GuidebookBookRules.canConfirmDelete(
            confirmation?.guidebookId,
            confirmation?.expiresAt,
            guidebookId,
            System.currentTimeMillis(),
        )
    ) {
      player.sendMessage(Tools.socialLikesLOGO + " &c削除確認の有効期限が切れました。".color())
      openEditor(player, guidebookId)
      return
    }
    if (GuidebookService.delete(player, guidebookId)) openCatalog(player)
    else openEditor(player, guidebookId)
  }

  fun clear(playerUuid: UUID) {
    deleteConfirmations.remove(playerUuid)
  }

  private fun editableGuidebook(player: Player, guidebookId: Int): GuidebookData? {
    val guidebook = SLDatabase.loadGuidebookBlocking(guidebookId)
    if (guidebook == null || !GuidebookService.canEdit(player, guidebook)) {
      player.sendMessage(Tools.socialLikesLOGO + " &cこのガイドブックは編集できません。".color())
      return null
    }
    return guidebook
  }

  private fun open(player: Player, bookTitle: String, pages: List<Component>) {
    player.openBook(
        Book.book(
            Component.text(bookTitle),
            Component.text("Oyasai Server"),
            pages,
        )
    )
  }

  private fun page(): TextComponent.Builder = Component.text()

  private fun title(text: String, color: NamedTextColor = NamedTextColor.DARK_GREEN): Component =
      Component.text(text, color).decorate(TextDecoration.BOLD).append(newline())

  private fun line(text: String, color: NamedTextColor = NamedTextColor.BLACK): Component =
      Component.text(text, color).append(newline())

  private fun command(
      text: String,
      command: String,
      color: NamedTextColor = NamedTextColor.BLUE,
  ): Component =
      Component.text(text, color)
          .decorate(TextDecoration.UNDERLINED)
          .clickEvent(ClickEvent.runCommand(command))

  private fun newline(): Component = Component.newline()

  private fun blank(): Component = Component.newline()

  private data class DeleteConfirmation(val guidebookId: Int, val expiresAt: Long)
}
