package com.baakun.dynamicprofile.profile

import com.baakun.dynamicprofile.Tools.addText
import com.baakun.dynamicprofile.Tools.allFlag
import com.baakun.dynamicprofile.Tools.getStats
import com.baakun.dynamicprofile.Tools.toFormat
import com.baakun.dynamicprofile.gui.GuiInventory
import com.baakun.dynamicprofile.gui.GuiItem.guiRun
import com.github.srain3.sociallikes.datas.Data
import com.github.srain3.sociallikes.datas.SLData
import org.bukkit.Material
import org.bukkit.SoundCategory
import org.bukkit.entity.Player
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.ItemStack

object Recommended {
  /** おすすめ看板を選択するGUIを開く */
  fun display(player: Player, index: Int) {
    val inv = GuiInventory.createInventory(6, "おすすめ看板を選択")

    val allData = Data.getSLDataAll().toList()
    val filteredData = mutableListOf<SLData>()

    for (data in allData) {
      if (data.owner != player.uniqueId) continue
      filteredData.add(data)
    }
    filteredData.sortByDescending { it.time }

    var page = 0
    val filteredDataSize = filteredData.size

    val maxPage: Int =
      if (filteredDataSize <= 45) {
        0
      } else {
        if (filteredDataSize % 45 != 0) {
          (filteredDataSize / 45) + 1
        } else {
          (filteredDataSize / 45)
        }
      }

    val nextPage = ItemStack(Material.ARROW)
    val previousPage = ItemStack(Material.ARROW)
    nextPage
      .guiRun {
        if (page != maxPage) {
          player.playSound(
            player.eyeLocation,
            org.bukkit.Sound.UI_BUTTON_CLICK,
            SoundCategory.MASTER,
            0.75F,
            1F,
          )
          page += 1
          signs(player, page, inv, index, filteredData)
        }
      }
      .allFlag()
    previousPage
      .guiRun {
        if (page != 0) {
          player.playSound(
            player.eyeLocation,
            org.bukkit.Sound.UI_BUTTON_CLICK,
            SoundCategory.MASTER,
            0.75F,
            1F,
          )
          page -= 1
          signs(player, page, inv, index, filteredData)
        }
      }
      .allFlag()
    inv.setItem(45, previousPage)
    inv.setItem(53, nextPage)

    signs(player, page, inv, index, filteredData)
    player.openInventory(inv)
  }

  /** 看板を並べる */
  private fun signs(
    player: Player,
    page: Int,
    inv: Inventory,
    index: Int,
    filteredData: MutableList<SLData>,
  ) {
    for (i in 0..44) {
      inv.setItem(i, ItemStack(Material.AIR))
    }
    val statsData = getStats(player.uniqueId)
    for (i in 0..44) {
      if (i + (page * 45) >= filteredData.size) {
        break
      } else {
        val data = filteredData.get(i + (45 * page))
        val item = ItemStack(Material.OAK_SIGN)
        item.addText(
          "&f>>&a${data.title} &fID:${data.id}",
          mutableListOf("&3イイね: ${data.likes.size}", "&3作成日: ${data.time.toFormat()}"),
        )
        item.guiRun {
          statsData.recommends[index] = data.id
          player.sendMessage("${index+1}番目のおすすめ看板を ${data.title} に設定しました")
          player.closeInventory()
          MyProfile.display(player)
        }
        inv.setItem(i, item)
      }
    }
  }
}
