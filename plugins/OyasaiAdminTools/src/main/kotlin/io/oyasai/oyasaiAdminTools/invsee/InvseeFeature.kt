package io.oyasai.oyasaiAdminTools.invsee

import io.oyasai.oyasaiAdminTools.OyasaiAdminTools
import io.oyasai.oyasaiAdminTools.staff.StaffFeature
import java.util.UUID
import org.bukkit.Bukkit
import org.bukkit.command.CommandSender
import org.bukkit.entity.Player
import org.bukkit.event.*
import org.bukkit.event.inventory.*
import org.bukkit.event.player.PlayerQuitEvent
import org.bukkit.inventory.Inventory

class InvseeFeature(plugin: OyasaiAdminTools) : StaffFeature(plugin, "invsee") {
  private data class View(val target: Player, val inventory: Inventory, val equipment: Boolean)

  private val views = mutableMapOf<UUID, View>()

  override fun execute(sender: CommandSender, args: Array<out String>) {
    if (sender !is Player) {
      sender.sendMessage("§cプレイヤー専用です。")
      return
    }
    if (args.isEmpty()) {
      sender.sendMessage("/invsee <player> [equip]")
      return
    }
    val target = online(sender, args[0]) ?: return missing(sender)
    if (sender == target) {
      sender.sendMessage("§c自分の持ち物は開けません。")
      return
    }
    val equipment = args.size > 1 && sender.hasPermission("essentials.invsee.equip")
    val inventory =
        if (equipment)
            Bukkit.createInventory(target, 9, "装備").apply {
              target.inventory.armorContents.forEachIndexed { i, item -> setItem(i, item?.clone()) }
              setItem(4, target.inventory.itemInOffHand.clone())
            }
        else target.inventory
    sender.closeInventory()
    sender.openInventory(inventory)
    views[sender.uniqueId] = View(target, inventory, equipment)
  }

  private fun locked(player: Player, inventory: Inventory): Boolean {
    val view = views[player.uniqueId]?.takeIf { it.inventory == inventory } ?: return false
    return view.equipment ||
        !view.target.isOnline ||
        !player.hasPermission("essentials.invsee") ||
        !player.hasPermission("essentials.invsee.modify") ||
        view.target.hasPermission("essentials.invsee.preventmodify")
  }

  @EventHandler(priority = EventPriority.LOWEST)
  fun click(e: InventoryClickEvent) {
    val player = e.whoClicked as? Player ?: return
    if (locked(player, e.view.topInventory)) {
      e.isCancelled = true
      plugin.server.scheduler.runTask(plugin, Runnable { player.updateInventory() })
    }
  }

  @EventHandler(priority = EventPriority.LOWEST)
  fun drag(e: InventoryDragEvent) {
    val player = e.whoClicked as? Player ?: return
    if (locked(player, e.view.topInventory)) e.isCancelled = true
  }

  @EventHandler
  fun close(e: InventoryCloseEvent) {
    views.remove(e.player.uniqueId)
  }

  @EventHandler
  fun quit(e: PlayerQuitEvent) {
    views
        .filterValues { it.target == e.player }
        .keys
        .toList()
        .forEach { Bukkit.getPlayer(it)?.closeInventory() }
    views.remove(e.player.uniqueId)
  }

  override fun stop() {
    views.keys.toList().forEach { Bukkit.getPlayer(it)?.closeInventory() }
    views.clear()
  }
}
