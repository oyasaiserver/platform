package com.github.srain3.sociallikes.gui

import com.github.srain3.sociallikes.GuidebookListener
import com.github.srain3.sociallikes.GuidebookService
import com.github.srain3.sociallikes.Tools
import com.github.srain3.sociallikes.Tools.addText
import com.github.srain3.sociallikes.Tools.allFlag
import com.github.srain3.sociallikes.Tools.color
import com.github.srain3.sociallikes.datas.Data
import com.github.srain3.sociallikes.datas.GuidebookData
import com.github.srain3.sociallikes.datas.GuidebookRules
import com.github.srain3.sociallikes.datas.GuidebookType
import com.github.srain3.sociallikes.datas.SLDatabase
import com.github.stefvanschie.inventoryframework.gui.GuiItem
import com.github.stefvanschie.inventoryframework.gui.type.ChestGui
import com.github.stefvanschie.inventoryframework.pane.PaginatedPane
import com.github.stefvanschie.inventoryframework.pane.StaticPane
import com.github.stefvanschie.inventoryframework.pane.util.Slot
import java.util.UUID
import net.kyori.adventure.inventory.Book
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.TextComponent
import net.kyori.adventure.text.event.ClickEvent
import net.kyori.adventure.text.event.HoverEvent
import net.kyori.adventure.text.format.TextColor
import net.kyori.adventure.text.format.TextDecoration
import org.bukkit.Material
import org.bukkit.Sound
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.meta.BookMeta

internal object GuidebookBookRules {

  data class NextLine(val text: String, val buildId: Int? = null)

  fun <T> paginate(items: List<T>, perPage: Int): List<List<T>> {
    require(perPage > 0)
    return items.chunked(perPage).ifEmpty { listOf(emptyList()) }
  }

  /** 掲載建築1件分。[buildId] が null なら案内できない（建築データなし）。 */
  data class EntryRow(
      val mark: String,
      val name: String,
      val sub: List<String>,
      val buildId: Int?,
  ) {
    /** 名前の行 + コメント／作者の行 + 空行 */
    val lines: Int
      get() = GuidebookRules.wrapLines("$mark $name").size + sub.size + 1
  }

  fun entryMark(valid: Boolean, liked: Boolean): String =
      when {
        liked -> "☑"
        !valid -> "！"
        else -> "☐"
      }

  fun commentLines(comment: String): List<String> =
      firstCommentLine(comment)?.let { GuidebookRules.truncateLines(it, 3) }.orEmpty()

  /** 見出し1行 + 各建築の行数で1ページ14行に詰める。ページ末尾の空行は数えない。 */
  fun paginateByLines(rows: List<EntryRow>, pageLines: Int = 14): List<List<EntryRow>> {
    val pages = mutableListOf<MutableList<EntryRow>>()
    var used = 0
    rows.forEach { row ->
      if (pages.isEmpty() || used + row.lines - 1 > pageLines) {
        pages += mutableListOf<EntryRow>()
        used = 1
      }
      pages.last() += row
      used += row.lines
    }
    return pages
  }

  fun nextLine(entries: List<GuidebookService.EntryView>, complete: Boolean): NextLine =
      when {
        complete -> NextLine("コンプリート！")
        else ->
            entries.firstOrNull(GuidebookService.EntryView::canGuide)?.let {
              NextLine("Next: ${it.data!!.title}", it.buildId)
            } ?: NextLine("Next: なし")
      }

  fun firstCommentLine(comment: String): String? =
      comment.substringBefore(',').trim().takeUnless {
        it.isEmpty() || it.equals("No comment", ignoreCase = true)
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
  private val GREEN = TextColor.color(0x00AA00)
  private val DARK_GRAY = TextColor.color(0x555555)
  private val AQUA = TextColor.color(0x00AAAA)
  private val BLACK = TextColor.color(0x000000)
  private val GOLD = TextColor.color(0xFFAA00)
  private val GRAY = TextColor.color(0xAAAAAA)
  private val BLUE = TextColor.color(0x5555FF)
  private val RED = TextColor.color(0xFF5555)
  private val deleteConfirmations = mutableMapOf<UUID, DeleteConfirmation>()

  fun openCatalog(player: Player) {
    createCatalog(player, editable = false).show(player)
  }

  fun openEditable(player: Player) {
    createCatalog(player, editable = true).show(player)
  }

  private fun createCatalog(player: Player, editable: Boolean): ChestGui {
    val guidebooks =
        if (editable) {
          SLDatabase.loadEditableGuidebooksBlocking(
              player.uniqueId,
              player.hasPermission(GuidebookService.OFFICIAL_PERMISSION),
          )
        } else {
          SLDatabase.loadPublishedGuidebooksBlocking()
        }
    val heading = if (editable) "編集用ガイド" else "旅行ガイド"
    val gui = ChestGui(6, Tools.socialLikesLOGOShort + "&r $heading p1".color())
    gui.setOnTopClick {
      it.isCancelled = true
      if (it.currentItem != null) {
        val clicker = it.whoClicked as Player
        clicker.playSound(clicker, Sound.UI_BUTTON_CLICK, 1F, 1F)
      }
    }
    gui.setOnTopDrag { it.isCancelled = true }

    val pagePane = PaginatedPane(9, 5)
    pagePane.populateWithGuiItems(
        guidebooks.map { guidebook ->
          GuiItem(catalogItem(player, guidebook, editable)) { event ->
            val clicker = event.whoClicked as Player
            clicker.closeInventory()
            if (editable) giveEditor(clicker, guidebook.id) else giveTourist(clicker, guidebook.id)
          }
        }
    )
    gui.addPane(Slot.fromXY(0, 0), pagePane)

    val navigation = StaticPane(9, 1)
    if (pagePane.pages > 1) {
      navigation.addItem(
          GuiItem(navigationItem(Material.RED_WOOL, "&f前のページ")) {
            if (pagePane.page > 0) {
              pagePane.setPage(pagePane.page - 1)
              gui.title = Tools.socialLikesLOGOShort + "&r $heading p${pagePane.page + 1}".color()
              gui.update()
            }
          },
          0,
          0,
      )
      navigation.addItem(
          GuiItem(navigationItem(Material.GREEN_WOOL, "&f次のページ")) {
            if (pagePane.page < pagePane.pages - 1) {
              pagePane.setPage(pagePane.page + 1)
              gui.title = Tools.socialLikesLOGOShort + "&r $heading p${pagePane.page + 1}".color()
              gui.update()
            }
          },
          8,
          0,
      )
    }
    val canCreateOfficial = player.hasPermission(GuidebookService.OFFICIAL_PERMISSION)
    navigation.addItem(
        GuiItem(navigationItem(Material.WRITABLE_BOOK, "&a新しいガイドを作る")) { event ->
          val clicker = event.whoClicked as Player
          clicker.closeInventory()
          openTitleInput(clicker, GuidebookType.PERSONAL)
        },
        if (canCreateOfficial) 3 else 4,
        0,
    )
    if (canCreateOfficial) {
      navigation.addItem(
          GuiItem(navigationItem(Material.ENCHANTED_BOOK, "&6公式ガイドを作る")) { event ->
            val clicker = event.whoClicked as Player
            clicker.closeInventory()
            openTitleInput(clicker, GuidebookType.OFFICIAL)
          },
          5,
          0,
      )
    }
    gui.addPane(Slot.fromXY(0, 5), navigation)
    gui.update()
    return gui
  }

  private fun catalogItem(
      player: Player,
      guidebook: GuidebookData,
      editable: Boolean,
  ): ItemStack {
    if (editable) {
      return ItemStack(Material.WRITABLE_BOOK)
          .allFlag()
          .addText(
              "&f${guidebook.title}",
              mutableListOf(
                  if (guidebook.published) "&a公開中" else "&7非公開",
                  "&aクリックで編集キーを入手",
              ),
          )
    }
    val progress =
        GuidebookService.progress(GuidebookService.entries(guidebook.id, player.uniqueId))
    return ItemStack(Material.BOOK)
        .allFlag()
        .addText(
            if (guidebook.type == GuidebookType.OFFICIAL) "&6★ ${guidebook.title}"
            else "&f${guidebook.title}",
            mutableListOf(
                "&7作者: ${GuidebookService.authorName(guidebook.creatorUuid)}",
                "&7進捗: ${progress.discovered}/${progress.total}",
                "&aクリックで入手",
            ),
        )
  }

  private fun navigationItem(material: Material, name: String): ItemStack =
      ItemStack(material).allFlag().addText(name, mutableListOf())

  fun openInfo(player: Player, guidebook: GuidebookData) {
    if (!guidebook.published) {
      player.sendMessage(Tools.socialLikesLOGO + " &cこのガイドブックは現在公開されていません。".color())
      return
    }
    val entries = GuidebookService.entries(guidebook.id, player.uniqueId)
    val progress = GuidebookService.progress(entries)
    val next = GuidebookBookRules.nextLine(entries, progress.complete)
    val home =
        page()
            .append(title(guidebook.title))
            .append(line("進捗: ${progress.discovered}/${progress.total}", GREEN))
            .append(line("作者: ${GuidebookService.authorName(guidebook.creatorUuid)}", DARK_GRAY))
            .append(nextLine(next, guidebook.id, progress.complete))
    home.append(blank())
    if (guidebook.description.isNotBlank()) {
      GuidebookRules.description(guidebook.description).text.lines().forEach {
        home.append(line(it))
      }
    }
    val pages = mutableListOf(home.build())
    val rows =
        entries.map { entry ->
          GuidebookBookRules.EntryRow(
              GuidebookBookRules.entryMark(entry.valid, entry.liked),
              entry.data?.title ?: "建築ID:${entry.buildId}",
              if (guidebook.type == GuidebookType.OFFICIAL) {
                GuidebookRules.wrapLines(
                    "作者: ${entry.data?.owner?.let(GuidebookService::authorName) ?: "不明"}"
                )
              } else {
                entry.data?.comment?.let(GuidebookBookRules::commentLines).orEmpty()
              },
              entry.data?.let { entry.buildId },
          )
        }
    GuidebookBookRules.paginateByLines(rows).forEach { entryPage ->
      val content = page().append(title("掲載建築"))
      entryPage.forEach { row ->
        content.append(mark(row.mark)).append(Component.space())
        val name = Component.text(row.name, AQUA)
        content.append(
            row.buildId?.let {
              name
                  .clickEvent(ClickEvent.runCommand("$COMMAND go ${guidebook.id} $it"))
                  .hoverEvent(HoverEvent.showText(Component.text("クリックでこの建築へ案内")))
            } ?: name
        )
        content.append(newline())
        row.sub.forEach { content.append(line(it, DARK_GRAY)) }
        content.append(blank())
      }
      pages += content.build()
    }
    open(player, guidebook.title, pages)
  }

  fun openEditor(player: Player, guidebookId: Int) {
    deleteConfirmations.remove(player.uniqueId)
    val guidebook = editableGuidebook(player, guidebookId) ?: return
    val entries = GuidebookService.entries(guidebook.id, player.uniqueId)
    val home =
        page()
            .append(title("編集: ${guidebook.title}"))
            .append(
                line(
                    if (guidebook.published) "公開中" else "非公開",
                    if (guidebook.published) GREEN else GRAY,
                )
            )
            .append(blank())
            .append(command("[建築追加]", "$COMMAND add ${guidebook.id}"))
            .append(newline())
            .append(
                command(
                    if (guidebook.published) "[非公開にする]" else "[公開する]",
                    "$COMMAND toggle ${guidebook.id}",
                )
            )
            .append(newline())
            .append(command("[説明を書く]", "$COMMAND describe ${guidebook.id}"))
            .append(newline())
            .append(command("[ガイド一覧へ]", "$COMMAND edit"))
            .append(newline())
            .append(danger("[このガイドを削除]", "$COMMAND delete-request ${guidebook.id}"))
            .append(blank())
            .append(
                line(
                    if (entries.isEmpty()) "掲載建築はありません。" else "次のページから掲載建築を編集できます。",
                    GRAY,
                )
            )
    val pages = mutableListOf(home.build())
    GuidebookBookRules.paginate(entries.withIndex().toList(), 3)
        .filter { it.isNotEmpty() }
        .forEach { entryPage ->
          val content = page().append(title("掲載建築の編集"))
          entryPage.forEach { indexed ->
            val entry = indexed.value
            content
                .append(
                    line("${indexed.index + 1}. ${entry.data?.title ?: "建築ID:${entry.buildId}"}")
                )
                .append(
                    line(
                        if (entry.valid) "案内可能" else "案内不可",
                        if (entry.valid) GREEN else RED,
                    )
                )
                .append(command("[↑]", "$COMMAND move ${guidebook.id} ${entry.buildId} -1"))
                .append(Component.space())
                .append(command("[↓]", "$COMMAND move ${guidebook.id} ${entry.buildId} 1"))
            if (guidebook.type == GuidebookType.PERSONAL) {
              content
                  .append(Component.space())
                  .append(command("[コメント]", "$COMMAND comment ${guidebook.id} ${entry.buildId}"))
            }
            content
                .append(Component.space())
                .append(danger("[削除]", "$COMMAND remove ${guidebook.id} ${entry.buildId}"))
                .append(blank())
          }
          pages += content.build()
        }
    open(player, "ガイド編集", pages)
  }

  fun giveTourist(player: Player, guidebookId: Int) {
    val guidebook = SLDatabase.loadGuidebookBlocking(guidebookId)
    if (guidebook == null || !guidebook.published) {
      player.sendMessage(Tools.socialLikesLOGO + " &cこのガイドブックは現在公開されていません。".color())
      return
    }
    GuidebookService.give(player, GuidebookService.createTouristItem(guidebook))
    player.sendMessage(Tools.socialLikesLOGO + " &a旅行ガイドブックを入手しました。".color())
    openInfo(player, guidebook)
  }

  fun giveEditor(player: Player, guidebookId: Int) {
    val guidebook = editableGuidebook(player, guidebookId) ?: return
    GuidebookService.give(player, GuidebookService.createEditorItem(guidebook))
    player.sendMessage(Tools.socialLikesLOGO + " &a編集キーを入手しました。".color())
    openEditor(player, guidebookId)
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
    SocialLikesAnvilInput.open(player, Tools.socialLikesLOGOShort + "&0ガイド名".color(), item) {
        target,
        enteredTitle ->
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

  fun startDescriptionEdit(player: Player, guidebookId: Int) {
    val guidebook = editableGuidebook(player, guidebookId) ?: return
    val item = player.inventory.itemInMainHand
    if (GuidebookService.editorId(item) != guidebookId) {
      player.sendMessage(Tools.socialLikesLOGO + " &e編集ガイドブックを手に持ってから押してください。".color())
      return
    }
    val meta = item.itemMeta as? BookMeta ?: return
    meta.pages(listOf(Component.text(guidebook.description)))
    item.itemMeta = meta
    player.inventory.setItemInMainHand(item)
    GuidebookListener.startDescriptionMode(player, guidebookId)
    player.closeInventory()
    player.sendMessage(Tools.socialLikesLOGO + " &e手に持っている編集ガイドブックを右クリックすると説明文を書けます（8行まで）".color())
  }

  fun editComment(player: Player, guidebookId: Int, buildId: Int) {
    val guidebook = editableGuidebook(player, guidebookId) ?: return
    val build = Data.getSLData(buildId)
    if (
        guidebook.type != GuidebookType.PERSONAL ||
            build == null ||
            build.owner != player.uniqueId ||
            buildId !in SLDatabase.loadGuidebookEntriesBlocking(guidebookId)
    ) {
      player.sendMessage(Tools.socialLikesLOGO + " &cこの建築のコメントは編集できません。".color())
      return
    }
    SLSignLikes.commentEdit(player, build) { openEditor(player, guidebookId) }
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
                .append(title("本当に削除しますか？", RED))
                .append(line("「${guidebook.title}」"))
                .append(blank())
                .append(line("この操作は取り消せません。", RED))
                .append(line("15秒以内にもう一度クリックしてください。", DARK_GRAY))
                .append(blank())
                .append(danger("[削除を確定]", "$COMMAND delete-confirm ${guidebook.id}"))
                .append(newline())
                .append(command("[キャンセル]", "$COMMAND editor ${guidebook.id}"))
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
    if (GuidebookService.delete(player, guidebookId)) openEditable(player)
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
    player.openBook(Book.book(Component.text(bookTitle), Component.text("Oyasai Server"), pages))
  }

  private fun page(): TextComponent.Builder = Component.text()

  private fun title(text: String, color: TextColor = GREEN): Component =
      Component.text(text, color).decorate(TextDecoration.BOLD).append(newline())

  private fun line(text: String, color: TextColor = BLACK): Component =
      Component.text(text, color).append(newline())

  private fun command(text: String, command: String, color: TextColor = BLUE): Component =
      Component.text(text, color).clickEvent(ClickEvent.runCommand(command))

  private fun danger(text: String, command: String): Component =
      command(text, command, RED).decorate(TextDecoration.UNDERLINED)

  private fun mark(mark: String): Component =
      when (mark) {
        "☑" -> Component.text(mark, GREEN)
        "！" -> Component.text(mark, RED).hoverEvent(HoverEvent.showText(Component.text("案内不可")))
        else -> Component.text(mark, GOLD)
      }

  private fun nextLine(
      next: GuidebookBookRules.NextLine,
      guidebookId: Int,
      complete: Boolean,
  ): Component {
    val buildId = next.buildId
    if (complete) return title(next.text)
    if (buildId == null) return line(next.text, AQUA)
    return Component.text("Next: ", AQUA)
        .append(
            Component.text(next.text.removePrefix("Next: "), AQUA)
                .clickEvent(ClickEvent.runCommand("$COMMAND go $guidebookId $buildId"))
                .hoverEvent(HoverEvent.showText(Component.text("クリックでこの建築へ案内")))
        )
        .append(newline())
  }

  private fun newline(): Component = Component.newline()

  private fun blank(): Component = Component.newline()

  private data class DeleteConfirmation(val guidebookId: Int, val expiresAt: Long)
}
