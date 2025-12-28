package icu.oyasai.utilities.notnbt

import org.bukkit.Material
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.inventory.InventoryCreativeEvent
import org.bukkit.inventory.ItemStack

/** NBTでitemを持ち込むのを禁止する */
object NotNBTEvent : Listener {
  private val nbtItemsRegex = Regex("""items?:""")
  private val nbtEMFRegex = Regex("""evenmorefish:""")

  /** クリエインベントリのイベント */
  @EventHandler(priority = EventPriority.HIGH)
  fun getNBT(event: InventoryCreativeEvent) {
    if (event.isCancelled) return
    if (event.whoClicked.isOp) return
    val meta = event.cursor.itemMeta ?: return

    // nbtに「item(s):」タグが存在する場合デフォのアイテムにする処理
    if (nbtItemsRegex.containsMatchIn(meta.asString.lowercase()) ||
        nbtEMFRegex.containsMatchIn(meta.asString)) {
      event.cursor.itemMeta = ItemStack(event.cursor.type).itemMeta
    }

    // ホッパー付きトロッコかつカスタムモデル値がある場合の複製キャンセル
    if (event.cursor.type == Material.HOPPER_MINECART) {
      if (meta.hasCustomModelData()) {
        itemCloneEventCancel(event)
      }
    }

    // ヘッドアイテムを複製できないようにする
    if (event.cursor.type == Material.PLAYER_HEAD) {
      itemCloneEventCancel(event)
    }
  }

  /** 複製Eventキャンセル用 */
  private fun itemCloneEventCancel(event: InventoryCreativeEvent) {
    if (event.clickedInventory?.contains(event.cursor) == true) {
      event.isCancelled = true
    } else if (event.currentItem != null) {
      if (event.clickedInventory?.contains(event.currentItem) == true) {
        event.isCancelled = true
      }
    }
  }
}
