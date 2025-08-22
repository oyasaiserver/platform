package com.baakun.dynamicprofile.gui

import com.baakun.dynamicprofile.DynamicProfile.Companion.allTitles
import com.baakun.dynamicprofile.Tools
import com.baakun.dynamicprofile.Tools.addText
import com.baakun.dynamicprofile.gui.GuiItem.guiRun
import com.baakun.dynamicprofile.profile.playerTitle.TitleUtils
import java.util.*
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.format.NamedTextColor
import org.bukkit.Bukkit
import org.bukkit.Material
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack

object TitleGui {

  /** 称号の所有者リストをGUIで表示する */
  fun showTitleOwnersGui(player: Player, titleId: Int) {
    val title = allTitles[titleId]
    if (title == null) {
      player.sendMessage(Component.text("称号ID $titleId は存在しません").color(NamedTextColor.RED))
      return
    }

    val owners = title.owners
    val pageSize = 45
    val totalPages = (owners.size + pageSize - 1) / pageSize

    showOwnersPage(player, title.title, titleId, owners, 0, totalPages)
  }

  /** プレイヤーの所有称号リストをGUIで表示する */
  fun showPlayerTitlesGui(player: Player, targetPlayerName: String) {
    val targetPlayer = Bukkit.getOfflinePlayer(targetPlayerName)

    if (!targetPlayer.hasPlayedBefore() && !targetPlayer.isOnline) {
      player.sendMessage(
        Component.text("プレイヤー $targetPlayerName が見つかりません").color(NamedTextColor.RED)
      )
      return
    }

    val playerTitles = TitleUtils.getTitles(targetPlayer.uniqueId)
    val sortedTitles = playerTitles.sortedByDescending { allTitles[it]?.rarity ?: 0 }

    val pageSize = 45
    val totalPages = (sortedTitles.size + pageSize - 1) / pageSize

    showPlayerTitlesPage(player, targetPlayerName, sortedTitles, 0, totalPages)
  }

  /** 所有者リストのページを表示 */
  private fun showOwnersPage(
    player: Player,
    titleName: String,
    titleId: Int,
    owners: List<UUID>,
    page: Int,
    totalPages: Int,
  ) {
    val inv = GuiInventory.createInventory(6, "称号「$titleName」の所有者 (${page + 1}/$totalPages)")

    val gray_glass = ItemStack(Material.GRAY_STAINED_GLASS_PANE).addText("", mutableListOf())
    for (i in 0..8) {
      inv.setItem(i, gray_glass)
      inv.setItem(i + 45, gray_glass)
    }

    // 左上に称号アイテムを設置
    val titleItem =
      ItemStack(Material.NAME_TAG)
        .addText(
          "&6$titleName",
          mutableListOf(
            "&7ID: $titleId",
            "&b優先度: ${allTitles[titleId]?.rarity ?: 0}",
            "&a所有者数: ${owners.size}人",
          ),
        )
    inv.setItem(0, titleItem)

    // 所有者ヘッド
    val startIndex = page * 45
    val endIndex = minOf(startIndex + 45, owners.size)

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

      inv.setItem(9 + (i - startIndex), skull)
    }

    // ナビゲーションボタン
    if (page > 0) {
      val prevButton =
        ItemStack(Material.ARROW).addText("&a前のページ", mutableListOf()).guiRun {
          showOwnersPage(player, titleName, titleId, owners, page - 1, totalPages)
        }
      inv.setItem(45, prevButton)
    }

    if (page < totalPages - 1) {
      val nextButton =
        ItemStack(Material.ARROW).addText("&a次のページ", mutableListOf()).guiRun {
          showOwnersPage(player, titleName, titleId, owners, page + 1, totalPages)
        }
      inv.setItem(53, nextButton)
    }

    player.openInventory(inv)
  }

  /** プレイヤー称号リストのページを表示 */
  private fun showPlayerTitlesPage(
    player: Player,
    targetPlayerName: String,
    titles: List<Int>,
    page: Int,
    totalPages: Int,
  ) {
    val inv = GuiInventory.createInventory(6, "$targetPlayerName の所有称号 (${page + 1}/$totalPages)")

    val gray_glass = ItemStack(Material.GRAY_STAINED_GLASS_PANE).addText("", mutableListOf())
    for (i in 0..8) {
      inv.setItem(i, gray_glass)
      inv.setItem(i + 45, gray_glass)
    }

    // 称号アイテムを表示
    val startIndex = page * 45
    val endIndex = minOf(startIndex + 45, titles.size)

    for (i in startIndex until endIndex) {
      val titleId = titles[i]
      val title = allTitles[titleId]

      if (title != null) {
        val titleItem =
          ItemStack(Material.NAME_TAG)
            .addText(
              "&6${title.title}",
              mutableListOf(
                "&7ID: $titleId",
                "&b優先度: ${title.rarity}",
                "&a所有者数: ${title.owners.size}人",
                "&eクリックで所有者リストを表示",
              ),
            )
            .guiRun { showTitleOwnersGui(player, titleId) }

        inv.setItem(9 + (i - startIndex), titleItem)
      }
    }

    if (page > 0) {
      val prevButton =
        ItemStack(Material.ARROW).addText("&a前のページ", mutableListOf()).guiRun {
          showPlayerTitlesPage(player, targetPlayerName, titles, page - 1, totalPages)
        }
      inv.setItem(45, prevButton)
    }

    if (page < totalPages - 1) {
      val nextButton =
        ItemStack(Material.ARROW).addText("&a次のページ", mutableListOf()).guiRun {
          showPlayerTitlesPage(player, targetPlayerName, titles, page + 1, totalPages)
        }
      inv.setItem(53, nextButton)
    }

    player.openInventory(inv)
  }
}
