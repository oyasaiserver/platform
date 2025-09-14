package com.github.srain3.sociallikes.gui

import com.github.srain3.sociallikes.Tools
import com.github.srain3.sociallikes.Tools.addText
import com.github.srain3.sociallikes.Tools.allFlag
import com.github.srain3.sociallikes.Tools.color
import com.github.srain3.sociallikes.datas.SLData
import com.github.stefvanschie.inventoryframework.gui.GuiItem
import com.github.stefvanschie.inventoryframework.gui.type.ChestGui
import com.github.stefvanschie.inventoryframework.pane.PaginatedPane
import com.github.stefvanschie.inventoryframework.pane.StaticPane
import java.time.LocalDateTime
import java.time.format.DateTimeFormatter
import java.util.*
import net.wesjd.anvilgui.AnvilGUI
import org.bukkit.*
import org.bukkit.entity.HumanEntity
import org.bukkit.entity.Player
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.meta.SkullMeta
import org.bukkit.persistence.PersistentDataType
import org.bukkit.scheduler.BukkitRunnable

object UserBuild {
  /** [SLData]を元に全てのユーザー別建築GUI用のアイテムを保存している */
  private val userBuildItem = mutableMapOf<UUID, MutableMap<LocalDateTime, ItemStack>>()

  /** UUIDを元にアイテムを返す */
  fun getUserBuildItem(user: UUID): MutableMap<LocalDateTime, ItemStack> {
    return userBuildItem[user] ?: mutableMapOf()
  }

  /** GUIを返す */
  fun createGUI(user: OfflinePlayer, player: Player): ChestGui {
    val name = user.name
    val gui = ChestGui(6, Tools.socialLikesLOGOShort + "&r ${name}の建築 p1".color())
    gui.setOnTopClick {
      it.isCancelled = true
      if (it.currentItem != null) {
        val p = it.whoClicked as Player
        p.playSound(p, Sound.UI_BUTTON_CLICK, 1F, 1F)
      }
    }
    gui.setOnTopDrag { it.isCancelled = true }

    val pagePane = PaginatedPane(0, 0, 9, 5)
    pagePane.populateWithItemStacks(
      userBuildItem[user.uniqueId]?.toSortedMap(reverseOrder())?.values?.toList() ?: listOf()
    )
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
          gui.title = Tools.socialLikesLOGOShort + "&r ${name}の建築 p${pagePane.page+1}".color()
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
          gui.title = Tools.socialLikesLOGOShort + "&r ${name}の建築 p${pagePane.page+1}".color()
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
    if (FollowBuild.isFollow(user.uniqueId, player)) {
      navigation.addItem(
        GuiItem(
          ItemStack(Material.TOTEM_OF_UNDYING).apply {
            allFlag()
            addText("&eフォローを外す", mutableListOf())
          }
        ) { event: InventoryClickEvent ->
          event.whoClicked.closeInventory()
          FollowBuild.newFollowerSave(user.uniqueId, event.whoClicked.uniqueId, true)
          event.whoClicked.sendMessage(
            Tools.socialLikesLOGO + "&r ${user.name}さんへのフォローを外しました".color()
          )
        },
        6,
        0,
      )
    } else {
      navigation.addItem(
        GuiItem(
          ItemStack(Material.TOTEM_OF_UNDYING).apply {
            allFlag()
            addText("&aフォローする", mutableListOf())
          }
        ) { event: InventoryClickEvent ->
          event.whoClicked.closeInventory()
          FollowBuild.newFollowerSave(user.uniqueId, event.whoClicked.uniqueId, false)
          event.whoClicked.sendMessage(
            Tools.socialLikesLOGO + "&r ${user.name}さんをフォローしました！".color()
          )
          event.whoClicked.sendMessage(
            Tools.socialLikesLOGO + "&r \"/slmenu\"のフォロー建築一覧から建築を確認できます".color()
          )
        },
        6,
        0,
      )
    }
    gui.addPane(navigation)

    gui.update()
    return gui
  }

  /** ファイルロード時にアイテムを作成しておく */
  fun createItem(dataMap: Map<String, MutableList<SLData>>) {
    userBuildItem.clear()
    Thread(
        {
          dataMap.values.forEach { list -> list.forEach { slData -> createSignItem(slData) } }
          userBuildItem.toSortedMap()
        },
        "SL3-UserBuildGUIItem",
      )
      .start()
  }

  /** 更新されたデータのGUIアイテムを作成する */
  fun updateSLSignData(slData: SLData) {
    createSignItem(slData)
    userBuildItem.toSortedMap()
  }

  /** 消去されたデータのGUIアイテムを消去する */
  fun deleteSLSignData(slData: SLData) {
    userBuildItem[slData.owner]?.remove(slData.time)
  }

  val idKey = NamespacedKey(Tools.plugin, "SocialLikes_ID-UserBuildGUI")

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
    val map = userBuildItem[slData.owner] ?: mutableMapOf()
    map[slData.time] = item
    userBuildItem[slData.owner] = map
  }

  /** 時間から次のユーザー別新着LikeのIDを返す、ない場合null */
  fun timeToNextID(localDateTime: LocalDateTime, uuid: UUID): Int? {
    val ite = userBuildItem[uuid]?.asIterable()?.sortedByDescending { it.key }
    return ite
      ?.findLast { it.key > localDateTime }
      ?.value
      ?.itemMeta
      ?.persistentDataContainer
      ?.get(idKey, PersistentDataType.INTEGER)
  }

  /** オンラインプレイヤー一覧GUIを表示する */
  fun openOnlinePlayerGUI(p: HumanEntity) {
    val gui = ChestGui(6, Tools.socialLikesLOGOShort + "&r オンラインプレイヤー p1".color())
    gui.setOnTopClick {
      it.isCancelled = true
      if (it.currentItem != null) {
        val player = it.whoClicked as Player
        player.playSound(player, Sound.UI_BUTTON_CLICK, 1F, 1F)
      }
    }
    gui.setOnTopDrag { it.isCancelled = true }

    val pagePane = PaginatedPane(0, 0, 9, 5)
    pagePane.populateWithItemStacks(onlinePlayerHeadItem())
    pagePane.setOnClick {
      val meta = it.currentItem?.itemMeta ?: return@setOnClick
      val playerUUIDStr =
        meta.persistentDataContainer.get(key, PersistentDataType.STRING) ?: return@setOnClick
      val uuid = UUID.fromString(playerUUIDStr)
      val offlinePlayer = Bukkit.getOfflinePlayer(uuid)
      it.whoClicked.closeInventory()
      createGUI(offlinePlayer, (it.whoClicked as Player)).show(it.whoClicked)
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
          gui.title = Tools.socialLikesLOGOShort + "&r オンラインプレイヤー p${pagePane.page+1}".color()
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
          gui.title = Tools.socialLikesLOGOShort + "&r オンラインプレイヤー p${pagePane.page+1}".color()
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
    navigation.addItem(
      GuiItem(
        ItemStack(Material.NAME_TAG).apply {
          allFlag()
          addText("&eプレイヤー名で検索", mutableListOf("&7オフラインのプレイヤーを探します"))
        }
      ) { event: InventoryClickEvent ->
        event.whoClicked.closeInventory()
        offlinePlayerSearch(event.whoClicked as Player)
      },
      6,
      0,
    )
    gui.addPane(navigation)

    gui.update()
    gui.show(p)
  }

  private val key = NamespacedKey(Tools.plugin, "UUID-Str")

  /** オンラインプレイヤーのGUI用ヘッドアイテムを作って返す */
  private fun onlinePlayerHeadItem(): MutableList<ItemStack> {
    val headItemList = mutableListOf<ItemStack>()
    Bukkit.getOnlinePlayers().forEach { player ->
      val item = ItemStack(Material.PLAYER_HEAD)
      val meta = item.itemMeta as SkullMeta
      meta.setOwningPlayer(player)
      meta.persistentDataContainer.set(key, PersistentDataType.STRING, player.uniqueId.toString())
      item.itemMeta = meta
      headItemList.add(item)
    }
    return headItemList
  }

  /** オフラインプレイヤーを検索するためのAnvilGUIを開く */
  @Suppress("DEPRECATION")
  private fun offlinePlayerSearch(player: Player) {
    AnvilGUI.Builder().apply {
      itemLeft(
        ItemStack(Material.PLAYER_HEAD)
          .allFlag()
          .addText("ここにプレイヤー名", mutableListOf("&7出力先(右側)にあるこのヘッドをクリックで確定します", "&7普通に閉じた場合はキャンセルです"))
      )
      onClick { slot, e ->
        if (slot != AnvilGUI.Slot.OUTPUT) {
          return@onClick listOf()
        }

        if (e.text.isNotBlank()) {
          val sPlayer = Bukkit.getOfflinePlayer(e.text)
          object : BukkitRunnable() {
              override fun run() {
                createGUI(sPlayer, player).show(player)
              }
            }
            .runTaskLater(Tools.plugin, 1)
          e.player.playSound(player, Sound.UI_BUTTON_CLICK, 1F, 1F)
          return@onClick listOf(AnvilGUI.ResponseAction.close())
        } else {
          return@onClick listOf(AnvilGUI.ResponseAction.replaceInputText(""))
        }
      }
      title(Tools.socialLikesLOGOShort + "&0プレイヤー名検索".color())
      plugin(Tools.plugin)
      open(player)
    }
  }
}
