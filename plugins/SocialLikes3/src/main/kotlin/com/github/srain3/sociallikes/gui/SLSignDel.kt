package com.github.srain3.sociallikes.gui

import com.github.srain3.sociallikes.Tools
import com.github.srain3.sociallikes.Tools.addText
import com.github.srain3.sociallikes.Tools.allFlag
import com.github.srain3.sociallikes.Tools.color
import com.github.srain3.sociallikes.datas.Data
import com.github.srain3.sociallikes.datas.PublicityHistory
import com.github.srain3.sociallikes.datas.SLData
import com.github.srain3.sociallikes.discord.SLDiscord
import com.github.stefvanschie.inventoryframework.gui.GuiItem
import com.github.stefvanschie.inventoryframework.gui.type.HopperGui
import com.github.stefvanschie.inventoryframework.pane.StaticPane
import org.bukkit.Material
import org.bukkit.Sound
import org.bukkit.block.Sign
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack

object SLSignDel {
  fun createGUI(sign: Sign, slData: SLData): HopperGui {
    val gui = HopperGui(Tools.socialLikesLOGOShort + "&cLike看板を消去しますか？".color())
    gui.setOnTopClick {
      it.isCancelled = true
      if (it.currentItem != null) {
        val player = it.whoClicked as Player
        player.playSound(player, Sound.UI_BUTTON_CLICK, 1F, 1F)
      }
    }
    gui.setOnTopDrag { it.isCancelled = true }

    val pane = StaticPane(0, 0, 5, 1)
    val buttonY =
      GuiItem(
        ItemStack(Material.GREEN_BED).apply {
          allFlag()
          addText("&cはい、消去します。", mutableListOf("&fこの操作は取り消せません"))
        }
      )
    val buttonN =
      GuiItem(
        ItemStack(Material.RED_BED).apply {
          allFlag()
          addText("&aいいえ、消去せず画面を閉じます。", mutableListOf("&fインベントリを閉じます"))
        }
      )

    buttonY.setAction {
      Data.changeUserLikesInt(slData.owner, -slData.likes.count())
      Data.delID(slData)
      sign.block.blockData = Material.AIR.createBlockData()
      sign.update()
      PublicityHistory.delSLID(slData.id)
      SLDiscord.deleteSLToMsg(slData)
      it.whoClicked.closeInventory()
      it.whoClicked.sendMessage(
        Tools.socialLikesLOGO + "&r ID:${slData.id}「&a${slData.title}&r」を&c消去しました".color()
      )
    }
    buttonN.setAction { it.whoClicked.closeInventory() }

    pane.addItem(buttonY, 4, 0)
    pane.addItem(buttonN, 0, 0)
    gui.slotsComponent.addPane(pane)
    gui.update()

    return gui
  }
}
