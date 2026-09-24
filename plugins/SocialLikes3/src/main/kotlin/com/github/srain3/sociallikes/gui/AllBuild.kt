package com.github.srain3.sociallikes.gui

import com.github.srain3.sociallikes.Tools
import com.github.srain3.sociallikes.Tools.color
import com.github.srain3.sociallikes.datas.Data
import com.github.srain3.sociallikes.datas.SLData
import com.github.srain3.sociallikes.datas.SLDatabase
import com.github.stefvanschie.inventoryframework.gui.type.ChestGui
import com.github.stefvanschie.inventoryframework.pane.PaginatedPane
import com.github.stefvanschie.inventoryframework.pane.util.Slot
import java.time.LocalDateTime
import java.util.UUID
import org.bukkit.Bukkit
import org.bukkit.NamespacedKey
import org.bukkit.inventory.ItemStack
import org.bukkit.persistence.PersistentDataType

object AllBuild {
  /** [SLData]を元に全ての建築GUI用のアイテムを保存している */
  private val allBuildItem = sortedMapOf<LocalDateTime, ItemStack>(reverseOrder())

  /** GUIを返す */
  fun createGUI(): ChestGui {
    val gui = ChestGui(6, Tools.socialLikesLOGOShort + "&r 全ての建築 p1".color())
    gui.cancelClickWithSound()

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

    gui.addPageNav(pagePane) { Tools.socialLikesLOGOShort + "&r 全ての建築 p${pagePane.page+1}".color() }

    gui.update()
    return gui
  }

  /** ファイルロード時にアイテムを作成しておく */
  fun createItem(dataMap: Map<String, MutableList<SLData>>) {
    allBuildItem.clear()
    val thread =
        Thread(
            {
              val startedAt = System.nanoTime()
              val builds = dataMap.values.flatten().filter { it.deletedAt == null }
              val ownerNames =
                  SLDatabase.loadPlayerNamesBlocking(
                      builds.map { it.owner.toString() },
                      timingName = "allBuildPlayerNames",
                  )
              builds.forEach { slData ->
                try {
                  createSignItem(slData, ownerNames[slData.owner.toString()])
                } catch (e: Exception) {
                  Tools.plugin.logger.severe("createSignItemにエラー０００: ${slData.id}")
                }
              }
              allBuildItem.toSortedMap()
              Tools.plugin.logger.info(
                  "[SL3] timing allBuildItemGeneration=${(System.nanoTime() - startedAt) / 1_000_000}ms"
              )
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

  /** アイテムを作成する */
  private fun createSignItem(
      slData: SLData,
      ownerName: String? =
          SLDatabase.getCachedPlayerName(slData.owner.toString())
              ?: try {
                Bukkit.getOfflinePlayer(slData.owner).name
              } catch (_: Exception) {
                null
              },
  ) {
    allBuildItem[slData.time] = buildSignItem(slData, idKey, ownerName ?: "不明")
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
