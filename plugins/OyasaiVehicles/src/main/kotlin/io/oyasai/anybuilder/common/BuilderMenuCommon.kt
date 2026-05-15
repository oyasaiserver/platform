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
  private const val ROOT_TRIAL_SLOT = 1
  private const val ROOT_BUY_SLOT = 3
  private const val ROOT_CUSTOM_SLOT = 5
  private const val STAT_DIGIT_WIDTH = 4
  private const val PAGE_PREVIOUS_SLOT = 45
  private const val PAGE_CLOSE_SLOT = 49
  private const val PAGE_FILTER_SLOT = 50
  private const val PAGE_NEXT_SLOT = 53
  private const val SELECTION_MENU_SIZE = 54
  private const val SELECTION_ITEM_SLOT = 4
  private val wallMaterialSuffixes =
      listOf(
          "_WALL_SIGN" to "_SIGN",
          "_WALL_HANGING_SIGN" to "_HANGING_SIGN",
          "_WALL_BANNER" to "_BANNER",
          "_WALL_TORCH" to "_TORCH")
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
        ROOT_TRIAL_SLOT,
        ItemStack(Material.FLOWER_BANNER_PATTERN)
            .addText("&f試乗", listOf("&f試乗車両を選択するメニューを開く"))
            .allHide()) { event ->
          event.isCancelled = true
          event.whoClicked.closeInventory()
          onTrialClick(event.whoClicked as Player)
        }
    gui.setItem(
        ROOT_BUY_SLOT,
        ItemStack(Material.MINECART).addText("&f購入", listOf("&f購入する車両選択メニューを開く")).allHide()) { event
          ->
          event.isCancelled = true
          event.whoClicked.closeInventory()
          onBuyClick(event.whoClicked as Player)
        }
    gui.setItem(
        ROOT_CUSTOM_SLOT,
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

    for (i in 0 until SELECTION_MENU_SIZE) {
      gui.setItem(i, promptItem.clone())
    }

    gui.setOnBottomClick { event ->
      val item = event.currentItem ?: return@setOnBottomClick
      if (!spec.itemChecker(item)) return@setOnBottomClick

      val player = event.whoClicked as Player
      spec.selectedItemMap[player.uniqueId] = item

      for (i in 0 until SELECTION_MENU_SIZE) {
        gui.setItem(i, blankItem.clone())
      }

      gui.setItem(SELECTION_ITEM_SLOT, item) { e -> e.whoClicked.closeInventory() }

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
      val valueChars = value.toString().padStart(STAT_DIGIT_WIDTH, 'n').toCharArray()

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
      bindStatButton(
          gui = gui,
          slot = rowOffset + 1,
          item = CustomHead.get('-')?.clone() ?: ItemStack(Material.RED_WOOL),
          title = "&c-1",
          lore = listOf("&9マイルポイントを消費せず値を減らす", "&fShiftキーを押しながらクリックで&c-10", stat),
          getCurrentItem = getCurrentItem) { event, player, currentItem ->
            val count = if (event.isShiftClick) 10 else 1
            var failed = false

            repeat(count) {
              if (!changeStat(currentItem, stat, -1)) {
                failed = true
              }
            }

            playResultSound(player, failed)
            onRefresh(gui, currentItem, player)
          }

      bindStatButton(
          gui = gui,
          slot = rowOffset + 8,
          item = CustomHead.get('+')?.clone() ?: ItemStack(Material.GREEN_WOOL),
          title = "&a+1",
          lore =
              listOf(
                  "&9マイルポイント&b3p&7消費して値を増やす",
                  "&e※Event用の車両の場合ポイントを消費しません",
                  "&fShiftキーを押しながらクリックで&a+10",
                  stat),
          getCurrentItem = getCurrentItem) { event, player, currentItem ->
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
              if (!eventVehicle && !payCost(player.uniqueId, 3)) {
                changeStat(currentItem, stat, -1)
                failed = true
                return@repeat
              }
            }

            playResultSound(player, failed)
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
    gui.setItem(PAGE_PREVIOUS_SLOT, prevHead.addText("前のページ", emptyList()).allHide()) { event ->
      event.isCancelled = true
      if (gui.currentPage > 0) {
        gui.currentPage--
        updatePageTitle(gui, event.whoClicked as Player)
        gui.populate(event.whoClicked as Player)
      }
    }

    val nextHead = CustomHead.get('→')?.clone() ?: ItemStack(Material.GREEN_WOOL)
    gui.setItem(PAGE_NEXT_SLOT, nextHead.addText("次のページ", emptyList()).allHide()) { event ->
      event.isCancelled = true
      if (gui.currentPage < gui.getTotalPages() - 1) {
        gui.currentPage++
        updatePageTitle(gui, event.whoClicked as Player)
        gui.populate(event.whoClicked as Player)
      }
    }

    gui.setItem(
        PAGE_CLOSE_SLOT, ItemStack(Material.BARRIER).addText("閉じる", emptyList()).allHide()) { event
          ->
          event.isCancelled = true
          event.whoClicked.closeInventory()
        }

    var selectedCreatorIndex = -1
    val creatorKeys = sortedUserItems.keys.toList()

    gui.setItem(
        PAGE_FILTER_SLOT,
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
        wallMaterialSuffixes.firstNotNullOfOrNull { (from, to) ->
          if (resolved.name.endsWith(from)) {
            Material.getMaterial(resolved.name.removeSuffix(from) + to)
          } else {
            null
          }
        }

    return mapped?.takeIf { it.isItem } ?: Material.GRASS_BLOCK
  }

  private fun bindStatButton(
      gui: OyasaiMenu,
      slot: Int,
      item: ItemStack,
      title: String,
      lore: List<String>,
      getCurrentItem: (UUID) -> ItemStack?,
      onClick: (InventoryClickEvent, Player, ItemStack) -> Unit
  ) {
    gui.setItem(slot, item.addText(title, lore)) { event ->
      event.isCancelled = true
      val player = event.whoClicked as Player
      val currentItem = getCurrentItem(player.uniqueId) ?: return@setItem
      onClick(event, player, currentItem)
    }
  }

  private fun playResultSound(player: Player, failed: Boolean) {
    if (failed) {
      player.playSound(player.location, Sound.ITEM_DYE_USE, 0.35f, 0.5f)
    } else {
      player.playSound(player.location, Sound.ENTITY_PLAYER_LEVELUP, 0.5f, 1.235f)
    }
  }
}
