package com.baakun.dynamicprofile.profile.playerTitle

import com.baakun.dynamicprofile.DynamicProfile
import com.baakun.dynamicprofile.Tools
import com.baakun.dynamicprofile.Tools.addText
import com.baakun.dynamicprofile.gui.GuiInventory
import com.baakun.dynamicprofile.gui.GuiItem.guiRun
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.entity.Player
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.ItemStack
import java.util.UUID

object TitleGui {

  private const val PAGE_SIZE = 45
  private const val ITEMS_START_SLOT = 9
  private const val PREV_BUTTON_SLOT = 45
  private const val NEXT_BUTTON_SLOT = 53
  private const val TITLE_INFO_SLOT = 0
  private const val INVENTORY_ROWS = 6
  private const val TOP_ROW_SIZE = 9
  private const val BOTTOM_ROW_START = 45

  private fun putGrayGlass(inv: Inventory) {
    val grayGlass = ItemStack(Material.GRAY_STAINED_GLASS_PANE).addText("", mutableListOf())
    repeat(TOP_ROW_SIZE) { i ->
      inv.setItem(i, grayGlass)
      inv.setItem(i + BOTTOM_ROW_START, grayGlass)
    }
  }

  /** 称号アイテムを作成 */
  private fun createTitleItem(title: Title, titleId: Int, clickAction: () -> Unit): ItemStack {
    return ItemStack(Material.NAME_TAG)
      .addText(
        "&6${title.title}",
        mutableListOf(
          "&7ID: $titleId",
          "&b優先度: ${title.rarity}",
          "&a所有者数: ${title.owners.size}人",
          "&eクリックで所有者リストを表示",
        ),
      )
      .guiRun { clickAction() }
  }

  private fun putNavigation(
    inv: Inventory,
    page: Int,
    totalPages: Int,
    prevAction: () -> Unit,
    nextAction: () -> Unit,
  ) {
    if (page > 0) {
      val prevButton =
        ItemStack(Material.ARROW).addText("&a前のページ", mutableListOf()).guiRun { prevAction() }
      inv.setItem(PREV_BUTTON_SLOT, prevButton)
    }

    if (page < totalPages - 1) {
      val nextButton =
        ItemStack(Material.ARROW).addText("&a次のページ", mutableListOf()).guiRun { nextAction() }
      inv.setItem(NEXT_BUTTON_SLOT, nextButton)
    }
  }

  /** 総ページ数 */
  private fun calculateTotalPages(totalItems: Int): Int = (totalItems + PAGE_SIZE - 1) / PAGE_SIZE

  /** 称号の所有者リスト */
  fun showTitleOwnersGui(player: Player, titleId: Int) {
    val title = DynamicProfile.Companion.allTitles[titleId]
    if (title == null) {
      player.sendMessage(Component.text("称号ID $titleId は存在しません").color(NamedTextColor.RED))
      return
    }

    val owners = title.owners
    val totalPages = calculateTotalPages(owners.size)

    showOwnersPage(player, title.title, titleId, owners, 0, totalPages)
  }

  /** プレイヤーの所有称号リスト */
  fun showPlayerTitlesGui(player: Player, targetPlayerName: String) {
    val targetPlayer = Bukkit.getOfflinePlayer(targetPlayerName)

    if (!targetPlayer.hasPlayedBefore() && !targetPlayer.isOnline) {
      player.sendMessage(
        Component.text("プレイヤー $targetPlayerName が見つかりません").color(NamedTextColor.RED)
      )
      return
    }

    val playerTitles = TitleUtils.getTitles(targetPlayer.uniqueId)
    val sortedTitles = playerTitles.sortedByDescending { DynamicProfile.Companion.allTitles[it]?.rarity ?: 0 }
    val totalPages = calculateTotalPages(sortedTitles.size)

    showPlayerTitlesPage(player, targetPlayerName, sortedTitles, 0, totalPages)
  }

  /** 全ての称号リスト */
  fun showAllTitlesGui(player: Player) {
    val titles = DynamicProfile.Companion.allTitles.values.toList().sortedByDescending { it.rarity }
    val totalPages = calculateTotalPages(titles.size)

    showAllTitlesPage(player, titles, 0, totalPages)
  }

  /** 所有者リスト */
  private fun showOwnersPage(
    player: Player,
    titleName: String,
    titleId: Int,
    owners: List<UUID>,
    page: Int,
    totalPages: Int,
  ) {
    val inv =
      GuiInventory.createInventory(INVENTORY_ROWS, "称号「$titleName」の所有者 (${page + 1}/$totalPages)")

    putGrayGlass(inv)

    val titleItem =
      ItemStack(Material.NAME_TAG)
        .addText(
          "&6$titleName",
          mutableListOf(
            "&7ID: $titleId",
            "&b優先度: ${DynamicProfile.Companion.allTitles[titleId]?.rarity ?: 0}",
            "&a所有者数: ${owners.size}人",
          ),
        )
    inv.setItem(TITLE_INFO_SLOT, titleItem)

    // 所有者ヘッド
    val startIndex = page * PAGE_SIZE
    val endIndex = minOf(startIndex + PAGE_SIZE, owners.size)

    for (i in startIndex until endIndex) {
      val uuid = owners[i]
      val offlinePlayer = Bukkit.getOfflinePlayer(uuid)
      val playerName = offlinePlayer.name ?: "Unknown"

      val skull =
        Tools.getPlayerHead(uuid)
          .addText(
            "&e$playerName",
            mutableListOf(
              if (offlinePlayer.isOnline) "&aオンライン" else "&7オフライン",
              "&7UUID: ${uuid.toString().substring(0, 8)}...",
              "&eクリックで所有称号リストを表示",
            ),
          )
          .guiRun { showPlayerTitlesGui(player, playerName) }

      inv.setItem(ITEMS_START_SLOT + (i - startIndex), skull)
    }

    putNavigation(
      inv,
      page,
      totalPages,
      prevAction = { showOwnersPage(player, titleName, titleId, owners, page - 1, totalPages) },
      nextAction = { showOwnersPage(player, titleName, titleId, owners, page + 1, totalPages) },
    )

    player.openInventory(inv)
  }

  /** プレイヤー称号リスト */
  private fun showPlayerTitlesPage(
    player: Player,
    targetPlayerName: String,
    titles: List<Int>,
    page: Int,
    totalPages: Int,
  ) {
    val inv =
      GuiInventory.createInventory(
        INVENTORY_ROWS,
        "$targetPlayerName の所有称号 (${page + 1}/$totalPages)",
      )

    putGrayGlass(inv)

    val startIndex = page * PAGE_SIZE
    val endIndex = minOf(startIndex + PAGE_SIZE, titles.size)

    for (i in startIndex until endIndex) {
      val titleId = titles[i]
      val title = DynamicProfile.Companion.allTitles[titleId]

      if (title != null) {
        val titleItem = createTitleItem(title, titleId) { showTitleOwnersGui(player, titleId) }
        inv.setItem(ITEMS_START_SLOT + (i - startIndex), titleItem)
      }
    }

    putNavigation(
      inv,
      page,
      totalPages,
      prevAction = { showPlayerTitlesPage(player, targetPlayerName, titles, page - 1, totalPages) },
      nextAction = { showPlayerTitlesPage(player, targetPlayerName, titles, page + 1, totalPages) },
    )

    player.openInventory(inv)
  }

  /** 全ての称号リスト */
  private fun showAllTitlesPage(player: Player, titles: List<Title>, page: Int, totalPages: Int) {
    val inv = GuiInventory.createInventory(INVENTORY_ROWS, "全ての称号 (${page + 1}/$totalPages)")

    putGrayGlass(inv)

    val startIndex = page * PAGE_SIZE
    val endIndex = minOf(startIndex + PAGE_SIZE, titles.size)

    for (i in startIndex until endIndex) {
      val title = titles[i]
      val titleId = title.id

      val titleItem = createTitleItem(title, titleId) { showTitleOwnersGui(player, titleId) }
      inv.setItem(ITEMS_START_SLOT + (i - startIndex), titleItem)
    }

    putNavigation(
      inv,
      page,
      totalPages,
      prevAction = { showAllTitlesPage(player, titles, page - 1, totalPages) },
      nextAction = { showAllTitlesPage(player, titles, page + 1, totalPages) },
    )

    player.openInventory(inv)
  }
}