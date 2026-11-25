package io.oyasai.particles.listener

import io.oyasai.particles.gui.AreaEditorHolder
import io.oyasai.particles.gui.AreaGuiManager
import io.oyasai.particles.gui.AreaListHolder
import io.oyasai.particles.gui.ParticleGuiHolder
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.EventPriority
import org.bukkit.event.Listener
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.event.inventory.InventoryDragEvent

/**
 * タイトル文字列ではなく専用 InventoryHolder のみで GUI を識別し、
 * COLLECT_TO_CURSOR・SHIFT_CLICK・HOTBAR_SWAP・InventoryDragEvent による アイテム引き出し・混入を確実に防止する。
 */
class GuiListener(
    private val guiManager: AreaGuiManager,
) : Listener {

  @EventHandler(priority = EventPriority.HIGH)
  fun onInventoryClick(event: InventoryClickEvent) {
    val topInv = event.view.topInventory
    val holder = topInv.holder as? ParticleGuiHolder ?: return

    // 上段・下段・Shift+Click・COLLECT_TO_CURSOR・HOTBAR_SWAP を問わずすべてキャンセル
    event.isCancelled = true

    val player = event.whoClicked as? Player ?: return
    val rawSlot = event.rawSlot
    if (rawSlot < 0 || rawSlot >= topInv.size) {
      return
    }

    when (holder) {
      is AreaListHolder -> guiManager.handleListClick(player, holder, rawSlot)
      is AreaEditorHolder ->
          guiManager.handleEditorClick(player, holder, topInv, rawSlot, event.isRightClick)
    }
  }

  @EventHandler(priority = EventPriority.HIGH)
  fun onInventoryDrag(event: InventoryDragEvent) {
    val holder = event.view.topInventory.holder as? ParticleGuiHolder ?: return
    // 専用GUI表示中のドラッグ操作は全面キャンセルする
    if (holder is AreaListHolder || holder is AreaEditorHolder) {
      event.isCancelled = true
    }
  }
}
