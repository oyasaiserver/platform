package com.github.srain3.sociallikes.gui

import com.github.srain3.sociallikes.CustomYaml
import com.github.srain3.sociallikes.Tools
import com.github.srain3.sociallikes.Tools.addText
import com.github.srain3.sociallikes.Tools.allFlag
import com.github.srain3.sociallikes.Tools.color
import com.github.stefvanschie.inventoryframework.gui.GuiItem
import com.github.stefvanschie.inventoryframework.gui.type.ChestGui
import com.github.stefvanschie.inventoryframework.pane.PaginatedPane
import com.github.stefvanschie.inventoryframework.pane.StaticPane
import com.github.stefvanschie.inventoryframework.pane.util.Slot
import java.time.LocalDateTime
import java.util.*
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.NamespacedKey
import org.bukkit.Sound
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.event.player.PlayerJoinEvent
import org.bukkit.event.player.PlayerQuitEvent
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.meta.SkullMeta
import org.bukkit.persistence.PersistentDataType

object FollowBuild : Listener {
  /** GUIを返す */
  private fun createGUI(userList: MutableSet<UUID>, playerUUID: UUID): ChestGui {
    var filterSwitch = true

    val gui = ChestGui(6, Tools.socialLikesLOGOShort + "&r フォロー中の新着建築 p1".color())
    gui.setOnTopClick {
      it.isCancelled = true
      if (it.currentItem != null) {
        val player = it.whoClicked as Player
        player.playSound(player, Sound.UI_BUTTON_CLICK, 1F, 1F)
      }
    }
    gui.setOnTopDrag { it.isCancelled = true }

    val itemListALL0 = mutableMapOf<LocalDateTime, ItemStack>()
    userList.forEach { uuid -> itemListALL0.putAll(UserBuild.getUserBuildItem(uuid)) }
    val iListTimeSort = itemListALL0.asIterable().sortedByDescending { it.key }
    val itemListNewIte =
        iListTimeSort.filter { it.key > (logoutTimeList[playerUUID] ?: LocalDateTime.now()) }
    val itemListNew = mutableListOf<ItemStack>()
    itemListNewIte.forEach { itemListNew.add(it.value) }
    val itemListALL = itemListALL0.toSortedMap(reverseOrder()).values.toList()

    val pane = PaginatedPane(9, 5)
    pane.setOnClick {
      val id =
          it.currentItem
              ?.itemMeta
              ?.persistentDataContainer
              ?.get(UserBuild.idKey, PersistentDataType.INTEGER) ?: return@setOnClick
      it.whoClicked.closeInventory()
      Bukkit.dispatchCommand(it.whoClicked, "sociallikes3:sltp $id")
    }
    pane.populateWithItemStacks(itemListNew)
    gui.addPane(Slot.fromXY(0, 0), pane)

    val navigation = StaticPane(9, 1)
    navigation.addItem(
        GuiItem(
            ItemStack(Material.RED_WOOL).apply {
              allFlag()
              addText("&f前のページへ", mutableListOf())
            }
        ) { _: InventoryClickEvent? ->
          if (filterSwitch) {
            if (pane.page > 0) {
              pane.setPage(pane.page - 1)
              gui.title = Tools.socialLikesLOGOShort + "&r フォロー中の新着建築 p${pane.page + 1}".color()
              gui.update()
            }
          } else {
            if (pane.page > 0) {
              pane.setPage(pane.page - 1)
              gui.title = Tools.socialLikesLOGOShort + "&r フォロー中の全建築 p${pane.page + 1}".color()
              gui.update()
            }
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
          if (filterSwitch) {
            if (pane.page < pane.pages - 1) {
              pane.setPage(pane.page + 1)
              gui.title = Tools.socialLikesLOGOShort + "&r フォロー中の新着建築 p${pane.page + 1}".color()
              gui.update()
            }
          } else {
            if (pane.page < pane.pages - 1) {
              pane.setPage(pane.page + 1)
              gui.title = Tools.socialLikesLOGOShort + "&r フォロー中の全建築 p${pane.page + 1}".color()
              gui.update()
            }
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
            ItemStack(Material.TOTEM_OF_UNDYING).apply {
              allFlag()
              addText("&fフォロー中の人一覧", mutableListOf())
            }
        ) { event: InventoryClickEvent ->
          event.whoClicked.closeInventory()
          followHeadListGUI(userList).show(event.whoClicked)
        },
        7,
        0,
    )
    navigation.addItem(
        GuiItem(
            ItemStack(Material.ENDER_EYE).apply {
              allFlag()
              addText("&f新着/全建築の切替スイッチ", mutableListOf())
            }
        ) { _: InventoryClickEvent ->
          filterSwitch = !filterSwitch
          if (filterSwitch) {
            if (pane.pages != 0) {
              pane.page = 0
            }
            pane.clear()
            pane.populateWithItemStacks(itemListNew)
            gui.title = Tools.socialLikesLOGOShort + "&r フォロー中の新着建築 p1".color()
          } else {
            if (pane.pages != 0) {
              pane.page = 0
            }
            pane.clear()
            pane.populateWithItemStacks(itemListALL)
            gui.title = Tools.socialLikesLOGOShort + "&r フォロー中の全建築 p1".color()
          }
          gui.update()
        },
        6,
        0,
    )
    gui.addPane(Slot.fromXY(0, 5), navigation)

    gui.update()
    return gui
  }

  private val logoutTimeList = mutableMapOf<UUID, LocalDateTime>()
  private val followBuilderUUIDList = mutableMapOf<UUID, MutableSet<UUID>>()

  fun getFollowBuildsGUI(user: UUID): ChestGui {
    val uuidList = followBuilderUUIDList[user] ?: mutableSetOf()
    return createGUI(uuidList, user)
  }

  fun isFollow(builder: UUID, follower: Player): Boolean {
    return followBuilderUUIDList[follower.uniqueId]?.contains(builder) ?: false
  }

  @EventHandler
  fun joinEvent(e: PlayerJoinEvent) {
    val yml = CustomYaml("UserFollowData/${e.player.uniqueId}.yml")
    val timeStr = yml.getString("Logout") ?: LocalDateTime.now().toString()
    val ldt = LocalDateTime.parse(timeStr)
    logoutTimeList[e.player.uniqueId] = ldt

    val uuidStrList = yml.getStringList("FollowList")
    val uuidList = mutableSetOf<UUID>()
    uuidStrList.forEach { uuidStr -> uuidList.add(UUID.fromString(uuidStr)) }
    followBuilderUUIDList[e.player.uniqueId] = uuidList
  }

  fun reloadJoinFix(onlinePlayer: Collection<Player>) {
    onlinePlayer.forEach { player ->
      val yml = CustomYaml("UserFollowData/${player.uniqueId}.yml")
      val timeStr = yml.getString("Logout") ?: LocalDateTime.now().toString()
      val ldt = LocalDateTime.parse(timeStr)
      logoutTimeList[player.uniqueId] = ldt

      val uuidStrList = yml.getStringList("FollowList")
      val uuidList = mutableSetOf<UUID>()
      uuidStrList.forEach { uuidStr -> uuidList.add(UUID.fromString(uuidStr)) }
      followBuilderUUIDList[player.uniqueId] = uuidList
    }
  }

  @EventHandler
  fun quitEvent(e: PlayerQuitEvent) {
    val yml = CustomYaml("UserFollowData/${e.player.uniqueId}.yml")
    yml.set("Logout", LocalDateTime.now().toString())
    yml.save()

    followBuilderUUIDList.remove(e.player.uniqueId)
  }

  /** builder=フォローされる側、follower=フォローした方(通知受け取り)、delete=trueはフォロー取り消し */
  fun newFollowerSave(builder: UUID, follower: UUID, delete: Boolean = false) {
    val yml = CustomYaml("UserFollowData/${follower}.yml")
    val uuidStrList = yml.getStringList("FollowList")
    if (delete) {
      if (uuidStrList.toSet().contains(builder.toString())) {
        uuidStrList.remove(builder.toString())
      }
      if (followBuilderUUIDList[follower]?.contains(builder) == true) {
        followBuilderUUIDList[follower]?.remove(builder)
      }
    } else {
      if (!uuidStrList.toSet().contains(builder.toString())) {
        uuidStrList.add(builder.toString())
      }
      if (followBuilderUUIDList[follower]?.contains(builder) == false) {
        followBuilderUUIDList[follower]?.add(builder)
      }
    }
    yml.set("FollowList", uuidStrList)
    yml.save()
  }

  private val followKey = NamespacedKey(Tools.plugin, "UserName-FollowGUI")

  /** フォロー中の一覧GUI */
  private fun followHeadListGUI(userList: MutableSet<UUID>): ChestGui {
    val gui = ChestGui(6, Tools.socialLikesLOGOShort + "&r フォロー中の人 p1".color())
    gui.setOnTopClick {
      it.isCancelled = true
      if (it.currentItem != null) {
        val player = it.whoClicked as Player
        player.playSound(player, Sound.UI_BUTTON_CLICK, 1F, 1F)
      }
    }
    gui.setOnTopDrag { it.isCancelled = true }

    val pane = PaginatedPane(9, 5)
    val headItemList = mutableListOf<ItemStack>()
    userList.forEach {
      val item = ItemStack(Material.PLAYER_HEAD)
      val meta = item.itemMeta as SkullMeta
      val offPlayer = Bukkit.getOfflinePlayer(it)
      meta.setOwningPlayer(offPlayer)
      meta.persistentDataContainer.set(
          followKey,
          PersistentDataType.STRING,
          offPlayer.name ?: "NULL",
      )
      item.itemMeta = meta
      headItemList.add(item)
    }
    pane.populateWithItemStacks(headItemList)
    pane.setOnClick {
      val userName =
          it.currentItem
              ?.itemMeta
              ?.persistentDataContainer
              ?.get(followKey, PersistentDataType.STRING) ?: return@setOnClick
      it.whoClicked.closeInventory()
      Bukkit.dispatchCommand(it.whoClicked, "sluser $userName")
    }
    gui.addPane(Slot.fromXY(0, 0), pane)

    val navigation = StaticPane(9, 1)
    navigation.addItem(
        GuiItem(
            ItemStack(Material.RED_WOOL).apply {
              allFlag()
              addText("&f前のページへ", mutableListOf())
            }
        ) { _: InventoryClickEvent? ->
          if (pane.page > 0) {
            pane.setPage(pane.page - 1)
            gui.title = Tools.socialLikesLOGOShort + "&r フォロー中の人 p${pane.page + 1}".color()
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
          if (pane.page < pane.pages - 1) {
            pane.setPage(pane.page + 1)
            gui.title = Tools.socialLikesLOGOShort + "&r フォロー中の人 p${pane.page + 1}".color()
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

    return gui
  }
}
