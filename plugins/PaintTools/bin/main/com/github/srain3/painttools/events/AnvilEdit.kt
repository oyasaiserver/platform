package com.github.srain3.painttools.events

import com.github.srain3.painttools.tools.ToolBox
import net.wesjd.anvilgui.AnvilGUI
import org.bukkit.Material
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.block.Action
import org.bukkit.event.player.PlayerInteractEvent
import org.bukkit.inventory.ItemStack

object AnvilEdit : Listener {
  @EventHandler
  fun leftClick(event: PlayerInteractEvent) {
    if (event.action == Action.LEFT_CLICK_AIR || event.action == Action.LEFT_CLICK_BLOCK) {
      if (!event.hasItem()) return
      if (event.item?.type != Material.FEATHER) return
      val meta = event.item?.itemMeta ?: return
      if (!meta.hasCustomModelData()) return
      if (meta.customModelData != 831) return
      event.isCancelled = true

      AnvilGUI.Builder().apply {
        itemLeft(paperItem)
        onComplete { completion ->
          if (!PlayerClickEvent.rgbRegex.matches(completion.text)) {
            if (!PlayerClickEvent.htmlColorRegex.matches(completion.text)) {
              return@onComplete listOf(
                AnvilGUI.ResponseAction { _, player ->
                  player.sendMessage(
                    ToolBox.colorMessage(
                      "[PaintTools] &cRGB値→ &r255,255,255 &cあるいは &r#ffffff &cのフォーマットのみ受け付けます!"
                    )
                  )
                }
              )
            }
          }

          val handMeta = completion.player.inventory.itemInMainHand.itemMeta
          handMeta?.setDisplayName(completion.text)
          completion.player.inventory.itemInMainHand.itemMeta = handMeta
          return@onComplete listOf(AnvilGUI.ResponseAction.close())
        }
        plugin(ToolBox.pl)
        open(event.player)
      }
    }
  }

  private val paperItem =
    ItemStack(Material.PAPER).apply {
      val meta = itemMeta ?: return@apply
      meta.setDisplayName("1,1,1")
      meta.setCustomModelData(831)
      itemMeta = meta
    }
}
