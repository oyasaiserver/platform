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
  private val DARK_GRAY = TextColor.color(0x555555)
  private val BLACK = TextColor.color(0x000000)
  private val RED = TextColor.color(0xFF5555)
  private val style: GuidebookStyle
    get() = GuidebookStyle.current

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
    val s = style
    if (editable) {
      val state = if (guidebook.published) "cPublic" else "cPrivate"
      return ItemStack(Material.WRITABLE_BOOK)
          .allFlag()
          .styledText(
              s.styled(guidebook.title, "cName"),
              listOf(s.styled(s.text(state), state), s.styled(s.text("cGetKey"), "cAction")),
          )
    }
    val progress =
        GuidebookService.progress(GuidebookService.entries(guidebook.id, player.uniqueId))
    val vars =
        mapOf(
            "title" to guidebook.title,
            "author" to GuidebookService.authorName(guidebook.creatorUuid),
            "n" to progress.discovered,
            "m" to progress.total,
        )
    return ItemStack(Material.BOOK)
        .allFlag()
        .styledText(
            if (guidebook.type == GuidebookType.OFFICIAL)
                s.styled(s.text("cOfficialMark") + guidebook.title, "cOfficial")
            else s.styled(guidebook.title, "cName"),
            listOf(
                s.styled(s.text("cAuthor", vars), "cLore"),
                s.styled(s.text("cProgress", vars), "cLore"),
                s.styled(s.text("cGet"), "cAction"),
            ),
        )
  }

  private fun ItemStack.styledText(name: Component, lore: List<Component>): ItemStack {
    val meta = itemMeta ?: return this
    meta.displayName(name.decoration(TextDecoration.ITALIC, false))
    meta.lore(lore.map { it.decoration(TextDecoration.ITALIC, false) })
    itemMeta = meta
    return this
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
    val s = style
    val vars =
        mapOf(
            "title" to guidebook.title,
            "author" to GuidebookService.authorName(guidebook.creatorUuid),
            "n" to progress.discovered,
            "m" to progress.total,
        )
    val home =
        page()
            .append(line(guidebook.title, "title"))
            .append(line(s.text("progress", vars), "progress"))
            .append(line(s.text("author", vars), "author"))
            .append(nextLine(next, guidebook.id, progress.complete))
    home.append(blank())
    if (guidebook.description.isNotBlank()) {
      GuidebookRules.description(guidebook.description).text.lines().forEach {
        home.append(line(it, "desc"))
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
                    s.text(
                        "entryAuthor",
                        mapOf(
                            "author" to
                                (entry.data?.owner?.let(GuidebookService::authorName) ?: "不明")
                        ),
                    )
                )
              } else {
                entry.data?.comment?.let(GuidebookBookRules::commentLines).orEmpty()
              },
              entry.data?.let { entry.buildId },
          )
        }
    GuidebookBookRules.paginateByLines(rows).forEach { entryPage ->
      val content = page().append(line(s.text("heading"), "heading"))
      entryPage.forEach { row ->
        content.append(mark(row.mark)).append(Component.space())
        val name = s.styled(row.name, "entry")
        content.append(
            row.buildId?.let {
              hover(
                  name.clickEvent(ClickEvent.runCommand("$COMMAND go ${guidebook.id} $it")),
                  "hEntry",
              )
            } ?: name
        )
        content.append(newline())
        row.sub.forEach { content.append(line(it, "sub")) }
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
    val s = style
    val state = if (guidebook.published) "ePublic" else "ePrivate"
    val home =
        page()
            .append(line(s.text("eTitle", mapOf("title" to guidebook.title)), "eTitle"))
            .append(line(s.text(state), state))
            .append(blank())
            .append(command("bAdd", "$COMMAND add ${guidebook.id}"))
            .append(newline())
            .append(
                command(
                    if (guidebook.published) "bToggle" else "bPublish",
                    "$COMMAND toggle ${guidebook.id}",
                )
            )
            .append(newline())
            .append(command("bDesc", "$COMMAND describe ${guidebook.id}"))
            .append(newline())
            .append(command("bList", "$COMMAND edit"))
            .append(newline())
            .append(danger("bDelete", "$COMMAND delete-request ${guidebook.id}"))
            .append(blank())
            .append(line(s.text(if (entries.isEmpty()) "eEmpty" else "eNote"), "eNote"))
    val pages = mutableListOf(home.build())
    GuidebookBookRules.paginate(entries.withIndex().toList(), 3)
        .filter { it.isNotEmpty() }
        .forEach { entryPage ->
          val content = page().append(line(s.text("eHeading"), "eTitle"))
          entryPage.forEach { indexed ->
            val entry = indexed.value
            val ok = if (entry.valid) "eOk" else "eNg"
            content
                .append(
                    line(
                        "${indexed.index + 1}. ${entry.data?.title ?: "建築ID:${entry.buildId}"}",
                        "eEntry",
                    )
                )
                .append(line(s.text(ok), ok))
                .append(command("bUp", "$COMMAND move ${guidebook.id} ${entry.buildId} -1"))
                .append(Component.space())
                .append(command("bDown", "$COMMAND move ${guidebook.id} ${entry.buildId} 1"))
            if (guidebook.type == GuidebookType.PERSONAL) {
              content
                  .append(Component.space())
                  .append(command("bComment", "$COMMAND comment ${guidebook.id} ${entry.buildId}"))
            }
            content
                .append(Component.space())
                .append(danger("bRemove", "$COMMAND remove ${guidebook.id} ${entry.buildId}"))
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
                .append(
                    Component.text("本当に削除しますか？", RED)
                        .decorate(TextDecoration.BOLD)
                        .append(newline())
                )
                .append(Component.text("「${guidebook.title}」", BLACK).append(newline()))
                .append(blank())
                .append(Component.text("この操作は取り消せません。", RED).append(newline()))
                .append(Component.text("15秒以内にもう一度クリックしてください。", DARK_GRAY).append(newline()))
                .append(blank())
                .append(button("削除を確定", "$COMMAND delete-confirm ${guidebook.id}", "eDanger"))
                .append(newline())
                .append(button("キャンセル", "$COMMAND editor ${guidebook.id}", "eButton"))
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

  private fun line(text: String, role: String): Component =
      style.styled(text, role).append(newline())

  /** hover が空文字なら付けない。 */
  private fun hover(component: Component, textKey: String): Component {
    val text = style.text(textKey)
    return if (text.isEmpty()) component
    else component.hoverEvent(HoverEvent.showText(style.styled(text, "hover")))
  }

  private fun button(label: String, command: String, role: String): Component =
      style
          .styled(if (style.brackets) "[$label]" else label, role)
          .clickEvent(ClickEvent.runCommand(command))

  /** booktuner と同じく bXxx のホバーは hXxx。 */
  private fun command(key: String, command: String, role: String = "eButton"): Component =
      hover(button(style.text(key), command, role), "h" + key.drop(1))

  private fun danger(key: String, command: String): Component = command(key, command, "eDanger")

  private fun mark(mark: String): Component =
      when (mark) {
        "☑" -> style.styled(mark, "liked")
        "！" -> hover(style.styled(mark, "invalid"), "invalid")
        else -> style.styled(mark, "unfound")
      }

  private fun nextLine(
      next: GuidebookBookRules.NextLine,
      guidebookId: Int,
      complete: Boolean,
  ): Component {
    val s = style
    val buildId = next.buildId
    if (complete) return line(s.text("complete"), "complete")
    val label = s.styled(s.text("next"), "nextLabel")
    if (buildId == null) return label.append(s.styled("なし", "nextLabel")).append(newline())
    return label
        .append(
            hover(
                s.styled(next.text.removePrefix("Next: "), "nextName")
                    .clickEvent(ClickEvent.runCommand("$COMMAND go $guidebookId $buildId")),
                "hNext",
            )
        )
        .append(newline())
  }

  private fun newline(): Component = Component.newline()

  private fun blank(): Component = Component.newline()

  private data class DeleteConfirmation(val guidebookId: Int, val expiresAt: Long)
}
