package icu.oyasai.utilities.notnbt

import org.bukkit.Material
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.inventory.InventoryCreativeEvent
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.meta.BundleMeta

/** NBTでitemを持ち込むのを禁止する */
object NotNBTEvent : Listener {
  private val nbtItemsRegex = Regex("""items?:|bundle_contents|charged_projectiles""")
  private val nbtEMFRegex = Regex("""evenmorefish:""", RegexOption.IGNORE_CASE)

  /** クリエインベントリのイベント */
  @EventHandler(priority = EventPriority.HIGH)
  fun getNBT(event: InventoryCreativeEvent) {
    if (event.isCancelled) return
    if (event.whoClicked.isOp) return
    val meta = event.cursor.itemMeta ?: return
    val rawMeta = meta.asString.lowercase()
    val hasBundleItems = (meta as? BundleMeta)?.hasItems() == true

    // nbtに「item(s):」タグやバンドル中身・EvenMoreFishタグが存在する場合デフォのアイテムにする処理
    if (
        hasBundleItems ||
            nbtItemsRegex.containsMatchIn(rawMeta) ||
            nbtEMFRegex.containsMatchIn(rawMeta)
    ) {
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
