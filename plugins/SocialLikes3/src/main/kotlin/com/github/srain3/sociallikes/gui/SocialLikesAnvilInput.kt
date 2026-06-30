package com.github.srain3.sociallikes.gui

import com.github.srain3.sociallikes.Tools
import java.util.UUID
import net.kyori.adventure.text.Component
import net.kyori.adventure.text.serializer.legacy.LegacyComponentSerializer
import net.kyori.adventure.text.serializer.plain.PlainTextComponentSerializer
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.inventory.InventoryAction
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.event.inventory.InventoryCloseEvent
import org.bukkit.event.inventory.PrepareAnvilEvent
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.ItemStack
import org.bukkit.inventory.MenuType
import org.bukkit.inventory.view.AnvilView

object SocialLikesAnvilInput : Listener {
  private const val OUTPUT_SLOT = 2

  private val legacySerializer = LegacyComponentSerializer.legacySection()
  private val plainTextSerializer = PlainTextComponentSerializer.plainText()
  private val sessions = mutableMapOf<UUID, Session>()

  fun open(player: Player, title: String, itemLeft: ItemStack, onSubmit: (Player, String) -> Unit) {
    val view =
        MenuType.ANVIL.builder()
            .title(legacySerializer.deserialize(title))
            .checkReachable(false)
            .build(player)
    val session = Session(view.topInventory, itemLeft.clone(), onSubmit)
    sessions[player.uniqueId] = session

    configure(view)
    view.topInventory.setItem(0, itemLeft.clone())
    view.topInventory.setItem(OUTPUT_SLOT, createResultItem(session, view.renameText))
    view.open()
  }

  @EventHandler
  fun onPrepareAnvil(event: PrepareAnvilEvent) {
    val player = event.view.player as? Player ?: return
    val view = event.view
    val session = sessions[player.uniqueId] ?: return
    if (event.inventory != session.inventory) return

    configure(view)
    event.result = createResultItem(session, view.renameText)
  }

  @EventHandler
  fun onInventoryClick(event: InventoryClickEvent) {
    val player = event.whoClicked as? Player ?: return
    val view = event.view as? AnvilView ?: return
    val session = sessions[player.uniqueId] ?: return
    if (view.topInventory != session.inventory) return

    if (
        event.rawSlot < view.topInventory.size ||
            event.action == InventoryAction.MOVE_TO_OTHER_INVENTORY
    ) {
      event.isCancelled = true
    }
    if (event.rawSlot != OUTPUT_SLOT) return

    val text = normalize(view.renameText)
    if (text.isBlank()) {
      view.topInventory.setItem(OUTPUT_SLOT, createResultItem(session, text))
      return
    }

    sessions.remove(player.uniqueId)
    player.closeInventory()
    Tools.plugin.server.scheduler.runTask(Tools.plugin, Runnable { session.onSubmit(player, text) })
  }

  @EventHandler
  fun onInventoryClose(event: InventoryCloseEvent) {
    val player = event.player as? Player ?: return
    val session = sessions[player.uniqueId] ?: return
    if (event.view.topInventory == session.inventory) {
      sessions.remove(player.uniqueId)
    }
  }

  private fun configure(view: AnvilView) {
    view.setRepairCost(0)
    view.setRepairItemCountCost(0)
    view.setMaximumRepairCost(Int.MAX_VALUE)
    view.bypassEnchantmentLevelRestriction(true)
  }

  private fun createResultItem(session: Session, text: String?): ItemStack {
    val item = session.resultItem.clone()
    val normalizedText = normalize(text)
    if (normalizedText.isNotBlank()) {
      val meta = item.itemMeta ?: return item
      meta.displayName(Component.text(normalizedText))
      item.itemMeta = meta
    }
    return item
  }

  private fun normalize(text: String?): String {
    return plainTextSerializer.serialize(legacySerializer.deserialize(text ?: "")).trim()
  }

  private data class Session(
      val inventory: Inventory,
      val resultItem: ItemStack,
      val onSubmit: (Player, String) -> Unit,
  )
}
