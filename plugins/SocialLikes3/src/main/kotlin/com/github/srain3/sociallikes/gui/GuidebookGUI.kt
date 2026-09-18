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
import com.github.stefvanschie.inventoryframework.gui.GuiItem
import com.github.stefvanschie.inventoryframework.gui.type.ChestGui
import com.github.stefvanschie.inventoryframework.pane.PaginatedPane
import com.github.stefvanschie.inventoryframework.pane.StaticPane
import com.github.stefvanschie.inventoryframework.pane.util.Slot
import org.bukkit.Material
import org.bukkit.Sound
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack

object GuidebookGUI {
  fun openCatalog(player: Player) {
    val guidebooks = SLDatabase.loadPublishedGuidebooksBlocking()
    val gui = baseGui("旅行ガイドブック")
    val pages = PaginatedPane(9, 5)
    pages.populateWithGuiItems(
        guidebooks.map { guidebook ->
          val entries = GuidebookService.entries(guidebook.id, player.uniqueId)
          val progress = GuidebookService.progress(entries)
          GuiItem(
              ItemStack(
                      if (guidebook.type == GuidebookType.OFFICIAL) Material.GOLDEN_HORSE_ARMOR
                      else Material.WRITTEN_BOOK
                  )
                  .allFlag()
                  .addText(
                      (if (guidebook.type == GuidebookType.OFFICIAL) "&6★ " else "&f") +
                          guidebook.title,
                      mutableListOf(
                          "&7進捗: &a${progress.discovered} / ${progress.total}",
                          "&7作成者: ${GuidebookService.authorName(guidebook.creatorUuid)}",
                          "&eクリックで観光用ガイドブックを入手",
                      ),
                  )
          ) {
            GuidebookService.give(player, GuidebookService.createTouristItem(guidebook))
            player.sendMessage(Tools.socialLikesLOGO + " &a観光用ガイドブックを入手しました。".color())
          }
        }
    )
    gui.addPane(Slot.fromXY(0, 0), pages)

    val actions = navigation(gui, pages)
    actions.addItem(
        GuiItem(
            ItemStack(Material.FEATHER)
                .allFlag()
                .addText("&a個人ガイドを作成", mutableListOf("&7タイトルを入力して作成します"))
        ) {
          player.closeInventory()
          openTitleInput(player, GuidebookType.PERSONAL)
        },
        2,
        0,
    )
    if (player.hasPermission(GuidebookService.OFFICIAL_PERMISSION)) {
      actions.addItem(
          GuiItem(
              ItemStack(Material.NETHER_STAR)
                  .allFlag()
                  .addText("&6公式ガイドを作成", mutableListOf("&7運営用の公式ガイドを作成します"))
          ) {
            player.closeInventory()
            openTitleInput(player, GuidebookType.OFFICIAL)
          },
          3,
          0,
      )
    }
    actions.addItem(
        GuiItem(
            ItemStack(Material.WRITABLE_BOOK)
                .allFlag()
                .addText("&e自分の編集用ガイド", mutableListOf("&7編集キーを再取得できます"))
        ) {
          openEditable(player)
        },
        6,
        0,
    )
    gui.addPane(Slot.fromXY(0, 5), actions)
    gui.show(player)
  }

  fun openInfo(player: Player, guidebook: GuidebookData) {
    val entries = GuidebookService.entries(guidebook.id, player.uniqueId)
    val progress = GuidebookService.progress(entries)
    val gui = baseGui("${guidebook.title} ${progress.discovered}/${progress.total}")
    val pages = PaginatedPane(9, 5)
    pages.populateWithGuiItems(
        entries.mapIndexed { index, entry ->
          val data = entry.data
          val state =
              when {
                !entry.valid -> "&c案内不可（進捗対象外）"
                entry.liked -> "&aいいね済み"
                else -> "&e未発見"
              }
          GuiItem(
              ItemStack(
                      when {
                        !entry.valid -> Material.BARRIER
                        entry.liked -> Material.LIME_DYE
                        else -> Material.MAP
                      }
                  )
                  .allFlag()
                  .addText(
                      "&f${index + 1}. ${data?.title ?: "建築ID:${entry.buildId}"}",
                      mutableListOf(
                          state,
                          "&7作者: ${data?.owner?.let(GuidebookService::authorName) ?: "不明"}",
                      ),
                  )
          ) {}
        }
    )
    gui.addPane(Slot.fromXY(0, 0), pages)
    gui.addPane(Slot.fromXY(0, 5), navigation(gui, pages))
    gui.show(player)
  }

  fun openEditor(player: Player, guidebookId: Int) {
    val guidebook = SLDatabase.loadGuidebookBlocking(guidebookId)
    if (guidebook == null || !GuidebookService.canEdit(player, guidebook)) {
      player.sendMessage(Tools.socialLikesLOGO + " &cこのガイドブックは編集できません。".color())
      return
    }
    val entries = GuidebookService.entries(guidebook.id, player.uniqueId)
    val gui = baseGui("編集: ${guidebook.title}")
    val pages = PaginatedPane(9, 5)
    pages.populateWithGuiItems(
        entries.mapIndexed { index, entry ->
          val data = entry.data
          GuiItem(
              ItemStack(if (entry.valid) Material.OAK_SIGN else Material.BARRIER)
                  .allFlag()
                  .addText(
                      "&f${index + 1}. ${data?.title ?: "建築ID:${entry.buildId}"}",
                      mutableListOf(
                          if (entry.valid) "&a案内可能" else "&c案内不可（進捗対象外）",
                          "&7左クリック: ひとつ前へ",
                          "&7右クリック: ひとつ後ろへ",
                          "&cShift + 右クリック: 掲載から削除",
                      ),
                  )
          ) { event ->
            when {
              event.isShiftClick && event.isRightClick ->
                  GuidebookService.removeBuild(player, guidebook.id, entry.buildId)
              event.isLeftClick ->
                  GuidebookService.moveBuild(player, guidebook.id, entry.buildId, -1)
              event.isRightClick ->
                  GuidebookService.moveBuild(player, guidebook.id, entry.buildId, 1)
            }
            openEditor(player, guidebook.id)
          }
        }
    )
    gui.addPane(Slot.fromXY(0, 0), pages)

    val actions = navigation(gui, pages)
    actions.addItem(
        GuiItem(
            ItemStack(Material.HOPPER)
                .allFlag()
                .addText("&a建築を追加", mutableListOf("&7追加モードにしてSL看板を右クリックします"))
        ) {
          GuidebookListener.startAddMode(player, guidebook.id)
          player.closeInventory()
        },
        2,
        0,
    )
    actions.addItem(
        GuiItem(
            ItemStack(if (guidebook.published) Material.LIME_DYE else Material.GRAY_DYE)
                .allFlag()
                .addText(
                    if (guidebook.published) "&a公開中" else "&7非公開",
                    mutableListOf("&7クリックで${if (guidebook.published) "非公開" else "公開"}にします"),
                )
        ) {
          GuidebookService.setPublished(player, guidebook.id, !guidebook.published)
          openEditor(player, guidebook.id)
        },
        3,
        0,
    )
    actions.addItem(
        GuiItem(
            ItemStack(Material.TNT)
                .allFlag()
                .addText("&cガイドブックを削除", mutableListOf("&cShift + クリックで削除します"))
        ) { event ->
          if (event.isShiftClick && GuidebookService.delete(player, guidebook.id)) {
            openCatalog(player)
          } else if (!event.isShiftClick) {
            player.sendMessage(Tools.socialLikesLOGO + " &e削除するにはShiftを押してください。".color())
          }
        },
        6,
        0,
    )
    gui.addPane(Slot.fromXY(0, 5), actions)
    gui.show(player)
  }

  private fun openEditable(player: Player) {
    val guidebooks =
        SLDatabase.loadEditableGuidebooksBlocking(
            player.uniqueId,
            player.hasPermission(GuidebookService.OFFICIAL_PERMISSION),
        )
    val gui = baseGui("編集用ガイドブック")
    val pages = PaginatedPane(9, 5)
    pages.populateWithGuiItems(
        guidebooks.map { guidebook ->
          GuiItem(
              ItemStack(
                      if (guidebook.type == GuidebookType.OFFICIAL) Material.NETHER_STAR
                      else Material.WRITABLE_BOOK
                  )
                  .allFlag()
                  .addText(
                      "&f${guidebook.title}",
                      mutableListOf(
                          if (guidebook.published) "&a公開中" else "&7非公開",
                          "&e左クリック: 編集キーを入手",
                          "&e右クリック: 編集画面を開く",
                      ),
                  )
          ) { event ->
            if (event.isRightClick) {
              openEditor(player, guidebook.id)
            } else {
              GuidebookService.give(player, GuidebookService.createEditorItem(guidebook))
              player.sendMessage(Tools.socialLikesLOGO + " &a編集キーを入手しました。".color())
            }
          }
        }
    )
    gui.addPane(Slot.fromXY(0, 0), pages)
    gui.addPane(Slot.fromXY(0, 5), navigation(gui, pages))
    gui.show(player)
  }

  private fun openTitleInput(player: Player, type: GuidebookType) {
    val item =
        ItemStack(Material.WRITABLE_BOOK)
            .allFlag()
            .addText("新しいガイド", mutableListOf("&7右側の本をクリックして確定します"))
    SocialLikesAnvilInput.open(
        player,
        Tools.socialLikesLOGOShort + "&0ガイド名".color(),
        item,
    ) { target, title ->
      GuidebookService.create(target, type, title)?.let { openEditor(target, it.id) }
    }
  }

  private fun baseGui(title: String): ChestGui =
      ChestGui(6, (Tools.socialLikesLOGOShort + "&0$title").color()).apply {
        setOnTopClick {
          it.isCancelled = true
          if (it.currentItem != null) {
            (it.whoClicked as? Player)?.playSound(it.whoClicked, Sound.UI_BUTTON_CLICK, 1F, 1F)
          }
        }
        setOnTopDrag { it.isCancelled = true }
      }

  private fun navigation(gui: ChestGui, pages: PaginatedPane): StaticPane =
      StaticPane(9, 1).apply {
        addItem(
            GuiItem(ItemStack(Material.RED_WOOL).allFlag().addText("&f前のページ", mutableListOf())) {
              if (pages.page > 0) {
                pages.page--
                gui.update()
              }
            },
            0,
            0,
        )
        addItem(
            GuiItem(ItemStack(Material.BARRIER).allFlag().addText("&c閉じる", mutableListOf())) {
              it.whoClicked.closeInventory()
            },
            4,
            0,
        )
        addItem(
            GuiItem(ItemStack(Material.GREEN_WOOL).allFlag().addText("&f次のページ", mutableListOf())) {
              if (pages.page < pages.pages - 1) {
                pages.page++
                gui.update()
              }
            },
            8,
            0,
        )
      }
}
