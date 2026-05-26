package com.github.srain3.sociallikes.gui

import com.github.srain3.sociallikes.Tools
import com.github.srain3.sociallikes.Tools.addText
import com.github.srain3.sociallikes.Tools.allFlag
import com.github.srain3.sociallikes.Tools.color
import com.github.srain3.sociallikes.datas.Data
import com.github.srain3.sociallikes.datas.PublicityData
import com.github.srain3.sociallikes.datas.PublicityHistory
import com.github.stefvanschie.inventoryframework.gui.GuiItem
import com.github.stefvanschie.inventoryframework.gui.type.ChestGui
import com.github.stefvanschie.inventoryframework.pane.PaginatedPane
import com.github.stefvanschie.inventoryframework.pane.StaticPane
import com.github.stefvanschie.inventoryframework.pane.util.Slot
import java.time.format.DateTimeFormatter
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.NamespacedKey
import org.bukkit.Sound
import org.bukkit.entity.Player
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.inventory.ItemStack
import org.bukkit.persistence.PersistentDataType

object PublicityHistoryGUI {
  /** GUIを返す */
  fun createGUI(): ChestGui {
    val gui = ChestGui(6, Tools.socialLikesLOGOShort + "&r 宣伝履歴 p1".color())
    gui.setOnTopClick {
      it.isCancelled = true
      if (it.currentItem != null) {
        val player = it.whoClicked as Player
        player.playSound(player, Sound.UI_BUTTON_CLICK, 1F, 1F)
      }
    }
    gui.setOnTopDrag { it.isCancelled = true }

    val itemList = mutableListOf<ItemStack>()
    val thread =
        Thread(
            {
              PublicityHistory.getData()
                  .toList()
                  .sortedByDescending { it.first }
                  .toMap()
                  .values
                  .forEach { pData ->
                    try {
                      createSignItem(pData)?.let { itemList.add(it) }
                    } catch (e: Exception) {
                      e.printStackTrace()
                      Bukkit.getLogger()
                          .warning("宣伝履歴GUIのアイテム作成に失敗しました: ${pData.slid} by ${pData.user}")
                    }
                  }
            },
            "SL3-createPublicityHistoryGUI",
        )
    thread.start()

    val pagePane = PaginatedPane(9, 5)
    pagePane.populateWithItemStacks(itemList)
    pagePane.setOnClick {
      val id =
          it.currentItem?.itemMeta?.persistentDataContainer?.get(idKey, PersistentDataType.INTEGER)
              ?: return@setOnClick
      it.whoClicked.closeInventory()
      Bukkit.dispatchCommand(it.whoClicked, "sociallikes3:sltp $id")
    }
    gui.addPane(Slot.fromXY(0, 0), pagePane)

    val navigation = StaticPane(9, 1)
    navigation.addItem(
        GuiItem(
            ItemStack(Material.RED_WOOL).apply {
              allFlag()
              addText("&f前のページへ", mutableListOf())
            }
        ) { _: InventoryClickEvent? ->
          if (pagePane.page > 0) {
            pagePane.setPage(pagePane.page - 1)
            gui.title = Tools.socialLikesLOGOShort + "&r 宣伝履歴 p${pagePane.page + 1}".color()
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
            gui.title = Tools.socialLikesLOGOShort + "&r 宣伝履歴 p${pagePane.page + 1}".color()
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
    gui.addPane(Slot.fromXY(0, 5), navigation)

    gui.update()
    return gui
  }

  private val idKey = NamespacedKey(Tools.plugin, "SLID-PublicityHistoryGUI")

  /** アイテムにIDを埋め込む */
  private fun addItemMetaID(item: ItemStack, id: Int) {
    val meta = item.itemMeta ?: return
    meta.persistentDataContainer.set(idKey, PersistentDataType.INTEGER, id)
    item.itemMeta = meta
  }

  /** アイテムを作成する */
  private fun createSignItem(pData: PublicityData): ItemStack? {
    val slData = Data.getSLData(pData.slid) ?: return null
    val item = ItemStack(Material.OAK_SIGN)
    item.allFlag()
    item.addText(
        "&f>>&a${slData.title} &rID:${slData.id}",
        mutableListOf(
            "&3制作者:&f ${
                    try {
                        Bukkit.getOfflinePlayer(slData.owner).name
                    } catch (e: Exception) {
                        println("Nameの取得に失敗：${slData.owner}")
                        "不明"
                    }
                }",
            "&3イイね:&f ${slData.likes.count()}",
            "&3作成日:&f " + slData.time.format(DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm")),
            "&7&nクリックでテレポート&r&7します",
            " ",
            "&d宣伝者:&f ${
                    try {
                        Bukkit.getOfflinePlayer(pData.user).name
                    } catch (e: Exception) {
                        println("Nameの取得に失敗：${slData.owner}")
                        "不明"
                    }
                }",
            "&d宣伝日:&f ${pData.timeStamp.format(DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm:ss"))}",
        ),
    )
    addItemMetaID(item, slData.id)
    return item
  }
}
