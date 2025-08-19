package icu.oyasai.utilities.adminbp

import icu.oyasai.utilities.OyasaiUtilities.color
import java.util.*
import org.bukkit.Bukkit
import org.bukkit.Sound
import org.bukkit.SoundCategory
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.inventory.*
import org.bukkit.inventory.InventoryView
import org.bukkit.inventory.ItemStack

object AdminBPGui : Listener {
  private val userInvList = mutableMapOf<UUID, InventoryView>()
  private val invItemList = mutableMapOf<InventoryView, MutableMap<Int, MutableList<ItemStack?>>>()

  fun disableFix() {
    userInvList.forEach { (uuid, view) ->
      closeTask(view, uuid)
      view.close()
    }
  }

  fun openInventoryGUI(player: Player) {
    val itemList = AdminBP.getItemList(player.uniqueId) ?: return
    val newInv = Bukkit.createInventory(null, 54, "&6Admin Backpack #1".color())
    itemList[1]?.forEachIndexed { i, item -> newInv.setItem(i, item) }
    val view = player.openInventory(newInv) ?: return
    userInvList[player.uniqueId] = view
    invItemList[view] = itemList
  }

  @EventHandler
  fun clickInventory(event: InventoryClickEvent) {
    if (event.view != userInvList[event.whoClicked.uniqueId]) return
    if (event.slotType != InventoryType.SlotType.OUTSIDE) return
    val nowPage = event.view.title.replace("&6Admin Backpack #".color(), "").toIntOrNull() ?: return
    val player = (event.whoClicked as Player)
    val itemList = invItemList[event.view] ?: return
    if (event.isRightClick) {
      // 右クリック、次のページへ
      if (nowPage >= AdminBP.MAX_PAGE) {
        player.playSound(player, Sound.BLOCK_NOTE_BLOCK_BASS, SoundCategory.MASTER, 1F, 1F)
        return
      } else {
        player.playSound(player, Sound.UI_BUTTON_CLICK, SoundCategory.MASTER, 1F, 1F)
        itemList[nowPage]?.clear()
        itemList[nowPage]?.addAll(event.view.topInventory.contents.toList())
        invItemList[event.view] = itemList
        event.view.topInventory.contents = itemList[nowPage + 1]!!.toTypedArray()
        event.view.title = "&6Admin Backpack #${nowPage+1}".color()
      }
    } else if (event.isLeftClick) {
      // 左クリック、前のページへ
      if (nowPage <= 1) {
        player.playSound(player, Sound.BLOCK_NOTE_BLOCK_BASS, SoundCategory.MASTER, 1F, 1F)
        return
      } else {
        player.playSound(player, Sound.UI_BUTTON_CLICK, SoundCategory.MASTER, 1F, 1F)
        itemList[nowPage]?.clear()
        itemList[nowPage]?.addAll(event.view.topInventory.contents.toList())
        invItemList[event.view] = itemList
        event.view.topInventory.contents = itemList[nowPage - 1]!!.toTypedArray()
        event.view.title = "&6Admin Backpack #${nowPage-1}".color()
      }
    }
    return
  }

  @EventHandler
  fun closeInventory(event: InventoryCloseEvent) {
    if (event.view != userInvList[event.player.uniqueId]) return
    closeTask(event.view, event.player.uniqueId)
  }

  private fun closeTask(view: InventoryView, uuid: UUID) {
    val nowPage = view.title.replace("&6Admin Backpack #".color(), "").toIntOrNull() ?: return
    val itemList = invItemList[view] ?: return
    itemList[nowPage]?.clear()
    itemList[nowPage]?.addAll(view.topInventory.contents.toList())
    invItemList[view] = itemList
    AdminBP.save(uuid, invItemList[view]!!)
    userInvList.remove(uuid)
    invItemList.remove(view)
  }
}
