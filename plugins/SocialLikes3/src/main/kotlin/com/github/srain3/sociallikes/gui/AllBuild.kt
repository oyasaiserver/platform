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
import com.github.stefvanschie.inventoryframework.pane.util.Slot
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter
import java.util.UUID
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.NamespacedKey
import org.bukkit.Sound
import org.bukkit.entity.Player
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.inventory.ItemStack
import org.bukkit.persistence.PersistentDataType

object AllBuild {
  /** [SLData]を元に全ての建築GUI用のアイテムを保存している */
  private val allBuildItem = sortedMapOf<LocalDateTime, ItemStack>(reverseOrder())

  /** GUIを返す */
  fun createGUI(): ChestGui {
    val gui = ChestGui(6, Tools.socialLikesLOGOShort + "&r 全ての建築 p1".color())
    gui.setOnTopClick {
      it.isCancelled = true
      if (it.currentItem != null) {
        val player = it.whoClicked as Player
        player.playSound(player, Sound.UI_BUTTON_CLICK, 1F, 1F)
      }
    }
    gui.setOnTopDrag { it.isCancelled = true }

    val pagePane = PaginatedPane(9, 5)
    pagePane.populateWithItemStacks(allBuildItem.values.toList())
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
            gui.title = Tools.socialLikesLOGOShort + "&r 全ての建築 p${pagePane.page+1}".color()
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
            gui.title = Tools.socialLikesLOGOShort + "&r 全ての建築 p${pagePane.page+1}".color()
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

  /** ファイルロード時にアイテムを作成しておく */
  fun createItem(dataMap: Map<String, MutableList<SLData>>) {
    allBuildItem.clear()
    val thread =
        Thread(
            {
              dataMap.values.forEach { list ->
                list
                    .filter { it.deletedAt == null }
                    .forEach { slData ->
                      try {
                        createSignItem(slData)
                      } catch (e: Exception) {
                        Tools.plugin.logger.severe("createSignItemにエラー０００: ${slData.id}")
                      }
                    }
              }
              allBuildItem.toSortedMap()
              try {
                UserBuild.createItem(dataMap)
              } catch (e: Exception) {
                Tools.plugin.logger.severe("UserBuild.createItemにエラー: ${e.toString()}")
              }
            },
            "SL3-AllBuildGUIItem",
        )
    thread.uncaughtExceptionHandler =
        Thread.UncaughtExceptionHandler { _, e ->
          Tools.plugin.logger.severe("AllBuildGUIItemにエラーが発生しました: ${e.toString()}")
          e.printStackTrace()
        }
    thread.start()
  }

  /** 更新されたデータのGUIアイテムを作成する */
  fun updateSLSignData(slData: SLData) {
    createSignItem(slData)
    allBuildItem.toSortedMap()
  }

  /** 消去されたデータのGUIアイテムを消去する */
  fun deleteSLSignData(slData: SLData) {
    allBuildItem.remove(slData.time)
  }

  private val idKey = NamespacedKey(Tools.plugin, "SocialLikes_ID-AllBuildGUI")

  /** アイテムにIDを埋め込む */
  private fun addItemMetaID(item: ItemStack, id: Int) {
    val meta = item.itemMeta ?: return
    meta.persistentDataContainer.set(idKey, PersistentDataType.INTEGER, id)
    item.itemMeta = meta
  }

  /** アイテムを作成する */
  private fun createSignItem(slData: SLData) {
    val item = ItemStack(Material.OAK_SIGN)
    item.allFlag()
    item.addText(
        "&f>>&a${slData.title} &rID:${slData.id}",
        mutableListOf(
            "&3制作者:&f ${
                try {
                    Bukkit.getOfflinePlayer(slData.owner).name
                } catch (_: Exception) {
                    "不明"
                }
            }",
            "&3イイね:&f ${slData.likes.count()}",
            "&3作成日:&f " + slData.time.format(DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm")),
            "&7&nクリックでテレポート&r&7します",
        ),
    )
    addItemMetaID(item, slData.id)
    allBuildItem[slData.time] = item
  }

  /** 時間から次の新着LikeのIDを返す、ない場合null */
  fun timeToNextID(localDateTime: LocalDateTime): Int? {
    val ite = allBuildItem.asIterable()
    return ite.findLast { it.key > localDateTime }
        ?.value
        ?.itemMeta
        ?.persistentDataContainer
        ?.get(idKey, PersistentDataType.INTEGER)
  }

  /** 時間から前の新着LikeのIDを返す、ない場合null */
  fun timeToPrevID(localDateTime: LocalDateTime): Int? {
    val ite = allBuildItem.asIterable()
    return ite.find { it.key < localDateTime }
        ?.value
        ?.itemMeta
        ?.persistentDataContainer
        ?.get(idKey, PersistentDataType.INTEGER)
  }

  /** 時間から作者を返す、ない場合null */
  fun timeToUser(localDateTime: LocalDateTime): UUID? {
    val id =
        allBuildItem[localDateTime]
            ?.itemMeta
            ?.persistentDataContainer
            ?.get(idKey, PersistentDataType.INTEGER) ?: return null
    return Data.getSLData(id)?.owner
  }
}
