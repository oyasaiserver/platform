package io.oyasai

import io.oyasai.anybuilder.aircraftbuilder.AircraftBuilderItem
import io.oyasai.anybuilder.aircraftbuilder.model.AircraftBuilderEntityList
import io.oyasai.anybuilder.carbuilder2.CarBuilder2Item
import io.oyasai.anybuilder.carbuilder2.model.CarBuilder2EntityList
import io.oyasai.toolbox.CustomYaml
import io.oyasai.toolbox.legacyTextComponent
import io.oyasai.toolbox.translateColors
import java.util.*
import org.bukkit.Bukkit
import org.bukkit.OfflinePlayer
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.inventory.InventoryAction
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.event.inventory.InventoryCloseEvent
import org.bukkit.event.inventory.InventoryDragEvent
import org.bukkit.event.player.PlayerJoinEvent
import org.bukkit.event.player.PlayerQuitEvent
import org.bukkit.inventory.InventoryView
import org.bukkit.inventory.ItemStack

object VehicleGarageService : Listener {
  private const val GARAGE_FOLDER = "VehicleGarage"
  private const val GARAGE_TITLE = "車庫 &c(LeftClick & VehicleItem Only)"
  private const val GARAGE_MAX_SIZE = 54
  private const val GARAGE_VEHICLE_LIMIT = 6
  private const val GARAGE_ITEM_SIZE_KEY = "ItemSize"
  private val fileCache: MutableMap<UUID, CustomYaml> = LinkedHashMap()
  private val itemCache: MutableMap<UUID, MutableList<ItemStack?>> = LinkedHashMap()
  private val userInvList: MutableMap<UUID, InventoryView> = LinkedHashMap()

  @EventHandler fun joinPlayer(e: PlayerJoinEvent) = loadPlayerCache(e.player)

  @EventHandler(priority = EventPriority.MONITOR)
  fun quitPlayer(e: PlayerQuitEvent) {
    val uuid = e.player.uniqueId
    userInvList[uuid]?.let { closeTask(it, uuid) }
    itemCache[uuid]?.let { save(uuid, it) }
    removePlayerCache(e.player)
  }

  private fun loadPlayerCache(player: OfflinePlayer) {
    val uuid = player.uniqueId
    val file = CustomYaml("$GARAGE_FOLDER/${uuid}.yml")
    val itemList = loadGarageItemList(file, uuid)

    fileCache[uuid] = file
    itemCache[uuid] = itemList
  }

  private fun removePlayerCache(player: OfflinePlayer) {
    val uuid = player.uniqueId
    fileCache.remove(uuid)
    itemCache.remove(uuid)
  }

  fun isVehicleItem(item: ItemStack?): Boolean {
    return CarBuilder2Item.checkCarItem(item) || AircraftBuilderItem.checkItem(item)
  }

  fun countSpawnedVehicleItems(uuid: UUID): Int {
    return CarBuilder2EntityList.countOwnedVehicles(uuid) +
        AircraftBuilderEntityList.countOwnedVehicles(uuid)
  }

  fun canSpawnPurchasedVehicle(player: Player): Boolean {
    return player.canHaveUnlimitedVehicles() ||
        countSpawnedVehicleItems(player.uniqueId) < GARAGE_VEHICLE_LIMIT
  }

  fun getItemList(uuid: UUID): MutableList<ItemStack?> = itemCache[uuid] ?: mutableListOf()

  fun save(uuid: UUID, newList: MutableList<ItemStack?>) {
    val file = fileCache[uuid] ?: return
    persistGarageContents(file, uuid, newList)
    itemCache[uuid] = newList.toMutableList()
  }

  fun addItem(player: Player, item: ItemStack): Boolean =
      addItemInternal(player, item, notifyOnline = true)

  fun addItem(player: OfflinePlayer, item: ItemStack): Boolean =
      addItemInternal(player, item, notifyOnline = false)

  private fun addItemInternal(
      player: OfflinePlayer,
      item: ItemStack,
      notifyOnline: Boolean,
  ): Boolean {
    val uuid = player.uniqueId
    var itemList = itemCache[uuid]

    if (itemList == null) {
      loadPlayerCache(player)
      itemList =
          itemCache[uuid]
              ?: MutableList<ItemStack?>(GARAGE_MAX_SIZE) { null }.also { itemCache[uuid] = it }
    }

    val index = itemList.indexOfFirst { it == null }

    return if (index == -1) {
      if (notifyOnline && player is Player) {
        player.world.dropItem(player.eyeLocation, item)
        player.sendMessage(translateColors("[OyasaiVehicles] &eガレージに空きがないため、足元にアイテムをドロップしました!"))
      }
      if (!player.isOnline) {
        itemList.add(item)
        save(uuid, itemList)
        removePlayerCache(player)
        true
      } else {
        false
      }
    } else {
      itemList[index] = item
      if (!player.isOnline) {
        save(uuid, itemList)
        removePlayerCache(player)
      }
      true
    }
  }

  fun disableFix() {
    for ((uuid, view) in userInvList.toMap()) {
      closeTask(view, uuid)
      view.close()
    }
    Bukkit.getOnlinePlayers().forEach { player ->
      itemCache[player.uniqueId]?.let { save(player.uniqueId, it) }
    }
  }

  fun enableFix() {
    Bukkit.getOnlinePlayers().forEach { loadPlayerCache(it) }
  }

  fun openInventoryGUI(player: Player) {
    val itemList = getItemList(player.uniqueId)
    val newInv = Bukkit.createInventory(null, GARAGE_MAX_SIZE, legacyTextComponent(GARAGE_TITLE))

    itemList.forEachIndexed { index, item ->
      if (index < GARAGE_MAX_SIZE) {
        newInv.setItem(index, item)
      }
    }

    val view = player.openInventory(newInv)
    if (view != null) {
      userInvList[player.uniqueId] = view
    }
  }

  @EventHandler
  fun clickInventory(event: InventoryClickEvent) {
    if (event.view != userInvList[event.whoClicked.uniqueId]) return

    if (event.rawSlot >= GARAGE_MAX_SIZE) {
      event.isCancelled = !(event.isLeftClick && !event.isShiftClick)
      return
    }
    event.isCancelled =
        when (event.action) {
          InventoryAction.PICKUP_ALL -> !isVehicleItem(event.currentItem)
          InventoryAction.PLACE_ALL -> !isVehicleItem(event.cursor)
          else -> true
        }
  }

  @EventHandler
  fun dragInventory(event: InventoryDragEvent) {
    if (event.view == userInvList[event.whoClicked.uniqueId]) {
      event.isCancelled = true
    }
  }

  @EventHandler
  fun closeInventory(event: InventoryCloseEvent) {
    if (event.view == userInvList[event.player.uniqueId]) {
      closeTask(event.view, event.player.uniqueId)
    }
  }

  private fun closeTask(view: InventoryView, uuid: UUID) {
    val contents = view.topInventory.contents
    val itemList = contents.toMutableList()
    for (item in getItemList(uuid).drop(GARAGE_MAX_SIZE)) {
      val index = itemList.indexOfFirst { it == null }
      if (index == -1) itemList.add(item) else itemList[index] = item
    }
    save(uuid, itemList)
    userInvList.remove(uuid)
  }

  private fun loadGarageItemList(file: CustomYaml, uuid: UUID): MutableList<ItemStack?> {
    val size = file.getInt(GARAGE_ITEM_SIZE_KEY, GARAGE_MAX_SIZE)
    return (1..size).map { file.getItemStack(it.toString()) }.toMutableList()
  }

  private fun persistGarageContents(
      file: CustomYaml,
      uuid: UUID,
      newList: MutableList<ItemStack?>,
  ) {
    val oldSize = file.getInt(GARAGE_ITEM_SIZE_KEY, GARAGE_MAX_SIZE)
    (1..oldSize).forEach { file.set(it.toString(), null) }

    file.set(GARAGE_ITEM_SIZE_KEY, newList.size)
    newList.forEachIndexed { index, item -> file.set((index + 1).toString(), item) }
    file.save()
  }
}
