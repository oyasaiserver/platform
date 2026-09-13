package icu.oyasai.utilities.hats

import icu.oyasai.utilities.OyasaiUtilities.addText
import icu.oyasai.utilities.OyasaiUtilities.color
import java.util.UUID
import org.bukkit.Bukkit
import org.bukkit.Sound
import org.bukkit.SoundCategory
import org.bukkit.enchantments.Enchantment
import org.bukkit.entity.Player
import org.bukkit.event.EventHandler
import org.bukkit.event.Listener
import org.bukkit.event.inventory.InventoryClickEvent
import org.bukkit.event.inventory.InventoryCloseEvent
import org.bukkit.event.inventory.InventoryDragEvent
import org.bukkit.inventory.Inventory
import org.bukkit.inventory.InventoryHolder
import org.bukkit.inventory.ItemFlag
import org.bukkit.inventory.ItemStack

internal object HatsGui : Listener {
  private val open = mutableSetOf<Inventory>()

  fun open(player: Player) {
    player.openInventory(create(player))
  }

  fun closeAll() {
    open.toList().forEach { inventory ->
      inventory.viewers.toList().forEach { it.closeInventory() }
    }
    open.clear()
  }

  @EventHandler
  fun onClick(event: InventoryClickEvent) {
    val holder = event.view.topInventory.holder as? Holder ?: return
    event.isCancelled = true
    val player = event.whoClicked as? Player ?: return
    if (player.uniqueId != holder.ownerId) return
    if (event.rawSlot !in 0 until event.view.topInventory.size) return
    val hat = HatsMenu.hats.firstOrNull { it.slot == event.rawSlot } ?: return
    if (Hats.toggle(player, hat)) {
      player.playSound(player, Sound.UI_BUTTON_CLICK, SoundCategory.MASTER, 1f, 1f)
      render(holder.guiInventory, player)
    } else {
      player.playSound(player, Sound.BLOCK_NOTE_BLOCK_BASS, SoundCategory.MASTER, 1f, 1f)
    }
  }

  @EventHandler
  fun onDrag(event: InventoryDragEvent) {
    if (event.view.topInventory.holder is Holder) event.isCancelled = true
  }

  @EventHandler
  fun onClose(event: InventoryCloseEvent) {
    open.remove(event.view.topInventory)
  }

  private fun create(player: Player): Inventory {
    val holder = Holder(player.uniqueId)
    val inventory = Bukkit.createInventory(holder, HatsMenu.size, HatsMenu.title.color())
    holder.guiInventory = inventory
    open += inventory
    render(inventory, player)
    return inventory
  }

  private fun render(inventory: Inventory, player: Player) {
    inventory.clear()
    HatsMenu.hats.forEach { hat ->
      if (hat.slot !in 0 until inventory.size) return@forEach
      inventory.setItem(hat.slot, icon(player, hat))
    }
  }

  private fun icon(player: Player, hat: HatDefinition): ItemStack {
    val equipped = Hats.isEquipped(player, hat.id)
    val allowed = Hats.canEquip(player, hat)
    val lore = hat.description.toMutableList()
    lore += ""
    lore +=
        when {
          equipped -> "&a装備中 &7クリックで外す"
          allowed -> "&7クリックで装備"
          else -> "&c権限がありません"
        }
    if (!hat.renders) lore += "&8この種類は表示しません"
    val item = ItemStack(hat.icon).addText(hat.name, lore)
    if (equipped) {
      item.addUnsafeEnchantment(Enchantment.UNBREAKING, 1)
      item.addItemFlags(ItemFlag.HIDE_ENCHANTS, ItemFlag.HIDE_ATTRIBUTES)
    }
    return item
  }

  private class Holder(val ownerId: UUID) : InventoryHolder {
    lateinit var guiInventory: Inventory

    override fun getInventory(): Inventory = guiInventory
  }
}
