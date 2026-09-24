package com.github.srain3.sociallikes.gui

import com.github.srain3.sociallikes.Tools.addText
import com.github.srain3.sociallikes.Tools.allFlag
import com.github.srain3.sociallikes.datas.SLData
import com.github.stefvanschie.inventoryframework.gui.GuiItem
import com.github.stefvanschie.inventoryframework.gui.type.ChestGui
import com.github.stefvanschie.inventoryframework.gui.type.util.Gui
import com.github.stefvanschie.inventoryframework.pane.PaginatedPane
import com.github.stefvanschie.inventoryframework.pane.StaticPane
import com.github.stefvanschie.inventoryframework.pane.util.Slot
import java.time.format.DateTimeFormatter
import org.bukkit.Material
import org.bukkit.NamespacedKey
import org.bukkit.Sound
import org.bukkit.entity.Player
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.inventory.ItemStack
import org.bukkit.persistence.PersistentDataType

/** 赤/緑ウールの前後と閉じる。title はページ変更後に評価する。 */
fun ChestGui.addPageNav(pane: PaginatedPane, title: () -> String): StaticPane {
  val gui = this
  val navigation = StaticPane(9, 1)
  navigation.addItem(
      GuiItem(
          ItemStack(Material.RED_WOOL).apply {
            allFlag()
            addText("&f前のページへ", mutableListOf())
          }
      ) { _: InventoryClickEvent? ->
        if (pane.page > 0) {
          pane.setPage(pane.page - 1)
          gui.title = title()
          gui.update()
        }
      },
      0,
      0,
  )
  navigation.addItem(
      GuiItem(
          ItemStack(Material.GREEN_WOOL).apply {
            allFlag()
            addText("&f次のページへ", mutableListOf())
          }
      ) { _: InventoryClickEvent? ->
        if (pane.page < pane.pages - 1) {
          pane.setPage(pane.page + 1)
          gui.title = title()
          gui.update()
        }
      },
      8,
      0,
  )
  navigation.addItem(
      GuiItem(
          ItemStack(Material.BARRIER).apply {
            allFlag()
            addText("&c閉じる", mutableListOf())
          }
      ) { event: InventoryClickEvent ->
        event.whoClicked.closeInventory()
      },
      4,
      0,
  )
  addPane(Slot.fromXY(0, 5), navigation)
  return navigation
}

fun Gui.cancelClickWithSound() {
  setOnTopClick {
    it.isCancelled = true
    if (it.currentItem != null) {
      val player = it.whoClicked as Player
      player.playSound(player, Sound.UI_BUTTON_CLICK, 1F, 1F)
    }
  }
  setOnTopDrag { it.isCancelled = true }
}

fun buildSignItem(slData: SLData, idKey: NamespacedKey, creator: String?): ItemStack {
  val item = ItemStack(Material.OAK_SIGN)
  item.allFlag()
  item.addText(
      "&f>>&a${slData.title} &rID:${slData.id}",
      mutableListOf(
          "&3制作者:&f $creator",
          "&3イイね:&f ${slData.likes.count()}",
          "&3作成日:&f " + slData.time.format(DateTimeFormatter.ofPattern("yyyy/MM/dd HH:mm")),
          "&7&nクリックでテレポート&r&7します",
      ),
  )
  val meta = item.itemMeta ?: return item
  meta.persistentDataContainer.set(idKey, PersistentDataType.INTEGER, slData.id)
  item.itemMeta = meta
  return item
}
