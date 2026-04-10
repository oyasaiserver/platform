package io.oyasai.anybuilder.common

import io.oyasai.toolbox.CustomHead
import io.oyasai.toolbox.OyasaiMenu
import io.oyasai.toolbox.PaginatedOyasaiMenu
import io.oyasai.toolbox.Tools.addText
import io.oyasai.toolbox.Tools.allHide
import io.oyasai.toolbox.Tools.unColor
import io.oyasai.toolbox.legacyDisplayName
import java.util.*
import org.bukkit.Material
import org.bukkit.Sound
import org.bukkit.entity.Player
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.inventory.ItemStack

object BuilderMenuSupport {
  private val listTitleEndIntRegex = Regex(": [0-9]+")

  data class VehicleListRow(
      val ownerUUID: UUID,
      val name: String,
      val material: Material?,
      val lore: List<String>
  )

  data class VehicleStatRow(val title: String, val limitText: String)

  data class VehicleSelectionMenuSpec(
      val promptText: String,
      val itemChecker: (ItemStack) -> Boolean,
      val selectedItemMap: MutableMap<UUID, ItemStack>,
      val maxCostMap: MutableMap<UUID, Int>,
      val eventVehicleMap: MutableMap<UUID, Boolean>? = null,
      val getCostLimit: (ItemStack) -> Int,
      val resolveUnlimitedCost: (Player) -> Int,
      val setupButtons: (OyasaiMenu) -> Unit,
      val refresh: (OyasaiMenu, ItemStack, Player) -> Unit
  )

  fun createRootMenu(
      title: String,
      onTrialClick: (Player) -> Unit,
      onBuyClick: (Player) -> Unit,
      onCustomClick: (Player) -> Unit
  ): OyasaiMenu {
    val gui = OyasaiMenu(9, title)
    gui.setGlobalClickAction { it.isCancelled = true }
    gui.setGlobalDragAction { it.isCancelled = true }
    gui.setItem(
        1,
        ItemStack(Material.FLOWER_BANNER_PATTERN)
            .addText("&f試乗", listOf("&f試乗車両を選択するメニューを開く"))
            .allHide()) { event ->
          event.isCancelled = true
          event.whoClicked.closeInventory()
          onTrialClick(event.whoClicked as Player)
        }
    gui.setItem(
        3, ItemStack(Material.MINECART).addText("&f購入", listOf("&f購入する車両選択メニューを開く")).allHide()) {
            event ->
          event.isCancelled = true
          event.whoClicked.closeInventory()
          onBuyClick(event.whoClicked as Player)
        }
    gui.setItem(
        5,
        ItemStack(Material.HOPPER_MINECART)
            .addText("&f性能カスタム", listOf("&f購入した車両の性能を変化させるメニューを開く"))
            .allHide()) { event ->
          event.isCancelled = true
          event.whoClicked.closeInventory()
          onCustomClick(event.whoClicked as Player)
        }
    return gui
  }

  fun buildVehicleListMenu(
      buySwitch: Boolean,
      title: String = "u:ALL a:ALL t:ALL: 1",
      source: Iterable<String>,
      resolveRow: (String) -> VehicleListRow?,
      onSelection: (Player, String, Boolean) -> Unit
  ): PaginatedOyasaiMenu {
    val gui = PaginatedOyasaiMenu(54, title)
    gui.setGlobalClickAction { it.isCancelled = true }
    gui.setGlobalDragAction { it.isCancelled = true }

    val userItemStacks = buildGroupedVehicleItemStacks(source, resolveRow)
    val sortedUserItems = userItemStacks.toList().sortedByDescending { it.second.size }.toMap()
    val allItemStacks = flattenAndSortItems(userItemStacks)

    setupPagination(gui, allItemStacks, sortedUserItems) { event ->
      val item = event.currentItem ?: return@setupPagination
      val meta = item.itemMeta ?: return@setupPagination
      val name = meta.legacyDisplayName?.unColor() ?: ""
      val player = event.whoClicked as? Player ?: return@setupPagination
      event.isCancelled = true
      onSelection(player, name, buySwitch)
      player.closeInventory()
    }
    return gui
  }

  fun setupVehicleSelectionMenu(gui: OyasaiMenu, spec: VehicleSelectionMenuSpec) {
    gui.setGlobalClickAction { event -> event.isCancelled = true }

    val promptItem =
        ItemStack(Material.BLACK_STAINED_GLASS_PANE).addText(spec.promptText, emptyList()).allHide()
    val blankItem = ItemStack(Material.BLACK_STAINED_GLASS_PANE).addText(" ", emptyList()).allHide()

    for (i in 0 until 54) {
      gui.setItem(i, promptItem.clone())
    }

    gui.setOnBottomClick { event ->
      val item = event.currentItem ?: return@setOnBottomClick
      if (!spec.itemChecker(item)) return@setOnBottomClick

      val player = event.whoClicked as Player
      spec.selectedItemMap[player.uniqueId] = item

      for (i in 0 until 54) {
        gui.setItem(i, blankItem.clone())
      }

      gui.setItem(4, item) { e -> e.whoClicked.closeInventory() }

      val costLimit = spec.getCostLimit(item)
      val maxCost =
          if (costLimit < 0) {
            spec.eventVehicleMap?.put(player.uniqueId, false)
            spec.resolveUnlimitedCost(player)
          } else {
            spec.eventVehicleMap?.put(player.uniqueId, true)
            costLimit
          }
      spec.maxCostMap[player.uniqueId] = maxCost

      spec.setupButtons(gui)
      spec.refresh(gui, item, player)
    }
  }

  fun updatePageTitle(gui: PaginatedOyasaiMenu, player: Player) {
    gui.updateTitle(listTitleEndIntRegex.replace(gui.title, ": ${gui.currentPage + 1}"), player)
  }

  fun updateUserFilterTitle(gui: PaginatedOyasaiMenu, userFilterText: String, player: Player) {
    val currentTitle = gui.title
    val paged = listTitleEndIntRegex.replace(currentTitle, ": ${gui.currentPage + 1}")
    gui.updateTitle(Regex("u:.* a").replace(paged, "u:$userFilterText a"), player)
  }

  fun flattenAndSortItems(grouped: Map<UUID, MutableList<ItemStack>>): MutableList<ItemStack> {
    val sortedGroups = grouped.toList().sortedByDescending { it.second.size }.toMap()
    val all = mutableListOf<ItemStack>()
    sortedGroups.values.forEach { all.addAll(it) }
    all.sortBy { it.itemMeta?.legacyDisplayName?.unColor() ?: "" }
    return all
  }

  fun <T> buildGroupedVehicleItemStacks(
      source: Iterable<T>,
      resolveRow: (T) -> VehicleListRow?
  ): MutableMap<UUID, MutableList<ItemStack>> {
    val grouped = mutableMapOf<UUID, MutableList<ItemStack>>()

    source.forEach { value ->
      val row = resolveRow(value) ?: return@forEach
      grouped
          .getOrPut(row.ownerUUID) { mutableListOf() }
          .add(ItemStack(defaultMaterial(row.material)).addText(row.name, row.lore).allHide())
    }

    return grouped
  }

  fun renderVehicleStatDigits(gui: OyasaiMenu, values: List<Int>, rows: List<VehicleStatRow>) {
    rows.forEachIndexed { index, row ->
      val value = values.getOrNull(index) ?: return@forEachIndexed
      val rowOffset = (index + 1) * 9
      val valueChars = value.toString().padStart(4, 'n').toCharArray()

      valueChars.forEachIndexed { x, char ->
        val displayItem =
            if (char == 'n') {
              ItemStack(Material.WHITE_STAINED_GLASS_PANE)
            } else {
              CustomHead.getBannerChar(char)?.clone() ?: ItemStack(Material.BARRIER)
            }
        gui.setItem(rowOffset + x + 3, displayItem.addText(row.title, listOf(row.limitText)))
      }
    }
  }

  fun bindVehicleStatButtons(
      gui: OyasaiMenu,
      statNames: List<String>,
      getCurrentItem: (UUID) -> ItemStack?,
      changeStat: (ItemStack, String, Int) -> Boolean,
      getCurrentCost: (ItemStack) -> Int?,
      getCostLimit: (UUID) -> Int,
      isEventVehicle: (UUID) -> Boolean = { false },
      payCost: (UUID, Int) -> Boolean = { _, _ -> true },
      onRefresh: (OyasaiMenu, ItemStack, Player) -> Unit
  ) {
    statNames.forEachIndexed { y, stat ->
      val rowOffset = (y + 1) * 9

      val minusHead = CustomHead.get('-')?.clone() ?: ItemStack(Material.RED_WOOL)
      gui.setItem(
          rowOffset + 1,
          minusHead.addText(
              "&c-1", listOf("&9マイルポイントを消費せず値を減らす", "&fShiftキーを押しながらクリックで&c-10", stat))) {
              event: InventoryClickEvent ->
            event.isCancelled = true
            val player = event.whoClicked as Player
            val currentItem = getCurrentItem(player.uniqueId) ?: return@setItem
            val count = if (event.isShiftClick) 10 else 1
            var failed = false

            repeat(count) {
              if (!changeStat(currentItem, stat, -1)) {
                failed = true
              }
            }

            if (failed) player.playSound(player.location, Sound.ITEM_DYE_USE, 0.35f, 0.5f)
            else player.playSound(player.location, Sound.ENTITY_PLAYER_LEVELUP, 0.5f, 1.235f)
            onRefresh(gui, currentItem, player)
          }

      val plusHead = CustomHead.get('+')?.clone() ?: ItemStack(Material.GREEN_WOOL)
      gui.setItem(
          rowOffset + 8,
          plusHead.addText(
              "&a+1",
              listOf(
                  "&9マイルポイント&b3p&7消費して値を増やす",
                  "&e※Event用の車両の場合ポイントを消費しません",
                  "&fShiftキーを押しながらクリックで&a+10",
                  stat))) { event ->
            event.isCancelled = true
            val player = event.whoClicked as Player
            val currentItem = getCurrentItem(player.uniqueId) ?: return@setItem
            val count = if (event.isShiftClick) 10 else 1
            var failed = false
            val eventVehicle = isEventVehicle(player.uniqueId)

            repeat(count) {
              val currentCost = getCurrentCost(currentItem) ?: 0
              val limit = getCostLimit(player.uniqueId)
              if (currentCost >= limit) {
                failed = true
                return@repeat
              }
              if (!changeStat(currentItem, stat, 1)) {
                failed = true
                return@repeat
              }
              if (!eventVehicle) {
                if (!payCost(player.uniqueId, 3)) {
                  changeStat(currentItem, stat, -1)
                  failed = true
                  return@repeat
                }
              }
            }

            if (failed) player.playSound(player.location, Sound.ITEM_DYE_USE, 0.35f, 0.5f)
            else player.playSound(player.location, Sound.ENTITY_PLAYER_LEVELUP, 0.5f, 1.235f)
            onRefresh(gui, currentItem, player)
          }
    }
  }

  fun setupPagination(
      gui: PaginatedOyasaiMenu,
      allItemStacks: MutableList<ItemStack>,
      sortedUserItems: Map<UUID, MutableList<ItemStack>>,
      handleItemClick: (InventoryClickEvent) -> Unit
  ) {
    allItemStacks.forEach { item -> gui.addPaginatedItem(item, handleItemClick) }

    val prevHead = CustomHead.get('←')?.clone() ?: ItemStack(Material.RED_WOOL)
    gui.setItem(45, prevHead.addText("前のページ", emptyList()).allHide()) { event ->
      event.isCancelled = true
      if (gui.currentPage > 0) {
        gui.currentPage--
        updatePageTitle(gui, event.whoClicked as Player)
        gui.populate(event.whoClicked as Player)
      }
    }

    val nextHead = CustomHead.get('→')?.clone() ?: ItemStack(Material.GREEN_WOOL)
    gui.setItem(53, nextHead.addText("次のページ", emptyList()).allHide()) { event ->
      event.isCancelled = true
      if (gui.currentPage < gui.getTotalPages() - 1) {
        gui.currentPage++
        updatePageTitle(gui, event.whoClicked as Player)
        gui.populate(event.whoClicked as Player)
      }
    }

    gui.setItem(49, ItemStack(Material.BARRIER).addText("閉じる", emptyList()).allHide()) { event ->
      event.isCancelled = true
      event.whoClicked.closeInventory()
    }

    var selectedCreatorIndex = -1
    val creatorKeys = sortedUserItems.keys.toList()

    gui.setItem(
        50,
        ItemStack(Material.FLOWER_BANNER_PATTERN)
            .addText("制作者別フィルタ", listOf("制作者ごとの車両のフィルタ"))
            .allHide()) { event ->
          event.isCancelled = true
          gui.currentPage = 0
          gui.clearPaginatedItems()

          if (selectedCreatorIndex >= creatorKeys.size - 1) {
            selectedCreatorIndex = -1
            allItemStacks.forEach { item -> gui.addPaginatedItem(item, handleItemClick) }
          } else {
            selectedCreatorIndex++
            val filterUUID = creatorKeys[selectedCreatorIndex]
            val filteredItems = sortedUserItems[filterUUID] ?: mutableListOf()
            filteredItems.forEach { item -> gui.addPaginatedItem(item, handleItemClick) }
          }

          val userFilterText =
              if (selectedCreatorIndex == -1) "ALL" else (selectedCreatorIndex + 1).toString()
          updateUserFilterTitle(gui, userFilterText, event.whoClicked as Player)
          gui.populate(event.whoClicked as Player)
        }

    gui.populate()
  }

  fun defaultMaterial(material: Material?): Material {
    val resolved = material ?: return Material.GRASS_BLOCK
    if (resolved.isItem) return resolved

    val mapped =
        when {
          resolved.name.endsWith("_WALL_SIGN") ->
              Material.getMaterial(resolved.name.removeSuffix("_WALL_SIGN") + "_SIGN")
          resolved.name.endsWith("_WALL_HANGING_SIGN") ->
              Material.getMaterial(
                  resolved.name.removeSuffix("_WALL_HANGING_SIGN") + "_HANGING_SIGN")
          resolved.name.endsWith("_WALL_BANNER") ->
              Material.getMaterial(resolved.name.removeSuffix("_WALL_BANNER") + "_BANNER")
          resolved.name.endsWith("_WALL_TORCH") ->
              Material.getMaterial(resolved.name.removeSuffix("_WALL_TORCH") + "_TORCH")
          else -> null
        }

    return mapped?.takeIf { it.isItem } ?: Material.GRASS_BLOCK
  }
}
