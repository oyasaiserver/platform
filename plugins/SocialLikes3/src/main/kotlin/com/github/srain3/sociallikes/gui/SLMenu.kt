package com.github.srain3.sociallikes.gui

import com.github.srain3.sociallikes.Tools
import com.github.srain3.sociallikes.Tools.addText
import com.github.srain3.sociallikes.Tools.allFlag
import com.github.srain3.sociallikes.Tools.color
import com.github.stefvanschie.inventoryframework.gui.GuiItem
import com.github.stefvanschie.inventoryframework.gui.type.ChestGui
import com.github.stefvanschie.inventoryframework.pane.StaticPane
import com.github.stefvanschie.inventoryframework.pane.util.Slot
import org.bukkit.Material
import org.bukkit.Sound
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack

object SLMenu {
  private val noneGlassPane =
      listOf(Material.PURPLE_STAINED_GLASS_PANE, Material.GRAY_STAINED_GLASS_PANE)

  fun createGUI(): ChestGui {
    val gui = ChestGui(5, Tools.socialLikesLOGOShort + "&0Menu".color())
    gui.setOnTopClick {
      it.isCancelled = true
      if (it.currentItem != null) {
        if (!noneGlassPane.contains(it.currentItem?.type)) {
          val player = it.whoClicked as Player
          player.playSound(player, Sound.UI_BUTTON_CLICK, 1F, 1F)
        }
      }
    }
    gui.setOnTopDrag { it.isCancelled = true }

    val paneUp = StaticPane(9, 1)
    val paneDown = StaticPane(9, 1)
    val paneMid = StaticPane(9, 3)

    paneUp.fillWith(
        ItemStack(Material.PURPLE_STAINED_GLASS_PANE).allFlag().addText(" ", mutableListOf())
    )
    paneDown.fillWith(
        ItemStack(Material.GRAY_STAINED_GLASS_PANE).allFlag().addText(" ", mutableListOf())
    )
    gui.addPane(Slot.fromXY(0, 0), paneUp)
    gui.addPane(Slot.fromXY(0, 4), paneDown)

    paneMid.apply {
      addItem(
          GuiItem(
              ItemStack(Material.ENCHANTING_TABLE)
                  .allFlag()
                  .addText("&f全ての建築", mutableListOf("&7建築一覧を表示します"))
          ) {
            it.whoClicked.closeInventory()
            AllBuild.createGUI().show(it.whoClicked)
          },
          0,
          1,
      )
      addItem(
          GuiItem(
              ItemStack(Material.OAK_SIGN)
                  .allFlag()
                  .addText("&f名前から建築を検索", mutableListOf("&7建築名から絞り込めます"))
          ) {
            it.whoClicked.closeInventory()
            SearchBuild.offlinePlayerSearch(it.whoClicked as Player)
          },
          2,
          1,
      )
      addItem(
          GuiItem(
              ItemStack(Material.PLAYER_HEAD)
                  .allFlag()
                  .addText("&fプレイヤーの建築", mutableListOf("&7選択したプレイヤーの建築を表示します"))
          ) {
            it.whoClicked.closeInventory()
            UserBuild.openOnlinePlayerGUI(it.whoClicked)
          },
          4,
          1,
      )
      addItem(
          GuiItem(
              ItemStack(Material.TOTEM_OF_UNDYING)
                  .allFlag()
                  .addText("&fフォロー建築一覧", mutableListOf("&7フォローしたプレイヤーの建築を表示します"))
          ) {
            it.whoClicked.closeInventory()
            FollowBuild.getFollowBuildsGUI(it.whoClicked.uniqueId).show(it.whoClicked)
          },
          6,
          1,
      )
    }

    gui.addPane(Slot.fromXY(0, 1), paneMid)
    gui.update()

    return gui
  }
}
