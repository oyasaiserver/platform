package com.github.srain3.sociallikes.gui

import com.github.srain3.sociallikes.Tools
import com.github.srain3.sociallikes.Tools.addText
import com.github.srain3.sociallikes.Tools.allFlag
import com.github.srain3.sociallikes.Tools.color
import com.github.srain3.sociallikes.datas.Data
import com.github.srain3.sociallikes.datas.SLData
import com.github.stefvanschie.inventoryframework.gui.type.ChestGui
import com.github.stefvanschie.inventoryframework.pane.PaginatedPane
import com.github.stefvanschie.inventoryframework.pane.util.Slot
import org.bukkit.*
import org.bukkit.entity.Player
import org.bukkit.inventory.ItemStack
import org.bukkit.persistence.PersistentDataType
import org.bukkit.scheduler.BukkitRunnable

object SearchBuild {
  /** GUIを返す */
  private fun createGUI(slDataList: List<SLData>, searchText: String): ChestGui {
    val gui = ChestGui(6, Tools.socialLikesLOGOShort + "&r 「${searchText}」の建築 p1".color())
    gui.cancelClickWithSound()

    val pagePane = PaginatedPane(9, 5)
    val itemList = mutableListOf<ItemStack>()
    slDataList.forEach {
      itemList.add(buildSignItem(it, idKey, Bukkit.getOfflinePlayer(it.owner).name))
    }
    pagePane.populateWithItemStacks(itemList)
    pagePane.setOnClick {
      val id =
          it.currentItem?.itemMeta?.persistentDataContainer?.get(idKey, PersistentDataType.INTEGER)
              ?: return@setOnClick
      it.whoClicked.closeInventory()
      Bukkit.dispatchCommand(it.whoClicked, "sociallikes3:sltp $id")
    }
    gui.addPane(Slot.fromXY(0, 0), pagePane)

    gui.addPageNav(pagePane) {
      Tools.socialLikesLOGOShort + "&r 「${searchText}」の建築 p${pagePane.page+1}".color()
    }

    gui.update()
    return gui
  }

  private val idKey = NamespacedKey(Tools.plugin, "SocialLikes_ID-SearchBuildGUI")

  /** 建築名検索用の金床入力を開く */
  fun offlinePlayerSearch(player: Player) {
    val item =
        ItemStack(Material.OAK_SIGN)
            .allFlag()
            .addText(
                "ここに探したい建築名",
                mutableListOf("&7出力先(右側)にあるこの看板をクリックで確定します", "&7普通に閉じた場合はキャンセルです"),
            )
    SocialLikesAnvilInput.open(player, Tools.socialLikesLOGOShort + "&0建築名検索".color(), item) {
        p,
        text ->
      p.sendMessage(Tools.socialLikesLOGO + "&r 検索中です…".color())
      Thread {
            // 検索処理
            val regex = Regex(Regex.escape(text))
            val slDataList = Data.getSLDataAll()
            val hitSLDataList = slDataList.filter { regex.containsMatchIn(it.title) }
            val gui = createGUI(hitSLDataList, text)
            object : BukkitRunnable() {
                  override fun run() {
                    if (p.isOnline) {
                      gui.show(p)
                    }
                  }
                }
                .runTaskLater(Tools.plugin, 2)
          }
          .start()

      p.playSound(p, Sound.UI_BUTTON_CLICK, 1F, 1F)
    }
  }
}
