package com.github.srain3.sociallikes.gui

import com.github.srain3.sociallikes.Tools
import com.github.srain3.sociallikes.Tools.addText
import com.github.srain3.sociallikes.Tools.allFlag
import com.github.srain3.sociallikes.Tools.color
import com.github.srain3.sociallikes.datas.Data
import com.github.srain3.sociallikes.datas.SLData
import com.github.stefvanschie.inventoryframework.gui.GuiItem
import com.github.stefvanschie.inventoryframework.gui.type.ChestGui
import com.github.stefvanschie.inventoryframework.pane.PaginatedPane
import com.github.stefvanschie.inventoryframework.pane.StaticPane
import java.time.format.DateTimeFormatter
import net.wesjd.anvilgui.AnvilGUI
import org.bukkit.*
import org.bukkit.entity.Player
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.inventory.ItemStack
import org.bukkit.persistence.PersistentDataType
import org.bukkit.scheduler.BukkitRunnable

object SearchBuild {
  /** GUIを返す */
  private fun createGUI(slDataList: List<SLData>, searchText: String): ChestGui {
    val gui = ChestGui(6, Tools.socialLikesLOGOShort + "&r 「${searchText}」の建築 p1".color())
    gui.setOnTopClick {
      it.isCancelled = true
      if (it.currentItem != null) {
        val player = it.whoClicked as Player
        player.playSound(player, Sound.UI_BUTTON_CLICK, 1F, 1F)
      }
    }
    gui.setOnTopDrag { it.isCancelled = true }

    val pagePane = PaginatedPane(0, 0, 9, 5)
    val itemList = mutableListOf<ItemStack>()
    slDataList.forEach { itemList.add(createSignItem(it)) }
    pagePane.populateWithItemStacks(itemList)
    pagePane.setOnClick {
      val id =
        it.currentItem?.itemMeta?.persistentDataContainer?.get(idKey, PersistentDataType.INTEGER)
          ?: return@setOnClick
      it.whoClicked.closeInventory()
      Bukkit.dispatchCommand(it.whoClicked, "sociallikes3:sltp $id")
    }
    gui.addPane(pagePane)

    val navigation = StaticPane(0, 5, 9, 1)
    navigation.addItem(
      GuiItem(
        ItemStack(Material.RED_WOOL).apply {
          allFlag()
          addText("&f前のページへ", mutableListOf())
        }
      ) { _: InventoryClickEvent? ->
        if (pagePane.page > 0) {
          pagePane.setPage(pagePane.page - 1)
          gui.title =
            Tools.socialLikesLOGOShort + "&r 「${searchText}」の建築 p${pagePane.page+1}".color()
          gui.update()
        }
      },
      0,
      0,
    )
    navigation.addItem(
      GuiItem(
        ItemStack(Material.GREEN_WOOL).apply {
          allFlag()
          addText("&f次のページへ", mutableListOf())
        }
      ) { _: InventoryClickEvent? ->
        if (pagePane.page < pagePane.pages - 1) {
          pagePane.setPage(pagePane.page + 1)
          gui.title =
            Tools.socialLikesLOGOShort + "&r 「${searchText}」の建築 p${pagePane.page+1}".color()
          gui.update()
        }
      },
      8,
      0,
    )
    navigation.addItem(
      GuiItem(
        ItemStack(Material.BARRIER).apply {
          allFlag()
          addText("&c閉じる", mutableListOf())
        }
      ) { event: InventoryClickEvent ->
        event.whoClicked.closeInventory()
      },
      4,
      0,
    )
    gui.addPane(navigation)

    gui.update()
    return gui
  }

  private val idKey = NamespacedKey(Tools.plugin, "SocialLikes_ID-SearchBuildGUI")

  /** アイテムにIDを埋め込む */
  private fun addItemMetaID(item: ItemStack, id: Int) {
    val meta = item.itemMeta ?: return
    meta.persistentDataContainer.set(idKey, PersistentDataType.INTEGER, id)
    item.itemMeta = meta
  }

  /** アイテムを作成して返す */
  private fun createSignItem(slData: SLData): ItemStack {
    val item = ItemStack(Material.OAK_SIGN)
    item.allFlag()
    item.addText(
      "&f>>&a${slData.title} &rID:${slData.id}",
      mutableListOf(
        "&3制作者:&f ${Bukkit.getOfflinePlayer(slData.owner).name}",
        "&3イイね:&f ${slData.likes.count()}",
        "&3作成日:&f " + slData.time.format(DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm")),
        "&7&nクリックでテレポート&r&7します",
      ),
    )
    addItemMetaID(item, slData.id)
    return item
  }

  /** オフラインプレイヤーを検索するためのAnvilGUIを開く */
  fun offlinePlayerSearch(player: Player) {
    AnvilGUI.Builder().apply {
      itemLeft(
        ItemStack(Material.OAK_SIGN)
          .allFlag()
          .addText("ここに探したい建築名", mutableListOf("&7出力先(右側)にあるこの看板をクリックで確定します", "&7普通に閉じた場合はキャンセルです"))
      )
      onClick { slot, e ->
        if (slot != AnvilGUI.Slot.OUTPUT) {
          return@onClick listOf()
        }

        if (e.text.isNotBlank()) {
          player.sendMessage(Tools.socialLikesLOGO + "&r 検索中です…".color())
          Thread {
              // 検索処理
              val regex = Regex(e.text)
              val slDataList = Data.getSLDataAll()
              val hitSLDataList = slDataList.filter { regex.containsMatchIn(it.title) }
              val gui = createGUI(hitSLDataList, e.text)
              object : BukkitRunnable() {
                  override fun run() {
                    if (player.isOnline) {
                      gui.show(player)
                    }
                  }
                }
                .runTaskLater(Tools.plugin, 2)
            }
            .start()

          e.player.playSound(player, Sound.UI_BUTTON_CLICK, 1F, 1F)
          return@onClick listOf(AnvilGUI.ResponseAction.close())
        } else {
          return@onClick listOf(AnvilGUI.ResponseAction.replaceInputText(""))
        }
      }
      title(Tools.socialLikesLOGOShort + "&0建築名検索".color())
      plugin(Tools.plugin)
      open(player)
    }
  }
}
