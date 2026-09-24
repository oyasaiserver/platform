package com.github.srain3.sociallikes.gui

import com.github.srain3.sociallikes.Tools
import com.github.srain3.sociallikes.Tools.addText
import com.github.srain3.sociallikes.Tools.allFlag
import com.github.srain3.sociallikes.Tools.color
import com.github.srain3.sociallikes.datas.SLData
import com.github.srain3.sociallikes.datas.SLDatabase
import com.github.stefvanschie.inventoryframework.gui.GuiItem
import com.github.stefvanschie.inventoryframework.gui.type.ChestGui
import com.github.stefvanschie.inventoryframework.pane.PaginatedPane
import com.github.stefvanschie.inventoryframework.pane.util.Slot
import java.time.LocalDateTime
import java.util.*
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
    val name = SLPlayerHeads.resolveName(user.uniqueId) ?: user.name ?: "Unknown"
    val gui = ChestGui(6, Tools.socialLikesLOGOShort + "&r ${name}の建築 p1".color())
    gui.cancelClickWithSound()

    val pagePane = PaginatedPane(9, 5)
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
    gui.addPane(Slot.fromXY(0, 0), pagePane)

    val navigation =
        gui.addPageNav(pagePane) {
          Tools.socialLikesLOGOShort + "&r ${name}の建築 p${pagePane.page+1}".color()
        }
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
            event.whoClicked.sendMessage(Tools.socialLikesLOGO + "&r ${name}さんへのフォローを外しました".color())
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
            event.whoClicked.sendMessage(Tools.socialLikesLOGO + "&r ${name}さんをフォローしました！".color())
            event.whoClicked.sendMessage(
                Tools.socialLikesLOGO + "&r \"/slmenu\"のフォロー建築一覧から建築を確認できます".color()
            )
          },
          6,
          0,
      )
    }

    gui.update()
    return gui
  }

  /** ファイルロード時にアイテムを作成しておく */
  fun createItem(dataMap: Map<String, MutableList<SLData>>) {
    userBuildItem.clear()
    Thread(
            {
              val startedAt = System.nanoTime()
              val builds = dataMap.values.flatten().filter { it.deletedAt == null }
              val ownerNames =
                  SLDatabase.loadPlayerNamesBlocking(
                      builds.map { it.owner.toString() },
                      timingName = "userBuildPlayerNames",
                  )
              builds.forEach { slData ->
                createSignItem(slData, ownerNames[slData.owner.toString()])
              }
              userBuildItem.toSortedMap()
              Tools.plugin.logger.info(
                  "[SL3] timing userBuildItemGeneration=${(System.nanoTime() - startedAt) / 1_000_000}ms"
              )
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

  /** アイテムを作成する */
  private fun createSignItem(
      slData: SLData,
      ownerName: String? =
          SLDatabase.getCachedPlayerName(slData.owner.toString())
              ?: SLPlayerHeads.resolveName(slData.owner),
  ) {
    val map = userBuildItem[slData.owner] ?: mutableMapOf()
    map[slData.time] = buildSignItem(slData, idKey, ownerName ?: "不明")
    userBuildItem[slData.owner] = map
  }

  /** 時間から次のユーザー別新着LikeのIDを返す、ない場合null */
  fun timeToNextID(localDateTime: LocalDateTime, uuid: UUID): Int? {
    val ite = userBuildItem[uuid]?.asIterable()?.sortedByDescending { it.key }
    return ite?.findLast { it.key > localDateTime }
        ?.value
        ?.itemMeta
        ?.persistentDataContainer
        ?.get(idKey, PersistentDataType.INTEGER)
  }

  /** 時間から前のユーザー別新着LikeのIDを返す、ない場合null */
  fun timeToPrevID(localDateTime: LocalDateTime, uuid: UUID): Int? {
    val ite = userBuildItem[uuid]?.asIterable()?.sortedByDescending { it.key }
    return ite?.find { it.key < localDateTime }
        ?.value
        ?.itemMeta
        ?.persistentDataContainer
        ?.get(idKey, PersistentDataType.INTEGER)
  }

  /** オンラインプレイヤー一覧GUIを表示する */
  fun openOnlinePlayerGUI(p: HumanEntity) {
    val gui = ChestGui(6, Tools.socialLikesLOGOShort + "&r オンラインプレイヤー p1".color())
    gui.cancelClickWithSound()

    val pagePane = PaginatedPane(9, 5)
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
    gui.addPane(Slot.fromXY(0, 0), pagePane)

    val navigation =
        gui.addPageNav(pagePane) {
          Tools.socialLikesLOGOShort + "&r オンラインプレイヤー p${pagePane.page+1}".color()
        }
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

    gui.update()
    gui.show(p)
  }

  private val key = NamespacedKey(Tools.plugin, "UUID-Str")

  /** オンラインプレイヤーのGUI用ヘッドアイテムを作って返す */
  private fun onlinePlayerHeadItem(): MutableList<ItemStack> {
    val headItemList = mutableListOf<ItemStack>()
    Bukkit.getOnlinePlayers().forEach { player ->
      val item = SLPlayerHeads.createOnlineHead(player)
      val meta = item.itemMeta as SkullMeta
      meta.persistentDataContainer.set(key, PersistentDataType.STRING, player.uniqueId.toString())
      item.itemMeta = meta
      headItemList.add(item)
    }
    return headItemList
  }

  /** オフラインプレイヤー検索用の金床入力を開く */
  @Suppress("DEPRECATION")
  private fun offlinePlayerSearch(player: Player) {
    val item =
        ItemStack(Material.PLAYER_HEAD)
            .allFlag()
            .addText(
                "ここにプレイヤー名",
                mutableListOf("&7出力先(右側)にあるこのヘッドをクリックで確定します", "&7普通に閉じた場合はキャンセルです"),
            )
    SocialLikesAnvilInput.open(player, Tools.socialLikesLOGOShort + "&0プレイヤー名検索".color(), item) {
        p,
        text ->
      val sPlayer = Bukkit.getOfflinePlayer(text)
      object : BukkitRunnable() {
            override fun run() {
              createGUI(sPlayer, p).show(p)
            }
          }
          .runTaskLater(Tools.plugin, 1)
      p.playSound(p, Sound.UI_BUTTON_CLICK, 1F, 1F)
    }
  }
}
