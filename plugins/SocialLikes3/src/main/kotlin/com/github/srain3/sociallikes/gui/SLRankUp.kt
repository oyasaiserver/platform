package com.github.srain3.sociallikes.gui

import com.github.srain3.sociallikes.Tools
import com.github.srain3.sociallikes.Tools.addText
import com.github.srain3.sociallikes.Tools.allFlag
import com.github.srain3.sociallikes.Tools.color
import com.github.srain3.sociallikes.datas.Data
import com.github.srain3.sociallikes.datas.RankUpData
import com.github.stefvanschie.inventoryframework.gui.type.ChestGui
import com.github.stefvanschie.inventoryframework.pane.PaginatedPane
import com.github.stefvanschie.inventoryframework.pane.util.Slot
import java.time.LocalDateTime
import java.time.ZoneOffset
import java.time.format.DateTimeFormatter
import java.util.*
import org.bukkit.Bukkit
import org.bukkit.inventory.ItemStack

object SLRankUp {
  private val format = DateTimeFormatter.ofPattern("yyyy/MM/dd")
  /** ランクアップ候補を格納 */
  private val data = mutableMapOf<UUID, RankUpData>()

  /** GUIを返す */
  fun getGUI(rankFilter: List<String>, lastOnlineDay: Int): ChestGui {
    val gui = ChestGui(6, Tools.socialLikesLOGOShort + "&0ランクアップ候補".color())
    gui.cancelClickWithSound()

    val pagePane = PaginatedPane(9, 5)
    pagePane.populateWithItemStacks(headItems(rankFilter, lastOnlineDay))
    pagePane.setOnClick {
      val name = it.currentItem?.itemMeta?.displayName ?: return@setOnClick
      it.whoClicked.closeInventory()
      Bukkit.dispatchCommand(it.whoClicked, "sociallikes3:sluser $name")
    }
    gui.addPane(Slot.fromXY(0, 0), pagePane)

    gui.addPageNav(pagePane) {
      Tools.socialLikesLOGOShort + "&0ランクアップ候補 p${pagePane.page+1}".color()
    }

    gui.update()
    return gui
  }

  private fun headItems(rankFilter: List<String>, lastOnlineDay: Int): MutableList<ItemStack> {
    val list = mutableListOf<ItemStack>()
    val beforeTime = LocalDateTime.now(ZoneOffset.UTC).minusDays(lastOnlineDay.toLong())
    data
        .toList()
        .sortedWith(
            Comparator.comparingInt<Pair<UUID, RankUpData>> { it.second.buildCount }
                .thenComparingLong {
                  it.second.lastOnlineTime()?.toEpochSecond(ZoneOffset.UTC) ?: 0L
                }
        )
        .toMap()
        .forEach { (_, rud) ->
          val player = Bukkit.getOfflinePlayer(rud.user)
          val rank = getRank(player.uniqueId)
          if (!rankFilter.contains(rank)) return@forEach
          if (!beforeTime.isBefore(rud.lastOnlineTime())) return@forEach

          val item = SLPlayerHeads.createHead(player.uniqueId, player.name ?: "Unknown")

          item.allFlag()
          item.addText(
              player.name,
              mutableListOf(
                  "&f現ランク: $rank",
                  "&f初ログイン: &e${rud.firstLogin?.format(format)}",
                  "&f最終オンライン: &e${rud.lastOnlineTime()?.format(format)}",
                  "&f経過日数: ${rud.numberOfDaysElapsed()}",
                  "&f建築数: ${rud.buildCount}",
              ),
          )

          list.add(item)
        }

    return list
  }

  private fun getRank(player: UUID): String {
    val user = Tools.lp.userManager.loadUser(player).join()
    return user.primaryGroup
  }

  /** プラグインロード時にデータを作るタスク */
  fun createDataTask() {
    val slDataList = Data.getSLDataAll()
    slDataList.forEach { slData ->
      if (!data.containsKey(slData.owner)) {
        data[slData.owner] = RankUpData(slData.owner, 1)
      } else {
        data[slData.owner]?.plusBuild()
      }
    }
  }

  /** 途中で建築が増えたときのタスク */
  fun plusBuildTask(user: UUID) {
    if (!data.containsKey(user)) {
      data[user] = RankUpData(user, 1)
    } else {
      data[user]?.plusBuild()
    }
  }

  /** 途中で建築が減ったときのタスク */
  fun minusBuildTask(user: UUID) {
    data[user]?.minusBuild()
  }
}
